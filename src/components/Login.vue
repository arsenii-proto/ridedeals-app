<template>
  <div class="row flex-column hfulli center">
    
    <div class="col-auto p40">

      <h4 class="pb10">{{ trans('login.title') }}</h4>
      <p v-if="!number_sended" class="subtitle">{{ trans('login.phone.title') }}</p>
      <p v-if="number_sended" class="subtitle">{{ trans('login.code.title') }}</p>

    </div>
    
    <div class="col-auto pl40i pr40i">
      
      <div class="row">

        <div v-if="!number_sended" class="col-3 hold country">
          <h5>{{ country_code }}</h5>
        </div>

        <div v-if="!number_sended" class="col-1 p0i"></div>
        <div v-if="!number_sended" class="col-8 hold number">
          <h5 v-html="phone_number ? phone_number.replace(/\s/g, '&nbsp;') : '&nbsp;'"></h5>
        </div>


        <div v-if="number_sended" class="col-3"></div>
        <div v-if="number_sended" class="col-6 hold number">
          <h5 v-html="code_number ? code_number.replace(/\s/g, '&nbsp;') : '&nbsp;'"></h5>
        </div>

      </div>

    </div>
    
    <div class="col p20">

      <div class="row flex-column hfulli">

        <div class="col">
          
          <div class="row hfulli align-items-center">

            <div class="col-4">
              <btn tag="a" class="theme fs20i" @tap="applyNumber('1')" tap-class="hover">1</btn>
            </div>
            <div class="col-4">
              <btn tag="a" class="theme fs20i" @tap="applyNumber('2')" tap-class="hover">2</btn>
            </div>
            <div class="col-4">
              <btn tag="a" class="theme fs20i" @tap="applyNumber('3')" tap-class="hover">3</btn>
            </div>

          </div>
          
        </div>

        <div class="col">
          
          <div class="row hfulli align-items-center">

            <div class="col-4">
              <btn tag="a" class="theme fs20i" @tap="applyNumber('4')" tap-class="hover">4</btn>
            </div>
            <div class="col-4">
              <btn tag="a" class="theme fs20i" @tap="applyNumber('5')" tap-class="hover">5</btn>
            </div>
            <div class="col-4">
              <btn tag="a" class="theme fs20i" @tap="applyNumber('6')" tap-class="hover">6</btn>
            </div>

          </div>

        </div>

        <div class="col">
          
          <div class="row hfulli align-items-center">

            <div class="col-4">
              <btn tag="a" class="theme fs20i" @tap="applyNumber('7')" tap-class="hover">7</btn>
            </div>
            <div class="col-4">
              <btn tag="a" class="theme fs20i" @tap="applyNumber('8')" tap-class="hover">8</btn>
            </div>
            <div class="col-4">
              <btn tag="a" class="theme fs20i" @tap="applyNumber('9')" tap-class="hover">9</btn>
            </div>

          </div>

        </div>

        <div class="col">
          
          <div class="row hfulli align-items-center">

            <div class="col-4"></div>
            <div class="col-4">
              <btn tag="a" class="theme fs20i" @tap="applyNumber('0')" tap-class="hover">0</btn>
            </div>
            <div class="col-4">
              <btn tag="a" class="theme fs20i" @tap="applyNumber('C')" tap-class="hover">C</btn>
            </div>

          </div>

        </div>  

      </div>

    </div>

    <div class="col-auto pb20">

      <btn tag="a"
        class="theme number-link send-btn"
        @tap="sendPhoneNumber"
        v-if="!number_sended"
        v-bind:class="{ enabled: phone_valid }" 
        > 
          {{ trans('login.phone.btn') }}
      </btn>
      <btn tag="a"
        class="theme number-link send-btn"
        @tap="sendCodeNumber"
        v-if="number_sended"
        v-bind:class="{ enabled: code_valid }" 
        > 
          {{ trans('login.code.btn') }}
      </btn>

    </div>

    <div class="col-auto" :style="{ paddingBottom: ($stiller.navbar.height.y / 2) + 'px' }"></div>

  </div>
</template>

<script>
import btn from "@/components/custom/btn";

