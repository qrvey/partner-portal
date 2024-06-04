#!/bin/bash
# Script to build and deploy to staging environment

# Navigate to the project directory
cd v2-website

# Install dependencies
npm install

# Increase Node's memory limit and build for staging
NODE_OPTIONS="--max-old-space-size=4096" npm run build:staging

# Install replace tool and make necessary replacements
npm install replace@1.0.0 -g --force
replace "indexName:'dev_qrvey'" "indexName:'staging_qrvey'" docusaurus.config.js

# Replace in custom.js
cd static/js
replace "MKT_METADATAID" "marketing_test" custom.js

# Return to project root and run final build
cd ../..
npm run build
