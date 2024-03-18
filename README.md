# Wep Performance Task 1

This is Harbour Space's first web performance task. It uses the [shop template](https://www.free-css.com/free-css-templates/page280/multishop). In this repository some optimisations have been applied to the template to increase its performance.

## Optimizations

* Bundlers: Here webpack was applied. Its configuration can be found in `webpack.config.js`. This generates bundlers in production.

* Minification: CSS minification has been applied. Its configuration can be found in the `webpack.config.js` file.

* Image compression: [all]

* Async: Async was enabled for external js: `<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>`