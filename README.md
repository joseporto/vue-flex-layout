# Vue Flex Layout

[![build status](https://img.shields.io/gitlab/pipeline/joseporto/vue-flex-layout/master.svg)](https://gitlab.com/joseporto/vue-flex-layout.git) [![npm-publish](https://img.shields.io/npm/dm/vue-flex-layout.svg)]([https://](https://www.npmjs.com/package/vue-flex-layout)) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![language count](https://img.shields.io/github/languages/count/joseporto/vue-flex-layout.svg)]()

A VueJS flexbox partitionable layout

> inspired by [React Grid System](https://github.com/JSxMachina/react-grid-system)

## Instalation

```bash
yarn add vue-flex-layout
```

or

```bash
npm install vue-flex-layout
```

## Setup

> NOTE: Configuration is optional

### Vue.js

- Add the following to you application main.js file:

```js
import VueFlexLayout from './components/index.js'

Vue.use(VueFlexLayout, /* configuration */)
```

### NuxtJS

- Similar as with Vue.js, but I recomend adding a `components.js` file to plugins, with the following content:
   
```js
import Vue from 'vue'
import VueFlexLayout from 'vue-flex-layout';
Vue.use(VueFlexLayout, /* configuration */);
```

- Register the plugin in `nuxt.config.js`:

```js
plugins: [
  '@/plugins/components',
],
```

## Configuration

```js
{
  columns: 12,
  gutter: 16,
  maxWidth: 1420,
  breakpoints: {
    xs: 320,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  guidesToggleKey: 'g',
  colors: {
    debugBorder: 'rgba(0,100,0,.3)',
    debug: 'rgba(0,100,0,.2)',
    guidesLimits: 'rgba(255, 0, 0, 1)',
    guidesContainer: 'rgba(0, 255, 0, 1)',
    guidesMain: 'rgba(0, 155, 255, 0.8)',
    guidesMainBackground: 'rgba(255, 0, 255, 0.1)'
  }
}
```

these can be overriden by passing config options when you install `vue-flex-layout`

```js
import VueFlexLayout from 'vue-flex-layout'

Vue.use(VueFlexLayout, {/* configuration */})
```

## Gutter

Default `gutter` is `16`. Override by passing the `gutter` property on config options.

## Columns

Default `columns` number is `12`. Override by passing the `columns` property on config options.

## Components

> NOTE: Row, Column and Container components will inherit all attributes defined in the declaration.

- [Container](#container-component)
- [Row](#row-component)
- [Column](#column-component)
- [Hidden](#hidden-component)
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
xsShift | Number | shift column width during `xs` breakpoint | `0`
smShift | Number | shift column width during `sm` breakpoint | -
mdShift | Number | shift column width during `md` breakpoint | -
lgShift | Number | shift column width during `lg` breakpoint | -
xlShift | Number | shift column width during `xl` breakpoint | -

### Hidden Component

Hidden is an utility component that allows you to hide / show content based on your breakponts.

#### Simple example

```html
<Hidden from="md">
  This content is hidden in `md` breakpoint and upper.
</Hidden>

<Hidden until="md">
  This content is visible from `md` breakpoint and upper.
</Hidden>

<Hidden from="sm" to="md">
  This content is hidden from `sm` to `md` breakpoint.
</Hidden>
```

#### Hidden options

Property Name | Type | Description | Default
--- | --- | --- | ---
tag | String | Set tag for the wrapper element that render our content | `div`
from | String | the `breakpoint` name where the component starts to hide content | -
until | String | the `breakpoint` name where the component starts to show content | -

### Guides Component

Guides will draw vertical guides, based on your columns and gutter configuration options.

#### Using Guides

You need to add the following to your template

```html
<Guides :visible="false"/>
```

- Press `g` (default key) to make guides visible
