<template>
  <div id="app">
    <Header />
    <div id ='content' class = 'content'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '../../components/layout/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  data(){
    return{
      canreach:"no",
    };
  },
  methods: {
    parentMethod: function(message) {
      alert(message)
    }
  }
}
</script>

<style>
</style>
