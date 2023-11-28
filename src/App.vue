<script >
import headerComp from './components/headerComp.vue';
import mainComp from './components/mainComp.vue';
import footerComp from './components/footerComp.vue';

export default{
  name: "App",
  components: {
    headerComp,
    mainComp,
    footerComp,
  }
}    

</script>

<template>
  
    <headerComp/>
    <mainComp/>
    <footerComp/>
 
</template>

<style lang="scss">
@use './style/main.scss';
</style>
