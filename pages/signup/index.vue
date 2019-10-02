<template lang="pug">
section#singup
  h1 login form here
  input(placeholder="Email" v-model="loginData.username")
  input(type="password" placeholder="Password" v-model="loginData.password")
  button connection
  p Don't have an account? Create one Here
  br
  br
  br
  br
  h1 sign up form here
  input(placeholder="Email" v-model="signinData.username")
  input(type="password" placeholder="Password" v-model="signinData.password")
  button(@click="signup") connection
  p Don't have an account? Create one Here
  
</template>

<script>
import firebase from 'firebase'
import { db } from '../../firebase';
export default {
  name: 'signup',   
  data() {
    return {
      loginData:{
        username:"",
        password:"",
      },
      signinData:{
        username:"",
        password:"",
      },
    }
  },
  methods:{
    login(){
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(user){
        console.log(user)
        alert("Signed in!")
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    },
    signup(){
      firebase.auth().createUserWithEmailAndPassword(this.signinData.username, this.signinData.password)
      .then(function(user){
        console.log(user)
        alert("made it!")
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });

a
    //   firebase.auth().createUserWithEmailAndPassword(this.signinData.username, this.signinData.password).then(
    //     function (user){
    //       alert("made it!")
    //     },
    //     function(err){
    //       console.log('Oops. '+ err.message)
    //     }
    //   )
    }
  },
  props: {
  }
}
</script>

<style lang="stylus">
.e
  n o
</style>
