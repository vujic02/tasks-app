<template>
  <div>AUTH page</div>
  <button @click="register('nikola@gmail.com', 'nikola123')">Register</button>
</template>

<script>
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"; 
const db = getFirestore();
const auth = getAuth()



export default {
  name: "Auth",
  methods: {
    register(email, password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(function(user) {
          // get user data from the auth trigger
          const userUid = user.uid; // The UID of the user.

          // set account  doc  
          const account = {
            useruid: userUid,
            calendarEvents: []
          }

          setDoc(doc(db, "accounts", userUid), account)
        })
        .catch(function(error) {
          // Handle Errors here.
          console.log(error)
      });
    }
  }
}
</script>

<style>

</style>