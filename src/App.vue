<template>
  <div id="app">
    <img alt="logo" src="./assets/logo.svg" height="128">
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './styles/main';

html, body {
  background: #ddd;
  color: #111;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  > img {
    margin-bottom: 60px;
  }
}

section {
  border-radius: 5px;
  border: solid 1px #ddd;
  margin: 0 16px 10px 16px;
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;
  padding-bottom: 8px;
  h2 {
    background: #eee;
    border-bottom: solid 1px #ddd;
    padding: 8px;
    margin-bottom: 10px;
  }
}
</style>
