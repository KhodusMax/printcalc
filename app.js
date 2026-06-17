const ADMIN_LOGIN = "maksim.hodus";
const ADMIN_PASSWORD = "admin2026";
const STORAGE_KEY = "printcalc-settings-v1";
const AUTH_STORAGE_KEY = "printcalc-authenticated";
const CURRENT_USER_STORAGE_KEY = "printcalc-current-user-login";
const SETTINGS_API_URLS = ["/api/settings", "http://127.0.0.1:4174/api/settings"];
const SPLIT_SETTINGS_FILE_GROUPS = [
  {
    system: "data/system.json",
    users: "data/users.json",
    clients: "data/clients.json",
    clientsArchive: "data/clients-archive.json",
    pricing: "data/pricing.json",
    preferences: "data/user-preferences.json"
  },
  {
    system: "/data/system.json",
    users: "/data/users.json",
    clients: "/data/clients.json",
    clientsArchive: "/data/clients-archive.json",
    pricing: "/data/pricing.json",
    preferences: "/data/user-preferences.json"
  }
];
const CUSTOM_WIDE_MATERIAL_VALUE = "__custom__";
const DIGITAL_CATEGORY = "Цифровая печать";
const WIDE_CATEGORY = "Широкоформатная печать";
const CLOTHES_CATEGORY = "Печать на одежде";
const DEPARTMENTS = [
  { id: "wide", label: WIDE_CATEGORY },
  { id: "digital", label: "Цифровая печать" },
  { id: "clothes", label: CLOTHES_CATEGORY }
];
const DIGITAL_SETTINGS_TABS = [
  { id: "standard", label: "Стандартные продукты" },
  { id: "quantityFormulas", label: "Формулы количества" },
  { id: "clicks", label: "Цена за клик" },
  { id: "materials", label: "Материалы" },
  { id: "works", label: "Дополнительные работы" },
  { id: "clientTypes", label: "Тип клиента" },
  { id: "minimumOrder", label: "Стоимость минимального заказа" },
  { id: "cuttingCoefficients", label: "Коэффициент за резку" }
];
const WIDE_ROLL_SETTINGS_TABS = [
  { id: "rollStandardProducts", label: "Стандартные продукты" },
  { id: "rollFormulas", label: "Формулы" },
  { id: "rollInk", label: "Цена краски за м²" },
  { id: "rollMaterials", label: "Материалы" },
  { id: "rollExtraWorks", label: "Дополнительные работы" },
  { id: "rollClientTypes", label: "Тип клиента" },
  { id: "rollMinimumOrder", label: "Стоимость минимального заказа" }
];
const CLOTHES_SETTINGS_TABS = [
  { id: "standardProducts", label: "Стандартные продукты" },
  { id: "quantityFormulas", label: "Формулы количества" },
  { id: "carrierTypes", label: "Тип носителя" },
  { id: "extraWorks", label: "Дополнительные работы" },
  { id: "clientTypes", label: "Тип клиента" }
];
const MATERIAL_TYPES = [
  "Материал без покрытия",
  "Материал силк",
  "Специальный материал"
];
const USER_ROLES = [
  { id: "superadmin", label: "Суперпользователь" },
  { id: "admin", label: "Администратор" },
  { id: "lead", label: "Главный пользователь" },
  { id: "seller", label: "Продавец" },
  { id: "user", label: "Пользователь" }
];
const USER_ADMIN_TABS = [
  { id: "users", label: "Пользователи" },
  { id: "roles", label: "Категории пользователей" },
  { id: "permissions", label: "Права доступа" }
];
const DEFAULT_TOP_TAB_ORDER = [
  "dashboard",
  "clients",
  "offers",
  "deals",
  "order",
  "calendar",
  "tasks",
  "settings",
  "users",
  "appSettings"
];
const CLIENT_COLUMNS = [
  { key: "name", label: "Название" },
  { key: "type", label: "Тип клиента" },
  { key: "registrationNumber", label: "Регистрационный номер" },
  { key: "vatNumber", label: "Номер VAT" },
  { key: "contactPersons", label: "Контактные лица" },
  { key: "emails", label: "Адреса электронной почты" },
  { key: "phones", label: "Телефоны" },
  { key: "address", label: "Адрес клиента" }
];
const CLIENT_IMPORT_FIELDS = [
  { key: "", label: "Не импортировать" },
  ...CLIENT_COLUMNS
];

function getAccessPermissionDefinitions() {
  return [
    { key: "order", label: "Раздел расчетов цены", group: "Разрешения" },
    { key: "clients", label: "Раздел клиентов", group: "Разрешения" },
    { key: "users", label: "Панель пользователей", group: "Разрешения" },
    { key: "settings", label: "Раздел формул и коэффициентов", group: "Разрешения" },
    ...DIGITAL_SETTINGS_TABS.map((tab) => ({
      key: `settings.digital.${tab.id}`,
      label: tab.label,
      group: "Настройки цифровой печати"
    })),
    ...WIDE_ROLL_SETTINGS_TABS.map((tab) => ({
      key: `settings.wide.${tab.id}`,
      label: tab.label,
      group: "Настройки широкоформатной печати"
    })),
    ...CLOTHES_SETTINGS_TABS.map((tab) => ({
      key: `settings.clothes.${tab.id}`,
      label: tab.label,
      group: "Настройки печати на одежде"
    }))
  ];
}

function createAllPermissions(value = true) {
  return getAccessPermissionDefinitions().reduce((permissions, definition) => {
    permissions[definition.key] = value;
    return permissions;
  }, {});
}

function createDefaultAccessPermissions() {
  return {
    superadmin: createAllPermissions(true),
    admin: createAllPermissions(true),
    lead: {
      ...createAllPermissions(false),
      order: true
    },
    seller: {
      ...createAllPermissions(false),
      order: true,
      clients: true
    },
    user: {
      ...createAllPermissions(false),
      order: true
    }
  };
}

function getAppBlockDefinitions() {
  return [
    { key: "top.dashboard", label: "Панель управления", group: "Разделы меню" },
    { key: "top.clients", label: "Клиенты", group: "Разделы меню" },
    { key: "top.offers", label: "Формирование предложения", group: "Разделы меню" },
    { key: "top.deals", label: "Заказы", group: "Разделы меню" },
    { key: "top.order", label: "Расчет цены", group: "Разделы меню" },
    { key: "top.calendar", label: "Календарь", group: "Разделы меню" },
    { key: "top.tasks", label: "Задачи", group: "Разделы меню" },
    { key: "top.settings", label: "Формулы и коэффициенты", group: "Разделы меню" },
    { key: "top.users", label: "Пользователи", group: "Разделы меню" },
    ...DIGITAL_SETTINGS_TABS.map((tab) => ({
      key: `settings.digital.${tab.id}`,
      label: tab.label,
      group: "Цифровая печать"
    })),
    ...WIDE_ROLL_SETTINGS_TABS.map((tab) => ({
      key: `settings.wide.${tab.id}`,
      label: tab.label,
      group: "Широкоформатная печать / рулонная печать"
    })),
    ...CLOTHES_SETTINGS_TABS.map((tab) => ({
      key: `settings.clothes.${tab.id}`,
      label: tab.label,
      group: "Печать на одежде"
    }))
  ];
}

function createDefaultAppConfig() {
  return {
    enabledLanguages: {
      en: true,
      et: true,
      ru: true
    },
    enabledBlocks: getAppBlockDefinitions().reduce((blocks, definition) => {
      blocks[definition.key] = true;
      return blocks;
    }, {}),
    maxUsers: 5
  };
}

const UI_TRANSLATIONS = {
  "Внутренний калькулятор стоимости продукции": "Internal product cost calculator",
  "Логин": "Login",
  "Пароль": "Password",
  "Войти": "Sign in",
  "Администратор": "Administrator",
  "Выйти": "Log out",
  "Расчет цены": "Price calculation",
  "Формулы и коэффициенты": "Formulas and coefficients",
  "Пользователи": "Users",
  "Суперпользователь": "Superuser",
  "Настройки приложения": "Application settings",
  "Глобальные настройки": "Global settings",
  "Языки интерфейса": "Interface languages",
  "Выключенный язык исчезает из переключателя языков.": "A disabled language disappears from the language switcher.",
  "Блоки приложения": "Application blocks",
  "Выключенный блок скрывается в интерфейсе для всех пользователей.": "A disabled block is hidden in the interface for all users.",
  "Лимит пользователей": "User limit",
  "Максимальное количество аккаунтов сотрудников фирмы. Суперпользователь в лимит не входит.": "Maximum number of company employee accounts. The superuser is not included in the limit.",
  "Максимум пользователей": "Maximum users",
  "Языки": "Languages",
  "Разделы меню": "Menu sections",
  "Категории пользователей": "User categories",
  "Созданные пользователи": "Created users",
  "Права доступа": "Access permissions",
  "Название категории": "Category name",
  "Разрешения": "Permissions",
  "Доступно": "Available",
  "Недоступно": "Unavailable",
  "Панель пользователей": "Users panel",
  "Раздел расчетов цены": "Price calculation section",
  "Раздел клиентов": "Clients section",
  "Раздел формул и коэффициентов": "Formulas and coefficients section",
  "Настройки цифровой печати": "Digital printing settings",
  "Настройки широкоформатной печати": "Wide-format printing settings",
  "Настройки печати на одежде": "Apparel printing settings",
  "Новая категория добавлена. Заполните название и нажмите «Сохранить».": "New category added. Fill in the name and click Save.",
  "Категория удалена. Нажмите «Сохранить».": "Category deleted. Click Save.",
  "Заполните название каждой категории.": "Fill in every category name.",
  "В приложении должна остаться категория администратора.": "The administrator category must remain in the app.",
  "Нельзя удалить категорию, назначенную пользователям.": "Cannot delete a category assigned to users.",
  "Клиенты": "Clients",
  "База клиентов": "Client database",
  "Юридическое название": "Legal name",
  "Название": "Name",
  "Таблица клиентов": "Clients table",
  "Панель управления": "Dashboard",
  "Сделки": "Deals",
  "Заказы": "Orders",
  "Календарь": "Calendar",
  "Задачи": "Tasks",
  "Формирование предложения": "Proposal creation",
  "Обзор системы": "System overview",
  "Продажи": "Sales",
  "Планирование": "Planning",
  "Работа": "Work",
  "Коммерческие предложения": "Commercial offers",
  "Раздел в разработке": "Section in development",
  "Здесь будет общий обзор CRM, быстрые показатели и рабочие уведомления.": "This section will show the CRM overview, quick metrics, and work notifications.",
  "Здесь будут сделки, статусы предложений и история работы с клиентом.": "This section will contain deals, offer statuses, and client history.",
  "Здесь будут заказы, статусы предложений и история работы с клиентом.": "This section will contain orders, offer statuses, and client history.",
  "Здесь будет календарь задач, встреч, дедлайнов и производственных сроков.": "This section will contain tasks, meetings, deadlines, and production dates.",
  "Здесь будут задачи менеджеров, производство и контроль выполнения.": "This section will contain manager tasks, production work, and completion tracking.",
  "Здесь будет сбор позиций заказа и подготовка предложения для клиента.": "This section will collect order items and prepare a proposal for the client.",
  "Импортировать": "Import",
  "Экспортировать": "Export",
  "Удалить": "Delete",
  "Выбрать всех клиентов": "Select all clients",
  "Выбрать клиента": "Select client",
  "Удалить выбранных клиентов": "Delete selected clients",
  "Свернуть меню": "Collapse menu",
  "Открыть меню": "Open menu",
  "Настройки пользователя": "User settings",
  "Имя": "First name",
  "Фамилия": "Last name",
  "Новый пароль": "New password",
  "Изменить пароль": "Change password",
  "Показать пароль": "Show password",
  "Скрыть пароль": "Hide password",
  "Тема": "Theme",
  "Светлая тема": "Light theme",
  "Темная тема": "Dark theme",
  "Системная тема": "System theme",
  "Заполните имя и фамилию.": "Fill in first and last name.",
  "Заполните имя, фамилию и логин.": "Fill in first name, last name, and login.",
  "Такой логин уже используется.": "This login is already used.",
  "Пользователь не найден.": "User not found.",
  "Выберите клиентов для удаления.": "Select clients to delete.",
  "Удалено клиентов": "Deleted clients",
  "Подтверждение удаления": "Delete confirmation",
  "Вы действительно хотите удалить выбранных клиентов?": "Do you really want to delete the selected clients?",
  "Да": "Yes",
  "Нет": "No",
  "Импорт клиентов": "Import clients",
  "Файл CSV или XLS": "CSV or XLS file",
  "Сопоставление колонок": "Column mapping",
  "Не импортировать": "Do not import",
  "Выберите файл для импорта.": "Select a file to import.",
  "Не удалось прочитать файл. Для XLS/XLSX нужна загрузка Excel-библиотеки, либо сохраните файл как CSV.": "Could not read the file. XLS/XLSX requires the Excel library to load, or save the file as CSV.",
  "Сопоставьте колонку с названием клиента.": "Map the client name column.",
  "Импортировано клиентов": "Imported clients",
  "Пропущено дублей": "Skipped duplicates",
  "Юрлицо": "Legal entity",
  "Физлицо": "Individual",
  "Адрес клиента": "Client address",
  "Адрес электронной почты": "Client email",
  "Адреса электронной почты": "Email addresses",
  "Контактное лицо": "Contact person",
  "Контактные лица": "Contact persons",
  "Номер телефона": "Phone number",
  "Телефоны": "Phones",
  "Регистрационный номер": "Registration number",
  "Номер VAT": "VAT number",
  "Регистрационный номер VAT": "VAT registration number",
  "Редактировать": "Edit",
  "Клиент": "Client",
  "Новый клиент": "New client",
  "Клиенты пока не добавлены.": "No clients have been added yet.",
  "Новый клиент добавлен. Заполните карточку и нажмите «Сохранить».": "New client added. Fill in the card and click Save.",
  "Заполните юридическое название клиента.": "Fill in the client's legal name.",
  "Заполните название клиента.": "Fill in the client name.",
  "Изменения клиента не сохранены. Нажмите «Сохранить».": "Client changes are not saved. Click Save.",
  "Выбор языка": "Language selection",
  "Рабочий расчет": "Work calculation",
  "База расчетов": "Calculation base",
  "Администрирование доступа": "Access administration",
  "Категории расчета": "Calculation categories",
  "Категории коэффициентов": "Coefficient categories",
  "Цифровая печать": "Digital printing",
  "Широкоформатная печать": "Wide-format printing",
  "Сувенирная продукция": "Promotional products",
  "Печать на одежде": "Apparel printing",
  "Тип клиента": "Client type",
  "B2B клиент": "B2B client",
  "B2C клиент": "B2C client",
  "Просчёт стоимости": "Cost calculation",
  "Просчет стоимости": "Cost calculation",
  "Стандартная продукция": "Standard products",
  "Выбор продукта": "Product selection",
  "Выберите продукт": "Select product",
  "Нет стандартных продуктов": "No standard products",
  "Введите количество": "Enter quantity",
  "Не выбран продукт": "Product is not selected",
  "Не указано количество": "Quantity is not specified",
  "Скидка / наценка": "Discount / markup",
  "Материал": "Material",
  "Материалы": "Materials",
  "Выбор материала": "Material selection",
  "Тип материала": "Material type",
  "Выберите тип материала": "Select material type",
  "Выберите материал": "Select material",
  "Нет материалов": "No materials",
  "Нет материалов этого типа": "No materials of this type",
  "Кастомный материал": "Custom material",
  "Стоимость кастомного материала за м²": "Custom material cost per m²",
  "Укажите стоимость кастомного материала за м²": "Enter custom material cost per m²",
  "Материал без покрытия": "Uncoated material",
  "Материал силк": "Silk material",
  "Специальный материал": "Special material",
  "Размер": "Size",
  "Добавьте все размеры заказа. Площадь строк будет суммироваться.": "Add all order sizes. Row areas will be summed.",
  "Ширина, мм": "Width, mm",
  "Высота, мм": "Height, mm",
  "Введите ширину": "Enter width",
  "Введите высоту": "Enter height",
  "Введите тираж": "Enter quantity",
  "Тираж": "Quantity",
  "Количество": "Quantity",
  "Тип печати": "Print type",
  "Односторонняя печать": "Single-sided printing",
  "Двусторонняя печать": "Double-sided printing",
  "Выбор печати": "Print selection",
  "Выберите печать": "Select print",
  "Выбор типа печати": "Print type selection",
  "Выберите тип печати": "Select print type",
  "Печать": "Printing",
  "Ввод тиража": "Quantity input",
  "Двухсторонняя печать": "Double-sided printing",
  "Дополнительные работы": "Additional work",
  "Срочность": "Urgency",
  "Выбор срочности": "Urgency selection",
  "Выберите срочность": "Select urgency",
  "Стандартная срочность, 3-5 рабочих дней": "Standard urgency, 3-5 business days",
  "Срочная работа, +50%": "Urgent job, +50%",
  "Дополнительная скидка или надбавка": "Additional discount or surcharge",
  "Тип корректировки": "Adjustment type",
  "Скидка": "Discount",
  "Надбавка": "Surcharge",
  "Процент, %": "Percent, %",
  "Тип широкоформатной печати": "Wide-format print type",
  "Рулонная печать": "Roll printing",
  "Листовая печать": "Sheet printing",
  "Цветность печати": "Print color mode",
  "Тип носителя": "Carrier type",
  "Выбор носителя": "Carrier selection",
  "Выберите носитель": "Select carrier",
  "Нестандартный носитель / одежда клиента": "Custom carrier / client apparel",
  "Стоимость за единицу": "Unit cost",
  "Нет носителей": "No carriers",
  "Продукт": "Product",
  "Площадь, м²": "Area, m²",
  "Площадь / размер в м²": "Area / size in m²",
  "Материал / носитель": "Material / carrier",
  "Постобработка": "Finishing",
  "Срок": "Deadline",
  "Итог": "Total",
  "Себестоимость": "Cost",
  "Наценка": "Markup",
  "Доп. работы": "Additional work",
  "Цена за единицу": "Unit price",
  "Цена за изделие": "Item price",
  "Минимальный заказ": "Minimum order",
  "Стоимость минимального заказа": "Minimum order cost",
  "Минимальная стоимость заказа": "Minimum order price",
  "Площадь печати": "Print area",
  "Стандартные продукты": "Standard products",
  "Формулы количества": "Quantity formulas",
  "Формулы": "Formulas",
  "Цена за клик": "Click price",
  "Цена за материал": "Material price",
  "Цена краски за м²": "Ink price per m²",
  "Коэффициент за резку": "Cutting coefficient",
  "Название материала": "Material name",
  "Стоимость листа SRA3": "SRA3 sheet cost",
  "Стоимость за м²": "Cost per m²",
  "Стоимость краски за м²": "Ink cost per m²",
  "Категория": "Category",
  "Название продукта": "Product name",
  "Базовая цена за количество": "Base price for quantity",
  "Ценовые диапазоны": "Price tiers",
  "Цена за единицу": "Unit price",
  "Скидка %": "Discount %",
  "Цена за единицу / скидка %": "Unit price / discount %",
  "Скидка в процентах": "Discount percent",
  "Тип": "Type",
  "Диапазоны пока не добавлены.": "No tiers added yet.",
  "Диапазон добавлен.": "Tier added.",
  "Диапазон удален.": "Tier deleted.",
  "Клик 4+0": "Click 4+0",
  "Клик 4+4": "Click 4+4",
  "Название операции": "Operation name",
  "Процент к стоимости": "Percent of price",
  "Количество от": "Quantity from",
  "Количество до": "Quantity to",
  "м² от": "m² from",
  "м² до": "m² to",
  "Формула": "Formula",
  "Формула цены за лист": "Sheet price formula",
  "Процент за резку": "Cutting percent",
  "Дополнительный процент": "Additional percent",
  "Продукты направления": "Department products",
  "Продукты, базовые ставки, наценка и минимум для выбранной подкладки.": "Products, base rates, markup and minimum for the selected section.",
  "Раздел пока не наполнен": "This section is not filled yet",
  "Раздел подготовлен. Наполним его позже.": "This section is prepared. We will fill it later.",
  "База": "Base",
  "Мин. заказ": "Min. order",
  "Стоимость": "Cost",
  "Ед.": "Unit",
  "Дополнительные операции": "Additional operations",
  "Операция": "Operation",
  "Тип": "Type",
  "Имя": "First name",
  "Фамилия": "Last name",
  "Роль": "Role",
  "Главный пользователь": "Lead user",
  "Продавец": "Seller",
  "Пользователь": "User",
  "Сохранить": "Save",
  "Отменить удаление": "Undo delete",
  "Сохранено": "Saved",
  "Удаление отменено.": "Deletion undone.",
  "Удалить строку": "Delete row",
  "Удалить размер": "Delete size",
  "Перетащить строку": "Drag row",
  "Удалить пользователя": "Delete user",
  "Перетащить пользователя": "Drag user",
  "Неверный логин или пароль.": "Incorrect login or password.",
  "Цена заказа равна или ниже себестоимости.": "Order price is equal to or below cost.",
  "Фактическая стоимость печати ниже минимальной. Применяется минимальная стоимость печати.": "The actual print price is below the minimum. The minimum print price is applied.",
  "Не выбран тип клиента": "Client type is not selected",
  "Не выбран тип материала": "Material type is not selected",
  "Не выбран материал": "Material is not selected",
  "Не указана ширина": "Width is not specified",
  "Не указана высота": "Height is not specified",
  "Не указан тираж": "Quantity is not specified",
  "Добавьте хотя бы один размер": "Add at least one size",
  "Площадь заказа должна быть больше 0": "Order area must be greater than 0",
  "Не выбран тип печати": "Print type is not selected",
  "Не выбрана срочность": "Urgency is not selected",
  "Процент корректировки должен быть не меньше 0": "Adjustment percent must be at least 0",
  "Скидка не может быть больше 100%": "Discount cannot be greater than 100%",
  "Выберите рулонную печать": "Select roll printing",
  "Не выбран тип носителя": "Carrier type is not selected",
  "Стоимость носителя должна быть не меньше 0": "Carrier cost must be at least 0",
  "Нельзя сохранить список без пользователей.": "Cannot save an empty user list.",
  "Новый пользователь добавлен. Заполните данные и нажмите «Сохранить».": "New user added. Fill in the details and click Save.",
  "Пользователь отмечен на удаление. Нажмите «Сохранить».": "User marked for deletion. Click Save.",
  "Строка отмечена на удаление. Нажмите «Сохранить».": "Row marked for deletion. Click Save.",
  "Удаление не сохранено. Нажмите «Сохранить», чтобы удалить строку.": "Deletion is not saved. Click Save to delete the row.",
  "Удаление не сохранено. Нажмите «Сохранить», чтобы удалить пользователя.": "Deletion is not saved. Click Save to delete the user.",
  "Сначала сохраните или отмените удаление строки.": "Save or undo row deletion first.",
  "Сначала сохраните или отмените удаление пользователя.": "Save or undo user deletion first.",
  "Порядок изменен. Нажмите «Сохранить».": "Order changed. Click Save.",
  "Доступ к системе": "System access",
  "Обычный срок": "Standard deadline",
  "Срочно +25%": "Urgent +25%",
  "Сегодня +50%": "Today +50%",
  "лист": "sheet",
  "за заказ": "per order",
  "за единицу": "per unit"
};

