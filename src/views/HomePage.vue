<template>
  <Page>
    <Home slot="content"></Home>
  </Page>
</template>

<script>
import Page from "@/components/custom/Page";
import Home from "@/components/Home";

export default {
  name: "HomePage",
  components: {
    Page,
    Home,
  }
};
</script>

<style scoped>

</style>