<template><div>
  <b-button v-b-modal.modal-1>Launch demo modal</b-button>
  <b-modal id="modal-1" title="BootstrapVue" centered hide-footer hide-header size="lg">
    <template v-slot:modal-header>
      -
    </template>
    <b-embed
    type="iframe"
    aspect="16by9"
    :src="'https://www.youtube.com/embed/' + embed"
    allowfullscreen
  ></b-embed>

   <template v-slot:modal-footer>
     -
    </template>
  </b-modal>
</div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    embed: String
  },
  data() {
    return {
      id: null,
    }
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
