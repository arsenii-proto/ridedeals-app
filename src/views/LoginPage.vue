<template>
  <Page>
    <Login slot="content"></Login>
  </Page>
</template>

<script>
import Page from "@/components/custom/Page";
import Login from "@/components/Login";

export default {
  name: "LoginPage",
  components: {
    Page,
    Login,
  }
};
</script>

<style scoped>

</style>