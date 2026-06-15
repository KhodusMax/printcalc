const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT) || 4173;
const ROOT_DIR = __dirname;
const DATA_DIR = path.join(ROOT_DIR, "data");
const LEGACY_SETTINGS_FILE = path.join(DATA_DIR, "settings.json");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const CLIENTS_FILE = path.join(DATA_DIR, "clients.json");
const PRICING_FILE = path.join(DATA_DIR, "pricing.json");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".ico": "image/x-icon"
};

function send(response, status, body, contentType = "text/plain; charset=utf-8") {
  response.writeHead(status, {
    "Content-Type": contentType,
    "Cache-Control": "no-store",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  response.end(body);
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 5_000_000) {
        reject(new Error("Request body is too large"));
        request.destroy();
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function readJsonFile(filePath, fallback = {}) {
  if (!fs.existsSync(filePath)) {
    return fallback;
  }

  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJsonFile(filePath, data) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function splitSettings(settings) {
  const {
    users = [],
    clients = [],
    access = {},
    products = [],
    materials = [],
    finishes = [],
    digitalPrint = {},
    widePrint = {},
    clothesPrint = {}
  } = settings || {};

  return {
    usersData: { users, access },
    clientsData: { clients },
    pricingData: { products, materials, finishes, digitalPrint, widePrint, clothesPrint }
  };
}

function readSplitSettings() {
  const requiredFiles = [USERS_FILE, CLIENTS_FILE, PRICING_FILE];
  const missingFiles = requiredFiles.filter((filePath) => !fs.existsSync(filePath));
  if (missingFiles.length > 0) {
    throw new Error(`Required database files are missing: ${missingFiles.map((filePath) => path.basename(filePath)).join(", ")}`);
  }

  const usersData = readJsonFile(USERS_FILE);
  const clientsData = readJsonFile(CLIENTS_FILE);
  const pricingData = readJsonFile(PRICING_FILE);

  return {
    ...pricingData,
    users: Array.isArray(usersData.users) ? usersData.users : [],
    access: usersData.access || {},
    clients: Array.isArray(clientsData.clients) ? clientsData.clients : []
  };
}

function writeSplitSettings(settings) {
  const { usersData, clientsData, pricingData } = splitSettings(settings);
  writeJsonFile(USERS_FILE, usersData);
  writeJsonFile(CLIENTS_FILE, clientsData);
  writeJsonFile(PRICING_FILE, pricingData);
}

async function handleSettingsApi(request, response) {
  if (request.method === "GET") {
    try {
      const settings = readSplitSettings();
      send(response, 200, JSON.stringify(settings, null, 2), "application/json; charset=utf-8");
    } catch (error) {
      send(response, 500, JSON.stringify({ error: error.message }), "application/json; charset=utf-8");
    }
    return;
  }

  if (request.method === "PUT") {
    try {
      const body = await readRequestBody(request);
      const parsed = JSON.parse(body);
      writeSplitSettings(parsed);
      send(response, 200, JSON.stringify({ ok: true }), "application/json; charset=utf-8");
    } catch (error) {
      send(response, 400, JSON.stringify({ error: error.message }), "application/json; charset=utf-8");
    }
    return;
  }

  send(response, 405, JSON.stringify({ error: "Method not allowed" }), "application/json; charset=utf-8");
}

function handleStatic(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const requestedPath = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
  const filePath = path.normalize(path.join(ROOT_DIR, requestedPath));

  if (!filePath.startsWith(ROOT_DIR)) {
    send(response, 403, "Forbidden");
    return;
  }

  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    send(response, 404, "Not found");
    return;
  }

  const extension = path.extname(filePath).toLowerCase();
  send(response, 200, fs.readFileSync(filePath), MIME_TYPES[extension] || "application/octet-stream");
}

const server = http.createServer((request, response) => {
  if (request.method === "OPTIONS") {
    send(response, 204, "");
    return;
  }

  if (request.url.startsWith("/api/settings")) {
    handleSettingsApi(request, response);
    return;
  }

  handleStatic(request, response);
});

server.listen(PORT, () => {
  console.log(`PrintCalc server: http://127.0.0.1:${PORT}/`);
  console.log(`Users file: ${USERS_FILE}`);
  console.log(`Clients file: ${CLIENTS_FILE}`);
  console.log(`Pricing file: ${PRICING_FILE}`);
  console.log(`Legacy backup: ${LEGACY_SETTINGS_FILE}`);
});
