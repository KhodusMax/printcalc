const ADMIN_LOGIN = "maksim.hodus";
const ADMIN_PASSWORD = "admin2026";
const STORAGE_KEY = "printcalc-settings-v1";
const LANGUAGE_STORAGE_KEY = "printcalc-language";
const AUTH_STORAGE_KEY = "printcalc-authenticated";
const CURRENT_USER_STORAGE_KEY = "printcalc-current-user-login";
const SETTINGS_API_URLS = ["/api/settings", "http://127.0.0.1:4174/api/settings"];
const SPLIT_SETTINGS_FILE_GROUPS = [
  {
    users: "data/users.json",
    clients: "data/clients.json",
    pricing: "data/pricing.json"
  },
  {
    users: "/data/users.json",
    clients: "/data/clients.json",
    pricing: "/data/pricing.json"
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
  { id: "admin", label: "Администратор" },
  { id: "lead", label: "Главный пользователь" },
  { id: "seller", label: "Продавец" },
  { id: "user", label: "Пользователь" }
];

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
  "Клиенты": "Clients",
  "База клиентов": "Client database",
  "Юридическое название": "Legal name",
  "Адрес клиента": "Client address",
  "Адрес электронной почты": "Client email",
  "Контактное лицо": "Contact person",
  "Номер телефона": "Phone number",
  "Регистрационный номер": "Registration number",
  "Регистрационный номер VAT": "VAT registration number",
  "Клиент": "Client",
  "Новый клиент": "New client",
  "Клиенты пока не добавлены.": "No clients have been added yet.",
  "Новый клиент добавлен. Заполните карточку и нажмите «Сохранить».": "New client added. Fill in the card and click Save.",
  "Заполните юридическое название клиента.": "Fill in the client's legal name.",
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
  "Клиенты": "Kliendid",
  "База клиентов": "Kliendibaas",
  "Юридическое название": "Ametlik ärinimi",
  "Адрес клиента": "Kliendi aadress",
  "Адрес электронной почты": "Kliendi e-post",
  "Контактное лицо": "Kontaktisik",
  "Номер телефона": "Telefoninumber",
  "Регистрационный номер": "Registrikood",
  "Регистрационный номер VAT": "KMKR number",
  "Клиент": "Klient",
  "Новый клиент": "Uus klient",
  "Клиенты пока не добавлены.": "Kliente pole veel lisatud.",
  "Новый клиент добавлен. Заполните карточку и нажмите «Сохранить».": "Uus klient lisatud. Täida kaart ja vajuta Salvesta.",
  "Заполните юридическое название клиента.": "Sisesta kliendi ametlik ärinimi.",
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
    { firstName: "Максим", lastName: "Ходус", role: "admin", login: ADMIN_LOGIN, password: ADMIN_PASSWORD }
  ],
  access: {
    roles: USER_ROLES
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
const SUPPORTED_LANGUAGES = ["ru", "en", "et"];
let currentLanguage = SUPPORTED_LANGUAGES.includes(localStorage.getItem(LANGUAGE_STORAGE_KEY))
  ? localStorage.getItem(LANGUAGE_STORAGE_KEY)
  : "ru";
let activeDepartment = DEPARTMENTS[0].label;
let activeDigitalSettingsTab = DIGITAL_SETTINGS_TABS[0].id;
let activeWideSettingsTab = WIDE_ROLL_SETTINGS_TABS[0].id;
let activeClothesSettingsTab = CLOTHES_SETTINGS_TABS[0].id;
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
const topbarUserRole = document.querySelector("#topbarUserRole");
const topbarUserName = document.querySelector("#topbarUserName");
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
const addUserButton = document.querySelector("#addUserButton");
const saveUsersButton = document.querySelector("#saveUsersButton");
const undoUserDeleteButton = document.querySelector("#undoUserDeleteButton");
const usersSaveStatus = document.querySelector("#usersSaveStatus");
const clientsGrid = document.querySelector("#clientsGrid");
const addClientButton = document.querySelector("#addClientButton");
const saveClientsButton = document.querySelector("#saveClientsButton");
const clientsSaveStatus = document.querySelector("#clientsSaveStatus");

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

  isApplyingLanguage = false;
}

