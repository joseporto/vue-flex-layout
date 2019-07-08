```vue
<Guides />
```

Guides are activated with the default key `"g"`.

Guides should not be visible in production. One solution is to initialize guides based on the `NODE_ENV` environemnt variable.

On your page controller, add the following:

```html
<template>
  <div>
    <Guides v-if="allowGuides' />
  </div>
</template>

<script>
export default = {
  computed: {
    allowGuides() {
      console.info(process.env.NODE_ENV)
      return process.env.NODE_ENV === 'development'
    }
  }
}
</script>
```