const UI_TRANSLATIONS_ET = {
  "Внутренний калькулятор стоимости продукции": "Sisemine toodete hinnakalkulaator",
  "Логин": "Kasutajanimi",
  "Пароль": "Parool",
  "Войти": "Logi sisse",
  "Администратор": "Administraator",
  "Выйти": "Logi välja",
  "Расчет цены": "Hinna arvutus",
  "Формулы и коэффициенты": "Valemid ja koefitsiendid",
  "Пользователи": "Kasutajad",
  "Суперпользователь": "Superkasutaja",
  "Настройки приложения": "Rakenduse seaded",
  "Глобальные настройки": "Globaalsed seaded",
  "Языки интерфейса": "Kasutajaliidese keeled",
  "Выключенный язык исчезает из переключателя языков.": "Väljalülitatud keel kaob keelevalikust.",
  "Блоки приложения": "Rakenduse plokid",
  "Выключенный блок скрывается в интерфейсе для всех пользователей.": "Väljalülitatud plokk peidetakse kõigi kasutajate liideses.",
  "Лимит пользователей": "Kasutajate limiit",
  "Максимальное количество аккаунтов сотрудников фирмы. Суперпользователь в лимит не входит.": "Ettevõtte töötajate kontode maksimaalne arv. Superkasutaja limiidi sisse ei kuulu.",
  "Максимум пользователей": "Maksimaalne kasutajate arv",
  "Языки": "Keeled",
  "Разделы меню": "Menüü jaotised",
  "Категории пользователей": "Kasutajakategooriad",
  "Созданные пользователи": "Loodud kasutajad",
  "Права доступа": "Ligipääsuõigused",
  "Название категории": "Kategooria nimi",
  "Разрешения": "Õigused",
  "Доступно": "Saadaval",
  "Недоступно": "Pole saadaval",
  "Панель пользователей": "Kasutajate paneel",
  "Раздел расчетов цены": "Hinna arvutuse jaotis",
  "Раздел клиентов": "Klientide jaotis",
  "Раздел формул и коэффициентов": "Valemite ja koefitsientide jaotis",
  "Настройки цифровой печати": "Digitrüki seaded",
  "Настройки широкоформатной печати": "Laiformaadilise trükkimise seaded",
  "Настройки печати на одежде": "Rõivastele ja tekstiilile trükkimise seaded",
  "Новая категория добавлена. Заполните название и нажмите «Сохранить».": "Uus kategooria lisatud. Täida nimi ja vajuta Salvesta.",
  "Категория удалена. Нажмите «Сохранить».": "Kategooria kustutatud. Vajuta Salvesta.",
  "Заполните название каждой категории.": "Sisesta iga kategooria nimi.",
  "В приложении должна остаться категория администратора.": "Administraatori kategooria peab rakendusse alles jääma.",
  "Нельзя удалить категорию, назначенную пользователям.": "Kasutajatele määratud kategooriat ei saa kustutada.",
  "Клиенты": "Kliendid",
  "База клиентов": "Kliendibaas",
  "Юридическое название": "Ametlik ärinimi",
  "Название": "Nimi",
  "Таблица клиентов": "Klientide tabel",
  "Панель управления": "Töölaud",
  "Сделки": "Tehingud",
  "Заказы": "Tellimused",
  "Календарь": "Kalender",
  "Задачи": "Ülesanded",
  "Формирование предложения": "Pakkumise koostamine",
  "Обзор системы": "Süsteemi ülevaade",
  "Продажи": "Müük",
  "Планирование": "Planeerimine",
  "Работа": "Töö",
  "Коммерческие предложения": "Pakkumised",
  "Раздел в разработке": "Jaotis on arendamisel",
  "Здесь будет общий обзор CRM, быстрые показатели и рабочие уведомления.": "Siia tuleb CRM-i ülevaade, kiired näitajad ja tööteavitused.",
  "Здесь будут сделки, статусы предложений и история работы с клиентом.": "Siia tulevad tehingud, pakkumiste staatused ja kliendiajalugu.",
  "Здесь будут заказы, статусы предложений и история работы с клиентом.": "Siia tulevad tellimused, pakkumiste staatused ja kliendiajalugu.",
  "Здесь будет календарь задач, встреч, дедлайнов и производственных сроков.": "Siia tuleb ülesannete, kohtumiste, tähtaegade ja tootmisaegade kalender.",
  "Здесь будут задачи менеджеров, производство и контроль выполнения.": "Siia tulevad müügijuhtide ülesanded, tootmistööd ja täitmise kontroll.",
  "Здесь будет сбор позиций заказа и подготовка предложения для клиента.": "Siia tuleb tellimuse ridade kogumine ja kliendile pakkumise koostamine.",
  "Импортировать": "Impordi",
  "Экспортировать": "Ekspordi",
  "Удалить": "Kustuta",
  "Выбрать всех клиентов": "Vali kõik kliendid",
  "Выбрать клиента": "Vali klient",
  "Удалить выбранных клиентов": "Kustuta valitud kliendid",
  "Свернуть меню": "Ahenda menüü",
  "Открыть меню": "Ava menüü",
  "Настройки пользователя": "Kasutaja seaded",
  "Имя": "Eesnimi",
  "Фамилия": "Perekonnanimi",
  "Новый пароль": "Uus parool",
  "Изменить пароль": "Muuda parooli",
  "Показать пароль": "Näita parooli",
  "Скрыть пароль": "Peida parool",
  "Тема": "Teema",
  "Светлая тема": "Hele teema",
  "Темная тема": "Tume teema",
  "Системная тема": "Süsteemi teema",
  "Заполните имя и фамилию.": "Täida ees- ja perekonnanimi.",
  "Заполните имя, фамилию и логин.": "Täida eesnimi, perekonnanimi ja kasutajanimi.",
  "Такой логин уже используется.": "See kasutajanimi on juba kasutusel.",
  "Пользователь не найден.": "Kasutajat ei leitud.",
  "Выберите клиентов для удаления.": "Vali kustutatavad kliendid.",
  "Удалено клиентов": "Kustutatud kliente",
  "Подтверждение удаления": "Kustutamise kinnitus",
  "Вы действительно хотите удалить выбранных клиентов?": "Kas soovid valitud kliendid kustutada?",
  "Да": "Jah",
  "Нет": "Ei",
  "Импорт клиентов": "Klientide import",
  "Файл CSV или XLS": "CSV või XLS fail",
  "Сопоставление колонок": "Veergude vastavus",
  "Не импортировать": "Ära impordi",
  "Выберите файл для импорта.": "Vali importimiseks fail.",
  "Не удалось прочитать файл. Для XLS/XLSX нужна загрузка Excel-библиотеки, либо сохраните файл как CSV.": "Faili ei õnnestunud lugeda. XLS/XLSX jaoks peab Exceli teek laadima või salvesta fail CSV-na.",
  "Сопоставьте колонку с названием клиента.": "Seo kliendi nime veerg.",
  "Импортировано клиентов": "Imporditud kliente",
  "Пропущено дублей": "Vahele jäetud duplikaate",
  "Юрлицо": "Juriidiline isik",
  "Физлицо": "Eraisik",
  "Адрес клиента": "Kliendi aadress",
  "Адрес электронной почты": "Kliendi e-post",
  "Адреса электронной почты": "E-posti aadressid",
  "Контактное лицо": "Kontaktisik",
  "Контактные лица": "Kontaktisikud",
  "Номер телефона": "Telefoninumber",
  "Телефоны": "Telefonid",
  "Регистрационный номер": "Registrikood",
  "Номер VAT": "KMKR number",
  "Регистрационный номер VAT": "KMKR number",
  "Редактировать": "Muuda",
  "Клиент": "Klient",
  "Новый клиент": "Uus klient",
  "Клиенты пока не добавлены.": "Kliente pole veel lisatud.",
  "Новый клиент добавлен. Заполните карточку и нажмите «Сохранить».": "Uus klient lisatud. Täida kaart ja vajuta Salvesta.",
  "Заполните юридическое название клиента.": "Sisesta kliendi ametlik ärinimi.",
  "Заполните название клиента.": "Sisesta kliendi nimi.",
  "Изменения клиента не сохранены. Нажмите «Сохранить».": "Kliendi muudatused pole salvestatud. Vajuta Salvesta.",
  "Выбор языка": "Keele valik",
  "Рабочий расчет": "Tööarvutus",
  "База расчетов": "Arvutuste baas",
  "Администрирование доступа": "Ligipääsu haldus",
  "Категории расчета": "Arvutuse kategooriad",
  "Категории коэффициентов": "Koefitsientide kategooriad",
  "Цифровая печать": "Digitrükk",
  "Широкоформатная печать": "Laiformaadiline trükkimine",
  "Сувенирная продукция": "Suveniiritooted",
  "Печать на одежде": "Trükkimine riietele ja tekstiilile",
  "Тип клиента": "Kliendi tüüp",
  "B2B клиент": "B2B klient",
  "B2C клиент": "B2C klient",
  "Просчёт стоимости": "Hinna arvutus",
  "Просчет стоимости": "Hinna arvutus",
  "Стандартная продукция": "Standardsed tooted",
  "Выбор продукта": "Toote valik",
  "Выберите продукт": "Vali toode",
  "Нет стандартных продуктов": "Standardtooteid ei ole",
  "Введите количество": "Sisesta kogus",
  "Не выбран продукт": "Toode on valimata",
  "Не указано количество": "Kogus on sisestamata",
  "Скидка / наценка": "Soodustus / juurdehindlus",
  "Материал": "Materjal",
  "Материалы": "Materjalid",
  "Выбор материала": "Materjali valik",
  "Тип материала": "Materjali tüüp",
  "Выберите тип материала": "Vali materjali tüüp",
  "Выберите материал": "Vali materjal",
  "Нет материалов": "Materjale ei ole",
  "Нет материалов этого типа": "Seda tüüpi materjale ei ole",
  "Кастомный материал": "Kohandatud materjal",
  "Стоимость кастомного материала за м²": "Kohandatud materjali hind m² kohta",
  "Укажите стоимость кастомного материала за м²": "Sisesta kohandatud materjali hind m² kohta",
  "Материал без покрытия": "Katmata materjal",
  "Материал силк": "Silk-materjal",
  "Специальный материал": "Erimaterjal",
  "Размер": "Suurus",
  "Добавьте все размеры заказа. Площадь строк будет суммироваться.": "Lisa kõik tellimuse mõõdud. Ridade pindalad liidetakse.",
  "Ширина, мм": "Laius, mm",
  "Высота, мм": "Kõrgus, mm",
  "Введите ширину": "Sisesta laius",
  "Введите высоту": "Sisesta kõrgus",
  "Введите тираж": "Sisesta tiraaž",
  "Тираж": "Tiraaž",
  "Количество": "Kogus",
  "Тип печати": "Trüki tüüp",
  "Односторонняя печать": "Ühepoolne trükk",
  "Двусторонняя печать": "Kahepoolne trükk",
  "Выбор печати": "Trüki valik",
  "Выберите печать": "Vali trükk",
  "Выбор типа печати": "Trüki tüübi valik",
  "Выберите тип печати": "Vali trüki tüüp",
  "Печать": "Trükkimine",
  "Ввод тиража": "Tiraaži sisestamine",
  "Двухсторонняя печать": "Kahepoolne trükk",
  "Дополнительные работы": "Lisatööd",
  "Срочность": "Tähtaeg",
  "Выбор срочности": "Tähtaja valik",
  "Выберите срочность": "Vali tähtaeg",
  "Стандартная срочность, 3-5 рабочих дней": "Tavaline tähtaeg, 3-5 tööpäeva",
  "Срочная работа, +50%": "Kiirtöö, +50%",
  "Дополнительная скидка или надбавка": "Täiendav soodustus või juurdehindlus",
  "Тип корректировки": "Korrigeerimise tüüp",
  "Скидка": "Soodustus",
  "Надбавка": "Juurdehindlus",
  "Процент, %": "Protsent, %",
  "Тип широкоформатной печати": "Laiformaadilise trükkimise tüüp",
  "Рулонная печать": "Rulltrükk",
  "Листовая печать": "Lehttrükk",
  "Цветность печати": "Trüki värvilisus",
  "Тип носителя": "Kandja tüüp",
  "Выбор носителя": "Kandja valik",
  "Выберите носитель": "Vali kandja",
  "Нестандартный носитель / одежда клиента": "Eritüüpi kandja / kliendi rõivas",
  "Стоимость за единицу": "Ühiku hind",
  "Нет носителей": "Kandjaid ei ole",
  "Продукт": "Toode",
  "Площадь, м²": "Pindala, m²",
  "Площадь / размер в м²": "Pindala / suurus m²",
  "Материал / носитель": "Materjal / kandja",
  "Постобработка": "Järeltöötlus",
  "Срок": "Tähtaeg",
  "Итог": "Kokku",
  "Себестоимость": "Omahind",
  "Наценка": "Juurdehindlus",
  "Доп. работы": "Lisatööd",
  "Цена за единицу": "Ühiku hind",
  "Цена за изделие": "Toote hind",
  "Минимальный заказ": "Miinimumtellimus",
  "Стоимость минимального заказа": "Miinimumtellimuse hind",
  "Минимальная стоимость заказа": "Miinimumtellimuse hind",
  "Площадь печати": "Trükipind",
  "Стандартные продукты": "Standardsed tooted",
  "Формулы количества": "Koguse valemid",
  "Формулы": "Valemid",
  "Цена за клик": "Kliki hind",
  "Цена за материал": "Materjali hind",
  "Цена краски за м²": "Tindi hind m² kohta",
  "Коэффициент за резку": "Lõikuse koefitsient",
  "Название материала": "Materjali nimi",
  "Стоимость листа SRA3": "SRA3 lehe hind",
  "Стоимость за м²": "Hind m² kohta",
  "Стоимость краски за м²": "Tindi hind m² kohta",
  "Категория": "Kategooria",
  "Название продукта": "Toote nimi",
  "Базовая цена за количество": "Baashind koguse kohta",
  "Ценовые диапазоны": "Hinnavahemikud",
  "Скидка %": "Soodustus %",
  "Цена за единицу / скидка %": "Ühiku hind / soodustus %",
  "Скидка в процентах": "Soodustus protsentides",
  "Тип": "Tüüp",
  "Диапазоны пока не добавлены.": "Vahemikke pole veel lisatud.",
  "Диапазон добавлен.": "Vahemik lisatud.",
  "Диапазон удален.": "Vahemik kustutatud.",
  "Клик 4+0": "Kliki hind 4+0",
  "Клик 4+4": "Kliki hind 4+4",
  "Название операции": "Operatsiooni nimi",
  "Процент к стоимости": "Protsent hinnast",
  "Количество от": "Kogus alates",
  "Количество до": "Kogus kuni",
  "м² от": "m² alates",
  "м² до": "m² kuni",
  "Формула": "Valem",
  "Формула цены за лист": "Lehe hinna valem",
  "Процент за резку": "Lõikuse protsent",
  "Дополнительный процент": "Lisaprotsent",
  "Продукты направления": "Valdkonna tooted",
  "Продукты, базовые ставки, наценка и минимум для выбранной подкладки.": "Valitud jaotise tooted, baashinnad, juurdehindlus ja miinimum.",
  "Раздел пока не наполнен": "Jaotis pole veel täidetud",
  "Раздел подготовлен. Наполним его позже.": "Jaotis on ette valmistatud. Täidame selle hiljem.",
  "База": "Baas",
  "Мин. заказ": "Min. tellimus",
  "Стоимость": "Hind",
  "Ед.": "Ühik",
  "Дополнительные операции": "Lisatoimingud",
  "Операция": "Toiming",
  "Имя": "Eesnimi",
  "Фамилия": "Perekonnanimi",
  "Роль": "Roll",
  "Главный пользователь": "Peakasutaja",
  "Продавец": "Müüja",
  "Пользователь": "Kasutaja",
  "Сохранить": "Salvesta",
  "Отменить удаление": "Tühista kustutamine",
  "Сохранено": "Salvestatud",
  "Удаление отменено.": "Kustutamine tühistatud.",
  "Удалить строку": "Kustuta rida",
  "Удалить размер": "Kustuta mõõt",
  "Перетащить строку": "Lohista rida",
  "Удалить пользователя": "Kustuta kasutaja",
  "Перетащить пользователя": "Lohista kasutajat",
  "Неверный логин или пароль.": "Vale kasutajanimi või parool.",
  "Цена заказа равна или ниже себестоимости.": "Tellimuse hind on omahinnaga võrdne või sellest madalam.",
  "Фактическая стоимость печати ниже минимальной. Применяется минимальная стоимость печати.": "Tegelik trükihind on miinimumist madalam. Rakendatakse miinimumtrükihinda.",
  "Не выбран тип клиента": "Kliendi tüüp on valimata",
  "Не выбран тип материала": "Materjali tüüp on valimata",
  "Не выбран материал": "Materjal on valimata",
  "Не указана ширина": "Laius on sisestamata",
  "Не указана высота": "Kõrgus on sisestamata",
  "Не указан тираж": "Tiraaž on sisestamata",
  "Добавьте хотя бы один размер": "Lisa vähemalt üks mõõt",
  "Площадь заказа должна быть больше 0": "Tellimuse pindala peab olema suurem kui 0",
  "Не выбран тип печати": "Trüki tüüp on valimata",
  "Не выбрана срочность": "Tähtaeg on valimata",
  "Процент корректировки должен быть не меньше 0": "Korrigeerimise protsent ei tohi olla alla 0",
  "Скидка не может быть больше 100%": "Soodustus ei saa olla üle 100%",
  "Выберите рулонную печать": "Vali rulltrükk",
  "Не выбран тип носителя": "Kandja tüüp on valimata",
  "Стоимость носителя должна быть не меньше 0": "Kandja hind ei tohi olla alla 0",
  "Нельзя сохранить список без пользователей.": "Kasutajate nimekirja ei saa tühjana salvestada.",
  "Новый пользователь добавлен. Заполните данные и нажмите «Сохранить».": "Uus kasutaja lisatud. Täida andmed ja vajuta Salvesta.",
  "Пользователь отмечен на удаление. Нажмите «Сохранить».": "Kasutaja on kustutamiseks märgitud. Vajuta Salvesta.",
  "Строка отмечена на удаление. Нажмите «Сохранить».": "Rida on kustutamiseks märgitud. Vajuta Salvesta.",
  "Удаление не сохранено. Нажмите «Сохранить», чтобы удалить строку.": "Kustutamine pole salvestatud. Rea kustutamiseks vajuta Salvesta.",
  "Удаление не сохранено. Нажмите «Сохранить», чтобы удалить пользователя.": "Kustutamine pole salvestatud. Kasutaja kustutamiseks vajuta Salvesta.",
  "Сначала сохраните или отмените удаление строки.": "Esmalt salvesta või tühista rea kustutamine.",
  "Сначала сохраните или отмените удаление пользователя.": "Esmalt salvesta või tühista kasutaja kustutamine.",
  "Порядок изменен. Нажмите «Сохранить».": "Järjekord muudetud. Vajuta Salvesta.",
  "Доступ к системе": "Ligipääs süsteemile",
  "Обычный срок": "Tavaline tähtaeg",
  "Срочно +25%": "Kiire +25%",
  "Сегодня +50%": "Täna +50%",
  "лист": "leht",
  "за заказ": "tellimuse kohta",
  "за единицу": "ühiku kohta"
};

const defaults = {
  users: [
    { firstName: "Maksym", lastName: "Khodus", role: "admin", login: "maksym", password: "admin2026" }
  ],
  superUsers: [
    { firstName: "super", lastName: "user", role: "superadmin", login: "super", password: "user" }
  ],
  clientsArchive: [],
  userPreferences: {},
  appConfig: createDefaultAppConfig(),
  access: {
    roles: USER_ROLES,
    permissions: createDefaultAccessPermissions()
  },
  clients: [],
  products: [
    { id: "digital-a4", category: "Цифровая печать", name: "Листовка A4", base: 0.12, margin: 1.75, minimum: 15 },
    { id: "digital-business", category: "Цифровая печать", name: "Визитки", base: 0.06, margin: 2.1, minimum: 20 },
    { id: "wide-banner", category: "Широкоформатная печать", name: "Баннер", base: 7.5, margin: 1.8, minimum: 25 },
    { id: "wide-sticker", category: "Широкоформатная печать", name: "Наклейка", base: 9.2, margin: 1.9, minimum: 20 },
    { id: "clothes-shirt", category: "Печать на одежде", name: "Футболка с печатью", base: 5.8, margin: 1.65, minimum: 30 },
    { id: "souvenir-mug", category: "Сувенирная продукция", name: "Кружка с печатью", base: 3.4, margin: 1.7, minimum: 25 }
  ],
  materials: [
    { id: "paper-170", name: "Бумага 170 г/м²", price: 0.08, unit: "лист" },
    { id: "paper-300", name: "Картон 300 г/м²", price: 0.16, unit: "лист" },
    { id: "banner", name: "Баннерная ткань", price: 3.2, unit: "м²" },
    { id: "vinyl", name: "Самоклеящаяся пленка", price: 4.1, unit: "м²" },
    { id: "shirt", name: "Футболка базовая", price: 4.8, unit: "шт" },
    { id: "mug", name: "Кружка белая", price: 2.2, unit: "шт" }
  ],
  finishes: [
    { id: "none", name: "Без доп. работ", price: 0, type: "за заказ" },
    { id: "cut", name: "Резка", price: 4, type: "за заказ" },
    { id: "lamination", name: "Ламинация", price: 0.35, type: "за единицу" },
    { id: "package", name: "Упаковка", price: 0.12, type: "за единицу" },
    { id: "install", name: "Монтаж", price: 25, type: "за заказ" }
  ],
  digitalPrint: {
    standardProducts: [
      { category: "Цифровая печать", name: "Untitled", basePrice: 0, quantity: 1 }
    ],
    clickPrices: [
      { click40: 0, click44: 0 }
    ],
    materials: [
      { type: "Материал без покрытия", name: "", sr3Price: "" }
    ],
    extraWorks: [
      { name: "Untitled", percent: 0 }
    ],
    quantityFormulas: [
      { from: 1, to: 1, formula: "" }
    ],
    cuttingCoefficients: [
      { from: 1, to: 1, percent: 0 }
    ],
    clientTypes: {
      b2bPercent: 0,
      b2cPercent: 0
    },
    minimumOrder: {
      price: 0
    }
  },
  widePrint: {
    rollStandardProducts: [
      { category: WIDE_CATEGORY, name: "Untitled", basePrice: 0, quantity: 1 }
    ],
    rollMaterials: [
      { name: "", price: 0 }
    ],
    rollInk: {
      price: 0
    },
    rollFormulas: [
      { from: 1, to: 1, formula: "" }
    ],
    rollExtraWorks: [
      { name: "", percent: 0 }
    ],
    rollClientTypes: {
      b2bPercent: 0,
      b2cPercent: 0
    },
    rollMinimumOrder: {
      price: 0
    }
  },
  clothesPrint: {
    standardProducts: [
      { category: CLOTHES_CATEGORY, name: "Untitled", basePrice: 0, quantity: 1 }
    ],
    quantityFormulas: [
      { from: 1, to: 1, formula: "" }
    ],
    carrierTypes: [
      { name: "", price: 0 }
    ],
    extraWorks: [
      { name: "", percent: 0 }
    ],
    clientTypes: {
      b2bPercent: 0,
      b2cPercent: 0
    }
  }
};

let settings = structuredClone(defaults);
const SUPPORTED_LANGUAGES = ["en", "et", "ru"];
const APP_LANGUAGE_OPTIONS = [
  { key: "en", label: "EN / English" },
  { key: "et", label: "ET / Eesti" },
  { key: "ru", label: "RU / Русский" }
];
let currentLanguage = "en";
let activeDepartment = DEPARTMENTS[0].label;
let activeDigitalSettingsTab = DIGITAL_SETTINGS_TABS[0].id;
let activeWideSettingsTab = WIDE_ROLL_SETTINGS_TABS[0].id;
let activeClothesSettingsTab = CLOTHES_SETTINGS_TABS[0].id;
let activeUserAdminTab = USER_ADMIN_TABS[0].id;
let draggedTopTab = null;
let topTabDragJustFinished = false;
let clientSort = { key: "name", direction: "asc" };
let editingClientIndex = null;
let clientDraft = null;
let selectedClientIndexes = new Set();
let clientImportRows = [];
let clientImportHeaders = [];
let clientImportDuplicates = [];
const pendingDigitalDeletes = {
  standardProducts: new Set(),
  materials: new Set(),
  extraWorks: new Set(),
  quantityFormulas: new Set(),
  cuttingCoefficients: new Set()
};
let draggedDigitalRow = null;
const pendingUserDeletes = new Set();
let draggedUserRow = null;
let pendingClientsDirty = false;
const pendingWideDeletes = {
  rollStandardProducts: new Set(),
  rollMaterials: new Set(),
  rollFormulas: new Set(),
  rollExtraWorks: new Set()
};
let draggedWideRow = null;
const pendingClothesDeletes = {
  standardProducts: new Set(),
  quantityFormulas: new Set(),
  carrierTypes: new Set(),
  extraWorks: new Set()
};
let draggedClothesRow = null;

const loginView = document.querySelector("#loginView");
const dashboardView = document.querySelector("#dashboardView");
const loginForm = document.querySelector("#loginForm");
const loginError = document.querySelector("#loginError");
const logoutButton = document.querySelector("#logoutButton");
const languageButtons = document.querySelectorAll("[data-language]");
const languageMenu = document.querySelector("#languageMenu");
const languageMenuButton = document.querySelector("#languageMenuButton");
const languageMenuList = document.querySelector("#languageMenuList");
const userSettingsButton = document.querySelector("#userSettingsButton");
const userSettingsModal = document.querySelector("#userSettingsModal");
const closeUserSettingsModalButton = document.querySelector("#closeUserSettingsModalButton");
const userSettingsFirstNameInput = document.querySelector("#userSettingsFirstNameInput");
const userSettingsLastNameInput = document.querySelector("#userSettingsLastNameInput");
const userSettingsLoginInput = document.querySelector("#userSettingsLoginInput");
const userSettingsPasswordInput = document.querySelector("#userSettingsPasswordInput");
const toggleUserSettingsPasswordButton = document.querySelector("#toggleUserSettingsPasswordButton");
const userSettingsValidation = document.querySelector("#userSettingsValidation");
const userSettingsStatus = document.querySelector("#userSettingsStatus");
const saveUserSettingsButton = document.querySelector("#saveUserSettingsButton");
const topbarUserRole = document.querySelector("#topbarUserRole");
const topbarUserName = document.querySelector("#topbarUserName");
const sidebarToggleButton = document.querySelector("#sidebarToggleButton");
const mobileMenuButton = document.querySelector("#mobileMenuButton");
const mobileSidebarBackdrop = document.querySelector("#mobileSidebarBackdrop");
const categorySelect = document.querySelector("#categorySelect");
const productSelect = document.querySelector("#productSelect");
const materialSelect = document.querySelector("#materialSelect");
const finishSelect = document.querySelector("#finishSelect");
const quantityInput = document.querySelector("#quantityInput");
const areaInput = document.querySelector("#areaInput");
const urgencySelect = document.querySelector("#urgencySelect");
const genericOrderForm = document.querySelector("#orderForm");
const digitalOrderForm = document.querySelector("#digitalOrderForm");
const wideOrderForm = document.querySelector("#wideOrderForm");
const digitalCostMode = document.querySelector("#digitalCostMode");
const digitalStandardMode = document.querySelector("#digitalStandardMode");
const digitalCostFields = document.querySelector("#digitalCostFields");
const digitalStandardFields = document.querySelector("#digitalStandardFields");
const digitalClientTypeOptions = document.querySelector("#digitalClientTypeOptions");
const digitalB2BClientMode = document.querySelector("#digitalB2BClientMode");
const digitalB2CClientMode = document.querySelector("#digitalB2CClientMode");
const digitalStandardProductSelect = document.querySelector("#digitalStandardProductSelect");
const digitalStandardQuantityInput = document.querySelector("#digitalStandardQuantityInput");
const digitalOrderMaterialTypeSelect = document.querySelector("#digitalOrderMaterialTypeSelect");
const digitalOrderMaterialSelect = document.querySelector("#digitalOrderMaterialSelect");
const digitalOrderExtraWorks = document.querySelector("#digitalOrderExtraWorks");
const digitalWidthInput = document.querySelector("#digitalWidthInput");
const digitalHeightInput = document.querySelector("#digitalHeightInput");
const digitalQuantityInput = document.querySelector("#digitalQuantityInput");
const digitalPrintTypeSelect = document.querySelector("#digitalPrintTypeSelect");
const digitalUrgencySelect = document.querySelector("#digitalUrgencySelect");
const digitalAdjustmentTypeSelect = document.querySelector("#digitalAdjustmentTypeSelect");
const digitalDiscountInput = document.querySelector("#digitalDiscountInput");
const wideRollPrintMode = document.querySelector("#wideRollPrintMode");
const wideSheetPrintMode = document.querySelector("#wideSheetPrintMode");
const wideRollOrderFields = document.querySelector("#wideRollOrderFields");
const wideClientTypeOptions = document.querySelector("#wideClientTypeOptions");
const wideB2BClientMode = document.querySelector("#wideB2BClientMode");
const wideB2CClientMode = document.querySelector("#wideB2CClientMode");
const wideOrderMaterialSelect = document.querySelector("#wideOrderMaterialSelect");
const wideCustomMaterialPriceWrap = document.querySelector("#wideCustomMaterialPriceWrap");
const wideCustomMaterialPriceInput = document.querySelector("#wideCustomMaterialPriceInput");
const wideSizeRowsTable = document.querySelector("#wideSizeRowsTable");
const addWideSizeRowButton = document.querySelector("#addWideSizeRowButton");
const widePrintColorSelect = document.querySelector("#widePrintColorSelect");
const wideOrderExtraWorks = document.querySelector("#wideOrderExtraWorks");
const wideUrgencySelect = document.querySelector("#wideUrgencySelect");
const wideAdjustmentTypeSelect = document.querySelector("#wideAdjustmentTypeSelect");
const wideAdjustmentInput = document.querySelector("#wideAdjustmentInput");
const clothesOrderForm = document.querySelector("#clothesOrderForm");
const clothesCostMode = document.querySelector("#clothesCostMode");
const clothesStandardMode = document.querySelector("#clothesStandardMode");
const clothesCostFields = document.querySelector("#clothesCostFields");
const clothesClientTypeOptions = document.querySelector("#clothesClientTypeOptions");
const clothesB2BClientMode = document.querySelector("#clothesB2BClientMode");
const clothesB2CClientMode = document.querySelector("#clothesB2CClientMode");
const clothesCarrierSelect = document.querySelector("#clothesCarrierSelect");
const clothesCustomCarrierPriceWrap = document.querySelector("#clothesCustomCarrierPriceWrap");
const clothesCustomCarrierPriceInput = document.querySelector("#clothesCustomCarrierPriceInput");
const clothesQuantityInput = document.querySelector("#clothesQuantityInput");
const clothesOrderExtraWorks = document.querySelector("#clothesOrderExtraWorks");
const orderValidationMessage = document.querySelector("#orderValidationMessage");
const profitWarningMessage = document.querySelector("#profitWarningMessage");
const orderCategoryTabs = document.querySelector("#orderCategoryTabs");
const settingsCategoryTabs = document.querySelector("#settingsCategoryTabs");
const productsSectionTitle = document.querySelector("#productsSectionTitle");
const productsSectionHint = document.querySelector("#productsSectionHint");
const genericSettings = document.querySelector("#genericSettings");
const digitalSettings = document.querySelector("#digitalSettings");
const digitalSettingsTabs = document.querySelector("#digitalSettingsTabs");
const wideSettings = document.querySelector("#wideSettings");
const wideSettingsTabs = document.querySelector("#wideSettingsTabs");
const wideRollSettings = document.querySelector("#wideRollSettings");
const wideSheetSettings = document.querySelector("#wideSheetSettings");
const wideSettingsRollMode = document.querySelector("#wideSettingsRollMode");
const wideSettingsSheetMode = document.querySelector("#wideSettingsSheetMode");
const clothesSettings = document.querySelector("#clothesSettings");
const clothesSettingsTabs = document.querySelector("#clothesSettingsTabs");
const usersTable = document.querySelector("#usersTable");
const userAdminTabs = document.querySelector("#userAdminTabs");
const rolesTable = document.querySelector("#rolesTable");
const addRoleButton = document.querySelector("#addRoleButton");
const saveRolesButton = document.querySelector("#saveRolesButton");
const rolesSaveStatus = document.querySelector("#rolesSaveStatus");
const addUserButton = document.querySelector("#addUserButton");
const saveUsersButton = document.querySelector("#saveUsersButton");
const undoUserDeleteButton = document.querySelector("#undoUserDeleteButton");
const usersSaveStatus = document.querySelector("#usersSaveStatus");
const permissionsGrid = document.querySelector("#permissionsGrid");
const savePermissionsButton = document.querySelector("#savePermissionsButton");
const permissionsSaveStatus = document.querySelector("#permissionsSaveStatus");
const appLanguageSettingsGrid = document.querySelector("#appLanguageSettingsGrid");
const appBlockSettingsGrid = document.querySelector("#appBlockSettingsGrid");
const appMaxUsersInput = document.querySelector("#appMaxUsersInput");
const saveAppSettingsButton = document.querySelector("#saveAppSettingsButton");
const appSettingsSaveStatus = document.querySelector("#appSettingsSaveStatus");
const clientColumnsButton = document.querySelector("#clientColumnsButton");
const clientColumnsDropdown = document.querySelector("#clientColumnsDropdown");
const clientsTableHead = document.querySelector("#clientsTableHead");
const clientsTableBody = document.querySelector("#clientsTableBody");
const addClientButton = document.querySelector("#addClientButton");
const deleteSelectedClientsButton = document.querySelector("#deleteSelectedClientsButton");
const clientsSaveStatus = document.querySelector("#clientsSaveStatus");
const clientModal = document.querySelector("#clientModal");
const clientModalTitle = document.querySelector("#clientModalTitle");
const closeClientModalButton = document.querySelector("#closeClientModalButton");
const saveClientModalButton = document.querySelector("#saveClientModalButton");
const clientNameInput = document.querySelector("#clientNameInput");
const clientLegalType = document.querySelector("#clientLegalType");
const clientNaturalType = document.querySelector("#clientNaturalType");
const clientRegistrationInput = document.querySelector("#clientRegistrationInput");
const clientVatInput = document.querySelector("#clientVatInput");
const clientAddressInput = document.querySelector("#clientAddressInput");
const clientContactPersonsList = document.querySelector("#clientContactPersonsList");
const clientEmailsList = document.querySelector("#clientEmailsList");
const clientPhonesList = document.querySelector("#clientPhonesList");
const importClientsButton = document.querySelector("#importClientsButton");
const exportClientsButton = document.querySelector("#exportClientsButton");
const clientImportModal = document.querySelector("#clientImportModal");
const closeClientImportModalButton = document.querySelector("#closeClientImportModalButton");
const clientImportFileInput = document.querySelector("#clientImportFileInput");
const clientImportMappingSection = document.querySelector("#clientImportMappingSection");
const clientImportMappingGrid = document.querySelector("#clientImportMappingGrid");
const clientImportSummary = document.querySelector("#clientImportSummary");
const clientImportValidation = document.querySelector("#clientImportValidation");
const confirmClientImportButton = document.querySelector("#confirmClientImportButton");
const clientDeleteConfirmModal = document.querySelector("#clientDeleteConfirmModal");
const confirmClientDeleteButton = document.querySelector("#confirmClientDeleteButton");
const cancelClientDeleteButton = document.querySelector("#cancelClientDeleteButton");

const UI_TRANSLATIONS_BY_LANGUAGE = {
  en: UI_TRANSLATIONS,
  et: UI_TRANSLATIONS_ET
};
function createReverseTranslationDictionary(dictionary) {
  return Object.entries(dictionary).reduce((result, [ru, translated]) => {
    if (!result[translated]) {
      result[translated] = ru;
    }

    return result;
  }, {});
}

const UI_TRANSLATIONS_REVERSE_BY_LANGUAGE = Object.fromEntries(
  Object.entries(UI_TRANSLATIONS_BY_LANGUAGE).map(([language, dictionary]) => [
    language,
    createReverseTranslationDictionary(dictionary)
  ])
);
let isApplyingLanguage = false;
let languageApplyTimer = null;

function getCanonicalText(text) {
  if (UI_TRANSLATIONS[text] || UI_TRANSLATIONS_ET[text]) {
    return text;
  }

  for (const reverseDictionary of Object.values(UI_TRANSLATIONS_REVERSE_BY_LANGUAGE)) {
    if (reverseDictionary[text]) {
      return reverseDictionary[text];
    }
  }

  return text;
}

