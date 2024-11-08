require('dotenv').config();
const env = process.argv.slice(2)[0];
let indexEnv = process.env.INDEX_DEV;
if(env === "--staging"){
    indexEnv = process.env.INDEX_STAGING;
}
if(env === "--prod"){
    indexEnv = process.env.INDEX_PROD;
}