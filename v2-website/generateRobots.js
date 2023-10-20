const fs = require('fs');

const {
    ENVIRONMENT,
    BASE_URL_PROD,
    BASE_URL_STAGING,
    BASE_URL_DEV
} = process.env;

let BASE_URL;

switch (ENVIRONMENT) {
    case 'prod':
        BASE_URL = BASE_URL_PROD;
        break;
    case 'staging':
        BASE_URL = BASE_URL_STAGING;
        break;
    case 'dev':
        BASE_URL = BASE_URL_DEV;
        break;
    default:
        console.error('Ambiente no reconocido');
        process.exit(1);
}

let content;

// Verificar el ambiente actual basándose en la URL base
if (BASE_URL === BASE_URL_PROD) {
    content = 'User-agent: *\nAllow: /';  // Por defecto, permite a todos los rastreadores
} else {
    content = 'User-agent: *\nDisallow: /';  // Bloquea todos los rastreadores en staging y dev
}

fs.writeFileSync('static/robots.txt', content);