function translateStaticText(text, language) {
  const trimmed = text.trim();
  if (!trimmed) {
    return text;
  }

  const canonicalText = getCanonicalText(trimmed);
  if (language === "ru") {
    if (canonicalText === trimmed) {
      return translateDynamicText(text, language);
    }

    return text.replace(trimmed, canonicalText);
  }

  const translated = UI_TRANSLATIONS_BY_LANGUAGE[language]?.[canonicalText];
  if (!translated) {
    return translateDynamicText(text, language);
  }

  return text.replace(trimmed, translated);
}

function translateDynamicText(text, language) {
  const trimmed = text.trim();
  const wrap = (value) => text.replace(trimmed, value);

  if (language === "en") {
    if (trimmed.includes(" / м²") || trimmed.includes(" / лист") || trimmed.includes(" / за заказ") || trimmed.includes(" / за единицу")) {
      return wrap(trimmed
        .replaceAll(" / м²", " / m²")
        .replaceAll(" / лист", " / sheet")
        .replaceAll(" / за заказ", " / per order")
        .replaceAll(" / за единицу", " / per unit"));
    }

    let match = trimmed.match(/^Нет формулы для (.+) м²$/);
    if (match) return wrap(`No formula for ${match[1]} m²`);
    match = trimmed.match(/^Не указана ширина в строке (.+)$/);
    if (match) return wrap(`Width is not specified in row ${match[1]}`);
    match = trimmed.match(/^Не указана высота в строке (.+)$/);
    if (match) return wrap(`Height is not specified in row ${match[1]}`);
    match = trimmed.match(/^Не указан тираж в строке (.+)$/);
    if (match) return wrap(`Quantity is not specified in row ${match[1]}`);
    match = trimmed.match(/^Нет формулы для (.+) листов SRA3$/);
    if (match) return wrap(`No formula for ${match[1]} SRA3 sheets`);
    match = trimmed.match(/^(.+) лист\. \/ (.+) шт\. на лист$/);
    if (match) return wrap(`${match[1]} sheets / ${match[2]} pcs per sheet`);
    match = trimmed.match(/^(.+) шт\.$/);
    if (match) return wrap(`${match[1]} pcs`);
    match = trimmed.match(/^(.+) м²$/);
    if (match) return wrap(`${match[1]} m²`);
    match = trimmed.match(/^(.+) \/ шт$/);
    if (match) return wrap(`${match[1]} / pc`);
  } else if (language === "et") {
    if (trimmed.includes(" / м²") || trimmed.includes(" / лист") || trimmed.includes(" / за заказ") || trimmed.includes(" / за единицу") || trimmed.includes(" / sheet") || trimmed.includes(" / per order") || trimmed.includes(" / per unit")) {
      return wrap(trimmed
        .replaceAll(" / м²", " / m²")
        .replaceAll(" / лист", " / leht")
        .replaceAll(" / за заказ", " / tellimuse kohta")
        .replaceAll(" / за единицу", " / ühiku kohta")
        .replaceAll(" / sheet", " / leht")
        .replaceAll(" / per order", " / tellimuse kohta")
        .replaceAll(" / per unit", " / ühiku kohta"));
    }

    let match = trimmed.match(/^Нет формулы для (.+) м²$/);
    if (match) return wrap(`Valem puudub ${match[1]} m² jaoks`);
    match = trimmed.match(/^No formula for (.+) m²$/);
    if (match) return wrap(`Valem puudub ${match[1]} m² jaoks`);
    match = trimmed.match(/^Не указана ширина в строке (.+)$/);
    if (match) return wrap(`Laius on sisestamata real ${match[1]}`);
    match = trimmed.match(/^Width is not specified in row (.+)$/);
    if (match) return wrap(`Laius on sisestamata real ${match[1]}`);
    match = trimmed.match(/^Не указана высота в строке (.+)$/);
    if (match) return wrap(`Kõrgus on sisestamata real ${match[1]}`);
    match = trimmed.match(/^Height is not specified in row (.+)$/);
    if (match) return wrap(`Kõrgus on sisestamata real ${match[1]}`);
    match = trimmed.match(/^Не указан тираж в строке (.+)$/);
    if (match) return wrap(`Tiraaž on sisestamata real ${match[1]}`);
    match = trimmed.match(/^Quantity is not specified in row (.+)$/);
    if (match) return wrap(`Tiraaž on sisestamata real ${match[1]}`);
    match = trimmed.match(/^Нет формулы для (.+) листов SRA3$/);
    if (match) return wrap(`Valem puudub ${match[1]} SRA3 lehe jaoks`);
    match = trimmed.match(/^No formula for (.+) SRA3 sheets$/);
    if (match) return wrap(`Valem puudub ${match[1]} SRA3 lehe jaoks`);
    match = trimmed.match(/^Нет диапазона цены для количества (.+)$/);
    if (match) return wrap(`Hinnavahemik puudub kogusele ${match[1]}`);
    match = trimmed.match(/^No price tier for quantity (.+)$/);
    if (match) return wrap(`Hinnavahemik puudub kogusele ${match[1]}`);
    match = trimmed.match(/^(.+) лист\. \/ (.+) шт\. на лист$/);
    if (match) return wrap(`${match[1]} lehte / ${match[2]} tk lehel`);
    match = trimmed.match(/^(.+) sheets \/ (.+) pcs per sheet$/);
    if (match) return wrap(`${match[1]} lehte / ${match[2]} tk lehel`);
    match = trimmed.match(/^(.+) шт\.$/);
    if (match) return wrap(`${match[1]} tk`);
    match = trimmed.match(/^(.+) pcs$/);
    if (match) return wrap(`${match[1]} tk`);
    match = trimmed.match(/^(.+) м²$/);
    if (match) return wrap(`${match[1]} m²`);
    match = trimmed.match(/^(.+) \/ шт$/);
    if (match) return wrap(`${match[1]} / tk`);
  } else {
    if (trimmed.includes(" / m²") || trimmed.includes(" / sheet") || trimmed.includes(" / per order") || trimmed.includes(" / per unit") || trimmed.includes(" / leht") || trimmed.includes(" / tellimuse kohta") || trimmed.includes(" / ühiku kohta")) {
      return wrap(trimmed
        .replaceAll(" / m²", " / м²")
        .replaceAll(" / sheet", " / лист")
        .replaceAll(" / per order", " / за заказ")
        .replaceAll(" / per unit", " / за единицу")
        .replaceAll(" / leht", " / лист")
        .replaceAll(" / tellimuse kohta", " / за заказ")
        .replaceAll(" / ühiku kohta", " / за единицу"));
    }

    let match = trimmed.match(/^No formula for (.+) m²$/);
    if (match) return wrap(`Нет формулы для ${match[1]} м²`);
    match = trimmed.match(/^Valem puudub (.+) m² jaoks$/);
    if (match) return wrap(`Нет формулы для ${match[1]} м²`);
    match = trimmed.match(/^Width is not specified in row (.+)$/);
    if (match) return wrap(`Не указана ширина в строке ${match[1]}`);
    match = trimmed.match(/^Laius on sisestamata real (.+)$/);
    if (match) return wrap(`Не указана ширина в строке ${match[1]}`);
    match = trimmed.match(/^Height is not specified in row (.+)$/);
    if (match) return wrap(`Не указана высота в строке ${match[1]}`);
    match = trimmed.match(/^Kõrgus on sisestamata real (.+)$/);
    if (match) return wrap(`Не указана высота в строке ${match[1]}`);
    match = trimmed.match(/^Quantity is not specified in row (.+)$/);
    if (match) return wrap(`Не указан тираж в строке ${match[1]}`);
    match = trimmed.match(/^Tiraaž on sisestamata real (.+)$/);
    if (match) return wrap(`Не указан тираж в строке ${match[1]}`);
    match = trimmed.match(/^No formula for (.+) SRA3 sheets$/);
    if (match) return wrap(`Нет формулы для ${match[1]} листов SRA3`);
    match = trimmed.match(/^Valem puudub (.+) SRA3 lehe jaoks$/);
    if (match) return wrap(`Нет формулы для ${match[1]} листов SRA3`);
    match = trimmed.match(/^Hinnavahemik puudub kogusele (.+)$/);
    if (match) return wrap(`Нет диапазона цены для количества ${match[1]}`);
    match = trimmed.match(/^(.+) sheets \/ (.+) pcs per sheet$/);
    if (match) return wrap(`${match[1]} лист. / ${match[2]} шт. на лист`);
    match = trimmed.match(/^(.+) lehte \/ (.+) tk lehel$/);
    if (match) return wrap(`${match[1]} лист. / ${match[2]} шт. на лист`);
    match = trimmed.match(/^(.+) pcs$/);
    if (match) return wrap(`${match[1]} шт.`);
    match = trimmed.match(/^(.+) tk$/);
    if (match) return wrap(`${match[1]} шт.`);
    match = trimmed.match(/^(.+) m²$/);
    if (match) return wrap(`${match[1]} м²`);
    match = trimmed.match(/^(.+) \/ pc$/);
    if (match) return wrap(`${match[1]} / шт`);
  }

  return text;
}

function shouldSkipTranslationNode(node) {
  const element = node.parentElement;
  if (!element) {
    return true;
  }

  return Boolean(element.closest("script, style, textarea, [data-no-translate]"));
}

function applyLanguage() {
  if (isApplyingLanguage) {
    return;
  }

  isApplyingLanguage = true;
  document.documentElement.lang = currentLanguage;
  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === currentLanguage);
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    if (shouldSkipTranslationNode(node)) {
      return;
    }

    const translated = translateStaticText(node.nodeValue, currentLanguage);
    if (translated !== node.nodeValue) {
      node.nodeValue = translated;
    }
  });

  document.querySelectorAll("[aria-label], [title], [placeholder]").forEach((element) => {
    if (element.hasAttribute("aria-label")) {
      element.setAttribute("aria-label", translateStaticText(element.getAttribute("aria-label"), currentLanguage));
    }
    if (element.hasAttribute("title")) {
      element.setAttribute("title", translateStaticText(element.getAttribute("title"), currentLanguage));
    }
    if (element.hasAttribute("placeholder")) {
      element.setAttribute("placeholder", translateStaticText(element.getAttribute("placeholder"), currentLanguage));
    }
  });

  updateLanguageMenu();
  updatePasswordToggleState();
  isApplyingLanguage = false;
}

function getLanguageDisplayName(language) {
  return {
    ru: "RU",
    en: "EN",
    et: "ET"
  }[language] || "RU";
}

function updateLanguageMenu() {
  const enabledLanguages = getEnabledLanguages();
  if (languageMenuButton) {
    languageMenuButton.textContent = getLanguageDisplayName(currentLanguage);
  }
  document.querySelectorAll(".language-menu-option").forEach((button) => {
    const isEnabled = enabledLanguages.includes(button.dataset.language);
    button.classList.toggle("is-hidden", !isEnabled);
    button.classList.toggle("is-active", button.dataset.language === currentLanguage);
    button.toggleAttribute("aria-hidden", !isEnabled);
  });
  languageButtons.forEach((button) => {
    const isEnabled = enabledLanguages.includes(button.dataset.language);
    button.classList.toggle("is-hidden", !isEnabled);
    button.classList.toggle("is-active", button.dataset.language === currentLanguage);
    button.toggleAttribute("aria-hidden", !isEnabled);
  });
}

function getCurrentUserIndex() {
  const login = getCurrentUserLogin();
  return settings.users.findIndex((user) => user.login === login);
}

function getCurrentSuperUserIndex() {
  const login = getCurrentUserLogin();
  return settings.superUsers.findIndex((user) => user.login === login);
}

function updateThemeOptionCards() {
  document.querySelectorAll("[data-user-theme-option]").forEach((input) => {
    input.closest(".theme-option")?.classList.toggle("is-active", input.checked);
  });
}

function updatePasswordToggleState() {
  if (!toggleUserSettingsPasswordButton || !userSettingsPasswordInput) {
    return;
  }
  const isVisible = userSettingsPasswordInput.type === "text";
  const label = translateStaticText(isVisible ? "Скрыть пароль" : "Показать пароль", currentLanguage);
  toggleUserSettingsPasswordButton.setAttribute("aria-label", label);
  toggleUserSettingsPasswordButton.setAttribute("title", label);
  toggleUserSettingsPasswordButton.classList.toggle("is-active", isVisible);
}

function renderUserSettingsModal() {
  const user = getCurrentUser();
  const preferences = getCurrentUserPreference();
  userSettingsFirstNameInput.value = user.firstName || "";
  userSettingsLastNameInput.value = user.lastName || "";
  userSettingsLoginInput.value = user.login || "";
  userSettingsPasswordInput.value = "";
  userSettingsPasswordInput.type = "password";
  document.querySelectorAll("[data-user-theme-option]").forEach((input) => {
    input.checked = input.value === (preferences.theme || "light");
  });
  updateThemeOptionCards();
  updatePasswordToggleState();
  userSettingsValidation.textContent = "";
  userSettingsStatus.textContent = "";
  applyLanguage();
  updatePasswordToggleState();
}

function openUserSettingsModal() {
  renderUserSettingsModal();
  userSettingsModal.classList.remove("is-hidden");
  userSettingsModal.setAttribute("aria-hidden", "false");
}

function closeUserSettingsModal() {
  userSettingsModal.classList.add("is-hidden");
  userSettingsModal.setAttribute("aria-hidden", "true");
}

function saveUserSettings() {
  const userIndex = getCurrentUserIndex();
  const superUserIndex = getCurrentSuperUserIndex();
  const isSuperUserProfile = superUserIndex >= 0;
  if (userIndex < 0 && !isSuperUserProfile) {
    userSettingsValidation.textContent = translateStaticText("Пользователь не найден.", currentLanguage);
    return;
  }

  const firstName = userSettingsFirstNameInput.value.trim();
  const lastName = userSettingsLastNameInput.value.trim();
  const login = userSettingsLoginInput.value.trim();
  if (!firstName || !lastName || !login) {
    userSettingsValidation.textContent = translateStaticText("Заполните имя, фамилию и логин.", currentLanguage);
    return;
  }

  const currentLogin = getCurrentUserLogin();
  const loginExists = [...settings.superUsers, ...settings.users].some((user) => user.login === login && user.login !== currentLogin);
  if (loginExists) {
    userSettingsValidation.textContent = translateStaticText("Такой логин уже используется.", currentLanguage);
    return;
  }

  const selectedTheme = document.querySelector("[data-user-theme-option]:checked")?.value || "light";
  const targetUser = isSuperUserProfile ? settings.superUsers[superUserIndex] : settings.users[userIndex];
  targetUser.firstName = firstName;
  targetUser.lastName = lastName;
  targetUser.login = login;
  if (userSettingsPasswordInput.value.trim()) {
    targetUser.password = userSettingsPasswordInput.value;
  }
  sessionStorage.setItem(CURRENT_USER_STORAGE_KEY, login);
  getCurrentUserPreference().theme = selectedTheme;
  applyTheme(selectedTheme);
  saveSettings();
  updateTopbarUser();
  renderUsersTable();
  userSettingsValidation.textContent = "";
  userSettingsStatus.textContent = translateStaticText("Сохранено", currentLanguage);
}

function scheduleLanguageApply() {
  if (currentLanguage === "ru") {
    return;
  }

  window.clearTimeout(languageApplyTimer);
  languageApplyTimer = window.setTimeout(applyLanguage, 0);
}

function setLanguage(language) {
  const enabledLanguages = getEnabledLanguages();
  currentLanguage = enabledLanguages.includes(language) ? language : enabledLanguages[0];
  getCurrentUserPreference().language = currentLanguage;
  saveCurrentUserPreference();
  updateLanguageMenu();
  renderAll();
  applyLanguage();
}

const languageObserver = new MutationObserver(() => {
  if (!isApplyingLanguage) {
    scheduleLanguageApply();
  }
});
languageObserver.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true
});

function loadLocalSettings() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return null;
  }

  try {
    return normalizeSettings(JSON.parse(saved));
  } catch {
    return null;
  }
}

async function loadJsonFile(url) {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Не удалось загрузить ${url}`);
  }

  return response.json();
}

async function loadSplitSettingsFromFiles() {
  const errors = [];
  for (const group of SPLIT_SETTINGS_FILE_GROUPS) {
    try {
      const [systemData, usersData, clientsData, clientsArchiveData, pricingData, preferencesData] = await Promise.all([
        loadJsonFile(group.system),
        loadJsonFile(group.users),
        loadJsonFile(group.clients),
        loadJsonFile(group.clientsArchive),
        loadJsonFile(group.pricing),
        loadJsonFile(group.preferences)
      ]);

      return {
        ...pricingData,
        users: Array.isArray(usersData.users) ? usersData.users : [],
        superUsers: Array.isArray(systemData.superUsers) ? systemData.superUsers : [],
        access: usersData.access || {},
        appConfig: systemData.appConfig || {},
        clients: Array.isArray(clientsData.clients) ? clientsData.clients : [],
        clientsArchive: Array.isArray(clientsArchiveData.clients) ? clientsArchiveData.clients : [],
        userPreferences: preferencesData.userPreferences || {}
      };
    } catch (error) {
      errors.push(error.message);
    }
  }

  throw new Error(`Раздельная база данных недоступна. Проверьте data/system.json, data/users.json, data/clients.json, data/clients-archive.json, data/pricing.json и data/user-preferences.json. ${errors.join(" ")}`);
}

async function loadSettings() {
  for (const apiUrl of SETTINGS_API_URLS) {
    try {
      const response = await fetch(apiUrl, { cache: "no-store" });
      if (response.ok) {
        return normalizeSettings(await response.json());
      }
      const body = await response.text();
      throw new Error(body || `Не удалось загрузить ${apiUrl}`);
    } catch {
      // Try the next API URL. Static file mode has no API.
    }
  }

  return normalizeSettings(await loadSplitSettingsFromFiles());
}

function normalizeAppConfig(appConfig = {}) {
  const defaultsConfig = createDefaultAppConfig();
  const enabledLanguages = {
    ...defaultsConfig.enabledLanguages,
    ...(appConfig.enabledLanguages || {})
  };
  if (!SUPPORTED_LANGUAGES.some((language) => enabledLanguages[language])) {
    enabledLanguages.ru = true;
  }

  return {
    enabledLanguages,
    enabledBlocks: {
      ...defaultsConfig.enabledBlocks,
      ...(appConfig.enabledBlocks || {})
    },
    maxUsers: Math.max(1, Number(appConfig.maxUsers ?? defaultsConfig.maxUsers ?? 5) || 5)
  };
}

function normalizeSettings(savedSettings) {
  savedSettings = savedSettings || {};
  const normalized = {
    ...structuredClone(defaults),
    ...savedSettings,
    digitalPrint: {
      ...structuredClone(defaults.digitalPrint),
      ...(savedSettings.digitalPrint || {})
    },
    widePrint: {
      ...structuredClone(defaults.widePrint),
      ...(savedSettings.widePrint || {})
    },
    clothesPrint: {
      ...structuredClone(defaults.clothesPrint),
      ...(savedSettings.clothesPrint || {})
    }
  };
  normalized.appConfig = normalizeAppConfig(savedSettings.appConfig || normalized.appConfig);
  normalized.superUsers = Array.isArray(normalized.superUsers) && normalized.superUsers.length > 0
    ? normalized.superUsers.map((user) => ({
      firstName: user.firstName || "super",
      lastName: user.lastName || "user",
      role: "superadmin",
      login: user.login || "super",
      password: user.password || "user"
    }))
    : structuredClone(defaults.superUsers);
  const legacySuperUsers = Array.isArray(normalized.users)
    ? normalized.users.filter((user) => user.role === "superadmin")
    : [];
  legacySuperUsers.forEach((user) => {
    if (!normalized.superUsers.some((superUser) => superUser.login === user.login)) {
      normalized.superUsers.push({
        firstName: user.firstName || "super",
        lastName: user.lastName || "user",
        role: "superadmin",
        login: user.login || "super",
        password: user.password || "user"
      });
    }
  });

  normalized.digitalPrint.extraWorks = normalized.digitalPrint.extraWorks.map((work) => ({
    name: work.name || "Untitled",
    percent: Number(work.percent) || 0
  }));
  normalized.digitalPrint.clickPrices = normalized.digitalPrint.clickPrices.map((click) => ({
    click40: Number(click.click40 ?? click.price) || 0,
    click44: Number(click.click44) || 0
  }));
  normalized.digitalPrint.standardProducts = normalized.digitalPrint.standardProducts.map((product) => {
    const basePrice = Number(product.basePrice) || 0;
    const quantity = Number(product.quantity) || 1;
    const sourceTiers = Array.isArray(product.priceTiers) && product.priceTiers.length > 0
      ? product.priceTiers
      : [{ from: 1, to: quantity, type: "price", value: basePrice }];

    return {
      category: product.category || DIGITAL_CATEGORY,
      name: product.name || "Untitled",
      basePrice,
      quantity,
      priceTiers: sourceTiers.map((tier) => ({
        from: Number(tier.from) || 1,
        to: Number(tier.to) || 1,
        type: tier.type === "discount" ? "discount" : "price",
        value: Number(tier.value) || 0
      }))
    };
  });
  normalized.digitalPrint.materials = normalized.digitalPrint.materials.map((material) => ({
    type: MATERIAL_TYPES.includes(material.type) ? material.type : MATERIAL_TYPES[0],
    name: material.name === "Untitled" && !Number(material.sr3Price) ? "" : material.name ?? "",
    sr3Price: Number(material.sr3Price) || 0
  }));
  normalized.digitalPrint.quantityFormulas = normalized.digitalPrint.quantityFormulas.map((row) => ({
    from: Number(row.from) || 1,
    to: Number(row.to) || 1,
    formula: row.formula || ""
  }));
  normalized.digitalPrint.cuttingCoefficients = normalized.digitalPrint.cuttingCoefficients.map((row) => ({
    from: Number(row.from) || 1,
    to: Number(row.to) || 1,
    percent: Number(row.percent) || 0
  }));
  normalized.digitalPrint.clientTypes = {
    ...structuredClone(defaults.digitalPrint.clientTypes),
    ...(normalized.digitalPrint.clientTypes || {})
  };
  normalized.digitalPrint.clientTypes.b2bPercent = Number(normalized.digitalPrint.clientTypes.b2bPercent) || 0;
  normalized.digitalPrint.clientTypes.b2cPercent = Number(normalized.digitalPrint.clientTypes.b2cPercent) || 0;
  normalized.digitalPrint.minimumOrder = {
    ...structuredClone(defaults.digitalPrint.minimumOrder),
    ...(normalized.digitalPrint.minimumOrder || {})
  };
  normalized.digitalPrint.minimumOrder.price = Number(normalized.digitalPrint.minimumOrder.price) || 0;
  normalized.widePrint.rollStandardProducts = normalized.widePrint.rollStandardProducts.map((product) => ({
    category: product.category || WIDE_CATEGORY,
    name: product.name || "Untitled",
    basePrice: Number(product.basePrice) || 0,
    quantity: Number(product.quantity) || 1
  }));
  normalized.widePrint.rollMaterials = normalized.widePrint.rollMaterials.map((material) => ({
    name: material.name || "",
    price: Number(material.price) || 0
  }));
  normalized.widePrint.rollInk = {
    price: Number(normalized.widePrint.rollInk?.price) || 0
  };
  normalized.widePrint.rollFormulas = normalized.widePrint.rollFormulas.map((row) => ({
    from: Number(row.from) || 1,
    to: Number(row.to) || 1,
    formula: row.formula || ""
  }));
  normalized.widePrint.rollExtraWorks = normalized.widePrint.rollExtraWorks.map((work) => ({
    name: work.name || "",
    percent: Number(work.percent) || 0
  }));
  normalized.widePrint.rollClientTypes = {
    ...structuredClone(defaults.widePrint.rollClientTypes),
    ...(normalized.widePrint.rollClientTypes || {})
  };
  normalized.widePrint.rollClientTypes.b2bPercent = Number(normalized.widePrint.rollClientTypes.b2bPercent) || 0;
  normalized.widePrint.rollClientTypes.b2cPercent = Number(normalized.widePrint.rollClientTypes.b2cPercent) || 0;
  normalized.widePrint.rollMinimumOrder = {
    ...structuredClone(defaults.widePrint.rollMinimumOrder),
    ...(normalized.widePrint.rollMinimumOrder || {})
  };
  normalized.widePrint.rollMinimumOrder.price = Number(normalized.widePrint.rollMinimumOrder.price) || 0;
  normalized.clothesPrint.standardProducts = normalized.clothesPrint.standardProducts.map((product) => ({
    category: product.category || CLOTHES_CATEGORY,
    name: product.name || "Untitled",
    basePrice: Number(product.basePrice) || 0,
    quantity: Number(product.quantity) || 1
  }));
  normalized.clothesPrint.quantityFormulas = normalized.clothesPrint.quantityFormulas.map((row) => ({
    from: Number(row.from) || 1,
    to: Number(row.to) || 1,
    formula: row.formula || ""
  }));
  normalized.clothesPrint.carrierTypes = normalized.clothesPrint.carrierTypes.map((carrier) => ({
    name: carrier.name || "",
    price: Number(carrier.price) || 0
  }));
  normalized.clothesPrint.extraWorks = normalized.clothesPrint.extraWorks.map((work) => ({
    name: work.name || "",
    percent: Number(work.percent) || 0
  }));
  normalized.clothesPrint.clientTypes = {
    ...structuredClone(defaults.clothesPrint.clientTypes),
    ...(normalized.clothesPrint.clientTypes || {})
  };
  normalized.clothesPrint.clientTypes.b2bPercent = Number(normalized.clothesPrint.clientTypes.b2bPercent) || 0;
  normalized.clothesPrint.clientTypes.b2cPercent = Number(normalized.clothesPrint.clientTypes.b2cPercent) || 0;
  normalized.access = {
    ...structuredClone(defaults.access),
    ...(normalized.access || {})
  };
  normalized.access.roles = Array.isArray(normalized.access.roles) && normalized.access.roles.length > 0
    ? normalized.access.roles.map((role) => ({
      id: role.id || "user",
      label: role.label || "Пользователь"
    }))
    : structuredClone(defaults.access.roles);
  if (!normalized.access.roles.some((role) => role.id === "superadmin")) {
    normalized.access.roles.unshift({ id: "superadmin", label: "Суперпользователь" });
  }
  if (!normalized.access.roles.some((role) => role.id === "admin")) {
    normalized.access.roles.unshift({ id: "admin", label: "Администратор" });
  }
  const validRoleIds = new Set(normalized.access.roles.map((role) => role.id));
  const defaultPermissions = createDefaultAccessPermissions();
  normalized.access.permissions = {
    ...structuredClone(defaultPermissions),
    ...(normalized.access.permissions || {})
  };
  normalized.access.roles.forEach((role) => {
    normalized.access.permissions[role.id] = {
      ...createAllPermissions(false),
      ...(defaultPermissions[role.id] || {}),
      ...(normalized.access.permissions[role.id] || {})
    };
  });
  normalized.access.permissions.superadmin = createAllPermissions(true);
  normalized.access.permissions.admin = createAllPermissions(true);
  const normalizedUsersSource = (Array.isArray(normalized.users) ? normalized.users : defaults.users)
    .filter((user) => user.role !== "superadmin");
  normalized.users = normalizedUsersSource.map((user, index) => {
    const firstName = user.firstName || "";
    const lastName = user.lastName || "";
    const isDefaultAdmin = normalizedUsersSource.length === 1 && index === 0;

    return {
      firstName,
      lastName,
      role: isDefaultAdmin
        ? "admin"
        : validRoleIds.has(user.role) ? user.role : "user",
      login: user.login || "",
      password: user.password || ""
    };
  });
  if (normalized.users.length === 0) {
    normalized.users = [];
  }
  const normalizedClientsSource = Array.isArray(normalized.clients) ? normalized.clients : [];
  normalized.clients = normalizedClientsSource.map((client, index) => ({
    clientNumber: client.clientNumber || client.id || String(index + 1).padStart(5, "0"),
    name: client.name || client.legalName || "",
    type: client.type === "natural" ? "natural" : "legal",
    address: client.address || "",
    emails: Array.isArray(client.emails) ? client.emails : [client.email].filter(Boolean),
    contactPersons: Array.isArray(client.contactPersons) ? client.contactPersons : [client.contactPerson].filter(Boolean),
    phones: Array.isArray(client.phones) ? client.phones : [client.phone].filter(Boolean),
    registrationNumber: client.registrationNumber || "",
    vatNumber: client.vatNumber || ""
  }));
  normalized.userPreferences = normalizeUserPreferences(normalized.userPreferences || {}, normalized.users);

  return normalized;
}

async function saveSettingsToServer(nextSettings) {
  for (const apiUrl of SETTINGS_API_URLS) {
    try {
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(nextSettings)
      });
      if (response.ok) {
        return;
      }
    } catch {
      // Try the next API URL.
    }
  }
}

function saveSettings() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  saveSettingsToServer(settings);
}

function formatCurrency(value) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "EUR"
  }).format(value);
}

function formatPreciseCurrency(value) {
  const number = new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 5
  }).format(Number(value) || 0);

  return `${number} €`;
}

function formatNumber(value) {
  return new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3
  }).format(Number(value) || 0);
}

function showDashboard() {
  loginView.classList.add("is-hidden");
  dashboardView.classList.remove("is-hidden");
  applyCurrentUserPreferences();
  applySavedTopTabOrder();
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.draggable = true;
  });
  updateTopbarUser();
  renderAll();
}

function showLogin() {
  dashboardView.classList.add("is-hidden");
  loginView.classList.remove("is-hidden");
  loginForm.querySelectorAll("input, button").forEach((element) => {
    element.disabled = false;
  });
}

function showDatabaseLoadError(error) {
  dashboardView.classList.add("is-hidden");
  loginView.classList.remove("is-hidden");
  loginError.textContent = `Ошибка загрузки базы данных. Проверьте доступ к data/system.json, data/users.json, data/clients.json, data/pricing.json и data/user-preferences.json. ${error.message || ""}`.trim();
  loginForm.querySelectorAll("input, button").forEach((element) => {
    element.disabled = true;
  });
}

function getCurrentUser() {
  const login = sessionStorage.getItem(CURRENT_USER_STORAGE_KEY);
  return settings.superUsers.find((user) => user.login === login)
    || settings.users.find((user) => user.login === login)
    || settings.superUsers[0]
    || settings.users[0]
    || defaults.superUsers[0];
}

function getAccessRoles() {
  return Array.isArray(settings.access?.roles) && settings.access.roles.length > 0
    ? settings.access.roles
    : USER_ROLES;
}

function getTenantAccessRoles() {
  return getAccessRoles().filter((role) => role.id !== "superadmin");
}

function getRoleById(roleId) {
  return getAccessRoles().find((role) => role.id === roleId) || getAccessRoles()[0] || USER_ROLES[0];
}

function getCurrentUserPermissions() {
  const user = getCurrentUser();
  if (user.role === "superadmin" || user.role === "admin") {
    return createAllPermissions(true);
  }

  return {
    ...createAllPermissions(false),
    ...(settings.access?.permissions?.[user.role] || {})
  };
}

function hasPermission(key) {
  return Boolean(getCurrentUserPermissions()[key]);
}

function isCurrentUserAdmin() {
  return getCurrentUser().role === "superadmin" || getCurrentUser().role === "admin";
}

function isCurrentUserSuperAdmin() {
  return getCurrentUser().role === "superadmin";
}

function isCurrentUserSeller() {
  return getCurrentUser().role === "seller";
}

function canCurrentUserAccessClients() {
  return hasPermission("clients");
}

function isAppBlockEnabled(key) {
  return settings.appConfig?.enabledBlocks?.[key] !== false;
}

function getEnabledLanguages() {
  const languages = SUPPORTED_LANGUAGES.filter((language) => settings.appConfig?.enabledLanguages?.[language] !== false);
  return languages.length > 0 ? languages : ["ru"];
}

function canAccessTopLevelTab(tabName) {
  if (tabName === "appSettings") return isCurrentUserSuperAdmin();
  if (!isAppBlockEnabled(`top.${tabName}`)) return false;
  if (tabName === "order") return hasPermission("order");
  if (tabName === "clients") return hasPermission("clients");
  if (tabName === "settings") return hasPermission("settings");
  if (tabName === "users") return hasPermission("users");
  return true;
}

function getDefaultUserPreference() {
  return {
    language: "en",
    theme: "light",
    topTabOrder: DEFAULT_TOP_TAB_ORDER,
    clientsTable: {
      visibleColumns: CLIENT_COLUMNS.map((column) => column.key),
      sort: { key: "name", direction: "asc" }
    }
  };
}

function normalizeUserPreferences(preferences, users = []) {
  const normalized = {};
  users.forEach((user) => {
    const login = user.login || "";
    if (!login) {
      return;
    }

    const source = preferences[login] || {};
    const defaults = getDefaultUserPreference();
    normalized[login] = {
      ...defaults,
      ...source,
      language: SUPPORTED_LANGUAGES.includes(source.language) ? source.language : defaults.language,
      theme: ["light", "dark", "system"].includes(source.theme) ? source.theme : defaults.theme,
      topTabOrder: Array.isArray(source.topTabOrder) && source.topTabOrder.length > 0 ? source.topTabOrder : defaults.topTabOrder,
      clientsTable: {
        ...defaults.clientsTable,
        ...(source.clientsTable || {}),
        visibleColumns: Array.isArray(source.clientsTable?.visibleColumns) && source.clientsTable.visibleColumns.length > 0
          ? source.clientsTable.visibleColumns
          : defaults.clientsTable.visibleColumns,
        sort: {
          ...defaults.clientsTable.sort,
          ...(source.clientsTable?.sort || {})
        }
      }
    };
  });

  return normalized;
}

function getCurrentUserLogin() {
  return sessionStorage.getItem(CURRENT_USER_STORAGE_KEY) || getCurrentUser().login || "";
}

function getCurrentUserPreference() {
  const login = getCurrentUserLogin();
  if (!settings.userPreferences[login]) {
    settings.userPreferences[login] = getDefaultUserPreference();
  }

  return settings.userPreferences[login];
}

function saveCurrentUserPreference() {
  saveSettings();
}

function applyCurrentUserPreferences() {
  const preferences = getCurrentUserPreference();
  const enabledLanguages = getEnabledLanguages();
  currentLanguage = enabledLanguages.includes(preferences.language) ? preferences.language : enabledLanguages[0];
  applyTheme(preferences.theme);
  clientSort = {
    key: preferences.clientsTable?.sort?.key || "name",
    direction: preferences.clientsTable?.sort?.direction === "desc" ? "desc" : "asc"
  };
}

function applyTheme(theme) {
  const normalizedTheme = ["light", "dark", "system"].includes(theme) ? theme : "light";
  document.documentElement.dataset.theme = normalizedTheme;
}

function toggleSidebarCollapsed() {
  dashboardView.classList.toggle("is-sidebar-collapsed");
}

function openMobileSidebar() {
  dashboardView.classList.add("is-mobile-sidebar-open");
  mobileSidebarBackdrop?.classList.remove("is-hidden");
}

function closeMobileSidebar() {
  dashboardView.classList.remove("is-mobile-sidebar-open");
  mobileSidebarBackdrop?.classList.add("is-hidden");
}

function getDefaultTopTabOrder() {
  const availableTabs = Array.from(document.querySelectorAll(".tab-button")).map((button) => button.dataset.tab);
  return [
    ...DEFAULT_TOP_TAB_ORDER.filter((tabName) => availableTabs.includes(tabName)),
    ...availableTabs.filter((tabName) => !DEFAULT_TOP_TAB_ORDER.includes(tabName))
  ];
}

function getSavedTopTabOrder() {
  const saved = getCurrentUserPreference().topTabOrder || [];
  const defaultOrder = getDefaultTopTabOrder();
  const savedHasCurrentCrmTabs = DEFAULT_TOP_TAB_ORDER.every((tabName) => saved.includes(tabName));
  if (!savedHasCurrentCrmTabs) {
    getCurrentUserPreference().topTabOrder = defaultOrder;
    saveCurrentUserPreference();
    return defaultOrder;
  }
  const savedValidTabs = Array.isArray(saved) ? saved.filter((tabName) => defaultOrder.includes(tabName)) : [];
  return [...savedValidTabs, ...defaultOrder.filter((tabName) => !savedValidTabs.includes(tabName))];
}

function saveTopTabOrder() {
  const order = Array.from(document.querySelectorAll(".tab-button")).map((button) => button.dataset.tab);
  getCurrentUserPreference().topTabOrder = order;
  saveCurrentUserPreference();
}

function applySavedTopTabOrder() {
  const tabsContainer = document.querySelector(".tabs");
  if (!tabsContainer) {
    return;
  }

  const buttonsByTab = Object.fromEntries(
    Array.from(tabsContainer.querySelectorAll(".tab-button")).map((button) => [button.dataset.tab, button])
  );

  getSavedTopTabOrder().forEach((tabName) => {
    if (buttonsByTab[tabName]) {
      tabsContainer.appendChild(buttonsByTab[tabName]);
    }
  });
}

function moveTopTab(fromTab, toTab) {
  if (!fromTab || !toTab || fromTab === toTab) {
    return false;
  }

  const tabsContainer = document.querySelector(".tabs");
  const fromButton = tabsContainer?.querySelector(`.tab-button[data-tab="${fromTab}"]`);
  const toButton = tabsContainer?.querySelector(`.tab-button[data-tab="${toTab}"]`);
  if (!tabsContainer || !fromButton || !toButton) {
    return false;
  }

  const buttons = Array.from(tabsContainer.querySelectorAll(".tab-button"));
  const fromIndex = buttons.indexOf(fromButton);
  const toIndex = buttons.indexOf(toButton);
  const nextButton = fromIndex < toIndex ? toButton.nextElementSibling : toButton;
  tabsContainer.insertBefore(fromButton, nextButton);
  saveTopTabOrder();
  return true;
}

function activateTopLevelTab(tabName) {
  document.querySelectorAll(".tab-button").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.tab === tabName);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.add("is-hidden");
  });
  document.querySelector(`#${tabName}Panel`)?.classList.remove("is-hidden");
}

