<template>
  <div id="app">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <HelloWorld :embed="id" />
    {{ title }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  props: {
    title: String
  },
  components: {
    HelloWorld
  },
  data() {
    return {
      id: 'rpWrtXyEAN0',
    }
  },
  methods: {
    getUrlVars() {
      var vars = {};
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
      });
      parts;
      return vars;
    },
    getUrlParam(parameter, defaultvalue){
      var urlparameter = defaultvalue;
      if(window.location.href.indexOf(parameter) > -1) {
        urlparameter = this.getUrlVars()[parameter];
      }
      return urlparameter;
    }
  },
  mounted() {
    // this.id = this.getUrlParam('i','rpWrtXyEAN0');
    this.id = this.title;
  },
}
</script>

<style>
</style>
