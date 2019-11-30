require('dotenv').config();
const env = process.argv.slice(2)[0];
let indexEnv = process.env.INDEX_DEV;
if(env === "--staging"){
    indexEnv = process.env.INDEX_STAGING;
}
if(env === "--prod"){
    indexEnv = process.env.INDEX_PROD;
}
const algoliasearch = require('algoliasearch');
const client = algoliasearch('FKFO2CGR6S', '6b0e7e5081d0df16768a9472e845b284');
console.log('env', indexEnv);
const index = client.initIndex(indexEnv);
index.clearIndex(() => console.log('cleared'));