function findLoginUser(login, password) {
  return [...settings.superUsers, ...settings.users].find((item) => item.login === login && item.password === password);
}

function updateTopbarUser() {
  const user = getCurrentUser();
  const role = getRoleById(user.role);
  const name = [user.firstName, user.lastName]
    .map((part) => String(part || "").trim())
    .filter(Boolean)
    .join(" ");

  topbarUserRole.textContent = role.label;
  topbarUserName.textContent = name || user.login || "PrintCalc";
}

function applyRoleAccess() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    const canAccess = canAccessTopLevelTab(button.dataset.tab);
    button.classList.toggle("is-hidden", !canAccess);
    button.toggleAttribute("aria-hidden", !canAccess);
  });

  const activeTab = document.querySelector(".tab-button.is-active");
  if (activeTab && !canAccessTopLevelTab(activeTab.dataset.tab)) {
    const fallbackTab = DEFAULT_TOP_TAB_ORDER.find((tabName) => canAccessTopLevelTab(tabName)) || "dashboard";
    activateTopLevelTab(fallbackTab);
  }
}

function renderAll() {
  updateTopbarUser();
  applyRoleAccess();
  renderCategoryTabs();
  renderDigitalSettingsTabs();
  renderWideSettingsTabs();
  renderClothesSettingsTabs();
  renderUserAdminTabs();
  renderRolesTable();
  renderPermissions();
  renderAppSettings();
  renderClients();
  renderUsersTable();
  renderSelectors();
  renderTables();
  renderOrderLayout();
  calculateOrder();
  applyLanguage();
}

function renderUserAdminTabs() {
  if (!userAdminTabs) {
    return;
  }

  userAdminTabs.innerHTML = USER_ADMIN_TABS.map((tab) => `
    <button
      type="button"
      class="subtab-button${tab.id === activeUserAdminTab ? " is-active" : ""}"
      data-user-admin-subtab="${tab.id}"
    >${tab.label}</button>
  `).join("");

  document.querySelectorAll("[data-user-admin-panel]").forEach((panel) => {
    panel.classList.toggle("is-hidden", panel.dataset.userAdminPanel !== activeUserAdminTab);
  });
}

function renderCategoryTabs() {
  const tabs = DEPARTMENTS.map((department) => `
    <button
      type="button"
      class="category-tab-button${department.label === activeDepartment ? " is-active" : ""}"
      data-category-tab="${department.label}"
    >${department.label}</button>
  `).join("");

  orderCategoryTabs.innerHTML = tabs;
  settingsCategoryTabs.innerHTML = tabs;
}

function renderDigitalSettingsTabs() {
  const allowedTabs = DIGITAL_SETTINGS_TABS.filter((tab) => hasPermission(`settings.digital.${tab.id}`) && isAppBlockEnabled(`settings.digital.${tab.id}`));
  if (!allowedTabs.some((tab) => tab.id === activeDigitalSettingsTab)) {
    activeDigitalSettingsTab = allowedTabs[0]?.id || DIGITAL_SETTINGS_TABS[0].id;
  }

  digitalSettingsTabs.innerHTML = allowedTabs.map((tab) => `
    <button
      type="button"
      class="subtab-button${tab.id === activeDigitalSettingsTab ? " is-active" : ""}"
      data-digital-subtab="${tab.id}"
    >${tab.label}</button>
  `).join("");

  document.querySelectorAll("[data-digital-panel]").forEach((panel) => {
    panel.classList.toggle("is-hidden", panel.dataset.digitalPanel !== activeDigitalSettingsTab || !hasPermission(`settings.digital.${panel.dataset.digitalPanel}`) || !isAppBlockEnabled(`settings.digital.${panel.dataset.digitalPanel}`));
  });
}

function renderWideSettingsTabs() {
  const allowedTabs = WIDE_ROLL_SETTINGS_TABS.filter((tab) => hasPermission(`settings.wide.${tab.id}`) && isAppBlockEnabled(`settings.wide.${tab.id}`));
  if (!allowedTabs.some((tab) => tab.id === activeWideSettingsTab)) {
    activeWideSettingsTab = allowedTabs[0]?.id || WIDE_ROLL_SETTINGS_TABS[0].id;
  }

  wideSettingsTabs.innerHTML = allowedTabs.map((tab) => `
    <button
      type="button"
      class="subtab-button${tab.id === activeWideSettingsTab ? " is-active" : ""}"
      data-wide-subtab="${tab.id}"
    >${tab.label}</button>
  `).join("");

  document.querySelectorAll("[data-wide-panel]").forEach((panel) => {
    panel.classList.toggle("is-hidden", panel.dataset.widePanel !== activeWideSettingsTab || !hasPermission(`settings.wide.${panel.dataset.widePanel}`) || !isAppBlockEnabled(`settings.wide.${panel.dataset.widePanel}`));
  });
}

function renderClothesSettingsTabs() {
  const allowedTabs = CLOTHES_SETTINGS_TABS.filter((tab) => hasPermission(`settings.clothes.${tab.id}`) && isAppBlockEnabled(`settings.clothes.${tab.id}`));
  if (!allowedTabs.some((tab) => tab.id === activeClothesSettingsTab)) {
    activeClothesSettingsTab = allowedTabs[0]?.id || CLOTHES_SETTINGS_TABS[0].id;
  }

  clothesSettingsTabs.innerHTML = allowedTabs.map((tab) => `
    <button
      type="button"
      class="subtab-button${tab.id === activeClothesSettingsTab ? " is-active" : ""}"
      data-clothes-subtab="${tab.id}"
    >${tab.label}</button>
  `).join("");

  document.querySelectorAll("[data-clothes-panel]").forEach((panel) => {
    panel.classList.toggle("is-hidden", panel.dataset.clothesPanel !== activeClothesSettingsTab || !hasPermission(`settings.clothes.${panel.dataset.clothesPanel}`) || !isAppBlockEnabled(`settings.clothes.${panel.dataset.clothesPanel}`));
  });
}

function renderSelectors() {
  const currentCategory = categorySelect.value;
  categorySelect.innerHTML = DEPARTMENTS
    .map((department) => `<option value="${department.label}">${department.label}</option>`)
    .join("");
  categorySelect.value = DEPARTMENTS.some((department) => department.label === currentCategory)
    ? currentCategory
    : activeDepartment;

  renderProductOptions();

  materialSelect.innerHTML = settings.materials
    .map((material) => `<option value="${material.id}">${material.name} - ${formatCurrency(material.price)} / ${material.unit}</option>`)
    .join("");

  finishSelect.innerHTML = settings.finishes
    .map((finish) => `<option value="${finish.id}">${finish.name} - ${formatCurrency(finish.price)} / ${finish.type}</option>`)
    .join("");

  renderDigitalOrderSelectors();
  renderWideOrderSelectors();
  renderClothesOrderSelectors();
}

function renderDigitalOrderSelectors() {
  const currentStandardProduct = digitalStandardProductSelect.value;
  const standardProducts = settings.digitalPrint.standardProducts
    .map((product, index) => ({ product, index }))
    .filter(({ product }) => String(product.name || "").trim());

  digitalStandardProductSelect.innerHTML = standardProducts.length > 0
    ? standardProducts
      .map(({ product, index }) => `<option value="${index}">${product.name}</option>`)
      .join("")
    : '<option value="">Нет стандартных продуктов</option>';
  digitalStandardProductSelect.insertAdjacentHTML("afterbegin", '<option value="">Выберите продукт</option>');
  digitalStandardProductSelect.value = standardProducts.some(({ index }) => String(index) === currentStandardProduct)
    ? currentStandardProduct
    : "";

  const currentType = digitalOrderMaterialTypeSelect.value;

  digitalOrderMaterialTypeSelect.innerHTML = MATERIAL_TYPES
    .map((type) => `<option value="${type}">${type}</option>`)
    .join("");
  digitalOrderMaterialTypeSelect.insertAdjacentHTML("afterbegin", '<option value="">Выберите тип материала</option>');
  digitalOrderMaterialTypeSelect.value = MATERIAL_TYPES.includes(currentType) ? currentType : "";

  const selectedType = digitalOrderMaterialTypeSelect.value;
  const materials = settings.digitalPrint.materials
    .map((material, index) => ({ material, index }))
    .filter(({ material }) => material.type === selectedType);

  digitalOrderMaterialSelect.innerHTML = materials.length > 0
    ? materials
      .map(({ material, index }) => `<option value="${index}">${material.name} - ${formatPreciseCurrency(material.sr3Price)} / SRA3</option>`)
      .join("")
    : '<option value="">Нет материалов этого типа</option>';
  digitalOrderMaterialSelect.insertAdjacentHTML("afterbegin", '<option value="">Выберите материал</option>');
  digitalOrderMaterialSelect.value = "";

  digitalOrderExtraWorks.innerHTML = settings.digitalPrint.extraWorks
    .map((work, index) => `
      <label class="check-option">
        <input type="checkbox" value="${index}" data-digital-order-work>
        ${work.name} +${work.percent || 0}%
      </label>
    `)
    .join("");
}

function renderWideOrderSelectors() {
  const currentMaterial = wideOrderMaterialSelect.value;
  const materials = settings.widePrint.rollMaterials
    .map((material, index) => ({ material, index }))
    .filter(({ material }) => String(material.name || "").trim());

  const materialOptions = materials.length > 0
    ? materials
      .map(({ material, index }) => `<option value="${index}">${material.name} - ${formatPreciseCurrency(material.price)} / м²</option>`)
      .join("")
    : '<option value="">Нет материалов</option>';
  wideOrderMaterialSelect.innerHTML = `${materialOptions}<option value="${CUSTOM_WIDE_MATERIAL_VALUE}">Кастомный материал</option>`;
  wideOrderMaterialSelect.insertAdjacentHTML("afterbegin", '<option value="">Выберите материал</option>');
  wideOrderMaterialSelect.value = materials.some(({ index }) => String(index) === currentMaterial) || currentMaterial === CUSTOM_WIDE_MATERIAL_VALUE
    ? currentMaterial
    : "";
  updateWideCustomMaterialField();

  wideOrderExtraWorks.innerHTML = settings.widePrint.rollExtraWorks
    .map((work, index) => ` 
      <label class="check-option">
        <input type="checkbox" value="${index}" data-wide-order-work>
        ${work.name || "Untitled"} +${work.percent || 0}%
      </label>
    `)
    .join("");
}

function renderClothesOrderSelectors() {
  const currentCarrier = clothesCarrierSelect.value;
  const carriers = settings.clothesPrint.carrierTypes
    .map((carrier, index) => ({ carrier, index }))
    .filter(({ carrier }) => String(carrier.name || "").trim());

  clothesCarrierSelect.innerHTML = [
    '<option value="">Выберите носитель</option>',
    '<option value="custom">Нестандартный носитель / одежда клиента</option>',
    ...(carriers.length > 0
      ? carriers
      .map(({ carrier, index }) => `<option value="${index}">${carrier.name} - ${formatPreciseCurrency(carrier.price)} / шт</option>`)
      : [])
  ].join("");
  clothesCarrierSelect.value = currentCarrier === "custom" || carriers.some(({ index }) => String(index) === currentCarrier) ? currentCarrier : "";
  updateClothesCustomCarrierPriceVisibility();

  clothesOrderExtraWorks.innerHTML = settings.clothesPrint.extraWorks
    .map((work, index) => `
      <label class="check-option">
        <input type="checkbox" value="${index}" data-clothes-order-work>
        ${work.name || "Untitled"} +${work.percent || 0}%
      </label>
    `)
    .join("");
}

function updateClothesCustomCarrierPriceVisibility() {
  clothesCustomCarrierPriceWrap.classList.toggle("is-hidden", clothesCarrierSelect.value !== "custom");
}

function renderOrderLayout() {
  const isDigital = activeDepartment === DIGITAL_CATEGORY;
  const isWide = activeDepartment === WIDE_CATEGORY;
  const isClothes = activeDepartment === CLOTHES_CATEGORY;

  digitalOrderForm.classList.toggle("is-hidden", !isDigital);
  wideOrderForm.classList.toggle("is-hidden", !isWide);
  clothesOrderForm.classList.toggle("is-hidden", !isClothes);
  wideRollOrderFields.classList.toggle("is-hidden", isWide && !wideRollPrintMode.checked);
  genericOrderForm.classList.toggle("is-hidden", isDigital || isWide || isClothes);
  digitalCostFields.classList.toggle("is-hidden", isDigital && !digitalCostMode.checked);
  digitalStandardFields.classList.toggle("is-hidden", isDigital && !digitalStandardMode.checked);
  clothesCostFields.classList.toggle("is-hidden", isClothes && !clothesCostMode.checked);
}

function renderProductOptions() {
  const selectedCategory = categorySelect.value;
  const products = settings.products.filter((product) => product.category === selectedCategory);

  if (products.length === 0) {
    productSelect.innerHTML = '<option value="">Раздел пока не наполнен</option>';
    productSelect.disabled = true;
    return;
  }

  productSelect.disabled = false;
  productSelect.innerHTML = products
    .map((product) => `<option value="${product.id}">${product.name}</option>`)
    .join("");
}

function renderTables() {
  if (activeDepartment === DIGITAL_CATEGORY) {
    digitalSettings.classList.remove("is-hidden");
    wideSettings.classList.add("is-hidden");
    clothesSettings.classList.add("is-hidden");
    genericSettings.classList.add("is-hidden");
    renderDigitalTables();
    return;
  }

  if (activeDepartment === WIDE_CATEGORY) {
    digitalSettings.classList.add("is-hidden");
    wideSettings.classList.remove("is-hidden");
    clothesSettings.classList.add("is-hidden");
    genericSettings.classList.add("is-hidden");
    renderWideTables();
    return;
  }

  if (activeDepartment === CLOTHES_CATEGORY) {
    digitalSettings.classList.add("is-hidden");
    wideSettings.classList.add("is-hidden");
    clothesSettings.classList.remove("is-hidden");
    genericSettings.classList.add("is-hidden");
    renderClothesTables();
    return;
  }

  digitalSettings.classList.add("is-hidden");
  wideSettings.classList.add("is-hidden");
  clothesSettings.classList.add("is-hidden");
  genericSettings.classList.remove("is-hidden");
  productsSectionTitle.textContent = activeDepartment;
  productsSectionHint.textContent = "Продукты, базовые ставки, наценка и минимум для выбранной подкладки.";

  const departmentProducts = settings.products
    .map((product, index) => ({ product, index }))
    .filter((item) => item.product.category === activeDepartment);

  document.querySelector("#productsTable").innerHTML = departmentProducts.length > 0
    ? departmentProducts.map(({ product, index }) => `
    <tr>
      <td><input data-list="products" data-index="${index}" data-field="category" value="${product.category}"></td>
      <td><input data-list="products" data-index="${index}" data-field="name" value="${product.name}"></td>
      <td><input type="number" min="0" step="0.01" data-list="products" data-index="${index}" data-field="base" value="${product.base}"></td>
      <td><input type="number" min="1" step="0.01" data-list="products" data-index="${index}" data-field="margin" value="${product.margin}"></td>
      <td><input type="number" min="0" step="0.01" data-list="products" data-index="${index}" data-field="minimum" value="${product.minimum}"></td>
    </tr>
  `).join("")
    : '<tr><td colspan="5">Эта подкладка пока пустая. Позже добавим сюда продукты, формулы и коэффициенты.</td></tr>';

  document.querySelector("#materialsTable").innerHTML = settings.materials.map((material, index) => `
    <tr>
      <td><input data-list="materials" data-index="${index}" data-field="name" value="${material.name}"></td>
      <td><input type="number" min="0" step="0.01" data-list="materials" data-index="${index}" data-field="price" value="${material.price}"></td>
      <td><input data-list="materials" data-index="${index}" data-field="unit" value="${material.unit}"></td>
    </tr>
  `).join("");

  document.querySelector("#finishesTable").innerHTML = settings.finishes.map((finish, index) => `
    <tr>
      <td><input data-list="finishes" data-index="${index}" data-field="name" value="${finish.name}"></td>
      <td><input type="number" min="0" step="0.01" data-list="finishes" data-index="${index}" data-field="price" value="${finish.price}"></td>
      <td><input data-list="finishes" data-index="${index}" data-field="type" value="${finish.type}"></td>
    </tr>
  `).join("");
}

function renderWideTables() {
  wideRollSettings.classList.toggle("is-hidden", !wideSettingsRollMode.checked);
  wideSheetSettings.classList.toggle("is-hidden", !wideSettingsSheetMode.checked);
  renderWideSettingsTabs();

  document.querySelector("#wideRollStandardProductsTable").innerHTML = settings.widePrint.rollStandardProducts
    .map((product, index) => ({ product, index }))
    .filter(({ index }) => !isPendingWideDeleted("rollStandardProducts", index))
    .map(({ product, index }) => `
      <tr draggable="true" data-wide-row-list="rollStandardProducts" data-index="${index}">
        <td class="row-drag-cell">${wideDragHandle("rollStandardProducts", index)}</td>
        <td><input data-wide-list="rollStandardProducts" data-index="${index}" data-field="category" value="${product.category}"></td>
        <td><input data-wide-list="rollStandardProducts" data-index="${index}" data-field="name" value="${product.name}"></td>
        <td><input type="number" min="0" step="0.01" data-wide-list="rollStandardProducts" data-index="${index}" data-field="basePrice" value="${product.basePrice}"></td>
        <td><input type="number" min="1" step="1" data-wide-list="rollStandardProducts" data-index="${index}" data-field="quantity" value="${product.quantity}"></td>
        <td class="row-action-cell">${wideDeleteButton("rollStandardProducts", index)}</td>
      </tr>
    `).join("");

  document.querySelector("#wideRollMaterialsTable").innerHTML = settings.widePrint.rollMaterials
    .map((material, index) => ({ material, index }))
    .filter(({ index }) => !isPendingWideDeleted("rollMaterials", index))
    .map(({ material, index }) => `
      <tr draggable="true" data-wide-row-list="rollMaterials" data-index="${index}">
        <td class="row-drag-cell">${wideDragHandle("rollMaterials", index)}</td>
        <td><input data-wide-list="rollMaterials" data-index="${index}" data-field="name" value="${material.name}"></td>
        <td><input type="number" min="0" step="0.00001" data-wide-list="rollMaterials" data-index="${index}" data-field="price" value="${material.price}"></td>
        <td class="row-action-cell">${wideDeleteButton("rollMaterials", index)}</td>
      </tr>
    `).join("");

  document.querySelector("#wideRollInkTable").innerHTML = `
    <tr>
      <td><input type="number" min="0" step="0.00001" data-wide-ink-price value="${settings.widePrint.rollInk.price}"></td>
    </tr>
  `;

  document.querySelector("#wideRollFormulasTable").innerHTML = settings.widePrint.rollFormulas
    .map((row, index) => ({ row, index }))
    .filter(({ index }) => !isPendingWideDeleted("rollFormulas", index))
    .map(({ row, index }) => `
      <tr draggable="true" data-wide-row-list="rollFormulas" data-index="${index}">
        <td class="row-drag-cell">${wideDragHandle("rollFormulas", index)}</td>
        <td><input type="number" min="0" step="0.01" data-wide-list="rollFormulas" data-index="${index}" data-field="from" value="${row.from}"></td>
        <td><input type="number" min="0" step="0.01" data-wide-list="rollFormulas" data-index="${index}" data-field="to" value="${row.to}"></td>
        <td><input data-wide-list="rollFormulas" data-index="${index}" data-field="formula" value="${row.formula}"></td>
        <td class="row-action-cell">${wideDeleteButton("rollFormulas", index)}</td>
      </tr>
    `).join("");

  document.querySelector("#wideRollExtraWorksTable").innerHTML = settings.widePrint.rollExtraWorks
    .map((work, index) => ({ work, index }))
    .filter(({ index }) => !isPendingWideDeleted("rollExtraWorks", index))
    .map(({ work, index }) => `
      <tr draggable="true" data-wide-row-list="rollExtraWorks" data-index="${index}">
        <td class="row-drag-cell">${wideDragHandle("rollExtraWorks", index)}</td>
        <td><input data-wide-list="rollExtraWorks" data-index="${index}" data-field="name" value="${work.name}"></td>
        <td><input type="number" min="0" step="0.01" data-wide-list="rollExtraWorks" data-index="${index}" data-field="percent" value="${work.percent || 0}"></td>
        <td class="row-action-cell">${wideDeleteButton("rollExtraWorks", index)}</td>
      </tr>
    `).join("");

  document.querySelector("#wideRollClientTypesTable").innerHTML = `
    <tr>
      <td>B2B клиент</td>
      <td><input type="number" min="0" step="0.01" data-wide-client-type="b2bPercent" value="${settings.widePrint.rollClientTypes.b2bPercent}"></td>
    </tr>
    <tr>
      <td>B2C клиент</td>
      <td><input type="number" min="0" step="0.01" data-wide-client-type="b2cPercent" value="${settings.widePrint.rollClientTypes.b2cPercent}"></td>
    </tr>
  `;

  document.querySelector("#wideRollMinimumOrderTable").innerHTML = `
    <tr>
      <td><input type="number" min="0" step="0.01" data-wide-minimum-order value="${settings.widePrint.rollMinimumOrder.price}"></td>
    </tr>
  `;

  updateUndoWideDeleteButtons();
}