function scheduleLanguageApply() {
  if (currentLanguage === "ru") {
    return;
  }

  window.clearTimeout(languageApplyTimer);
  languageApplyTimer = window.setTimeout(applyLanguage, 0);
}

function setLanguage(language) {
  currentLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : "ru";
  localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
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
      const [usersData, clientsData, pricingData] = await Promise.all([
        loadJsonFile(group.users),
        loadJsonFile(group.clients),
        loadJsonFile(group.pricing)
      ]);

      return {
        ...pricingData,
        users: Array.isArray(usersData.users) ? usersData.users : [],
        access: usersData.access || {},
        clients: Array.isArray(clientsData.clients) ? clientsData.clients : []
      };
    } catch (error) {
      errors.push(error.message);
    }
  }

  throw new Error(`Раздельная база данных недоступна. Проверьте data/users.json, data/clients.json и data/pricing.json. ${errors.join(" ")}`);
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
  const normalizedUsersSource = Array.isArray(normalized.users) ? normalized.users : defaults.users;
  normalized.users = normalizedUsersSource.map((user, index) => {
    const firstName = user.firstName || "";
    const lastName = user.lastName || "";
    const isDefaultAdmin = normalizedUsersSource.length === 1 && index === 0;

    return {
      firstName,
      lastName,
      role: isDefaultAdmin
        ? "admin"
        : USER_ROLES.some((role) => role.id === user.role) ? user.role : "user",
      login: user.login || "",
      password: user.password || ""
    };
  });
  if (normalized.users.length === 0) {
    normalized.users = structuredClone(defaults.users);
  }
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

  const normalizedClientsSource = Array.isArray(normalized.clients) ? normalized.clients : [];
  normalized.clients = normalizedClientsSource.map((client) => ({
    legalName: client.legalName || "",
    address: client.address || "",
    email: client.email || "",
    contactPerson: client.contactPerson || "",
    phone: client.phone || "",
    registrationNumber: client.registrationNumber || "",
    vatNumber: client.vatNumber || ""
  }));

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
  loginError.textContent = `Ошибка загрузки базы данных. Проверьте доступ к data/users.json, data/clients.json и data/pricing.json. ${error.message || ""}`.trim();
  loginForm.querySelectorAll("input, button").forEach((element) => {
    element.disabled = true;
  });
}

function getCurrentUser() {
  const login = sessionStorage.getItem(CURRENT_USER_STORAGE_KEY);
  return settings.users.find((user) => user.login === login)
    || settings.users[0]
    || defaults.users[0];
}

function isCurrentUserAdmin() {
  return getCurrentUser().role === "admin";
}

function isCurrentUserSeller() {
  return getCurrentUser().role === "seller";
}

function canCurrentUserAccessClients() {
  return isCurrentUserAdmin() || isCurrentUserSeller();
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
  return settings.users.find((item) => item.login === login && item.password === password);
}

function updateTopbarUser() {
  const user = getCurrentUser();
  const role = USER_ROLES.find((item) => item.id === user.role) || USER_ROLES[0];
  const name = [user.firstName, user.lastName]
    .map((part) => String(part || "").trim())
    .filter(Boolean)
    .join(" ");

  topbarUserRole.textContent = role.label;
  topbarUserName.textContent = name || user.login || "PrintCalc";
}

