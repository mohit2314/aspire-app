<template>
  <router-view />
</template>
<script >

export default {
  name: 'App',

  created(){
    this.$store.dispatch('tryLogin');
  },

  computed:{
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    }
  },

  watch:{
    didAutoLogout(curValue,oldValue) {
      //checking if autologout is true & has changed
      if(curValue && curValue !== oldValue) 
      {
        this.$router.replace('/');
      }
    }
  }
}
</script>
