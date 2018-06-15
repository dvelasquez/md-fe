<template>
  <v-app>    
    <v-toolbar
      app
      color="primary"
      dark
    >      
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>      
    </v-toolbar>
    <v-content>
      <Listing/>
    </v-content>    
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Listing from './components/Listing';

export default {
  name: 'App',
  components: {
    Listing,
  },
  data() {
    return {
      fixed: false,
      title: 'Yapo.cl',
    };
  },
};
</script>