function renderClothesTables() {
  renderClothesSettingsTabs();

  document.querySelector("#clothesStandardProductsTable").innerHTML = settings.clothesPrint.standardProducts
    .map((product, index) => ({ product, index }))
    .filter(({ index }) => !isPendingClothesDeleted("standardProducts", index))
    .map(({ product, index }) => `
      <tr draggable="true" data-clothes-row-list="standardProducts" data-index="${index}">
        <td class="row-drag-cell">${clothesDragHandle("standardProducts", index)}</td>
        <td><input data-clothes-list="standardProducts" data-index="${index}" data-field="category" value="${product.category}"></td>
        <td><input data-clothes-list="standardProducts" data-index="${index}" data-field="name" value="${product.name}"></td>
        <td><input type="number" min="0" step="0.01" data-clothes-list="standardProducts" data-index="${index}" data-field="basePrice" value="${product.basePrice}"></td>
        <td><input type="number" min="1" step="1" data-clothes-list="standardProducts" data-index="${index}" data-field="quantity" value="${product.quantity}"></td>
        <td class="row-action-cell">${clothesDeleteButton("standardProducts", index)}</td>
      </tr>
    `).join("");

  document.querySelector("#clothesQuantityFormulasTable").innerHTML = settings.clothesPrint.quantityFormulas
    .map((row, index) => ({ row, index }))
    .filter(({ index }) => !isPendingClothesDeleted("quantityFormulas", index))
    .map(({ row, index }) => `
      <tr draggable="true" data-clothes-row-list="quantityFormulas" data-index="${index}">
        <td class="row-drag-cell">${clothesDragHandle("quantityFormulas", index)}</td>
        <td><input type="number" min="1" step="1" data-clothes-list="quantityFormulas" data-index="${index}" data-field="from" value="${row.from}"></td>
        <td><input type="number" min="1" step="1" data-clothes-list="quantityFormulas" data-index="${index}" data-field="to" value="${row.to}"></td>
        <td><input data-clothes-list="quantityFormulas" data-index="${index}" data-field="formula" value="${row.formula}"></td>
        <td class="row-action-cell">${clothesDeleteButton("quantityFormulas", index)}</td>
      </tr>
    `).join("");

  document.querySelector("#clothesCarrierTypesTable").innerHTML = settings.clothesPrint.carrierTypes
    .map((carrier, index) => ({ carrier, index }))
    .filter(({ index }) => !isPendingClothesDeleted("carrierTypes", index))
    .map(({ carrier, index }) => `
      <tr draggable="true" data-clothes-row-list="carrierTypes" data-index="${index}">
        <td class="row-drag-cell">${clothesDragHandle("carrierTypes", index)}</td>
        <td><input data-clothes-list="carrierTypes" data-index="${index}" data-field="name" value="${carrier.name}"></td>
        <td><input type="number" min="0" step="0.00001" data-clothes-list="carrierTypes" data-index="${index}" data-field="price" value="${carrier.price}"></td>
        <td class="row-action-cell">${clothesDeleteButton("carrierTypes", index)}</td>
      </tr>
    `).join("");

  document.querySelector("#clothesExtraWorksTable").innerHTML = settings.clothesPrint.extraWorks
    .map((work, index) => ({ work, index }))
    .filter(({ index }) => !isPendingClothesDeleted("extraWorks", index))
    .map(({ work, index }) => `
      <tr draggable="true" data-clothes-row-list="extraWorks" data-index="${index}">
        <td class="row-drag-cell">${clothesDragHandle("extraWorks", index)}</td>
        <td><input data-clothes-list="extraWorks" data-index="${index}" data-field="name" value="${work.name}"></td>
        <td><input type="number" min="0" step="0.01" data-clothes-list="extraWorks" data-index="${index}" data-field="percent" value="${work.percent || 0}"></td>
        <td class="row-action-cell">${clothesDeleteButton("extraWorks", index)}</td>
      </tr>
    `).join("");

  document.querySelector("#clothesClientTypesTable").innerHTML = `
    <tr>
      <td>B2B клиент</td>
      <td><input type="number" min="0" step="0.01" data-clothes-client-type="b2bPercent" value="${settings.clothesPrint.clientTypes.b2bPercent}"></td>
    </tr>
    <tr>
      <td>B2C клиент</td>
      <td><input type="number" min="0" step="0.01" data-clothes-client-type="b2cPercent" value="${settings.clothesPrint.clientTypes.b2cPercent}"></td>
    </tr>
  `;

  updateUndoClothesDeleteButtons();
}

function isPendingDeleted(list, index) {
  return pendingDigitalDeletes[list]?.has(index);
}

function hasPendingDeletes() {
  return Object.values(pendingDigitalDeletes).some((items) => items.size > 0);
}

function getDeleteListBySection(section) {
  const listsBySection = {
    standard: "standardProducts",
    materials: "materials",
    works: "extraWorks",
    quantityFormulas: "quantityFormulas",
    cuttingCoefficients: "cuttingCoefficients"
  };

  return listsBySection[section];
}

function getSectionByList(list) {
  const sectionsByList = {
    standardProducts: "standard",
    materials: "materials",
    extraWorks: "works",
    quantityFormulas: "quantityFormulas",
    cuttingCoefficients: "cuttingCoefficients"
  };

  return sectionsByList[list];
}

function getActiveDeleteSection() {
  if (activeDigitalSettingsTab === "standard") {
    return "standard";
  }

  if (activeDigitalSettingsTab === "works") {
    return "works";
  }

  return activeDigitalSettingsTab;
}

function discardPendingDeletesWithWarning() {
  if (!hasPendingDeletes()) {
    return false;
  }

  Object.values(pendingDigitalDeletes).forEach((items) => items.clear());
  renderDigitalTables();
  updateUndoDeleteButtons();
  showSectionError(getActiveDeleteSection(), "Удаление не сохранено. Нажмите «Сохранить», чтобы удалить строку.");
  return true;
}

function applyPendingDeletes(section) {
  const list = getDeleteListBySection(section);

  if (!list || !pendingDigitalDeletes[list]?.size) {
    return;
  }

  settings.digitalPrint[list] = settings.digitalPrint[list].filter((_, index) => {
    return !pendingDigitalDeletes[list].has(index);
  });
  pendingDigitalDeletes[list].clear();
}

function updateUndoDeleteButtons() {
  document.querySelectorAll("[data-undo-digital-delete]").forEach((button) => {
    const list = getDeleteListBySection(button.dataset.undoDigitalDelete);
    const hasPending = Boolean(list && pendingDigitalDeletes[list]?.size);
    button.classList.toggle("is-hidden", !hasPending);
  });
}

function deleteButton(list, index) {
  return `
    <button
      type="button"
      class="delete-row-action"
      data-delete-digital-row="${list}"
      data-index="${index}"
      aria-label="Удалить строку"
      title="Удалить строку"
    >🗑</button>
  `;
}

function dragHandle(list, index) {
  return `
    <button
      type="button"
      class="drag-row-action"
      draggable="true"
      data-drag-digital-row="${list}"
      data-index="${index}"
      aria-label="Перетащить строку"
      title="Перетащить строку"
    >☰</button>
  `;
}

function userDeleteButton(index) {
  return `
    <button
      type="button"
      class="delete-row-action"
      data-delete-user-row
      data-index="${index}"
      aria-label="Удалить пользователя"
      title="Удалить пользователя"
    >🗑</button>
  `;
}

function userDragHandle(index) {
  return `
    <button
      type="button"
      class="drag-row-action"
      draggable="true"
      data-drag-user-row
      data-index="${index}"
      aria-label="Перетащить пользователя"
      title="Перетащить пользователя"
    >☰</button>
  `;
}

function wideDeleteButton(list, index) {
  return `
    <button
      type="button"
      class="delete-row-action"
      data-delete-wide-row="${list}"
      data-index="${index}"
      aria-label="Удалить строку"
      title="Удалить строку"
    >🗑</button>
  `;
}

function wideDragHandle(list, index) {
  return `
    <button
      type="button"
      class="drag-row-action"
      draggable="true"
      data-drag-wide-row="${list}"
      data-index="${index}"
      aria-label="Перетащить строку"
      title="Перетащить строку"
    >☰</button>
  `;
}

function clothesDeleteButton(list, index) {
  return `
    <button
      type="button"
      class="delete-row-action"
      data-delete-clothes-row="${list}"
      data-index="${index}"
      aria-label="Удалить строку"
      title="Удалить строку"
    >🗑</button>
  `;
}

function clothesDragHandle(list, index) {
  return `
    <button
      type="button"
      class="drag-row-action"
      draggable="true"
      data-drag-clothes-row="${list}"
      data-index="${index}"
      aria-label="Перетащить строку"
      title="Перетащить строку"
    >☰</button>
  `;
}

function moveDigitalRow(list, fromIndex, toIndex) {
  const rows = settings.digitalPrint[list];
  if (!rows || fromIndex === toIndex || fromIndex < 0 || toIndex < 0 || fromIndex >= rows.length || toIndex >= rows.length) {
    return false;
  }

  const [row] = rows.splice(fromIndex, 1);
  rows.splice(toIndex, 0, row);
  return true;
}

function moveWideRow(list, fromIndex, toIndex) {
  const rows = settings.widePrint[list];
  if (!rows || fromIndex === toIndex || fromIndex < 0 || toIndex < 0 || fromIndex >= rows.length || toIndex >= rows.length) {
    return false;
  }

  const [row] = rows.splice(fromIndex, 1);
  rows.splice(toIndex, 0, row);
  return true;
}

function moveClothesRow(list, fromIndex, toIndex) {
  const rows = settings.clothesPrint[list];
  if (!rows || fromIndex === toIndex || fromIndex < 0 || toIndex < 0 || fromIndex >= rows.length || toIndex >= rows.length) {
    return false;
  }

  const [row] = rows.splice(fromIndex, 1);
  rows.splice(toIndex, 0, row);
  return true;
}

function isPendingWideDeleted(list, index) {
  return pendingWideDeletes[list]?.has(index);
}

function hasPendingWideDeletes() {
  return Object.values(pendingWideDeletes).some((items) => items.size > 0);
}

function updateUndoWideDeleteButtons() {
  document.querySelectorAll("[data-undo-wide-delete]").forEach((button) => {
    const list = button.dataset.undoWideDelete;
    button.classList.toggle("is-hidden", !pendingWideDeletes[list]?.size);
  });
}

function showWideStatus(section, message, isError = false) {
  const status = document.querySelector(`[data-wide-save-status="${section}"]`);
  if (!status) {
    return;
  }

  status.textContent = message;
  status.classList.toggle("is-error", isError);
}

function discardPendingWideDeletesWithWarning() {
  if (!hasPendingWideDeletes()) {
    return false;
  }

  Object.values(pendingWideDeletes).forEach((items) => items.clear());
  renderWideTables();
  showWideStatus("rollMaterials", "Удаление не сохранено. Нажмите «Сохранить», чтобы удалить строку.", true);
  return true;
}

function applyPendingWideDeletes(section) {
  if (!pendingWideDeletes[section]?.size) {
    return;
  }

  settings.widePrint[section] = settings.widePrint[section].filter((_, index) => !pendingWideDeletes[section].has(index));
  pendingWideDeletes[section].clear();
}

function isPendingClothesDeleted(list, index) {
  return pendingClothesDeletes[list]?.has(index);
}

function hasPendingClothesDeletes() {
  return Object.values(pendingClothesDeletes).some((items) => items.size > 0);
}

function updateUndoClothesDeleteButtons() {
  document.querySelectorAll("[data-undo-clothes-delete]").forEach((button) => {
    const list = button.dataset.undoClothesDelete;
    button.classList.toggle("is-hidden", !pendingClothesDeletes[list]?.size);
  });
}

function showClothesStatus(section, message, isError = false) {
  const status = document.querySelector(`[data-clothes-save-status="${section}"]`);
  if (!status) {
    return;
  }

  status.textContent = message;
  status.classList.toggle("is-error", isError);
}

function discardPendingClothesDeletesWithWarning() {
  if (!hasPendingClothesDeletes()) {
    return false;
  }

  Object.values(pendingClothesDeletes).forEach((items) => items.clear());
  renderClothesTables();
  showClothesStatus(activeClothesSettingsTab, "Удаление не сохранено. Нажмите «Сохранить», чтобы удалить строку.", true);
  return true;
}

function applyPendingClothesDeletes(section) {
  if (!pendingClothesDeletes[section]?.size) {
    return;
  }

  settings.clothesPrint[section] = settings.clothesPrint[section].filter((_, index) => !pendingClothesDeletes[section].has(index));
  pendingClothesDeletes[section].clear();
}

function isPendingUserDeleted(index) {
  return pendingUserDeletes.has(index);
}

function hasPendingUserDeletes() {
  return pendingUserDeletes.size > 0;
}

function updateUndoUserDeleteButton() {
  undoUserDeleteButton.classList.toggle("is-hidden", !hasPendingUserDeletes());
}

function showUsersStatus(message, isError = false) {
  usersSaveStatus.textContent = message;
  usersSaveStatus.classList.toggle("is-error", isError);
}

function showRolesStatus(message, isError = false) {
  rolesSaveStatus.textContent = message;
  rolesSaveStatus.classList.toggle("is-error", isError);
}

function showPermissionsStatus(message, isError = false) {
  permissionsSaveStatus.textContent = message;
  permissionsSaveStatus.classList.toggle("is-error", isError);
}

function createRoleId() {
  return `role_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function roleDeleteButton(role) {
  if (role.id === "superadmin" || role.id === "admin") {
    return "";
  }

  return `
    <button type="button" class="delete-row-action" data-delete-role="${role.id}" title="Удалить строку">
      <span aria-hidden="true">×</span>
    </button>
  `;
}

function renderRolesTable() {
  if (!rolesTable) {
    return;
  }

  rolesTable.innerHTML = getTenantAccessRoles().map((role) => `
    <tr data-role-row="${role.id}">
      <td><input data-role-field="label" data-role-id="${role.id}" value="${escapeHtml(role.label)}"${role.id === "superadmin" || role.id === "admin" ? " readonly" : ""}></td>
      <td class="row-action-cell">${roleDeleteButton(role)}</td>
    </tr>
  `).join("");
}

function validateRoles() {
  if (!getTenantAccessRoles().some((role) => role.id === "admin")) {
    showRolesStatus("В приложении должна остаться категория администратора.", true);
    return false;
  }

  if (getTenantAccessRoles().some((role) => !String(role.label || "").trim())) {
    showRolesStatus("Заполните название каждой категории.", true);
    return false;
  }

  return true;
}

function renderPermissions() {
  if (!permissionsGrid) {
    return;
  }

  const definitions = getAccessPermissionDefinitions();
  const groupedDefinitions = definitions.reduce((groups, definition) => {
    groups[definition.group] = groups[definition.group] || [];
    groups[definition.group].push(definition);
    return groups;
  }, {});

  permissionsGrid.innerHTML = getTenantAccessRoles().map((role) => {
    const rolePermissions = role.id === "superadmin" || role.id === "admin"
      ? createAllPermissions(true)
      : {
        ...createAllPermissions(false),
        ...(settings.access.permissions?.[role.id] || {})
      };

    return `
      <article class="permission-card" data-permission-role="${role.id}">
        <h4>${escapeHtml(role.label)}</h4>
        ${Object.entries(groupedDefinitions).map(([group, items]) => `
          <div class="permission-list">
            <strong>${group}</strong>
            ${items.map((item) => `
              <label class="permission-check">
                <input type="checkbox" data-permission-role="${role.id}" data-permission-key="${item.key}"${rolePermissions[item.key] ? " checked" : ""}${role.id === "superadmin" || role.id === "admin" ? " disabled" : ""}>
                <span>${item.label}</span>
              </label>
            `).join("")}
          </div>
        `).join("")}
      </article>
    `;
  }).join("");
}

function renderAppSettings() {
  if (!appLanguageSettingsGrid || !appBlockSettingsGrid) {
    return;
  }

  if (appMaxUsersInput) {
    appMaxUsersInput.value = settings.appConfig?.maxUsers || 5;
  }

  const enabledLanguages = settings.appConfig?.enabledLanguages || {};
  appLanguageSettingsGrid.innerHTML = `
    <article class="permission-card">
      <h4>Языки</h4>
      <div class="permission-list">
        ${APP_LANGUAGE_OPTIONS.map((language) => `
          <label class="permission-check">
            <input type="checkbox" data-app-language="${language.key}"${enabledLanguages[language.key] !== false ? " checked" : ""}>
            <span>${escapeHtml(language.label)}</span>
          </label>
        `).join("")}
      </div>
    </article>
  `;

  const groups = getAppBlockDefinitions().reduce((result, definition) => {
    result[definition.group] = result[definition.group] || [];
    result[definition.group].push(definition);
    return result;
  }, {});
  const enabledBlocks = settings.appConfig?.enabledBlocks || {};

  appBlockSettingsGrid.innerHTML = Object.entries(groups).map(([group, items]) => `
    <article class="permission-card">
      <h4>${escapeHtml(group)}</h4>
      <div class="permission-list">
        ${items.map((item) => `
          <label class="permission-check">
            <input type="checkbox" data-app-block="${escapeHtml(item.key)}"${enabledBlocks[item.key] !== false ? " checked" : ""}>
            <span>${escapeHtml(item.label)}</span>
          </label>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function getRemainingUsersAfterPendingDeletes() {
  return settings.users.filter((_, index) => !pendingUserDeletes.has(index));
}

function getMaxTenantUsers() {
  return Math.max(1, Math.floor(Number(settings.appConfig?.maxUsers) || 1));
}

function hasRemainingAdminAfterPendingDeletes() {
  return getRemainingUsersAfterPendingDeletes().some((user) => user.role === "admin");
}

function canDeleteUser(index) {
  const user = settings.users[index];
  if (!user || user.role !== "admin") {
    return true;
  }

  return settings.users.some((item, itemIndex) => {
    return itemIndex !== index && !pendingUserDeletes.has(itemIndex) && item.role === "admin";
  });
}

function discardPendingUserDeletesWithWarning() {
  if (!hasPendingUserDeletes()) {
    return false;
  }

  pendingUserDeletes.clear();
  renderUsersTable();
  showUsersStatus("Удаление не сохранено. Нажмите «Сохранить», чтобы удалить пользователя.", true);
  return true;
}

function applyPendingUserDeletes() {
  if (!hasPendingUserDeletes()) {
    return;
  }

  settings.users = settings.users.filter((_, index) => !pendingUserDeletes.has(index));
  pendingUserDeletes.clear();
}

function moveUserRow(fromIndex, toIndex) {
  if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0 || fromIndex >= settings.users.length || toIndex >= settings.users.length) {
    return false;
  }

  const [row] = settings.users.splice(fromIndex, 1);
  settings.users.splice(toIndex, 0, row);
  return true;
}

function renderUsersTable() {
  const roles = getTenantAccessRoles();
  usersTable.innerHTML = settings.users
    .map((user, index) => ({ user, index }))
    .filter(({ index }) => !isPendingUserDeleted(index))
    .map(({ user, index }) => `
      <tr draggable="true" data-user-row data-index="${index}">
        <td class="row-drag-cell">${userDragHandle(index)}</td>
        <td><input data-user-field="firstName" data-index="${index}" value="${user.firstName}"></td>
        <td><input data-user-field="lastName" data-index="${index}" value="${user.lastName}"></td>
        <td>
          <select data-user-field="role" data-index="${index}">
            ${roles.map((role) => `<option value="${role.id}"${user.role === role.id ? " selected" : ""}>${role.label}</option>`).join("")}
          </select>
        </td>
        <td><input data-user-field="login" data-index="${index}" value="${user.login}"></td>
        <td><input data-user-field="password" data-index="${index}" value="${user.password}"></td>
        <td class="row-action-cell">${userDeleteButton(index)}</td>
      </tr>
    `).join("");
  updateUndoUserDeleteButton();
}

function validateUsers() {
  const remainingUsers = getRemainingUsersAfterPendingDeletes();
  if (remainingUsers.length === 0) {
    showUsersStatus("Нельзя сохранить список без пользователей.", true);
    return false;
  }

  if (!hasRemainingAdminAfterPendingDeletes()) {
    showUsersStatus("В приложении должен остаться хотя бы один администратор.", true);
    return false;
  }

  if (remainingUsers.length > getMaxTenantUsers()) {
    showUsersStatus(`Количество пользователей превышает лимит пакета: ${getMaxTenantUsers()}.`, true);
    return false;
  }

  const hasEmptyField = remainingUsers.some((user) => {
    return !user.firstName.trim() || !user.lastName.trim() || !user.login.trim() || !user.password.trim();
  });

  if (hasEmptyField) {
    showUsersStatus("Заполните имя, фамилию, логин и пароль для каждого пользователя.", true);
    return false;
  }

  const logins = remainingUsers.map((user) => user.login.trim());
  const hasDuplicateLogin = logins.some((login, index) => logins.indexOf(login) !== index);
  if (hasDuplicateLogin) {
    showUsersStatus("Логины пользователей не должны повторяться.", true);
    return false;
  }

  return true;
}

function createEmptyClient() {
  return {
    clientNumber: "",
    name: "",
    type: "legal",
    address: "",
    emails: [""],
    contactPersons: [""],
    phones: [""],
    registrationNumber: "",
    vatNumber: ""
  };
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function showClientsStatus(message, isError = false) {
  clientsSaveStatus.textContent = message ? translateStaticText(message, currentLanguage) : "";
  clientsSaveStatus.classList.toggle("is-error", isError);
}

function getVisibleClientColumns() {
  const saved = getCurrentUserPreference().clientsTable?.visibleColumns || [];
  const validKeys = CLIENT_COLUMNS.map((column) => column.key);
  return Array.isArray(saved) && saved.length > 0
    ? saved.filter((key) => validKeys.includes(key))
    : validKeys;
}

function saveVisibleClientColumns(keys) {
  getCurrentUserPreference().clientsTable.visibleColumns = keys;
  saveCurrentUserPreference();
}

function getClientCellValue(client, key) {
  if (key === "type") return translateStaticText(client.type === "natural" ? "Физлицо" : "Юрлицо", currentLanguage);
  if (key === "emails") return (client.emails || []).filter(Boolean).join(", ");
  if (key === "contactPersons") return (client.contactPersons || []).filter(Boolean).join(", ");
  if (key === "phones") return (client.phones || []).filter(Boolean).join(", ");
  return client[key] || "";
}

function getClientSortValue(client, key) {
  if (key === "type") return client.type || "";
  return getClientCellValue(client, key);
}

function getSortedClients() {
  return settings.clients
    .map((client, index) => ({ client, index }))
    .sort((a, b) => {
      const aValue = String(getClientSortValue(a.client, clientSort.key)).toLocaleLowerCase();
      const bValue = String(getClientSortValue(b.client, clientSort.key)).toLocaleLowerCase();
      return aValue.localeCompare(bValue, "ru") * (clientSort.direction === "asc" ? 1 : -1);
    });
}

function renderClients() {
  if (!clientsTableHead || !clientsTableBody || !clientColumnsDropdown) {
    return;
  }

  const visibleColumns = getVisibleClientColumns();
  const sortedClients = getSortedClients();
  const visibleClientIndexes = sortedClients.map(({ index }) => index);
  const allVisibleSelected = visibleClientIndexes.length > 0
    && visibleClientIndexes.every((index) => selectedClientIndexes.has(index));
  clientColumnsDropdown.innerHTML = CLIENT_COLUMNS.map((column) => `
    <label class="client-column-toggle">
      <input type="checkbox" data-client-column="${column.key}"${visibleColumns.includes(column.key) ? " checked" : ""}>
      <span>${column.label}</span>
    </label>
  `).join("");

  clientsTableHead.innerHTML = `
    <tr>
      <th class="select-column">
        <input type="checkbox" id="selectAllClientsCheckbox" ${allVisibleSelected ? "checked" : ""} aria-label="Выбрать всех клиентов">
      </th>
      ${CLIENT_COLUMNS
        .filter((column) => visibleColumns.includes(column.key))
        .map((column) => `
          <th>
            <button type="button" data-client-sort="${column.key}">
              ${column.label}${clientSort.key === column.key ? (clientSort.direction === "asc" ? " ↑" : " ↓") : ""}
            </button>
          </th>
        `).join("")}
      <th></th>
    </tr>
  `;

  clientsTableBody.innerHTML = settings.clients.length > 0
    ? sortedClients.map(({ client, index }) => `
      <tr>
        <td class="select-column">
          <input type="checkbox" data-select-client="${index}" ${selectedClientIndexes.has(index) ? "checked" : ""} aria-label="Выбрать клиента">
        </td>
        ${CLIENT_COLUMNS
          .filter((column) => visibleColumns.includes(column.key))
          .map((column) => `<td${column.key === "type" ? "" : " data-no-translate"}>${escapeHtml(getClientCellValue(client, column.key))}</td>`)
          .join("")}
        <td class="row-action-cell">
          <button type="button" class="secondary-action" data-edit-client="${index}">Редактировать</button>
        </td>
      </tr>
    `).join("")
    : `<tr><td colspan="${visibleColumns.length + 2}">Клиенты пока не добавлены.</td></tr>`;
}

function validateClients() {
  if (!clientDraft || !String(clientDraft.name || "").trim()) {
    showClientsStatus("Заполните название клиента.", true);
    return false;
  }

  return true;
}

function openClientDeleteConfirmModal() {
  if (selectedClientIndexes.size === 0) {
    showClientsStatus("Выберите клиентов для удаления.", true);
    return;
  }

  clientDeleteConfirmModal.classList.remove("is-hidden");
  clientDeleteConfirmModal.setAttribute("aria-hidden", "false");
}

function closeClientDeleteConfirmModal() {
  clientDeleteConfirmModal.classList.add("is-hidden");
  clientDeleteConfirmModal.setAttribute("aria-hidden", "true");
}

function deleteSelectedClients() {
  if (selectedClientIndexes.size === 0) {
    closeClientDeleteConfirmModal();
    showClientsStatus("Выберите клиентов для удаления.", true);
    return;
  }

  const indexes = Array.from(selectedClientIndexes)
    .filter((index) => index >= 0 && index < settings.clients.length)
    .sort((a, b) => b - a);
  indexes.forEach((index) => {
    settings.clients.splice(index, 1);
  });
  const deletedCount = indexes.length;
  selectedClientIndexes.clear();
  saveSettings();
  renderClients();
  closeClientDeleteConfirmModal();
  showClientsStatus(`${translateStaticText("Удалено клиентов", currentLanguage)}: ${deletedCount}.`);
}

function discardPendingClientsWithWarning() {
  if (!pendingClientsDirty) {
    return false;
  }

  showClientsStatus("Изменения клиента не сохранены. Нажмите «Сохранить».", true);
  activateTopLevelTab("clients");
  return true;
}

function renderClientRepeatableList(listName) {
  const containers = {
    contactPersons: clientContactPersonsList,
    emails: clientEmailsList,
    phones: clientPhonesList
  };
  const container = containers[listName];
  if (!container || !clientDraft) {
    return;
  }

  clientDraft[listName] = Array.isArray(clientDraft[listName]) && clientDraft[listName].length > 0
    ? clientDraft[listName]
    : [""];

  container.innerHTML = clientDraft[listName].map((value, index) => `
    <div class="repeatable-row">
      <input data-client-repeatable="${listName}" data-index="${index}" value="${escapeHtml(value)}" data-no-translate>
      <button type="button" class="delete-row-action" data-delete-client-repeatable="${listName}" data-index="${index}" title="Удалить строку">×</button>
    </div>
  `).join("");
}

function renderClientModal() {
  if (!clientDraft) {
    return;
  }

  clientModalTitle.textContent = editingClientIndex === null ? "Новый клиент" : "Клиент";
  clientNameInput.value = clientDraft.name || "";
  clientLegalType.checked = clientDraft.type !== "natural";
  clientNaturalType.checked = clientDraft.type === "natural";
  clientRegistrationInput.value = clientDraft.registrationNumber || "";
  clientVatInput.value = clientDraft.vatNumber || "";
  clientAddressInput.value = clientDraft.address || "";
  renderClientRepeatableList("contactPersons");
  renderClientRepeatableList("emails");
  renderClientRepeatableList("phones");
  applyLanguage();
}

function openClientModal(index = null) {
  editingClientIndex = index;
  clientDraft = index === null
    ? createEmptyClient()
    : structuredClone(settings.clients[index] || createEmptyClient());
  clientModal.classList.remove("is-hidden");
  clientModal.setAttribute("aria-hidden", "false");
  renderClientModal();
  clientNameInput.focus();
}

function closeClientModal() {
  clientModal.classList.add("is-hidden");
  clientModal.setAttribute("aria-hidden", "true");
  editingClientIndex = null;
  clientDraft = null;
}

function updateClientDraftFromModal() {
  if (!clientDraft) {
    return;
  }

  clientDraft.name = clientNameInput.value.trim();
  clientDraft.type = clientNaturalType.checked ? "natural" : "legal";
  clientDraft.registrationNumber = clientRegistrationInput.value.trim();
  clientDraft.vatNumber = clientVatInput.value.trim();
  clientDraft.address = clientAddressInput.value.trim();
}

function normalizeClientName(value) {
  return String(value || "").trim().toLocaleLowerCase();
}

function normalizeClientKey(value) {
  return String(value || "").trim().toLocaleLowerCase();
}

function generateClientId() {
  const numbers = settings.clients
    .map((client) => Number(client.clientNumber || client.id || 0))
    .filter((number) => Number.isFinite(number));
  return String(Math.max(0, ...numbers) + 1).padStart(5, "0");
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = reject;
    reader.readAsText(file, "utf-8");
  });
}

function readFileAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

function detectCsvDelimiter(text) {
  const firstLine = String(text || "").split(/\r?\n/).find((line) => line.trim()) || "";
  const delimiters = [",", ";", "\t"];
  return delimiters
    .map((delimiter) => ({
      delimiter,
      count: firstLine.split(delimiter).length - 1
    }))
    .sort((a, b) => b.count - a.count)[0]?.delimiter || ",";
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = "";
  let inQuotes = false;
  const delimiter = detectCsvDelimiter(text);

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const nextChar = text[index + 1];
    if (char === '"' && inQuotes && nextChar === '"') {
      value += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === delimiter && !inQuotes) {
      row.push(value.trim());
      value = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") {
        index += 1;
      }
      row.push(value.trim());
      if (row.some((cell) => cell !== "")) {
        rows.push(row);
      }
      row = [];
      value = "";
    } else {
      value += char;
    }
  }

  row.push(value.trim());
  if (row.some((cell) => cell !== "")) {
    rows.push(row);
  }

  return rows;
}

function rowsToObjects(rows) {
  const [headers = [], ...dataRows] = rows;
  const seenHeaders = new Map();
  clientImportHeaders = headers.map((header, index) => {
    const baseHeader = String(header || `Колонка ${index + 1}`).trim();
    const seenCount = seenHeaders.get(baseHeader) || 0;
    seenHeaders.set(baseHeader, seenCount + 1);
    return seenCount > 0 ? `${baseHeader} (${seenCount + 1})` : baseHeader;
  });
  clientImportRows = dataRows
    .filter((row) => row.some((cell) => String(cell || "").trim()))
    .map((row) => {
      return Object.fromEntries(clientImportHeaders.map((header, index) => [header, row[index] || ""]));
    });
}

async function parseClientImportFile(file) {
  const extension = file.name.split(".").pop().toLowerCase();
  if (extension === "csv") {
    rowsToObjects(parseCsv(await readFileAsText(file)));
    return;
  }

  if (!window.XLSX) {
    throw new Error("Не удалось прочитать файл. Для XLS/XLSX нужна загрузка Excel-библиотеки, либо сохраните файл как CSV.");
  }

  const workbook = window.XLSX.read(await readFileAsArrayBuffer(file), { type: "array" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  rowsToObjects(window.XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" }));
}

function guessClientField(header) {
  const normalized = String(header || "").toLocaleLowerCase();
  if (normalized.includes("name") || normalized.includes("nimi") || normalized.includes("назв") || normalized.includes("имя") || normalized.includes("client") || normalized.includes("company")) return "name";
  if (normalized.includes("type") || normalized.includes("тип")) return "type";
  if (normalized.includes("reg") || normalized.includes("registr") || normalized.includes("регистрац")) return "registrationNumber";
  if (normalized.includes("vat") || normalized.includes("kmkr")) return "vatNumber";
  if (normalized.includes("contact") || normalized.includes("kontakt") || normalized.includes("контакт")) return "contactPersons";
  if (normalized.includes("mail") || normalized.includes("почт") || normalized.includes("e-post")) return "emails";
  if (normalized.includes("phone") || normalized.includes("тел") || normalized.includes("telefon")) return "phones";
  if (normalized.includes("address") || normalized.includes("адрес") || normalized.includes("aadress")) return "address";
  return "";
}

function splitImportedMultiValue(value) {
  return String(value || "")
    .split(/[\n;,]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function renderClientImportMapping() {
  clientImportMappingSection.classList.toggle("is-hidden", clientImportHeaders.length === 0);
  clientImportMappingGrid.innerHTML = clientImportHeaders.map((header) => `
    <div class="mapping-row">
      <strong data-no-translate>${escapeHtml(header)}</strong>
      <select data-import-map="${escapeHtml(header)}">
        ${CLIENT_IMPORT_FIELDS.map((field) => `<option value="${field.key}"${guessClientField(header) === field.key ? " selected" : ""}>${field.label}</option>`).join("")}
      </select>
    </div>
  `).join("");
  clientImportSummary.textContent = `${clientImportRows.length} строк готово к проверке.`;
  clientImportValidation.textContent = "";
  applyLanguage();
}

function getClientImportMap() {
  return Object.fromEntries(
    Array.from(document.querySelectorAll("[data-import-map]")).map((select) => [select.dataset.importMap, select.value])
  );
}

function buildClientFromImportedRow(row, map) {
  const client = createEmptyClient();
  Object.entries(map).forEach(([header, field]) => {
    const value = String(row[header] || "").trim();
    if (!field || !value) return;
    if (field === "emails" || field === "contactPersons" || field === "phones") {
      client[field] = [...client[field].filter(Boolean), ...splitImportedMultiValue(value)];
    } else if (field === "type") {
      const normalized = value.toLocaleLowerCase();
      client.type = normalized.includes("физ")
        || normalized.includes("person")
        || normalized.includes("natural")
        || normalized.includes("individual")
        || normalized.includes("eraisik")
        ? "natural"
        : "legal";
    } else {
      client[field] = value;
    }
  });

  client.emails = client.emails.filter(Boolean);
  client.contactPersons = client.contactPersons.filter(Boolean);
  client.phones = client.phones.filter(Boolean);
  return client;
}

function importMappedClients() {
  const map = getClientImportMap();
  if (!Object.values(map).includes("name")) {
    clientImportValidation.textContent = "Сопоставьте колонку с названием клиента.";
    return;
  }

  const existingNames = new Set(settings.clients.map((client) => normalizeClientName(client.name)).filter(Boolean));
  const existingRegistrations = new Set(settings.clients.map((client) => normalizeClientKey(client.registrationNumber)).filter(Boolean));
  const existingVatNumbers = new Set(settings.clients.map((client) => normalizeClientKey(client.vatNumber)).filter(Boolean));
  const batchNames = new Set();
  const batchRegistrations = new Set();
  const batchVatNumbers = new Set();
  const imported = [];
  let nextClientNumber = Number(generateClientId());
  clientImportDuplicates = [];
  clientImportRows.forEach((row) => {
    const client = buildClientFromImportedRow(row, map);
    const nameKey = normalizeClientName(client.name);
    const registrationKey = normalizeClientKey(client.registrationNumber);
    const vatKey = normalizeClientKey(client.vatNumber);
    const isDuplicate = !nameKey
      || existingNames.has(nameKey)
      || batchNames.has(nameKey)
      || (registrationKey && (existingRegistrations.has(registrationKey) || batchRegistrations.has(registrationKey)))
      || (vatKey && (existingVatNumbers.has(vatKey) || batchVatNumbers.has(vatKey)));

    if (isDuplicate) {
      clientImportDuplicates.push(client.name || "(без названия)");
      return;
    }

    client.clientNumber = String(nextClientNumber).padStart(5, "0");
    nextClientNumber += 1;
    imported.push(client);
    batchNames.add(nameKey);
    existingNames.add(nameKey);
    if (registrationKey) {
      batchRegistrations.add(registrationKey);
      existingRegistrations.add(registrationKey);
    }
    if (vatKey) {
      batchVatNumbers.add(vatKey);
      existingVatNumbers.add(vatKey);
    }
  });

  settings.clients.push(...imported);
  saveSettings();
  renderClients();
  closeClientImportModal();
  const importedLabel = translateStaticText("Импортировано клиентов", currentLanguage);
  const duplicatesLabel = translateStaticText("Пропущено дублей", currentLanguage);
  showClientsStatus(`${importedLabel}: ${imported.length}. ${duplicatesLabel}: ${clientImportDuplicates.length}.`);
}

function openClientImportModal() {
  clientImportRows = [];
  clientImportHeaders = [];
  clientImportDuplicates = [];
  clientImportFileInput.value = "";
  clientImportMappingSection.classList.add("is-hidden");
  clientImportMappingGrid.innerHTML = "";
  clientImportSummary.textContent = "";
  clientImportValidation.textContent = "";
  clientImportModal.classList.remove("is-hidden");
  clientImportModal.setAttribute("aria-hidden", "false");
}

function closeClientImportModal() {
  clientImportModal.classList.add("is-hidden");
  clientImportModal.setAttribute("aria-hidden", "true");
}

function exportClientsCsv() {
  const exportColumns = [
    { key: "clientNumber", label: "Номер клиента" },
    ...CLIENT_COLUMNS
  ];
  const headers = exportColumns.map((column) => column.label);
  const rows = settings.clients.map((client) => exportColumns.map((column) => getClientCellValue(client, column.key)));
  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell || "").replaceAll('"', '""')}"`).join(";"))
    .join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "clients.csv";
  link.click();
  URL.revokeObjectURL(link.href);
}

