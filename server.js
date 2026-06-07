const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT) || 4173;
const ROOT_DIR = __dirname;
const DATA_DIR = path.join(ROOT_DIR, "data");
const SETTINGS_FILE = path.join(DATA_DIR, "settings.json");

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

async function handleSettingsApi(request, response) {
  if (request.method === "GET") {
    if (!fs.existsSync(SETTINGS_FILE)) {
      send(response, 404, JSON.stringify({ error: "Settings file not found" }), "application/json; charset=utf-8");
      return;
    }

    send(response, 200, fs.readFileSync(SETTINGS_FILE, "utf8"), "application/json; charset=utf-8");
    return;
  }

  if (request.method === "PUT") {
    try {
      const body = await readRequestBody(request);
      const parsed = JSON.parse(body);
      fs.mkdirSync(DATA_DIR, { recursive: true });
      fs.writeFileSync(SETTINGS_FILE, `${JSON.stringify(parsed, null, 2)}\n`, "utf8");
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
  console.log(`Settings file: ${SETTINGS_FILE}`);
});
