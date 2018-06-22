<template>
  <div class="page home">

    <div class="full-fixed loading row" v-if="!user_data_loaded">

      <h4 class="animated pulse infinite text-white center align-self-center col">Loading ...</h4>

    </div>
    
    <div class="full-fixed row" v-if="user_data_loaded">

      <div class="col-6 offset-3 pt30">
        <img v-bind:src="profile_png" alt="" class="circle responsive-img animated pulse infinite">
        <p class="flow-text animated pulse infinite">
          {{ first_name }}  {{ second_name }}
        </p>
      </div>

      <div class="col-12">

        <h5>{{ trans('welcome.who_are_you') }}</h5>

      </div>

      <div class="col-12">

        <div class="col-12">
          <btn tag="a" @tap="likeClient" class="theme full">{{ trans('welcome.i_am_client') }}</btn>
        </div>

        <div class="col-12">
          <btn tag="a" @tap="likeDriver" class="theme mt30">{{ trans('welcome.i_am_driver') }}</btn>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import btn from "@/components/custom/btn";

export default {
  name: 'Home',
  components: {
    btn
  },
  data () {
    const userDocRef = this.$stiller.firebase.firestore.collection('users').doc(
      this.$stiller.firebase.auth.loggedUser.phone
    )
    
    userDocRef.get().then((doc) => {
      if( doc.data.type != null ){
        console.log(doc.data.type == "client" ? '/client-dashboard' : "/driver-dashboard")
        this.$router.replace(
          doc.data.type == "client" ? '/client-dashboard' : "/driver-dashboard"
        )
      } else {
        this.profile_png = doc.data.profile_png || doc.data.default_profile_png
        this.first_name = doc.data.first_name || doc.data.default_first_name
        this.second_name = doc.data.second_name || doc.data.default_second_name
        this.user_data_loaded = true
      }
    })
    return {
      user_data_loaded: false,
      profile_png: null,
      first_name: null,
      second_name: null,
    }
  },
  methods: {
    
    likeClient(){
      
      const userDocRef = this.$stiller.firebase.firestore.collection('users').doc(
        this.$stiller.firebase.auth.loggedUser.phone
      ).update({
        type: "client"
      }).then(() =>  this.$router.replace('/client-dashboard') )
    },
    
    likeDriver(){
      
      const userDocRef = this.$stiller.firebase.firestore.collection('users').doc(
        this.$stiller.firebase.auth.loggedUser.phone
      ).update({
        type: "driver"
      }).then(() =>  this.$router.replace('/driver-dashboard') ) 
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
