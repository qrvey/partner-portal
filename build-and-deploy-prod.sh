#!/bin/bash
# Script to build and deploy to production environment

# Navigate to the project directory
cd v2-website

# Install dependencies
npm install

# Increase Node's memory limit and build for production
NODE_OPTIONS="--max-old-space-size=4096" npm run build:prod

# Install replace tool and make necessary replacements
npm install replace@1.0.0 -g --force
replace "indexName:'dev_qrvey'" "indexName:'prod_qrvey'" docusaurus.config.js

# Replace in custom.js
cd static/js
replace "MKT_METADATAID" "marketing_prod" custom.js

# Return to project root and run final build
cd ../..
npm run build
