<template>
  <div id="app">
    <mt-header fixed title="iDoList"></mt-header>
    <div class="page-header-main">
      <homelist></homelist>
    </div>
    
  </div>
</template>

<script>
import Homelist from './components/Homelist'

export default {
  name: 'app',
  components: {
    Homelist
  }
}
</script>

<style>
  body {
    background-color: #fafafa;
  }

  .page-header-main {
    margin-top: 50px;
    min-height: 120vh;
  }

</style>
