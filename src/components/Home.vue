<template>
  <div class="home">

    <div class="full-fixed loading row" v-if="!user_data_loaded">

      <h4 class="animated pulse infinite text-white center align-self-center col">Loading ...</h4>

    </div>
    
    <div class="full-fixed row" v-if="user_data_loaded">

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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
