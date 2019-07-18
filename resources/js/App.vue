<template>
  <div id="app">
    <Menu class="no-print" :active="active"  />
    <Loader class="no-print" :loading="showLoader" />
    <!--<Welcome msg="Welcome to Your Vue.js App"/>//-->
    <IndividualCalendar/>
  </div>
</template>

<script>
//import Welcome from './pages/Welcome.vue'
import IndividualCalendar from './pages/calendars/Individual.vue'
import Menu from './components/Menu.vue'
import Loader from './components/Loader.vue'

export default {
  name: 'app',
  data() {
    return {
      active: 'IndividualCalendar',
      showLoader: false,
      errorMessage: null
    }
  },
  components: {
    Menu,
    Loader,
    IndividualCalendar,
  },
  methods: {
    setActive: function(active) {
      this.active = active
    },
    setLoader: function(loading) {
      this.showLoader = loading
    },
    setErrorMessage: function(message) {
      this.errorMessage = message
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html, body {
  height: 100%;
}
.main-page {
  padding-top: 5px;
}

@media print {
  @page {
    size: A4 landscape;
    margin: 25mm 25mm 25mm 25mm;
  }
  .no-print {
    display: none;
  }
}
</style>
