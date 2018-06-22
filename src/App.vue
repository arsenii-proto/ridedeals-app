<template>
  <div id="app full-fixed">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Crimson+Text|Montserrat|Nanum+Gothic|Raleway');
@import url('https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css');

.page{
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
}

</style>
