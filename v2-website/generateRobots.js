const fs = require('fs');

const {
    ENVIRONMENT,
    BASE_URL_PROD,
    BASE_URL_STAGING,
    BASE_URL_DEV
} = process.env;


console.log('ENVIRONMENT:', ENVIRONMENT);
console.log('BASE_URL_PROD:', BASE_URL_PROD);
console.log('BASE_URL_STAGING:', BASE_URL_STAGING);
console.log('BASE_URL_DEV:', BASE_URL_DEV);

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

if (BASE_URL === BASE_URL_PROD) {
    content = 'User-agent: *\nAllow: /'; 
} else {
    content = 'User-agent: *\nDisallow: /';
}

fs.writeFileSync('static/robots.txt', content);
