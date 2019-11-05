const algoliasearch = require('algoliasearch');
const client = algoliasearch('FKFO2CGR6S', '6b0e7e5081d0df16768a9472e845b284');
const index = client.initIndex('dev_qrvey');
index.clearIndex(() => console.log('cleared'));