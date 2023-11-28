<script >
import headerComp from './components/headerComp.vue';
import footerComp from './components/footerComp.vue';

export default{
  name: "App",
  components: {
    headerComp,
    footerComp,
  }
}    

</script>

<template>
  
    <headerComp/>
    <router-view></router-view>
    <footerComp/>
 
</template>

<style lang="scss">
@use './style/main.scss';
</style>
