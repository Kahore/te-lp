<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@font-face{
  font-family: 'TT Norms';
  src: url('./assets/font/TTNorms-Regular.eot');
  src: url('./assets/font/TTNorms-Regular.eot?iefix') format('eot'),
  url('./assets/font/TTNorms-Regular.woff') format('woff'),
  url('./assets/font/TTNorms-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
html {
  font-family: TT Norms;
  font-size: 15px;
}
.router {
  text-decoration: none;
  color: black
}
</style>
