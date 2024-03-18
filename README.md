# Wep Performance Task 1

This is Harbour Space's first web performance task. It uses the [shop template](https://www.free-css.com/free-css-templates/page280/multishop). In this repository some optimisations have been applied to the template to increase its performance.

## Optimizations

* Bundlers: Here webpack was applied. Its configuration can be found in `webpack.config.js`. This generates bundlers in production.

* Minification: CSS minification has been applied. Its configuration can be found in the `webpack.config.js` file.

* File compression: Added a pluging to compress the files to gz. see the `webpack.config.js` file.

* Async: Async was enabled for external js: `<script src="https:..." async></script>`

## Dev Rub and Build

to download this repo and install all dependencies:
```shell
git clone https://github.com/mjason98/hswp1.git
cd hswp1
npm install
```

to run the development server run:

```shell
npm start
```

### Build 

to build for production, and generate bundles run the following command:

```shell
npm run build
```