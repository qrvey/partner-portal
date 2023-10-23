const fs = require('fs');

const { ENVIRONMENT } = process.env;

let content;

if (ENVIRONMENT === 'prod') {
    content = 'User-agent: *\nAllow: /'; 
} else {
    content = 'User-agent: *\nDisallow: /';
}

console.log(`Generate robots.txt: ${ENVIRONMENT}`);
console.log('Content for robots.txt:', content);

fs.writeFileSync('static/robots.txt', content);


const googleVerificationContent = 'google-site-verification: google9438499cedaa279e.html';
fs.writeFileSync('static/google9438499cedaa279e.html', googleVerificationContent);

console.log('Google File generated.');