<template><div>
  <b-button v-b-modal.modal-1>Launch demo modal</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
  }
}
</script>

<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