function applyRoleAccess() {
  const isAdmin = isCurrentUserAdmin();
  const canAccessClients = canCurrentUserAccessClients();

  document.querySelectorAll("[data-admin-only]").forEach((element) => {
    element.classList.toggle("is-hidden", !isAdmin);
    element.toggleAttribute("aria-hidden", !isAdmin);
  });

  document.querySelectorAll("[data-admin-seller-only]").forEach((element) => {
    element.classList.toggle("is-hidden", !canAccessClients);
    element.toggleAttribute("aria-hidden", !canAccessClients);
  });

  const activeRestrictedTab = document.querySelector(".tab-button.is-active[data-admin-only]");
  if (!isAdmin && activeRestrictedTab) {
    activateTopLevelTab("order");
  }

  const activeClientTab = document.querySelector(".tab-button.is-active[data-admin-seller-only]");
  if (!canAccessClients && activeClientTab) {
    activateTopLevelTab("order");
  }
}

function renderAll() {
  updateTopbarUser();
  applyRoleAccess();
  renderCategoryTabs();
  renderDigitalSettingsTabs();
  renderWideSettingsTabs();
  renderClothesSettingsTabs();
  renderClients();
  renderUsersTable();
  renderSelectors();
  renderTables();
  renderOrderLayout();
  calculateOrder();
  applyLanguage();
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
  digitalSettingsTabs.innerHTML = DIGITAL_SETTINGS_TABS.map((tab) => `
    <button
      type="button"
      class="subtab-button${tab.id === activeDigitalSettingsTab ? " is-active" : ""}"
      data-digital-subtab="${tab.id}"
    >${tab.label}</button>
  `).join("");

  document.querySelectorAll("[data-digital-panel]").forEach((panel) => {
    panel.classList.toggle("is-hidden", panel.dataset.digitalPanel !== activeDigitalSettingsTab);
  });
}

function renderWideSettingsTabs() {
  wideSettingsTabs.innerHTML = WIDE_ROLL_SETTINGS_TABS.map((tab) => `
    <button
      type="button"
      class="subtab-button${tab.id === activeWideSettingsTab ? " is-active" : ""}"
      data-wide-subtab="${tab.id}"
    >${tab.label}</button>
  `).join("");

  document.querySelectorAll("[data-wide-panel]").forEach((panel) => {
    panel.classList.toggle("is-hidden", panel.dataset.widePanel !== activeWideSettingsTab);
  });
}

