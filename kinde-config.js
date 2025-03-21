// kinde-config.js

module.exports = {
    kindeClientId: process.env.KINDE_CLIENT_ID, // ID клієнта Kinde
    kindeClientSecret: process.env.KINDE_CLIENT_SECRET, // Секретний ключ клієнта Kinde
    kindeBaseUrl: process.env.KINDE_BASE_URL, // Базовий URL для вашого проєкту Kinde
    kindeAuthUrl: `${process.env.KINDE_BASE_URL}/oauth/authorize`, // URL авторизації
    kindeRedirectUrl: process.env.KINDE_REDIRECT_URL, // URL для редіректу після успішної авторизації
  };
  