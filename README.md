# RomaJS

[![Build Status](https://travis-ci.org/TEIC/romajs.svg?branch=dev)](https://travis-ci.org/TEIC/romajs)

RomaJS is a web app for creating and editing ODD documents to customize and generate schemata for the [Text Encoding Initiative](http://www.tei-c.org/).

This web app is written in React/Redux and is designed to be easily compiled and deployed as a static site. Some key transformations are handled online via the API provide by [OxGarage](https://wiki.tei-c.org/index.php/OxGarage), a TEI maintained online service. TEI data comes from the [TEI Vault](www.tei-c.org/Vault/).

## How to deploy

Download the latest build from the [release page](https://github.com/TEIC/romajs/releases). Serve the static site from a simple server. You will need to set up a rewrite to index.html to make sure URL routes will work. For example in Apache 2:

```
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.html [L,QSA]
```

You can also deploy it via [Docker](https://hub.docker.com/r/teic/romajs).

## How to develp

Make sure node.js is installed then:

```
$ npm install
```

### Test

```
$ npm test
```

### Serve locally for development
```
$ npm start
```

### Build static assets
```
$ npm run build
```

### Change URL to OxGarage service

Edit `src/utils/oxgarage.js` and rebuild.
