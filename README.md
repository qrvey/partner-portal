# Installation
Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.

## Installing Docusaurus
We have created an easy script that will get all of the infrastructure set up for you:

1. Ensure you have the latest version of Node installed. We also recommend you install Yarn as well.

> You have to be on Node >= 8.x and Yarn >= 1.5.

2. Clone the project `git clone git@bitbucket.org:qrvey/documentation.git` 

> Commonly, either an existing or newly created GitHub project will be the location for your Docusaurus site, but that is not mandatory to use Docusaurus.

### Verifying Installation
Along with previously existing files and directories, your root directory will now contain a structure similar to:

```
root-directory
├── Dockerfile
├── README.md
├── docker-compose.yml
├── docs
└── website
    ├── blog
    ├── core
    ├── pages
    ├── package.json
    ├── sidebars.json
    ├── siteConfig.js
    └── static
```

## Running the example website
After clonning the Docusaurus project as described in the Installation section, you will have a runnable, example website to use as your site's base. To run:

1. `cd website`

2. From within the website directory, run the local web server using `yarn start` or `npm start`.

3. Load the example site at http://localhost:3000 if it did not already open automatically. If port 3000 has already been taken, another port will be used. Look at the console messages to see which.
You should see the site loaded in your web browser. There's also a LiveReload server running and any changes made to the docs and files in the website directory will cause the page to refresh. A randomly generated primary and secondary theme color will be picked for you.

### Launching the server behind a proxy
If you are behind a corporate proxy, you need to disable it for the development server requests. It can be done using the `NO_PROXY` environment variable.

```
SET NO_PROXY=localhost
yarn start (or npm run start)
```

## Updating Your Docusaurus Version
At any time after Docusaurus is installed, you can check your current version of Docusaurus by going into the `website` directory and typing `yarn outdated docusaurus` or `npm outdated docusaurus`.

You will see something like this:

```
$ yarn outdated
Using globally installed version of Yarn
yarn outdated v1.5.1
warning package.json: No license field
warning No license field
info Color legend :
 "<red>"    : Major Update backward-incompatible updates
 "<yellow>" : Minor Update backward-compatible features
 "<green>"  : Patch Update backward-compatible bug fixes
Package    Current Wanted Latest Package Type    URL
docusaurus 1.0.9   1.2.0  1.2.0  devDependencies https://github.com/facebook/docusaurus#readme
✨  Done in 0.41s.
```

> If there is no noticeable version output from the outdated commands, then you are up-to-date.

You can update to the latest version of Docusaurus by:
```
yarn upgrade docusaurus --latest
```

or
```
npm update docusaurus
```

> If you are finding that you are getting errors after your upgrade, try to either clear your Babel cache (usually it's in a temporary directory or run the Docusaurus server (e.g., `yarn start`) with the `BABEL_DISABLE_CACHE=1` environment configuration.