export default {
  name: "Login", 
  components: {
    btn
  },
  data() {
    return {
      country_code: "+373",
      number_sended: false,
      phone_number: "",
      phone_regex_not_values: /[^\d]/g,
      phone_regex_match_patern: /^\s*(\d\d?)\s*(\d?\d?)\s*(\d?\d?)\s*(\d?\d?)\s*$/,
      phone_regex_replace_patern: "$1 $2 $3 $4",
      phone_regex_valid: /^\s*(\d\d)\s*(\d\d)\s*(\d\d)\s*(\d\d)\s*$/,
      phone_valid: false,
      code_number: "",
      code_regex_not_values: /[^\d]/g,
      code_regex_match_patern: /^\s*(\d\d?)\s*(\d?\d?)\s*(\d?\d?)\s*$/,
      code_regex_replace_patern: "$1 $2 $3",
      code_regex_valid: /^\s*(\d\d)\s*(\d\d)\s*(\d\d)\s*$/,
      code_valid: false
    };
  },
  methods: {
    applyNumber(numb) {
      this[this.number_sended ? "addCodeNumber" : "addPhoneNumber"](
        numb.trim()
      );
    },
    addPhoneNumber(numb) {
      var number = this.phone_number.replace(this.phone_regex_not_values, "");
      if (numb === "C") {
        this.phone_number = number
          .substr(0, number.length - 1)
          .replace(
            this.phone_regex_match_patern,
            this.phone_regex_replace_patern
          );
      } else {
        number += numb || "";
        if (this.phone_regex_match_patern.exec(number)) {
          this.phone_number = number.replace(
            this.phone_regex_match_patern,
            this.phone_regex_replace_patern
          );
        }
      }
      this.phone_valid =
        this.phone_regex_valid.exec(this.phone_number) !== null;
    },
    addCodeNumber(numb) {
      var number = this.code_number.replace(this.code_regex_not_values, "");
      if (numb === "C") {
        this.code_number = number
          .substr(0, number.length - 1)
          .replace(
            this.code_regex_match_patern,
            this.code_regex_replace_patern
          );
      } else {
        number += numb || "";
        if (this.code_regex_match_patern.exec(number)) {
          this.code_number = number.replace(
            this.code_regex_match_patern,
            this.code_regex_replace_patern
          );
        }
      }
      this.code_valid = this.code_regex_valid.exec(this.code_number) !== null;
    },
    sendPhoneNumber() {
      if (!this.phone_valid) return;
      this.$stiller.firebase.auth
        .signInWithPhoneNumber({
          number: this.country_code + this.phone_number
        })
        .then(this.repaireUser)
        .catch(error => {
          this.$router.replace("/unauthorized");
        });

      this.number_sended = true;
    },
    sendCodeNumber() {
      if (!this.phone_valid) return;
      this.$stiller.firebase.auth
        .signInWithPhoneNumberCode({ code: this.code_number })
        .then(this.repaireUser)
        .catch(error => {
          this.$router.replace("/unauthorized");
        });
    },
    repaireUser() {
      const self = this;
      const userDocRef = self.$stiller.firebase.firestore
        .collection("users")
        .doc(self.$stiller.firebase.auth.loggedUser.phone);

      userDocRef.get().then(function(doc) {
        if (!doc.exists) {
          userDocRef
            .set({
              phone_number: self.$stiller.firebase.auth.loggedUser.phone,
              default_first_name: "Anonymous",
              default_second_name: "Anteater",
              default_profile_png:
                "https://ssl.gstatic.com/docs/common/profile/anteater_lg.png",
              type: null,
              app_token: self.$stiller.firebase.app_token
            })
            .then(() => {
              self.$router.replace("/");
            });
        } else {
          userDocRef
            .update({
              app_token: self.$stiller.firebase.app_token
            })
            .then(() => {
              self.$router.replace("/");
            });
        }
      });
    }
  }
};
</script>

<style scoped>
.hold-wrapper {
  padding: 40px 40px 0;
}
.subtitle {
  padding: 10px 30px;
}
.hold {
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
}
.hold > h5 {
  margin: 0;
}
.number-link.send-btn {
  opacity: 0.3;
  transition: opacity 0.5s;
}
.number-link.send-btn.enabled {
  opacity: 1;
}
</style>