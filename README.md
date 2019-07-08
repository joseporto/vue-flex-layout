# @jporto/vue-flex-layout

[![build status](https://img.shields.io/gitlab/pipeline/porto/vue-flex-layout/master.svg)](https://gitlab.com/porto/vue-flex-layout.git)
[![npm-publish](https://img.shields.io/npm/dm/@jporto/vue-flex-layout.svg)](https://www.npmjs.com/package/@jporto/vue-flex-layout)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![language count](https://img.shields.io/github/languages/count/joseporto/vue-flex-layout.svg)](https://gitlab.com/porto/vue-flex-layout/-/graphs/master/charts)

A VueJS flexbox partitionable layout

Checkout the [Demo](https://porto.gitlab.io/vue-flex-layout/).

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

## Gutter

Default `gutter` is `16`.

## Columns

Default `columns` number is `12`.

## Components

> NOTE: Row, Column and Container components will inherit all attributes defined in the declaration.

- [Container](#container-component)
- [Row](#row-component)
- [Column](#column-component)
- [Guides](#guides-component)

### Container Component

```html
<Container>
  <Row>
    ...
  </Row>
</Container>
```

#### Container options

> ***IMPORTANT***: you can add and remove dinamically your breakpoints that also represents your props. Here we will describe the default behaviour.

Property Name | Type | Description | Default
--- | --- | --- | ---
tag | String | Set tag for the wrapper element that render our content | `div`
xs | String | pixel width during `xs` breakpoint | -
sm | String | pixel width during `sm` breakpoint | -
md | String | pixel width during `md` breakpoint | -
lg | String | pixel width during `lg` breakpoint | -
xl | String | pixel width during `xl` breakpoint | -

### Row Component

```html
<Container>
  <Row>
    ...
  </Row>
</Container>
```

#### Row options

Property Name | Type | Description | Default
--- | --- | --- | ---
tag | String | Set tag for the wrapper element that render our content | `div`
resetStyle | Boolean | If true, add reset styles for `list` tags E.G. `ul` | `false`
transition | Strint | Name for the transition group | `null`

#### Transitions

If you need to use a [transition-group](https://vuejs.org/v2/api/#transition-group) for your items, as far you can!

```js
<Row tag="transition-group" tag="ul" name="my-awesome-transition">
  ...
</Row>
```

### Column Component

```html
...
  <Row>
    <Column> <p> By default lower breakpoint is `12` columns and renders a div ay 100% width </p> </Column>
  </Row>
```

#### Column options

> ***IMPORTANT***: you can add / remove your breakpoints dinamically, if you do it changes will be reflected also on props.

Property Name | Type | Description | Default
--- | --- | --- | ---
tag | String | Set tag for the wrapper element that render our content | `div`
nogutter | Boolean | If true, disable gutter | `false`
xs | Number | column width during `xs` breakpoint | `12`
sm | Number | column width during `sm` breakpoint | -
md | Number | column width during `md` breakpoint | -
lg | Number | column width during `lg` breakpoint | -
xl | Number | column width during `xl` breakpoint | -
xsshift | Number | shift column width during `xs` breakpoint | `0`
smshift | Number | shift column width during `sm` breakpoint | -
mdshift | Number | shift column width during `md` breakpoint | -
lgshift | Number | shift column width during `lg` breakpoint | -
xlshift | Number | shift column width during `xl` breakpoint | -

### Guides Component

Guides will draw vertical guides, based on your columns and gutter configuration options.

#### Using Guides

You need to add the following to your template

```html
<Guides />
```

- Press `g` (default key) to make guides visible
