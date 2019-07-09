# @jporto/vue-flex-layout

![logo](https://gitlab.com/porto/vue-flex-layout/raw/master/src/assets/logo64.png)

[![build status](https://img.shields.io/gitlab/pipeline/porto/vue-flex-layout/master.svg)](https://gitlab.com/porto/vue-flex-layout.git)
[![npm-publish](https://img.shields.io/npm/dm/@jporto/vue-flex-layout.svg)](https://www.npmjs.com/package/@jporto/vue-flex-layout)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![language count](https://img.shields.io/github/languages/count/joseporto/vue-flex-layout.svg)](https://gitlab.com/porto/vue-flex-layout/-/graphs/master/charts)

A VueJS flexbox partitionable layout

Checkout the [Demo](https://porto.gitlab.io/vue-flex-layout/) which contains the component documentation.

> If you enjoy this component, feel free to drop me feedback, either via the repository, or via joseporto@icloud.com.

> Also, please [verify my project](https://bio.torre.co/joseporto/projects?id=EM3rLwNa&view=verify) at torre.co.

## Instalation

```bash
yarn add @jporto/vue-flex-layout
```

or

```bash
npm install @jporto/vue-flex-layout
```

## Setup

### Vue.js

- Add the following to you application main.js file:

```js
import VueFlexLayout from '@jporto/vue-flex-layout'

Vue.use(VueFlexLayout)
```

- import the styles

```scss
@import '@jporto/vue-flex-layout/dist/@jporto/main.scss';
```

### NuxtJS

- Similar as with Vue.js, but I recomend adding a `components.js` file to plugins, with the following content:
  
```js
import Vue from 'vue'
import VueFlexLayout from '@jporto/vue-flex-layout';
Vue.use(VueFlexLayout);
```

- Register the plugin in `nuxt.config.js`:

```js
plugins: [
  '@/plugins/components',
],
```

## Configure

> note: configuration is still experimental.

Override the following variables prior to importing the `main.scss` file:

Variable Name | Description | Default
--- | --- | --- | ---
$layout-max-width | maximum width of a non fluid container | 1420
$layout-columns | maximum number of columns | 12
$layout-gutter | gutter size in px | 16
$layout-color-debug-container | base color for when `container` is in `debug` mode | rgb(57, 169, 219)
$layout-color-debug-row | base color for when `row` is in `debug` mode | rgb(163, 221, 122)
$layout-color-debug-column | base color for when `column` is in `debug` mode | rgb(242, 103, 48)
$layout-color-guide-right-limit | color for the rightmost limit for column guide | #ED0579
$layout-color-guide-left-limit | color for the leftmost limit for column guide | #01ABA3
$layout-color-guide-column | color for the line representing each column limit | transparentize(#F06925, .2)
$layout-color-guide-gutter | color for the line representing each column gutter | transparentize(#0071BD, .9)
$layout-guides-zindex | guides base z-index | 2147483647

> note: values are represented exaclty as they are in the `_variables.scss` file. **No units are used!**
