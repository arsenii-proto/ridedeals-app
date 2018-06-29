<template>
  <div class="page full-fixed p30">
    Unauthorized
  </div>
</template>

<script>
export default {
  
  name: 'Unauthorized',

  mounted() {

    this.$stiller.firebase.auth.logout()
  }
}
</script>

<style scoped>

</style>