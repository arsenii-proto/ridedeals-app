<template>
  <Page @swipeLeft="swipeLeft">
    
    <TopPanel slot="header"></TopPanel>

  </Page>
</template>

<script>
import Page from "@/components/custom/Page";
import TopPanel from "@/components/custom/top-panel";

export default {
  name: 'ClientDashboard',
  
  components: {
    Page,
    TopPanel,
  },

  methods: {

    swipeLeft(event) {

      console.log(event, this)
    }

  }
}
</script>

<style scoped>

</style>