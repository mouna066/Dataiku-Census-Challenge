<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from './config/store'
import Vuex from 'vuex'

export default {
  name: 'App',
  store: store,
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    ...Vuex.mapActions(["getData"]),
  },
  computed: {
    ...Vuex.mapGetters(["data"]),
  },
  mounted() {

  }
}
</script>

<style>
:root {
	--color-primary-blue: #1E079B;
	--color-secondary-blue: #2539B0;
	--color-primary-pink: #EF2A82;
	--color-light: #FFFFFF;
}

#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-light);
  height:100%;
}

html, body {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
    height: 100%;
}

*,*::before,*::after {
  box-sizing: inherit;
}

</style>