function createDigitalStandardTier(product) {
  const tiers = Array.isArray(product.priceTiers) ? product.priceTiers : [];
  const previousTier = tiers[tiers.length - 1];
  const from = previousTier ? Number(previousTier.to) + 1 : 1;

  return {
    from: Number.isFinite(from) && from > 0 ? from : 1,
    to: Number.isFinite(from) && from > 0 ? from : 1,
    type: "price",
    value: 0
  };
}

function renderDigitalStandardPriceTiers(product, productIndex) {
  const tiers = Array.isArray(product.priceTiers) ? product.priceTiers : [];
  const tierRows = tiers.length > 0
    ? tiers.map((tier, tierIndex) => `
      <tr>
        <td><input type="number" min="1" step="1" data-digital-standard-tier data-product-index="${productIndex}" data-tier-index="${tierIndex}" data-field="from" value="${tier.from}"></td>
        <td><input type="number" min="1" step="1" data-digital-standard-tier data-product-index="${productIndex}" data-tier-index="${tierIndex}" data-field="to" value="${tier.to}"></td>
        <td>
          <select data-digital-standard-tier data-product-index="${productIndex}" data-tier-index="${tierIndex}" data-field="type">
            <option value="price"${tier.type === "price" ? " selected" : ""}>Цена за единицу</option>
            <option value="discount"${tier.type === "discount" ? " selected" : ""}>Скидка %</option>
          </select>
        </td>
        <td><input type="number" min="0" step="0.01" placeholder="${tier.type === "discount" ? "Скидка в процентах" : "Цена за единицу"}" data-digital-standard-tier data-product-index="${productIndex}" data-tier-index="${tierIndex}" data-field="value" value="${tier.value}"></td>
        <td class="row-action-cell">
          <button type="button" class="delete-row-action" data-delete-digital-standard-tier data-product-index="${productIndex}" data-tier-index="${tierIndex}" aria-label="Удалить диапазон" title="Удалить диапазон">🗑</button>
        </td>
      </tr>
    `).join("")
    : '<tr><td colspan="5">Диапазоны пока не добавлены.</td></tr>';

  return `
    <tr class="nested-data-row">
      <td></td>
      <td colspan="5">
        <div class="nested-table-heading">
          <strong>Ценовые диапазоны</strong>
          <button type="button" class="add-action small-add-action" data-add-digital-standard-tier data-product-index="${productIndex}">+</button>
        </div>
        <table class="compact-table nested-table">
          <thead>
            <tr>
              <th>Количество от</th>
              <th>Количество до</th>
              <th>Тип</th>
              <th>Цена за единицу / скидка %</th>
              <th></th>
            </tr>
          </thead>
          <tbody>${tierRows}</tbody>
        </table>
      </td>
    </tr>
  `;
}

function renderDigitalTables() {
  document.querySelector("#digitalStandardProductsTable").innerHTML = settings.digitalPrint.standardProducts
    .map((product, index) => ({ product, index }))
    .filter(({ index }) => !isPendingDeleted("standardProducts", index))
    .map(({ product, index }) => `
    <tr draggable="true" data-digital-row-list="standardProducts" data-index="${index}">
      <td class="row-drag-cell">${dragHandle("standardProducts", index)}</td>
      <td><input data-digital-list="standardProducts" data-index="${index}" data-field="category" value="${product.category}"></td>
      <td><input data-digital-list="standardProducts" data-index="${index}" data-field="name" value="${product.name}"></td>
      <td><input type="number" min="0" step="0.01" data-digital-list="standardProducts" data-index="${index}" data-field="basePrice" value="${product.basePrice}"></td>
      <td><input type="number" min="1" step="1" data-digital-list="standardProducts" data-index="${index}" data-field="quantity" value="${product.quantity}"></td>
      <td class="row-action-cell">${deleteButton("standardProducts", index)}</td>
    </tr>
    ${renderDigitalStandardPriceTiers(product, index)}
  `).join("");

  document.querySelector("#digitalClickPricesTable").innerHTML = settings.digitalPrint.clickPrices.map((click, index) => `
    <tr>
      <td><input type="number" min="0" step="0.00001" data-digital-list="clickPrices" data-index="${index}" data-field="click40" value="${click.click40}"></td>
      <td><input type="number" min="0" step="0.00001" data-digital-list="clickPrices" data-index="${index}" data-field="click44" value="${click.click44}"></td>
    </tr>
  `).join("");

  document.querySelector("#digitalMaterialsTable").innerHTML = settings.digitalPrint.materials
    .map((material, index) => ({ material, index }))
    .filter(({ index }) => !isPendingDeleted("materials", index))
    .map(({ material, index }) => `
    <tr draggable="true" data-digital-row-list="materials" data-index="${index}">
      <td class="row-drag-cell">${dragHandle("materials", index)}</td>
      <td>
        <select data-digital-list="materials" data-index="${index}" data-field="type">
          ${MATERIAL_TYPES.map((type) => `<option value="${type}"${material.type === type ? " selected" : ""}>${type}</option>`).join("")}
        </select>
      </td>
      <td><input data-digital-list="materials" data-index="${index}" data-field="name" value="${material.name}"></td>
      <td><input type="number" min="0" step="0.00001" data-digital-list="materials" data-index="${index}" data-field="sr3Price" value="${material.sr3Price}"></td>
      <td class="row-action-cell">${deleteButton("materials", index)}</td>
    </tr>
  `).join("");

  document.querySelector("#digitalExtraWorksTable").innerHTML = settings.digitalPrint.extraWorks
    .map((work, index) => ({ work, index }))
    .filter(({ index }) => !isPendingDeleted("extraWorks", index))
    .map(({ work, index }) => `
    <tr draggable="true" data-digital-row-list="extraWorks" data-index="${index}">
      <td class="row-drag-cell">${dragHandle("extraWorks", index)}</td>
      <td><input data-digital-list="extraWorks" data-index="${index}" data-field="name" value="${work.name}"></td>
      <td><input type="number" min="0" step="0.01" data-digital-list="extraWorks" data-index="${index}" data-field="percent" value="${work.percent || 0}"></td>
      <td class="row-action-cell">${deleteButton("extraWorks", index)}</td>
    </tr>
  `).join("");

  document.querySelector("#digitalQuantityFormulasTable").innerHTML = settings.digitalPrint.quantityFormulas
    .map((row, index) => ({ row, index }))
    .filter(({ index }) => !isPendingDeleted("quantityFormulas", index))
    .map(({ row, index }) => `
    <tr draggable="true" data-digital-row-list="quantityFormulas" data-index="${index}">
      <td class="row-drag-cell">${dragHandle("quantityFormulas", index)}</td>
      <td><input type="number" min="1" step="1" data-digital-list="quantityFormulas" data-index="${index}" data-field="from" value="${row.from}"></td>
      <td><input type="number" min="1" step="1" data-digital-list="quantityFormulas" data-index="${index}" data-field="to" value="${row.to}"></td>
      <td><input data-digital-list="quantityFormulas" data-index="${index}" data-field="formula" value="${row.formula}"></td>
      <td class="row-action-cell">${deleteButton("quantityFormulas", index)}</td>
    </tr>
  `).join("");

  document.querySelector("#digitalCuttingCoefficientsTable").innerHTML = settings.digitalPrint.cuttingCoefficients
    .map((row, index) => ({ row, index }))
    .filter(({ index }) => !isPendingDeleted("cuttingCoefficients", index))
    .map(({ row, index }) => `
    <tr draggable="true" data-digital-row-list="cuttingCoefficients" data-index="${index}">
      <td class="row-drag-cell">${dragHandle("cuttingCoefficients", index)}</td>
      <td><input type="number" min="1" step="1" data-digital-list="cuttingCoefficients" data-index="${index}" data-field="from" value="${row.from}"></td>
      <td><input type="number" min="1" step="1" data-digital-list="cuttingCoefficients" data-index="${index}" data-field="to" value="${row.to}"></td>
      <td><input type="number" min="0" step="0.01" data-digital-list="cuttingCoefficients" data-index="${index}" data-field="percent" value="${row.percent || 0}"></td>
      <td class="row-action-cell">${deleteButton("cuttingCoefficients", index)}</td>
    </tr>
  `).join("");

  document.querySelector("#digitalClientTypesTable").innerHTML = `
    <tr>
      <td>B2B клиент</td>
      <td><input type="number" min="0" step="0.01" data-digital-client-type="b2bPercent" value="${settings.digitalPrint.clientTypes.b2bPercent}"></td>
    </tr>
    <tr>
      <td>B2C клиент</td>
      <td><input type="number" min="0" step="0.01" data-digital-client-type="b2cPercent" value="${settings.digitalPrint.clientTypes.b2cPercent}"></td>
    </tr>
  `;

  document.querySelector("#digitalMinimumOrderTable").innerHTML = `
    <tr>
      <td><input type="number" min="0" step="0.01" data-digital-minimum-order value="${settings.digitalPrint.minimumOrder.price}"></td>
    </tr>
  `;

  updateUndoDeleteButtons();
}

function createDigitalRow(list) {
  const rows = {
    standardProducts: { category: DIGITAL_CATEGORY, name: "Untitled", basePrice: 0, quantity: 1, priceTiers: [{ from: 1, to: 1, type: "price", value: 0 }] },
    materials: { type: MATERIAL_TYPES[0], name: "", sr3Price: "" },
    extraWorks: { name: "Untitled", percent: 0 },
    quantityFormulas: { from: 1, to: 1, formula: "" },
    cuttingCoefficients: { from: 1, to: 1, percent: 0 }
  };

  return { ...rows[list] };
}

function showSaveStatus(section) {
  const status = document.querySelector(`[data-save-status="${section}"]`);
  if (!status) {
    return;
  }

  status.classList.remove("is-error");
  status.textContent = "Сохранено";
  window.clearTimeout(status.dataset.timeoutId);
  const timeoutId = window.setTimeout(() => {
    status.textContent = "";
  }, 1800);
  status.dataset.timeoutId = timeoutId;
}

function showSectionMessage(section, message) {
  const status = document.querySelector(`[data-save-status="${section}"]`);
  if (!status) {
    return;
  }

  status.classList.remove("is-error");
  status.textContent = message;
}

function showSectionError(section, message) {
  const status = document.querySelector(`[data-save-status="${section}"]`);
  if (!status) {
    return;
  }

  status.classList.add("is-error");
  status.textContent = message;
}

function clearDigitalSectionValidation(section) {
  document.querySelectorAll(`[data-digital-list="${section}"].is-invalid`).forEach((field) => {
    field.classList.remove("is-invalid");
  });
}

function validateDigitalMaterials() {
  clearDigitalSectionValidation("materials");
  const errors = [];

  settings.digitalPrint.materials.forEach((material, index) => {
    if (isPendingDeleted("materials", index)) {
      return;
    }

    const nameInput = document.querySelector(`[data-digital-list="materials"][data-index="${index}"][data-field="name"]`);
    const priceInput = document.querySelector(`[data-digital-list="materials"][data-index="${index}"][data-field="sr3Price"]`);
    const name = String(material.name || "").trim();
    const price = Number(material.sr3Price);

    if (!name) {
      nameInput?.classList.add("is-invalid");
      errors.push("Введите название материала");
    }

    if (!price || price <= 0) {
      priceInput?.classList.add("is-invalid");
      errors.push("Укажите стоимость листа SRA3 больше 0");
    }
  });

  if (errors.length > 0) {
    showSectionError("materials", errors[0]);
  }

  return errors.length === 0;
}

function setResultLabels(labels) {
  document.querySelector("#costLabel").textContent = labels.cost;
  document.querySelector("#marginLabel").textContent = labels.margin;
  document.querySelector("#unitLabel").textContent = labels.unit;
  document.querySelector("#minimumLabel").textContent = labels.minimum;
}

function setResultValues(values) {
  const totalPrice = document.querySelector("#totalPrice");
  totalPrice.textContent = values.total;
  totalPrice.classList.toggle("is-danger", Boolean(values.isBelowCost));
  document.querySelector("#costValue").textContent = values.cost;
  document.querySelector("#marginValue").textContent = values.margin;
  document.querySelector("#unitPrice").textContent = values.unit;
  document.querySelector("#minimumValue").textContent = values.minimum;
  profitWarningMessage.textContent = [
    values.isBelowCost ? "Цена заказа равна или ниже себестоимости." : "",
    values.minimumApplied ? "Фактическая стоимость печати ниже минимальной. Применяется минимальная стоимость печати." : ""
  ].filter(Boolean).join(" ");
}

function clearOrderValidation() {
  orderValidationMessage.textContent = "";
  profitWarningMessage.textContent = "";
  document.querySelector("#totalPrice").classList.remove("is-danger");
  document.querySelectorAll("#digitalOrderForm .is-invalid, #digitalOrderForm .is-invalid-group").forEach((field) => {
    field.classList.remove("is-invalid");
    field.classList.remove("is-invalid-group");
  });
}

function markInvalid(field, message, errors) {
  field.classList.add(field.matches("input, select") ? "is-invalid" : "is-invalid-group");
  errors.push(message);
}

function getDigitalClientType() {
  if (digitalB2CClientMode.checked) {
    return "b2c";
  }

  if (digitalB2BClientMode.checked) {
    return "b2b";
  }

  return "";
}

function validateDigitalOrder() {
  clearOrderValidation();

  const errors = [];
  const width = Number(digitalWidthInput.value);
  const height = Number(digitalHeightInput.value);
  const quantity = Number(digitalQuantityInput.value);
  const discount = Number(digitalDiscountInput.value);

  if (!getDigitalClientType()) {
    markInvalid(digitalClientTypeOptions, "Не выбран тип клиента", errors);
  }

  if (!digitalOrderMaterialTypeSelect.value) {
    markInvalid(digitalOrderMaterialTypeSelect, "Не выбран тип материала", errors);
  }

  if (!digitalOrderMaterialSelect.value) {
    markInvalid(digitalOrderMaterialSelect, "Не выбран материал", errors);
  }

  if (!width || width <= 0) {
    markInvalid(digitalWidthInput, "Не указана ширина", errors);
  }

  if (!height || height <= 0) {
    markInvalid(digitalHeightInput, "Не указана высота", errors);
  }

  if (!quantity || quantity <= 0) {
    markInvalid(digitalQuantityInput, "Не указан тираж", errors);
  }

  if (!digitalPrintTypeSelect.value) {
    markInvalid(digitalPrintTypeSelect, "Не выбран тип печати", errors);
  }

  if (!digitalUrgencySelect.value) {
    markInvalid(digitalUrgencySelect, "Не выбрана срочность", errors);
  }

  if (digitalDiscountInput.value === "" || !Number.isFinite(discount) || discount < 0) {
    markInvalid(digitalDiscountInput, "Процент корректировки должен быть не меньше 0", errors);
  }

  if (digitalAdjustmentTypeSelect.value === "discount" && discount > 100) {
    markInvalid(digitalDiscountInput, "Скидка не может быть больше 100%", errors);
  }

  if (errors.length > 0) {
    orderValidationMessage.textContent = errors[0];
  }

  return errors.length === 0;
}

function getItemsPerSr3Sheet(width, height) {
  const sheetWidth = 440;
  const sheetHeight = 310;
  const normal = Math.floor(sheetWidth / width) * Math.floor(sheetHeight / height);
  const rotated = Math.floor(sheetWidth / height) * Math.floor(sheetHeight / width);

  return Math.max(normal, rotated, 1);
}

function getQuantityFormula(sheetCount) {
  return settings.digitalPrint.quantityFormulas.find((row) => {
    return sheetCount >= row.from && sheetCount <= row.to && row.formula.trim();
  });
}

function evaluateSheetFormula(formula, clickPrice, materialPrice) {
  const expression = formula
    .toLowerCase()
    .replaceAll(",", ".")
    .replaceAll("click", String(clickPrice))
    .replaceAll("клик", String(clickPrice))
    .replaceAll("material", String(materialPrice))
    .replaceAll("mat", String(materialPrice))
    .replaceAll("материал", String(materialPrice));

  if (!/^[\d\s+\-*/().]+$/.test(expression)) {
    return 0;
  }

  try {
    const result = Function(`"use strict"; return (${expression});`)();
    return Number.isFinite(result) ? Math.max(result, 0) : 0;
  } catch {
    return 0;
  }
}

function evaluateWideFormula(formula, materialPrice, inkPrice, area, printCoefficient, whiteValue) {
  const expression = formula
    .toLowerCase()
    .replaceAll(",", ".")
    .replaceAll("material", String(materialPrice))
    .replaceAll("материал", String(materialPrice))
    .replaceAll("mat", String(materialPrice))
    .replaceAll("ink", String(inkPrice))
    .replaceAll("краска", String(inkPrice))
    .replaceAll("area", String(area))
    .replaceAll("площадь", String(area))
    .replaceAll("print", String(printCoefficient))
    .replaceAll("печать", String(printCoefficient))
    .replaceAll("white", String(whiteValue))
    .replaceAll("белый", String(whiteValue))
    .replace(/(\d+(?:\.\d+)?)\s*\+\s*(\d+(?:\.\d+)?)%/g, "($1*(1+$2/100))")
    .replace(/(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)%/g, "($1*(1-$2/100))");

  if (!/^[\d\s+\-*/().]+$/.test(expression)) {
    return 0;
  }

  try {
    const result = Function(`"use strict"; return (${expression});`)();
    return Number.isFinite(result) ? Math.max(result, 0) : 0;
  } catch {
    return 0;
  }
}

function getWideFormula(area) {
  return settings.widePrint.rollFormulas.find((row) => {
    return area >= row.from && area <= row.to && row.formula.trim();
  });
}

function clearWideOrderValidation() {
  orderValidationMessage.textContent = "";
  profitWarningMessage.textContent = "";
  document.querySelector("#totalPrice").classList.remove("is-danger");
  document.querySelectorAll("#wideOrderForm .is-invalid, #wideOrderForm .is-invalid-group").forEach((field) => {
    field.classList.remove("is-invalid");
    field.classList.remove("is-invalid-group");
  });
}

function markWideInvalid(field, message, errors) {
  field.classList.add(field.matches("input, select") ? "is-invalid" : "is-invalid-group");
  errors.push(message);
}

function getWideClientType() {
  if (wideB2CClientMode.checked) {
    return "b2c";
  }

  if (wideB2BClientMode.checked) {
    return "b2b";
  }

  return "";
}

function isWideCustomMaterialSelected() {
  return wideOrderMaterialSelect.value === CUSTOM_WIDE_MATERIAL_VALUE;
}

function updateWideCustomMaterialField() {
  const isCustom = isWideCustomMaterialSelected();
  wideCustomMaterialPriceWrap.classList.toggle("is-hidden", !isCustom);
  wideCustomMaterialPriceInput.disabled = !isCustom;
}

function createWideSizeRow() {
  return `
    <tr data-wide-size-row>
      <td><input type="number" min="1" step="1" placeholder="Введите ширину" data-wide-size-field="width"></td>
      <td><input type="number" min="1" step="1" placeholder="Введите высоту" data-wide-size-field="height"></td>
      <td><input type="number" min="1" step="1" placeholder="Введите тираж" data-wide-size-field="quantity"></td>
      <td class="row-action-cell">
        <button type="button" class="delete-row-action" data-delete-wide-size-row aria-label="Удалить размер" title="Удалить размер">🗑</button>
      </td>
    </tr>
  `;
}

function getWideSizeRows() {
  return [...document.querySelectorAll("[data-wide-size-row]")].map((row) => ({
    row,
    widthInput: row.querySelector('[data-wide-size-field="width"]'),
    heightInput: row.querySelector('[data-wide-size-field="height"]'),
    quantityInput: row.querySelector('[data-wide-size-field="quantity"]')
  }));
}

function getWideSizeTotals() {
  return getWideSizeRows().reduce((totals, item) => {
    const width = Number(item.widthInput.value) || 0;
    const height = Number(item.heightInput.value) || 0;
    const quantity = Number(item.quantityInput.value) || 0;
    return {
      area: totals.area + ((width * height * quantity) / 1000000),
      quantity: totals.quantity + quantity
    };
  }, { area: 0, quantity: 0 });
}

function validateWideOrder() {
  clearWideOrderValidation();
  const errors = [];
  const adjustment = Number(wideAdjustmentInput.value);
  const sizeRows = getWideSizeRows();

  if (!wideRollPrintMode.checked) {
    markWideInvalid(document.querySelector("#widePrintTypeOptions"), "Выберите рулонную печать", errors);
  }

  if (!getWideClientType()) {
    markWideInvalid(wideClientTypeOptions, "Не выбран тип клиента", errors);
  }

  if (!wideOrderMaterialSelect.value) {
    markWideInvalid(wideOrderMaterialSelect, "Не выбран материал", errors);
  }

  if (isWideCustomMaterialSelected()) {
    const customMaterialPrice = Number(wideCustomMaterialPriceInput.value);
    if (!customMaterialPrice || customMaterialPrice <= 0) {
      markWideInvalid(wideCustomMaterialPriceInput, "Укажите стоимость кастомного материала за м²", errors);
    }
  }

  if (sizeRows.length === 0) {
    wideSizeRowsTable.insertAdjacentHTML("beforeend", createWideSizeRow());
    markWideInvalid(wideSizeRowsTable, "Добавьте хотя бы один размер", errors);
  }

  sizeRows.forEach(({ widthInput, heightInput, quantityInput }, index) => {
    const rowNumber = index + 1;
    const width = Number(widthInput.value);
    const height = Number(heightInput.value);
    const quantity = Number(quantityInput.value);

    if (!width || width <= 0) {
      markWideInvalid(widthInput, `Не указана ширина в строке ${rowNumber}`, errors);
    }

    if (!height || height <= 0) {
      markWideInvalid(heightInput, `Не указана высота в строке ${rowNumber}`, errors);
    }

    if (!quantity || quantity <= 0) {
      markWideInvalid(quantityInput, `Не указан тираж в строке ${rowNumber}`, errors);
    }
  });

  const totals = getWideSizeTotals();
  if (totals.area <= 0) {
    markWideInvalid(wideSizeRowsTable, "Площадь заказа должна быть больше 0", errors);
  }

  if (!widePrintColorSelect.value) {
    markWideInvalid(widePrintColorSelect, "Не выбран тип печати", errors);
  }

  if (!wideUrgencySelect.value) {
    markWideInvalid(wideUrgencySelect, "Не выбрана срочность", errors);
  }

  if (wideAdjustmentInput.value === "" || !Number.isFinite(adjustment) || adjustment < 0) {
    markWideInvalid(wideAdjustmentInput, "Процент корректировки должен быть не меньше 0", errors);
  }

  if (wideAdjustmentTypeSelect.value === "discount" && adjustment > 100) {
    markWideInvalid(wideAdjustmentInput, "Скидка не может быть больше 100%", errors);
  }

  if (errors.length > 0) {
    orderValidationMessage.textContent = errors[0];
  }

  return errors.length === 0;
}

