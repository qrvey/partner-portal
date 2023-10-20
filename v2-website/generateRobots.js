const fs = require('fs');

const {
    BASE_URL_PROD,
    BASE_URL_STAGING,
    BASE_URL_DEV
} = process.env;

let content;


if (BASE_URL === BASE_URL_PROD) {
    content = 'User-agent: *\nAllow: /';  
} else if (BASE_URL === BASE_URL_STAGING) {
    content = 'User-agent: *\nDisallow: /';  
} else if (BASE_URL === BASE_URL_DEV) {
    content = 'User-agent: *\nDisallow: /';  
} else {
    content = 'User-agent: *\nAllow: /';
}

fs.writeFileSync('static/robots.txt', content);
