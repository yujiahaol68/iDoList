<template>
  <div id="app">
    <v-touch v-on:doubletap="about()">
    <mt-header fixed title="iDoList"></mt-header>
    </v-touch>
    <div class="page-header-main">
      <homelist></homelist>
    </div>
    
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

import Homelist from './components/Homelist'

export default {
  name: 'app',
  components: {
    Homelist
  },
  methods: {
    about: function(){
      Toast({
        message: 'Design and Coding by Tecker.Yu. Love you all!',
        duration: 4000
      })
    }
  }
}
</script>

<style>
  body {
    background-color: #fafafa;
    height: 100%;
  }

  .page-header-main {
    margin-top: 50px;
    min-height: 120vh;
  }

  .mint-header-title {
    font-size: 20px;
  }

  .mint-cell-title {
    width: 40px;
  }
  
</style>