function calculateWideOrder() {
  setResultLabels({
    cost: "Себестоимость",
    margin: "Доп. работы",
    unit: "Цена за изделие",
    minimum: "Площадь печати"
  });

  if (!validateWideOrder()) {
    setResultValues({
      total: formatCurrency(0),
      cost: formatCurrency(0),
      margin: formatCurrency(0),
      unit: formatCurrency(0),
      minimum: "0 м²"
    });
    return;
  }

  const { area, quantity } = getWideSizeTotals();
  const totalQuantity = Math.max(quantity || 1, 1);
  const formulaRow = getWideFormula(area);

  if (!formulaRow) {
    orderValidationMessage.textContent = `Нет формулы для ${formatNumber(area)} м²`;
    setResultValues({
      total: formatCurrency(0),
      cost: formatCurrency(0),
      margin: formatCurrency(0),
      unit: formatCurrency(0),
      minimum: `${formatNumber(area)} м²`
    });
    return;
  }

  const material = settings.widePrint.rollMaterials[Number(wideOrderMaterialSelect.value)] || { price: 0 };
  const materialPrice = isWideCustomMaterialSelected()
    ? Number(wideCustomMaterialPriceInput.value) || 0
    : Number(material.price) || 0;
  const inkPrice = Number(settings.widePrint.rollInk.price) || 0;
  const printCoefficient = widePrintColorSelect.value === "5+0" ? 5 : 4;
  const whiteValue = widePrintColorSelect.value === "5+0" ? 1 : 0;
  const pricePerSquare = evaluateWideFormula(formulaRow.formula, materialPrice, inkPrice, area, printCoefficient, whiteValue);
  const baseTotal = pricePerSquare * area;
  const minimumOrderPrice = Number(settings.widePrint.rollMinimumOrder.price) || 0;
  const minimumApplied = minimumOrderPrice > 0 && baseTotal < minimumOrderPrice;
  const printBaseTotal = minimumApplied ? minimumOrderPrice : baseTotal;
  const minimumUplift = printBaseTotal - baseTotal;
  const productionCost = (materialPrice + inkPrice) * area;
  const extraPercent = [...document.querySelectorAll("[data-wide-order-work]:checked")]
    .reduce((sum, input) => {
      const work = settings.widePrint.rollExtraWorks[Number(input.value)];
      return sum + (Number(work?.percent) || 0);
    }, 0);
  const extraTotal = printBaseTotal * (extraPercent / 100);
  const subtotal = printBaseTotal + extraTotal;
  const clientPercent = minimumApplied
    ? 0
    : getWideClientType() === "b2c"
      ? Number(settings.widePrint.rollClientTypes.b2cPercent) || 0
      : Number(settings.widePrint.rollClientTypes.b2bPercent) || 0;
  const clientMarkupTotal = subtotal * (clientPercent / 100);
  const subtotalWithClient = subtotal + clientMarkupTotal;
  const urgencyTotal = wideUrgencySelect.value === "urgent" ? subtotalWithClient * 0.5 : 0;
  const totalBeforeAdjustment = subtotalWithClient + urgencyTotal;
  const adjustmentPercent = Math.max(Number(wideAdjustmentInput.value) || 0, 0);
  const adjustmentTotal = totalBeforeAdjustment * (adjustmentPercent / 100);
  const isSurcharge = wideAdjustmentTypeSelect.value === "surcharge";
  const calculatedTotal = isSurcharge
    ? totalBeforeAdjustment + adjustmentTotal
    : totalBeforeAdjustment - adjustmentTotal;
  const total = calculatedTotal;
  const isBelowCost = total <= productionCost;

  setResultValues({
    total: formatCurrency(total),
    cost: formatCurrency(productionCost),
    margin: formatCurrency(minimumUplift + extraTotal + clientMarkupTotal + urgencyTotal + (isSurcharge ? adjustmentTotal : -adjustmentTotal)),
    unit: formatCurrency(total / totalQuantity),
    minimum: `${formatNumber(area)} м²`,
    isBelowCost,
    minimumApplied
  });
}

function clearClothesOrderValidation() {
  orderValidationMessage.textContent = "";
  profitWarningMessage.textContent = "";
  document.querySelector("#totalPrice").classList.remove("is-danger");
  document.querySelectorAll("#clothesOrderForm .is-invalid, #clothesOrderForm .is-invalid-group").forEach((field) => {
    field.classList.remove("is-invalid");
    field.classList.remove("is-invalid-group");
  });
}

function markClothesInvalid(field, message, errors) {
  field.classList.add(field.matches("input, select") ? "is-invalid" : "is-invalid-group");
  errors.push(message);
}

function getClothesClientType() {
  if (clothesB2CClientMode.checked) {
    return "b2c";
  }

  if (clothesB2BClientMode.checked) {
    return "b2b";
  }

  return "";
}

function validateClothesOrder() {
  clearClothesOrderValidation();
  const errors = [];
  const quantity = Number(clothesQuantityInput.value);
  const customCarrierPrice = Number(clothesCustomCarrierPriceInput.value);

  if (!getClothesClientType()) {
    markClothesInvalid(clothesClientTypeOptions, "Не выбран тип клиента", errors);
  }

  if (!clothesCarrierSelect.value) {
    markClothesInvalid(clothesCarrierSelect, "Не выбран тип носителя", errors);
  }

  if (clothesCarrierSelect.value === "custom" && (clothesCustomCarrierPriceInput.value === "" || !Number.isFinite(customCarrierPrice) || customCarrierPrice < 0)) {
    markClothesInvalid(clothesCustomCarrierPriceInput, "Стоимость носителя должна быть не меньше 0", errors);
  }

  if (!quantity || quantity <= 0) {
    markClothesInvalid(clothesQuantityInput, "Не указан тираж", errors);
  }

  if (errors.length > 0) {
    orderValidationMessage.textContent = errors[0];
  }

  return errors.length === 0;
}

function getDigitalStandardProduct() {
  const index = digitalStandardProductSelect.value === "" ? -1 : Number(digitalStandardProductSelect.value);
  return settings.digitalPrint.standardProducts[index] || null;
}

function getDigitalStandardTier(product, quantity) {
  const tiers = Array.isArray(product?.priceTiers) ? product.priceTiers : [];
  return tiers.find((tier) => quantity >= Number(tier.from) && quantity <= Number(tier.to));
}

function validateDigitalStandardOrder() {
  clearOrderValidation();
  const errors = [];
  const quantity = Number(digitalStandardQuantityInput.value);

  if (!getDigitalClientType()) {
    markInvalid(digitalClientTypeOptions, "Не выбран тип клиента", errors);
  }

  if (!digitalStandardProductSelect.value) {
    markInvalid(digitalStandardProductSelect, "Не выбран продукт", errors);
  }

  if (!quantity || quantity <= 0) {
    markInvalid(digitalStandardQuantityInput, "Не указано количество", errors);
  }

  if (errors.length > 0) {
    orderValidationMessage.textContent = errors[0];
  }

  return errors.length === 0;
}

function calculateDigitalStandardOrder() {
  setResultLabels({
    cost: "Себестоимость",
    margin: "Скидка / наценка",
    unit: "Цена за единицу",
    minimum: "Количество"
  });

  if (!validateDigitalStandardOrder()) {
    setResultValues({
      total: formatCurrency(0),
      cost: formatCurrency(0),
      margin: formatCurrency(0),
      unit: formatCurrency(0),
      minimum: "0"
    });
    return;
  }

  const product = getDigitalStandardProduct();
  const quantity = Math.max(Number(digitalStandardQuantityInput.value) || 1, 1);
  const tier = getDigitalStandardTier(product, quantity);
  if (!tier) {
    orderValidationMessage.textContent = `Нет диапазона цены для количества ${quantity}`;
    setResultValues({
      total: formatCurrency(0),
      cost: formatCurrency(0),
      margin: formatCurrency(0),
      unit: formatCurrency(0),
      minimum: `${quantity} шт.`
    });
    return;
  }

  const baseQuantity = Math.max(Number(product.quantity) || 1, 1);
  const baseUnitPrice = (Number(product.basePrice) || 0) / baseQuantity;
  const unitPrice = tier.type === "discount"
    ? baseUnitPrice * (1 - ((Number(tier.value) || 0) / 100))
    : Number(tier.value) || 0;
  const total = Math.max(unitPrice, 0) * quantity;
  const baseTotal = baseUnitPrice * quantity;
  const adjustment = total - baseTotal;

  setResultValues({
    total: formatCurrency(total),
    cost: formatCurrency(0),
    margin: formatCurrency(adjustment),
    unit: formatCurrency(total / quantity),
    minimum: `${quantity} шт.`
  });
}

function calculateClothesOrder() {
  setResultLabels({
    cost: "Себестоимость",
    margin: "Доп. работы",
    unit: "Цена за изделие",
    minimum: "Тираж"
  });

  if (!clothesCostMode.checked) {
    clearClothesOrderValidation();
    setResultValues({
      total: formatCurrency(0),
      cost: formatCurrency(0),
      margin: formatCurrency(0),
      unit: formatCurrency(0),
      minimum: "0"
    });
    return;
  }

  if (!validateClothesOrder()) {
    setResultValues({
      total: formatCurrency(0),
      cost: formatCurrency(0),
      margin: formatCurrency(0),
      unit: formatCurrency(0),
      minimum: "0"
    });
    return;
  }

  const quantity = Number(clothesQuantityInput.value);
  const carrier = clothesCarrierSelect.value === "custom"
    ? null
    : settings.clothesPrint.carrierTypes[Number(clothesCarrierSelect.value)];
  const carrierPrice = clothesCarrierSelect.value === "custom"
    ? Number(clothesCustomCarrierPriceInput.value) || 0
    : Number(carrier?.price) || 0;
  const productionCost = carrierPrice * quantity;
  const extraPercent = [...document.querySelectorAll("[data-clothes-order-work]:checked")]
    .reduce((sum, input) => {
      const work = settings.clothesPrint.extraWorks[Number(input.value)];
      return sum + (Number(work?.percent) || 0);
    }, 0);
  const extraTotal = productionCost * (extraPercent / 100);
  const subtotal = productionCost + extraTotal;
  const clientPercent = getClothesClientType() === "b2c"
    ? Number(settings.clothesPrint.clientTypes.b2cPercent) || 0
    : Number(settings.clothesPrint.clientTypes.b2bPercent) || 0;
  const clientMarkupTotal = subtotal * (clientPercent / 100);
  const total = subtotal + clientMarkupTotal;
  const isBelowCost = total <= productionCost;

  setResultValues({
    total: formatCurrency(total),
    cost: formatCurrency(productionCost),
    margin: formatCurrency(extraTotal + clientMarkupTotal),
    unit: formatCurrency(total / quantity),
    minimum: `${quantity} шт.`,
    isBelowCost
  });
}

function calculateDigitalOrder() {
  if (digitalStandardMode.checked) {
    calculateDigitalStandardOrder();
    return;
  }

  setResultLabels({
    cost: "Себестоимость",
    margin: "Доп. работы",
    unit: "Цена за изделие",
    minimum: "Листов SRA3"
  });

  if (!digitalCostMode.checked) {
    clearOrderValidation();
    setResultValues({
      total: formatCurrency(0),
      cost: formatCurrency(0),
      margin: formatCurrency(0),
      unit: formatCurrency(0),
      minimum: "0"
    });
    return;
  }

  if (!validateDigitalOrder()) {
    setResultValues({
      total: formatCurrency(0),
      cost: formatCurrency(0),
      margin: formatCurrency(0),
      unit: formatCurrency(0),
      minimum: "0"
    });
    return;
  }

  const width = Math.max(Number(digitalWidthInput.value) || 1, 1);
  const height = Math.max(Number(digitalHeightInput.value) || 1, 1);
  const printWidth = width + 6;
  const printHeight = height + 6;
  const quantity = Math.max(Number(digitalQuantityInput.value) || 1, 1);
  const itemsPerSheet = getItemsPerSr3Sheet(printWidth, printHeight);
  const sheetCount = Math.ceil(quantity / itemsPerSheet);
  const formulaRow = getQuantityFormula(sheetCount);
  if (!formulaRow) {
    orderValidationMessage.textContent = `Нет формулы для ${sheetCount} листов SRA3`;
    setResultValues({
      total: formatCurrency(0),
      cost: formatCurrency(0),
      margin: formatCurrency(0),
      unit: formatCurrency(0),
      minimum: `${sheetCount} лист. / ${itemsPerSheet} шт. на лист`
    });
    return;
  }

  const clickSettings = settings.digitalPrint.clickPrices[0] || { click40: 0, click44: 0 };
  const clickPrice = digitalPrintTypeSelect.value === "two-sided"
    ? Number(clickSettings.click44) || 0
    : Number(clickSettings.click40) || 0;
  const selectedMaterialIndex = digitalOrderMaterialSelect.value === "" ? -1 : Number(digitalOrderMaterialSelect.value);
  const material = settings.digitalPrint.materials[selectedMaterialIndex] || { sr3Price: 0 };
  const materialPrice = Number(material.sr3Price) || 0;
  const sheetPrice = formulaRow
    ? evaluateSheetFormula(formulaRow.formula, clickPrice, materialPrice)
    : 0;
  const baseTotal = sheetPrice * sheetCount;
  const minimumOrderPrice = Number(settings.digitalPrint.minimumOrder.price) || 0;
  const minimumApplied = minimumOrderPrice > 0 && baseTotal < minimumOrderPrice;
  const printBaseTotal = minimumApplied ? minimumOrderPrice : baseTotal;
  const minimumUplift = printBaseTotal - baseTotal;
  const productionCost = (clickPrice + materialPrice) * sheetCount * 3;
  const extraPercent = [...document.querySelectorAll("[data-digital-order-work]:checked")]
    .reduce((sum, input) => {
      const work = settings.digitalPrint.extraWorks[Number(input.value)];
      return sum + (Number(work?.percent) || 0);
    }, 0);
  const extraTotal = printBaseTotal * (extraPercent / 100);
  const subtotal = printBaseTotal + extraTotal;
  const clientPercent = minimumApplied
    ? 0
    : getDigitalClientType() === "b2c"
      ? Number(settings.digitalPrint.clientTypes.b2cPercent) || 0
      : Number(settings.digitalPrint.clientTypes.b2bPercent) || 0;
  const clientMarkupTotal = subtotal * (clientPercent / 100);
  const subtotalWithClient = subtotal + clientMarkupTotal;
  const urgencyTotal = digitalUrgencySelect.value === "urgent" ? subtotalWithClient * 0.5 : 0;
  const totalBeforeDiscount = subtotalWithClient + urgencyTotal;
  const adjustmentPercent = Math.max(Number(digitalDiscountInput.value) || 0, 0);
  const adjustmentTotal = totalBeforeDiscount * (adjustmentPercent / 100);
  const isSurcharge = digitalAdjustmentTypeSelect.value === "surcharge";
  const calculatedTotal = isSurcharge
    ? totalBeforeDiscount + adjustmentTotal
    : totalBeforeDiscount - adjustmentTotal;
  const total = calculatedTotal;
  const isBelowCost = total <= productionCost;

  setResultValues({
    total: formatCurrency(total),
    cost: formatCurrency(productionCost),
    margin: formatCurrency(minimumUplift + extraTotal + clientMarkupTotal + urgencyTotal + (isSurcharge ? adjustmentTotal : -adjustmentTotal)),
    unit: formatCurrency(total / quantity),
    minimum: `${sheetCount} лист. / ${itemsPerSheet} шт. на лист`,
    isBelowCost,
    minimumApplied
  });
}

function calculateOrder() {
  if (activeDepartment === DIGITAL_CATEGORY) {
    calculateDigitalOrder();
    return;
  }

  if (activeDepartment === WIDE_CATEGORY) {
    calculateWideOrder();
    return;
  }

  if (activeDepartment === CLOTHES_CATEGORY) {
    calculateClothesOrder();
    return;
  }

  clearOrderValidation();
  setResultLabels({
    cost: "Себестоимость",
    margin: "Наценка",
    unit: "Цена за единицу",
    minimum: "Минимальный заказ"
  });

  const product = settings.products.find((item) => item.id === productSelect.value) || settings.products[0];
  const material = settings.materials.find((item) => item.id === materialSelect.value) || settings.materials[0];
  const finish = settings.finishes.find((item) => item.id === finishSelect.value) || settings.finishes[0];

  if (!productSelect.value || productSelect.disabled) {
    setResultValues({
      total: formatCurrency(0),
      cost: formatCurrency(0),
      margin: formatCurrency(0),
      unit: formatCurrency(0),
      minimum: formatCurrency(0)
    });
    return;
  }

  const quantity = Math.max(Number(quantityInput.value) || 1, 1);
  const area = Math.max(Number(areaInput.value) || 0, 0);
  const urgency = Number(urgencySelect.value) || 1;
  const areaFactor = area > 0 ? area : 1;
  const productCost = product.base * quantity * areaFactor;
  const materialCost = material.price * quantity * areaFactor;
  const finishCost = finish.type === "за единицу" ? finish.price * quantity : finish.price;
  const cost = productCost + materialCost + finishCost;
  const priced = cost * product.margin * urgency;
  const total = Math.max(priced, product.minimum);
  const margin = Math.max(total - cost, 0);

  setResultValues({
    total: formatCurrency(total),
    cost: formatCurrency(cost),
    margin: formatCurrency(margin),
    unit: formatCurrency(total / quantity),
    minimum: formatCurrency(product.minimum)
  });
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const login = document.querySelector("#loginInput").value.trim();
  const password = document.querySelector("#passwordInput").value;
  const user = findLoginUser(login, password);

  if (user) {
    loginError.textContent = "";
    sessionStorage.setItem(AUTH_STORAGE_KEY, "true");
    sessionStorage.setItem(CURRENT_USER_STORAGE_KEY, user.login);
    showDashboard();
    return;
  }

  loginError.textContent = "Неверный логин или пароль.";
});

logoutButton.addEventListener("click", () => {
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
  sessionStorage.removeItem(CURRENT_USER_STORAGE_KEY);
  showLogin();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
    languageMenuList?.classList.add("is-hidden");
    languageMenuButton?.setAttribute("aria-expanded", "false");
  });
});

languageMenuButton?.addEventListener("click", () => {
  const isOpen = !languageMenuList.classList.contains("is-hidden");
  languageMenuList.classList.toggle("is-hidden", isOpen);
  languageMenuButton.setAttribute("aria-expanded", String(!isOpen));
});

userSettingsButton?.addEventListener("click", () => {
  openUserSettingsModal();
});

closeUserSettingsModalButton?.addEventListener("click", () => {
  closeUserSettingsModal();
});

saveUserSettingsButton?.addEventListener("click", () => {
  saveUserSettings();
});

toggleUserSettingsPasswordButton?.addEventListener("click", () => {
  userSettingsPasswordInput.type = userSettingsPasswordInput.type === "password" ? "text" : "password";
  updatePasswordToggleState();
  userSettingsPasswordInput.focus();
});

sidebarToggleButton?.addEventListener("click", () => {
  toggleSidebarCollapsed();
});

mobileMenuButton?.addEventListener("click", () => {
  openMobileSidebar();
});

mobileSidebarBackdrop?.addEventListener("click", () => {
  closeMobileSidebar();
});

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    if (topTabDragJustFinished) {
      topTabDragJustFinished = false;
      return;
    }

    if (!canAccessTopLevelTab(button.dataset.tab)) {
      activateTopLevelTab("order");
      return;
    }

    if (discardPendingDeletesWithWarning() || discardPendingWideDeletesWithWarning() || discardPendingClothesDeletesWithWarning() || discardPendingUserDeletesWithWarning() || discardPendingClientsWithWarning()) {
      return;
    }

    activateTopLevelTab(button.dataset.tab);
    closeMobileSidebar();
  });
});

categorySelect.addEventListener("change", () => {
  activeDepartment = categorySelect.value;
  renderCategoryTabs();
  renderTables();
  renderProductOptions();
  renderOrderLayout();
  calculateOrder();
});

[productSelect, materialSelect, finishSelect, quantityInput, areaInput, urgencySelect].forEach((field) => {
  field.addEventListener("input", calculateOrder);
  field.addEventListener("change", calculateOrder);
});

[
  digitalStandardProductSelect,
  digitalStandardQuantityInput,
  digitalOrderMaterialTypeSelect,
  digitalOrderMaterialSelect,
  digitalWidthInput,
  digitalHeightInput,
  digitalQuantityInput,
  digitalPrintTypeSelect,
  digitalUrgencySelect,
  digitalAdjustmentTypeSelect,
  digitalDiscountInput
].forEach((field) => {
  field.addEventListener("input", calculateOrder);
  field.addEventListener("change", () => {
    if (field === digitalOrderMaterialTypeSelect) {
      renderDigitalOrderSelectors();
    }

    calculateOrder();
  });
});

[digitalB2BClientMode, digitalB2CClientMode].forEach((field) => {
  field.addEventListener("change", () => {
    if (field === digitalB2BClientMode && digitalB2BClientMode.checked) {
      digitalB2CClientMode.checked = false;
    }

    if (field === digitalB2CClientMode && digitalB2CClientMode.checked) {
      digitalB2BClientMode.checked = false;
    }

    calculateOrder();
  });
});

[wideRollPrintMode, wideSheetPrintMode].forEach((field) => {
  field.addEventListener("change", () => {
    if (field === wideRollPrintMode && wideRollPrintMode.checked) {
      wideSheetPrintMode.checked = false;
    }

    if (field === wideSheetPrintMode && wideSheetPrintMode.checked) {
      wideRollPrintMode.checked = false;
    }

    if (!wideRollPrintMode.checked && !wideSheetPrintMode.checked) {
      field.checked = true;
    }

    renderOrderLayout();
    calculateOrder();
  });
});

[
  wideOrderMaterialSelect,
  wideCustomMaterialPriceInput,
  widePrintColorSelect,
  wideUrgencySelect,
  wideAdjustmentTypeSelect,
  wideAdjustmentInput
].forEach((field) => {
  field.addEventListener("input", calculateOrder);
  field.addEventListener("change", () => {
    if (field === wideOrderMaterialSelect) {
      updateWideCustomMaterialField();
    }

    calculateOrder();
  });
});

[wideB2BClientMode, wideB2CClientMode].forEach((field) => {
  field.addEventListener("change", () => {
    if (field === wideB2BClientMode && wideB2BClientMode.checked) {
      wideB2CClientMode.checked = false;
    }

    if (field === wideB2CClientMode && wideB2CClientMode.checked) {
      wideB2BClientMode.checked = false;
    }

    calculateOrder();
  });
});

[clothesCarrierSelect, clothesCustomCarrierPriceInput, clothesQuantityInput].forEach((field) => {
  field.addEventListener("input", calculateOrder);
  field.addEventListener("change", () => {
    if (field === clothesCarrierSelect) {
      updateClothesCustomCarrierPriceVisibility();
    }

    calculateOrder();
  });
});

[clothesB2BClientMode, clothesB2CClientMode].forEach((field) => {
  field.addEventListener("change", () => {
    if (field === clothesB2BClientMode && clothesB2BClientMode.checked) {
      clothesB2CClientMode.checked = false;
    }

    if (field === clothesB2CClientMode && clothesB2CClientMode.checked) {
      clothesB2BClientMode.checked = false;
    }

    calculateOrder();
  });
});

[digitalCostMode, digitalStandardMode].forEach((field) => {
  field.addEventListener("change", () => {
    if (field === digitalCostMode && digitalCostMode.checked) {
      digitalStandardMode.checked = false;
    }

    if (field === digitalStandardMode && digitalStandardMode.checked) {
      digitalCostMode.checked = false;
    }

    if (!digitalCostMode.checked && !digitalStandardMode.checked) {
      field.checked = true;
    }

    renderOrderLayout();
    calculateOrder();
  });
});

[clothesCostMode, clothesStandardMode].forEach((field) => {
  field.addEventListener("change", () => {
    if (field === clothesCostMode && clothesCostMode.checked) {
      clothesStandardMode.checked = false;
    }

    if (field === clothesStandardMode && clothesStandardMode.checked) {
      clothesCostMode.checked = false;
    }

    if (!clothesCostMode.checked && !clothesStandardMode.checked) {
      field.checked = true;
    }

    renderOrderLayout();
    calculateOrder();
  });
});

document.addEventListener("input", (event) => {
  const input = event.target;
  if (input.matches("[data-wide-size-field]")) {
    calculateOrder();
    return;
  }

  if (input.matches("[data-clothes-list]")) {
    const list = input.dataset.clothesList;
    const index = Number(input.dataset.index);
    const field = input.dataset.field;
    settings.clothesPrint[list][index][field] = input.type === "number" ? Number(input.value) || 0 : input.value;
    saveSettings();
    renderClothesOrderSelectors();
    calculateOrder();
    return;
  }

  if (input.matches("[data-clothes-client-type]")) {
    const field = input.dataset.clothesClientType;
    settings.clothesPrint.clientTypes[field] = Number(input.value) || 0;
    saveSettings();
    calculateOrder();
    return;
  }

  if (input.matches("[data-wide-minimum-order]")) {
    settings.widePrint.rollMinimumOrder.price = Number(input.value) || 0;
    saveSettings();
    calculateOrder();
    return;
  }

  if (input.matches("[data-wide-list]")) {
    const list = input.dataset.wideList;
    const index = Number(input.dataset.index);
    const field = input.dataset.field;
    settings.widePrint[list][index][field] = input.type === "number" ? Number(input.value) || 0 : input.value;
    saveSettings();
    renderWideOrderSelectors();
    calculateOrder();
    return;
  }

  if (input.matches("[data-wide-ink-price]")) {
    settings.widePrint.rollInk.price = Number(input.value) || 0;
    saveSettings();
    calculateOrder();
    return;
  }

  if (input.matches("[data-wide-client-type]")) {
    const field = input.dataset.wideClientType;
    settings.widePrint.rollClientTypes[field] = Number(input.value) || 0;
    saveSettings();
    calculateOrder();
    return;
  }

  if (input.matches("[data-client-repeatable]")) {
    const listName = input.dataset.clientRepeatable;
    const index = Number(input.dataset.index);
    if (clientDraft?.[listName]) {
      clientDraft[listName][index] = input.value;
    }
    showClientsStatus("");
    return;
  }

  if ([clientNameInput, clientRegistrationInput, clientVatInput, clientAddressInput].includes(input)) {
    updateClientDraftFromModal();
    showClientsStatus("");
    return;
  }

  if (input.matches("[data-role-field]")) {
    const role = getAccessRoles().find((item) => item.id === input.dataset.roleId);
    if (role && role.id !== "superadmin" && role.id !== "admin") {
      role.label = input.value;
      renderUsersTable();
      renderPermissions();
      showRolesStatus("");
    }
    return;
  }

  if (input.matches("[data-permission-key]")) {
    const roleId = input.dataset.permissionRole;
    const key = input.dataset.permissionKey;
    if (roleId !== "superadmin" && roleId !== "admin") {
      settings.access.permissions[roleId] = settings.access.permissions[roleId] || createAllPermissions(false);
      settings.access.permissions[roleId][key] = input.checked;
      showPermissionsStatus("");
    }
    return;
  }

  if (input.matches("[data-user-field]")) {
    const index = Number(input.dataset.index);
    const field = input.dataset.userField;
    const previousLogin = settings.users[index].login;
    settings.users[index][field] = input.value;
    if (field === "login" && previousLogin === sessionStorage.getItem(CURRENT_USER_STORAGE_KEY)) {
      sessionStorage.setItem(CURRENT_USER_STORAGE_KEY, input.value);
    }
    updateTopbarUser();
    applyLanguage();
    usersSaveStatus.textContent = "";
    usersSaveStatus.classList.remove("is-error");
    return;
  }

  if (input.matches("[data-digital-client-type]")) {
    const field = input.dataset.digitalClientType;
    settings.digitalPrint.clientTypes[field] = Number(input.value) || 0;
    saveSettings();
    calculateOrder();
    return;
  }

  if (input.matches("[data-digital-minimum-order]")) {
    settings.digitalPrint.minimumOrder.price = Number(input.value) || 0;
    saveSettings();
    calculateOrder();
    return;
  }

  if (input.matches("[data-digital-standard-tier]")) {
    const productIndex = Number(input.dataset.productIndex);
    const tierIndex = Number(input.dataset.tierIndex);
    const field = input.dataset.field;
    const tier = settings.digitalPrint.standardProducts[productIndex]?.priceTiers?.[tierIndex];
    if (!tier) {
      return;
    }

    tier[field] = input.type === "number" ? Number(input.value) || 0 : input.value;
    saveSettings();
    return;
  }

  if (input.matches("[data-digital-list]")) {
    const list = input.dataset.digitalList;
    const index = Number(input.dataset.index);
    const field = input.dataset.field;
    const value = input.type === "number" ? Number(input.value) || 0 : input.value;

    settings.digitalPrint[list][index][field] = value;
    if (list !== "materials") {
      saveSettings();
    }
    if (list === "materials") {
      clearDigitalSectionValidation("materials");
      const status = document.querySelector('[data-save-status="materials"]');
      if (status) {
        status.textContent = "";
        status.classList.remove("is-error");
      }
    }
    renderDigitalOrderSelectors();
    return;
  }

  if (!input.matches("[data-list]")) {
    return;
  }

  const list = input.dataset.list;
  const index = Number(input.dataset.index);
  const field = input.dataset.field;
  const value = input.type === "number" ? Number(input.value) || 0 : input.value;

  settings[list][index][field] = value;
  saveSettings();
  renderSelectors();
  renderTables();
  calculateOrder();
});