function renderClothesSettingsTabs() {
  clothesSettingsTabs.innerHTML = CLOTHES_SETTINGS_TABS.map((tab) => `
    <button
      type="button"
      class="subtab-button${tab.id === activeClothesSettingsTab ? " is-active" : ""}"
      data-clothes-subtab="${tab.id}"
    >${tab.label}</button>
  `).join("");

  document.querySelectorAll("[data-clothes-panel]").forEach((panel) => {
    panel.classList.toggle("is-hidden", panel.dataset.clothesPanel !== activeClothesSettingsTab);
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

function getRemainingUsersAfterPendingDeletes() {
  return settings.users.filter((_, index) => !pendingUserDeletes.has(index));
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
            ${USER_ROLES.map((role) => `<option value="${role.id}"${user.role === role.id ? " selected" : ""}>${role.label}</option>`).join("")}
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
    legalName: "",
    address: "",
    email: "",
    contactPerson: "",
    phone: "",
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

function clientField(label, field, client, index, fullSpan = false) {
  return `
    <label class="${fullSpan ? "full-span" : ""}">
      <span>${label}</span>
      <input data-client-field="${field}" data-index="${index}" value="${escapeHtml(client[field])}" data-no-translate>
    </label>
  `;
}

function renderClients() {
  if (!clientsGrid) {
    return;
  }

  clientsGrid.innerHTML = settings.clients.length > 0
    ? settings.clients.map((client, index) => `
      <article class="client-card">
        <div class="client-card-header">
          <h3 class="client-card-title"${client.legalName ? " data-no-translate" : ""}>${escapeHtml(client.legalName || "Новый клиент")}</h3>
        </div>
        <div class="client-fields">
          ${clientField("Юридическое название", "legalName", client, index, true)}
          ${clientField("Адрес клиента", "address", client, index, true)}
          ${clientField("Адрес электронной почты", "email", client, index)}
          ${clientField("Контактное лицо", "contactPerson", client, index)}
          ${clientField("Номер телефона", "phone", client, index)}
          ${clientField("Регистрационный номер", "registrationNumber", client, index)}
          ${clientField("Регистрационный номер VAT", "vatNumber", client, index)}
        </div>
      </article>
    `).join("")
    : `<p class="section-hint">Клиенты пока не добавлены.</p>`;
}

function validateClients() {
  const hasEmptyLegalName = settings.clients.some((client) => !String(client.legalName || "").trim());
  if (hasEmptyLegalName) {
    showClientsStatus("Заполните юридическое название клиента.", true);
    return false;
  }

  return true;
}

function discardPendingClientsWithWarning() {
  if (!pendingClientsDirty) {
    return false;
  }

  showClientsStatus("Изменения клиента не сохранены. Нажмите «Сохранить».", true);
  activateTopLevelTab("clients");
  return true;
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
  });
});

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.hasAttribute("data-admin-only") && !isCurrentUserAdmin()) {
      activateTopLevelTab("order");
      return;
    }

    if (button.hasAttribute("data-admin-seller-only") && !canCurrentUserAccessClients()) {
      activateTopLevelTab("order");
      return;
    }

    if (discardPendingDeletesWithWarning() || discardPendingWideDeletesWithWarning() || discardPendingClothesDeletesWithWarning() || discardPendingUserDeletesWithWarning() || discardPendingClientsWithWarning()) {
      return;
    }

    activateTopLevelTab(button.dataset.tab);
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

  if (input.matches("[data-client-field]")) {
    const index = Number(input.dataset.index);
    const field = input.dataset.clientField;
    settings.clients[index][field] = input.value;
    pendingClientsDirty = true;
    showClientsStatus("");
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
  draggedDigitalRow = null;
  draggedUserRow = null;
  draggedWideRow = null;
  draggedClothesRow = null;
  document.querySelectorAll(".is-dragging, .is-drag-over").forEach((row) => {
    row.classList.remove("is-dragging", "is-drag-over");
  });
});

document.addEventListener("click", (event) => {
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

  if (event.target.closest("#addUserButton")) {
    settings.users.push({ firstName: "", lastName: "", role: "user", login: "", password: "" });
    renderUsersTable();
    showUsersStatus("Новый пользователь добавлен. Заполните данные и нажмите «Сохранить».");
    return;
  }

  if (event.target.closest("#addClientButton")) {
    settings.clients.push(createEmptyClient());
    pendingClientsDirty = true;
    renderClients();
    applyLanguage();
    showClientsStatus("Новый клиент добавлен. Заполните карточку и нажмите «Сохранить».");
    return;
  }

  if (event.target.closest("#saveClientsButton")) {
    if (!validateClients()) {
      return;
    }

    pendingClientsDirty = false;
    saveSettings();
    renderClients();
    applyLanguage();
    showClientsStatus("Сохранено");
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
    if (discardPendingDeletesWithWarning() || discardPendingWideDeletesWithWarning() || discardPendingClothesDeletesWithWarning()) {
      return;
    }

    activeDigitalSettingsTab = digitalTab.dataset.digitalSubtab;
    renderDigitalSettingsTabs();
    return;
  }

  const wideTab = event.target.closest("[data-wide-subtab]");
  if (wideTab) {
    if (discardPendingWideDeletesWithWarning() || discardPendingClothesDeletesWithWarning()) {
      return;
    }

    activeWideSettingsTab = wideTab.dataset.wideSubtab;
    renderWideSettingsTabs();
    return;
  }

  const clothesTab = event.target.closest("[data-clothes-subtab]");
  if (clothesTab) {
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

  if (sessionStorage.getItem(AUTH_STORAGE_KEY) === "true") {
    showDashboard();
  } else {
    applyLanguage();
  }
}

initializeApp();