document.addEventListener("change", (event) => {
  const input = event.target;
  if (input === clientImportFileInput) {
    const file = clientImportFileInput.files?.[0];
    if (!file) {
      return;
    }

    parseClientImportFile(file)
      .then(() => renderClientImportMapping())
      .catch((error) => {
        clientImportValidation.textContent = error.message || "Не удалось прочитать файл.";
        clientImportMappingSection.classList.add("is-hidden");
        clientImportMappingGrid.innerHTML = "";
      });
    return;
  }

  if (input.matches("[data-user-theme-option]")) {
    document.querySelectorAll("[data-user-theme-option]").forEach((themeInput) => {
      themeInput.checked = themeInput === input;
    });
    if (!input.checked) {
      input.checked = true;
    }
    updateThemeOptionCards();
    return;
  }

  if (input.matches("[data-app-language]")) {
    const language = input.dataset.appLanguage;
    settings.appConfig.enabledLanguages[language] = input.checked;
    if (!SUPPORTED_LANGUAGES.some((item) => settings.appConfig.enabledLanguages[item])) {
      settings.appConfig.enabledLanguages[language] = true;
      input.checked = true;
    }
    if (!getEnabledLanguages().includes(currentLanguage)) {
      currentLanguage = getEnabledLanguages()[0];
    }
    appSettingsSaveStatus.textContent = "";
    renderAppSettings();
    updateLanguageMenu();
    applyLanguage();
    return;
  }

  if (input.matches("[data-app-block]")) {
    settings.appConfig.enabledBlocks[input.dataset.appBlock] = input.checked;
    appSettingsSaveStatus.textContent = "";
    applyRoleAccess();
    renderDigitalSettingsTabs();
    renderWideSettingsTabs();
    renderClothesSettingsTabs();
    renderAppSettings();
    applyLanguage();
    return;
  }

  if (input === appMaxUsersInput) {
    settings.appConfig.maxUsers = Math.max(1, Math.floor(Number(input.value) || 1));
    appSettingsSaveStatus.textContent = "";
    return;
  }

  if (input.matches("[data-select-client]")) {
    const index = Number(input.dataset.selectClient);
    if (input.checked) {
      selectedClientIndexes.add(index);
    } else {
      selectedClientIndexes.delete(index);
    }
    renderClients();
    return;
  }

  if (input.matches("#selectAllClientsCheckbox")) {
    getSortedClients().forEach(({ index }) => {
      if (input.checked) {
        selectedClientIndexes.add(index);
      } else {
        selectedClientIndexes.delete(index);
      }
    });
    renderClients();
    return;
  }

  if (input.matches("[data-client-column]")) {
    const selected = Array.from(document.querySelectorAll("[data-client-column]:checked")).map((checkbox) => checkbox.dataset.clientColumn);
    saveVisibleClientColumns(selected.length > 0 ? selected : CLIENT_COLUMNS.map((column) => column.key));
    renderClients();
    return;
  }

  if (input === clientLegalType || input === clientNaturalType) {
    if (input === clientLegalType && input.checked) {
      clientNaturalType.checked = false;
    }
    if (input === clientNaturalType && input.checked) {
      clientLegalType.checked = false;
    }
    if (!clientLegalType.checked && !clientNaturalType.checked) {
      input.checked = true;
    }
    if (clientDraft) {
      clientDraft.type = clientNaturalType.checked ? "natural" : "legal";
    }
    return;
  }

  if (input.matches("[data-digital-standard-tier]")) {
    const productIndex = Number(input.dataset.productIndex);
    const tierIndex = Number(input.dataset.tierIndex);
    const field = input.dataset.field;
    const tier = settings.digitalPrint.standardProducts[productIndex]?.priceTiers?.[tierIndex];
    if (tier) {
      tier[field] = input.type === "number" ? Number(input.value) || 0 : input.value;
      saveSettings();
      if (field === "type") {
        renderDigitalTables();
      }
    }
    return;
  }

  if (!input.matches("[data-user-field]")) {
    return;
  }

  const index = Number(input.dataset.index);
  const field = input.dataset.userField;
  const previousLogin = settings.users[index].login;
  settings.users[index][field] = input.value;
  if (field === "login" && previousLogin === sessionStorage.getItem(CURRENT_USER_STORAGE_KEY)) {
    sessionStorage.setItem(CURRENT_USER_STORAGE_KEY, input.value);
  }
  updateTopbarUser();
  applyLanguage();
  usersSaveStatus.textContent = "";
  usersSaveStatus.classList.remove("is-error");
});

document.addEventListener("dragstart", (event) => {
  const topTab = event.target.closest(".tab-button");
  if (topTab) {
    draggedTopTab = topTab.dataset.tab;
    topTab.classList.add("is-dragging");
    event.dataTransfer.effectAllowed = "move";
    return;
  }

  const clothesHandle = event.target.closest("[data-drag-clothes-row]");
  if (clothesHandle) {
    const list = clothesHandle.dataset.dragClothesRow;
    if (pendingClothesDeletes[list]?.size) {
      event.preventDefault();
      showClothesStatus(list, "Сначала сохраните или отмените удаление строки.", true);
      return;
    }

    draggedClothesRow = {
      list,
      index: Number(clothesHandle.dataset.index)
    };
    clothesHandle.closest("tr")?.classList.add("is-dragging");
    event.dataTransfer.effectAllowed = "move";
    return;
  }

  const wideHandle = event.target.closest("[data-drag-wide-row]");
  if (wideHandle) {
    const list = wideHandle.dataset.dragWideRow;
    if (pendingWideDeletes[list]?.size) {
      event.preventDefault();
      showWideStatus(list, "Сначала сохраните или отмените удаление строки.", true);
      return;
    }

    draggedWideRow = {
      list,
      index: Number(wideHandle.dataset.index)
    };
    wideHandle.closest("tr")?.classList.add("is-dragging");
    event.dataTransfer.effectAllowed = "move";
    return;
  }

  const userHandle = event.target.closest("[data-drag-user-row]");
  if (userHandle) {
    if (hasPendingUserDeletes()) {
      event.preventDefault();
      showUsersStatus("Сначала сохраните или отмените удаление пользователя.", true);
      return;
    }

    draggedUserRow = Number(userHandle.dataset.index);
    userHandle.closest("tr")?.classList.add("is-dragging");
    event.dataTransfer.effectAllowed = "move";
    return;
  }

  const handle = event.target.closest("[data-drag-digital-row]");
  if (!handle) {
    event.preventDefault();
    return;
  }

  const list = handle.dataset.dragDigitalRow;
  const section = getSectionByList(list);
  if (pendingDigitalDeletes[list]?.size) {
    event.preventDefault();
    showSectionError(section, "Сначала сохраните или отмените удаление строки.");
    return;
  }

  draggedDigitalRow = {
    list,
    index: Number(handle.dataset.index)
  };
  handle.closest("tr")?.classList.add("is-dragging");
  event.dataTransfer.effectAllowed = "move";
});

document.addEventListener("dragover", (event) => {
  const topTabTarget = event.target.closest(".tab-button");
  if (draggedTopTab && topTabTarget) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    document.querySelectorAll(".is-drag-over").forEach((row) => row.classList.remove("is-drag-over"));
    topTabTarget.classList.add("is-drag-over");
    return;
  }

  const clothesTargetRow = event.target.closest("[data-clothes-row-list]");
  if (draggedClothesRow && clothesTargetRow && clothesTargetRow.dataset.clothesRowList === draggedClothesRow.list) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    document.querySelectorAll(".is-drag-over").forEach((row) => row.classList.remove("is-drag-over"));
    clothesTargetRow.classList.add("is-drag-over");
    return;
  }

  const wideTargetRow = event.target.closest("[data-wide-row-list]");
  if (draggedWideRow && wideTargetRow && wideTargetRow.dataset.wideRowList === draggedWideRow.list) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    document.querySelectorAll(".is-drag-over").forEach((row) => row.classList.remove("is-drag-over"));
    wideTargetRow.classList.add("is-drag-over");
    return;
  }

  const userTargetRow = event.target.closest("[data-user-row]");
  if (draggedUserRow !== null && userTargetRow) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    document.querySelectorAll(".is-drag-over").forEach((row) => row.classList.remove("is-drag-over"));
    userTargetRow.classList.add("is-drag-over");
    return;
  }

  const targetRow = event.target.closest("[data-digital-row-list]");
  if (!draggedDigitalRow || !targetRow || targetRow.dataset.digitalRowList !== draggedDigitalRow.list) {
    return;
  }

  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  document.querySelectorAll(".is-drag-over").forEach((row) => row.classList.remove("is-drag-over"));
  targetRow.classList.add("is-drag-over");
});

document.addEventListener("drop", (event) => {
  const topTabTarget = event.target.closest(".tab-button");
  if (draggedTopTab && topTabTarget) {
    event.preventDefault();
    moveTopTab(draggedTopTab, topTabTarget.dataset.tab);
    draggedTopTab = null;
    topTabDragJustFinished = true;
    window.setTimeout(() => {
      topTabDragJustFinished = false;
    }, 250);
    document.querySelectorAll(".is-dragging, .is-drag-over").forEach((row) => {
      row.classList.remove("is-dragging", "is-drag-over");
    });
    return;
  }

  const clothesTargetRow = event.target.closest("[data-clothes-row-list]");
  if (draggedClothesRow && clothesTargetRow && clothesTargetRow.dataset.clothesRowList === draggedClothesRow.list) {
    event.preventDefault();
    const targetIndex = Number(clothesTargetRow.dataset.index);
    if (moveClothesRow(draggedClothesRow.list, draggedClothesRow.index, targetIndex)) {
      saveSettings();
      renderClothesTables();
      renderClothesOrderSelectors();
      calculateOrder();
      showClothesStatus(draggedClothesRow.list, "Сохранено");
    }

    draggedClothesRow = null;
    return;
  }

  const wideTargetRow = event.target.closest("[data-wide-row-list]");
  if (draggedWideRow && wideTargetRow && wideTargetRow.dataset.wideRowList === draggedWideRow.list) {
    event.preventDefault();
    const targetIndex = Number(wideTargetRow.dataset.index);
    if (moveWideRow(draggedWideRow.list, draggedWideRow.index, targetIndex)) {
      saveSettings();
      renderWideTables();
      renderWideOrderSelectors();
      calculateOrder();
      showWideStatus(draggedWideRow.list, "Сохранено");
    }

    draggedWideRow = null;
    return;
  }

  const userTargetRow = event.target.closest("[data-user-row]");
  if (draggedUserRow !== null && userTargetRow) {
    event.preventDefault();
    const targetIndex = Number(userTargetRow.dataset.index);
    if (moveUserRow(draggedUserRow, targetIndex)) {
      saveSettings();
      renderUsersTable();
      showUsersStatus("Сохранено");
    }

    draggedUserRow = null;
    return;
  }

  const targetRow = event.target.closest("[data-digital-row-list]");
  if (!draggedDigitalRow || !targetRow || targetRow.dataset.digitalRowList !== draggedDigitalRow.list) {
    return;
  }

  event.preventDefault();
  const list = draggedDigitalRow.list;
  const targetIndex = Number(targetRow.dataset.index);
  const section = getSectionByList(list);

  if (moveDigitalRow(list, draggedDigitalRow.index, targetIndex)) {
    if (list === "materials") {
      showSectionMessage(section, "Порядок изменен. Нажмите «Сохранить».");
    } else {
      saveSettings();
      showSaveStatus(section);
    }

    renderDigitalTables();
    renderDigitalOrderSelectors();
    calculateOrder();
  }

  draggedDigitalRow = null;
});

document.addEventListener("dragend", () => {
  draggedTopTab = null;
  draggedDigitalRow = null;
  draggedUserRow = null;
  draggedWideRow = null;
  draggedClothesRow = null;
  document.querySelectorAll(".is-dragging, .is-drag-over").forEach((row) => {
    row.classList.remove("is-dragging", "is-drag-over");
  });
});

document.addEventListener("click", (event) => {
  if (languageMenuList && !languageMenuList.classList.contains("is-hidden") && !event.target.closest("#languageMenu")) {
    languageMenuList.classList.add("is-hidden");
    languageMenuButton?.setAttribute("aria-expanded", "false");
  }

  if (event.target.closest("#addWideSizeRowButton")) {
    wideSizeRowsTable.insertAdjacentHTML("beforeend", createWideSizeRow());
    applyLanguage();
    calculateOrder();
    return;
  }

  const deleteWideSizeRowButton = event.target.closest("[data-delete-wide-size-row]");
  if (deleteWideSizeRowButton) {
    deleteWideSizeRowButton.closest("[data-wide-size-row]")?.remove();
    if (getWideSizeRows().length === 0) {
      wideSizeRowsTable.insertAdjacentHTML("beforeend", createWideSizeRow());
    }
    applyLanguage();
    calculateOrder();
    return;
  }

  if (event.target.matches("[data-digital-order-work]")) {
    calculateOrder();
    return;
  }

  if (event.target.matches("[data-wide-order-work]")) {
    calculateOrder();
    return;
  }

  if (event.target.matches("[data-clothes-order-work]")) {
    calculateOrder();
    return;
  }

  if (event.target === wideSettingsRollMode || event.target === wideSettingsSheetMode) {
    if (event.target === wideSettingsRollMode && wideSettingsRollMode.checked) {
      wideSettingsSheetMode.checked = false;
    }

    if (event.target === wideSettingsSheetMode && wideSettingsSheetMode.checked) {
      wideSettingsRollMode.checked = false;
    }

    if (!wideSettingsRollMode.checked && !wideSettingsSheetMode.checked) {
      event.target.checked = true;
    }

    renderWideTables();
    return;
  }

  const addWideRowButton = event.target.closest("[data-add-wide-row]");
  if (addWideRowButton) {
    const list = addWideRowButton.dataset.addWideRow;
    const rows = {
      rollStandardProducts: { category: WIDE_CATEGORY, name: "Untitled", basePrice: 0, quantity: 1 },
      rollMaterials: { name: "", price: 0 },
      rollFormulas: { from: 1, to: 1, formula: "" },
      rollExtraWorks: { name: "", percent: 0 }
    };
    settings.widePrint[list].push({ ...rows[list] });
    saveSettings();
    renderWideTables();
    renderWideOrderSelectors();
    calculateOrder();
    return;
  }

  const deleteWideRowButton = event.target.closest("[data-delete-wide-row]");
  if (deleteWideRowButton) {
    const list = deleteWideRowButton.dataset.deleteWideRow;
    pendingWideDeletes[list].add(Number(deleteWideRowButton.dataset.index));
    renderWideTables();
    renderWideOrderSelectors();
    calculateOrder();
    showWideStatus(list, "Строка отмечена на удаление. Нажмите «Сохранить».", true);
    return;
  }

  const undoWideDeleteButton = event.target.closest("[data-undo-wide-delete]");
  if (undoWideDeleteButton) {
    const list = undoWideDeleteButton.dataset.undoWideDelete;
    pendingWideDeletes[list].clear();
    renderWideTables();
    renderWideOrderSelectors();
    calculateOrder();
    showWideStatus(list, "Удаление отменено.");
    return;
  }

  const saveWideSectionButton = event.target.closest("[data-save-wide-section]");
  if (saveWideSectionButton) {
    const section = saveWideSectionButton.dataset.saveWideSection;
    applyPendingWideDeletes(section);
    saveSettings();
    renderWideTables();
    renderWideOrderSelectors();
    calculateOrder();
    showWideStatus(section, "Сохранено");
    return;
  }

  const addClothesRowButton = event.target.closest("[data-add-clothes-row]");
  if (addClothesRowButton) {
    const list = addClothesRowButton.dataset.addClothesRow;
    const rows = {
      standardProducts: { category: CLOTHES_CATEGORY, name: "Untitled", basePrice: 0, quantity: 1 },
      quantityFormulas: { from: 1, to: 1, formula: "" },
      carrierTypes: { name: "", price: 0 },
      extraWorks: { name: "", percent: 0 }
    };
    settings.clothesPrint[list].push({ ...rows[list] });
    saveSettings();
    renderClothesTables();
    renderClothesOrderSelectors();
    calculateOrder();
    return;
  }

  const deleteClothesRowButton = event.target.closest("[data-delete-clothes-row]");
  if (deleteClothesRowButton) {
    const list = deleteClothesRowButton.dataset.deleteClothesRow;
    pendingClothesDeletes[list].add(Number(deleteClothesRowButton.dataset.index));
    renderClothesTables();
    renderClothesOrderSelectors();
    calculateOrder();
    showClothesStatus(list, "Строка отмечена на удаление. Нажмите «Сохранить».", true);
    return;
  }

  const undoClothesDeleteButton = event.target.closest("[data-undo-clothes-delete]");
  if (undoClothesDeleteButton) {
    const list = undoClothesDeleteButton.dataset.undoClothesDelete;
    pendingClothesDeletes[list].clear();
    renderClothesTables();
    renderClothesOrderSelectors();
    calculateOrder();
    showClothesStatus(list, "Удаление отменено.");
    return;
  }

  const saveClothesSectionButton = event.target.closest("[data-save-clothes-section]");
  if (saveClothesSectionButton) {
    const section = saveClothesSectionButton.dataset.saveClothesSection;
    applyPendingClothesDeletes(section);
    saveSettings();
    renderClothesTables();
    renderClothesOrderSelectors();
    calculateOrder();
    showClothesStatus(section, "Сохранено");
    return;
  }

  const userAdminTab = event.target.closest("[data-user-admin-subtab]");
  if (userAdminTab) {
    activeUserAdminTab = userAdminTab.dataset.userAdminSubtab;
    renderUserAdminTabs();
    return;
  }

  if (event.target.closest("#addRoleButton")) {
    const role = { id: createRoleId(), label: "" };
    settings.access.roles.push(role);
    settings.access.permissions[role.id] = createAllPermissions(false);
    renderRolesTable();
    renderUsersTable();
    renderPermissions();
    showRolesStatus("Новая категория добавлена. Заполните название и нажмите «Сохранить».");
    return;
  }

  const deleteRoleButton = event.target.closest("[data-delete-role]");
  if (deleteRoleButton) {
    const roleId = deleteRoleButton.dataset.deleteRole;
    if (roleId === "superadmin" || roleId === "admin") {
      showRolesStatus("В приложении должна остаться категория администратора.", true);
      return;
    }
    if (settings.users.some((user) => user.role === roleId)) {
      showRolesStatus("Нельзя удалить категорию, назначенную пользователям.", true);
      return;
    }

    settings.access.roles = settings.access.roles.filter((role) => role.id !== roleId);
    delete settings.access.permissions[roleId];
    renderRolesTable();
    renderUsersTable();
    renderPermissions();
    showRolesStatus("Категория удалена. Нажмите «Сохранить».", true);
    return;
  }

  if (event.target.closest("#saveRolesButton")) {
    if (!validateRoles()) {
      return;
    }

    saveSettings();
    renderRolesTable();
    renderUsersTable();
    renderPermissions();
    showRolesStatus("Сохранено");
    return;
  }

  if (event.target.closest("#savePermissionsButton")) {
    settings.access.permissions.superadmin = createAllPermissions(true);
    settings.access.permissions.admin = createAllPermissions(true);
    saveSettings();
    applyRoleAccess();
    renderDigitalSettingsTabs();
    renderWideSettingsTabs();
    renderClothesSettingsTabs();
    renderPermissions();
    showPermissionsStatus("Сохранено");
    return;
  }

  if (event.target.closest("#saveAppSettingsButton")) {
    if (appMaxUsersInput) {
      settings.appConfig.maxUsers = Math.max(1, Math.floor(Number(appMaxUsersInput.value) || 1));
    }
    saveSettings();
    applyRoleAccess();
    renderAppSettings();
    updateLanguageMenu();
    applyLanguage();
    appSettingsSaveStatus.textContent = translateStaticText("Сохранено", currentLanguage);
    return;
  }

  if (event.target.closest("#addUserButton")) {
    if (getRemainingUsersAfterPendingDeletes().length >= getMaxTenantUsers()) {
      showUsersStatus(`Достигнут лимит пользователей пакета: ${getMaxTenantUsers()}.`, true);
      return;
    }
    settings.users.push({ firstName: "", lastName: "", role: "user", login: "", password: "" });
    renderUsersTable();
    showUsersStatus("Новый пользователь добавлен. Заполните данные и нажмите «Сохранить».");
    return;
  }

  if (event.target.closest("#addClientButton")) {
    openClientModal();
    return;
  }

  if (event.target.closest("#deleteSelectedClientsButton")) {
    openClientDeleteConfirmModal();
    return;
  }

  if (event.target.closest("#confirmClientDeleteButton")) {
    deleteSelectedClients();
    return;
  }

  if (event.target.closest("#cancelClientDeleteButton") || event.target === clientDeleteConfirmModal) {
    closeClientDeleteConfirmModal();
    return;
  }

  if (event.target === userSettingsModal) {
    closeUserSettingsModal();
    return;
  }

  if (event.target.closest("#importClientsButton")) {
    openClientImportModal();
    return;
  }

  if (event.target.closest("#exportClientsButton")) {
    exportClientsCsv();
    return;
  }

  if (event.target.closest("#confirmClientImportButton")) {
    importMappedClients();
    return;
  }

  if (event.target.closest("#closeClientImportModalButton") || event.target === clientImportModal) {
    closeClientImportModal();
    return;
  }

  if (event.target.closest("#clientColumnsButton")) {
    const isOpen = !clientColumnsDropdown.classList.contains("is-hidden");
    clientColumnsDropdown.classList.toggle("is-hidden", isOpen);
    clientColumnsButton.setAttribute("aria-expanded", String(!isOpen));
    return;
  }

  if (clientColumnsDropdown && !clientColumnsDropdown.classList.contains("is-hidden") && !event.target.closest(".client-column-menu")) {
    clientColumnsDropdown.classList.add("is-hidden");
    clientColumnsButton.setAttribute("aria-expanded", "false");
  }

  const editClientButton = event.target.closest("[data-edit-client]");
  if (editClientButton) {
    openClientModal(Number(editClientButton.dataset.editClient));
    return;
  }

  if (event.target.closest("#closeClientModalButton") || event.target === clientModal) {
    closeClientModal();
    return;
  }

  const addClientRepeatableButton = event.target.closest("[data-add-client-repeatable]");
  if (addClientRepeatableButton) {
    const listName = addClientRepeatableButton.dataset.addClientRepeatable;
    if (clientDraft?.[listName]) {
      clientDraft[listName].push("");
      renderClientRepeatableList(listName);
    }
    return;
  }

  const deleteClientRepeatableButton = event.target.closest("[data-delete-client-repeatable]");
  if (deleteClientRepeatableButton) {
    const listName = deleteClientRepeatableButton.dataset.deleteClientRepeatable;
    const index = Number(deleteClientRepeatableButton.dataset.index);
    if (clientDraft?.[listName]) {
      clientDraft[listName].splice(index, 1);
      if (clientDraft[listName].length === 0) {
        clientDraft[listName].push("");
      }
      renderClientRepeatableList(listName);
    }
    return;
  }

  const clientSortButton = event.target.closest("[data-client-sort]");
  if (clientSortButton) {
    const key = clientSortButton.dataset.clientSort;
    clientSort = {
      key,
      direction: clientSort.key === key && clientSort.direction === "asc" ? "desc" : "asc"
    };
    getCurrentUserPreference().clientsTable.sort = clientSort;
    saveCurrentUserPreference();
    renderClients();
    return;
  }

  if (event.target.closest("#saveClientModalButton")) {
    updateClientDraftFromModal();
    if (!validateClients()) {
      return;
    }

    clientDraft.emails = clientDraft.emails.map((item) => item.trim()).filter(Boolean);
    clientDraft.contactPersons = clientDraft.contactPersons.map((item) => item.trim()).filter(Boolean);
    clientDraft.phones = clientDraft.phones.map((item) => item.trim()).filter(Boolean);
    if (editingClientIndex === null) {
      clientDraft.clientNumber = generateClientId();
      settings.clients.push(clientDraft);
    } else {
      clientDraft.clientNumber = clientDraft.clientNumber || generateClientId();
      settings.clients[editingClientIndex] = clientDraft;
    }
    saveSettings();
    renderClients();
    showClientsStatus("Сохранено");
    closeClientModal();
    return;
  }

  const deleteUserButton = event.target.closest("[data-delete-user-row]");
  if (deleteUserButton) {
    const index = Number(deleteUserButton.dataset.index);
    if (!canDeleteUser(index)) {
      showUsersStatus("Нельзя удалить последнего администратора. В приложении должен остаться хотя бы один администратор.", true);
      return;
    }

    pendingUserDeletes.add(index);
    renderUsersTable();
    showUsersStatus("Пользователь отмечен на удаление. Нажмите «Сохранить».", true);
    return;
  }

  if (event.target.closest("#undoUserDeleteButton")) {
    pendingUserDeletes.clear();
    renderUsersTable();
    showUsersStatus("Удаление отменено.");
    return;
  }

  if (event.target.closest("#saveUsersButton")) {
    if (!validateUsers()) {
      return;
    }

    applyPendingUserDeletes();
    saveSettings();
    renderUsersTable();
    showUsersStatus("Сохранено");
    return;
  }

  const addDigitalStandardTierButton = event.target.closest("[data-add-digital-standard-tier]");
  if (addDigitalStandardTierButton) {
    const productIndex = Number(addDigitalStandardTierButton.dataset.productIndex);
    const product = settings.digitalPrint.standardProducts[productIndex];
    if (product) {
      product.priceTiers = Array.isArray(product.priceTiers) ? product.priceTiers : [];
      product.priceTiers.push(createDigitalStandardTier(product));
      saveSettings();
      renderDigitalTables();
      showSectionMessage("standard", "Диапазон добавлен.");
    }
    return;
  }

  const deleteDigitalStandardTierButton = event.target.closest("[data-delete-digital-standard-tier]");
  if (deleteDigitalStandardTierButton) {
    const productIndex = Number(deleteDigitalStandardTierButton.dataset.productIndex);
    const tierIndex = Number(deleteDigitalStandardTierButton.dataset.tierIndex);
    const tiers = settings.digitalPrint.standardProducts[productIndex]?.priceTiers;
    if (Array.isArray(tiers)) {
      tiers.splice(tierIndex, 1);
      saveSettings();
      renderDigitalTables();
      showSectionMessage("standard", "Диапазон удален.");
    }
    return;
  }

  const deleteDigitalRowButton = event.target.closest("[data-delete-digital-row]");
  if (deleteDigitalRowButton) {
    const list = deleteDigitalRowButton.dataset.deleteDigitalRow;
    const index = Number(deleteDigitalRowButton.dataset.index);
    pendingDigitalDeletes[list].add(index);
    renderDigitalTables();
    showSectionError(getActiveDeleteSection(), "Строка отмечена на удаление. Нажмите «Сохранить».");
    return;
  }

  const undoDigitalDeleteButton = event.target.closest("[data-undo-digital-delete]");
  if (undoDigitalDeleteButton) {
    const section = undoDigitalDeleteButton.dataset.undoDigitalDelete;
    const list = getDeleteListBySection(section);
    if (list) {
      pendingDigitalDeletes[list].clear();
    }
    renderDigitalTables();
    showSectionError(section, "Удаление отменено.");
    return;
  }

  const saveDigitalSectionButton = event.target.closest("[data-save-digital-section]");
  if (saveDigitalSectionButton) {
    const section = saveDigitalSectionButton.dataset.saveDigitalSection;
    applyPendingDeletes(section);

    if (section === "materials" && !validateDigitalMaterials()) {
      return;
    }

    saveSettings();
    renderDigitalTables();
    renderDigitalOrderSelectors();
    showSaveStatus(section);
    return;
  }

  const digitalTab = event.target.closest("[data-digital-subtab]");
  if (digitalTab) {
    if (!hasPermission(`settings.digital.${digitalTab.dataset.digitalSubtab}`)) {
      return;
    }
    if (discardPendingDeletesWithWarning() || discardPendingWideDeletesWithWarning() || discardPendingClothesDeletesWithWarning()) {
      return;
    }

    activeDigitalSettingsTab = digitalTab.dataset.digitalSubtab;
    renderDigitalSettingsTabs();
    return;
  }

  const wideTab = event.target.closest("[data-wide-subtab]");
  if (wideTab) {
    if (!hasPermission(`settings.wide.${wideTab.dataset.wideSubtab}`)) {
      return;
    }
    if (discardPendingWideDeletesWithWarning() || discardPendingClothesDeletesWithWarning()) {
      return;
    }

    activeWideSettingsTab = wideTab.dataset.wideSubtab;
    renderWideSettingsTabs();
    return;
  }

  const clothesTab = event.target.closest("[data-clothes-subtab]");
  if (clothesTab) {
    if (!hasPermission(`settings.clothes.${clothesTab.dataset.clothesSubtab}`)) {
      return;
    }
    if (discardPendingDeletesWithWarning() || discardPendingWideDeletesWithWarning() || discardPendingClothesDeletesWithWarning()) {
      return;
    }

    activeClothesSettingsTab = clothesTab.dataset.clothesSubtab;
    renderClothesSettingsTabs();
    return;
  }

  const addDigitalRowButton = event.target.closest("[data-add-digital-row]");
  if (addDigitalRowButton) {
    const list = addDigitalRowButton.dataset.addDigitalRow;
    settings.digitalPrint[list].push(createDigitalRow(list));
    if (list !== "materials") {
      saveSettings();
    }
    renderDigitalTables();
    renderDigitalOrderSelectors();
    return;
  }

  const button = event.target.closest("[data-category-tab]");
  if (!button) {
    return;
  }

  if (discardPendingDeletesWithWarning() || discardPendingWideDeletesWithWarning() || discardPendingClothesDeletesWithWarning()) {
    return;
  }

  activeDepartment = button.dataset.categoryTab;
  categorySelect.value = activeDepartment;
  renderCategoryTabs();
  renderProductOptions();
  renderTables();
  renderOrderLayout();
  calculateOrder();
});

async function initializeApp() {
  try {
    settings = await loadSettings();
  } catch (error) {
    console.error(error);
    showDatabaseLoadError(error);
    return;
  }

  const currentLogin = sessionStorage.getItem(CURRENT_USER_STORAGE_KEY);
  const hasKnownSessionUser = [...settings.superUsers, ...settings.users].some((user) => user.login === currentLogin);
  if (sessionStorage.getItem(AUTH_STORAGE_KEY) === "true" && hasKnownSessionUser) {
    showDashboard();
  } else {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    sessionStorage.removeItem(CURRENT_USER_STORAGE_KEY);
    applyLanguage();
  }
}

initializeApp();
