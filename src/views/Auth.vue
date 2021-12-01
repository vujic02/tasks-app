<template>
  <div class="flex flex-col justify-center items-center w-full">
    <div
      class="
        shadow-lg
        w-2/3
        h-2/3
        flex flex-col
        justify-center
        items-center
        rounded-lg
        bg-white
        relative
      "
    >
      <div class="mb-4" v-if="authType">
        <h2 class="text-green-500 font-semibold text-lg">Create an account</h2>
        <form class="grid grid-cols-1">
          <input
            v-model="email"
            class="
              border border-black
              rounded-sm
              outline-none
              my-2
              focus:border-green-500
              p-2
            "
            placeholder="Email Address"
          />
          <input
            v-model="password"
            type="password"
            class="
              border border-black
              rounded-sm
              outline-none
              my-2
              focus:border-green-500
              p-2
            "
            placeholder="Password"
          />
        </form>
        <button
          @click="register()"
          class="
            border border-green-400
            hover:border-green-500
            px-4
            py-1
            rounded-sm
            bg-green-400
            text-white
            active:bg-green-500
          "
        >
          Register
        </button>
        <p class="text-black font-normal text-sm absolute bottom-1">
          Already own an account?
          <span
            class="text-green-500 font-semibold text-sm cursor-pointer"
            @click="authType = !authType"
            >Log in</span
          >
        </p>
      </div>
      <div class="mb-4" v-else>
        <h2 class="text-green-500 font-semibold text-lg">
          Log into your account
        </h2>
        <form class="grid grid-cols-1">
          <input
            v-model="email"
            class="
              border border-black
              rounded-sm
              outline-none
              my-2
              focus:border-green-500
              p-2
            "
            placeholder="Email Address"
          />
          <input
            v-model="password"
            type="password"
            class="
              border border-black
              rounded-sm
              outline-none
              my-2
              focus:border-green-500
              p-2
            "
            placeholder="Password"
          />
        </form>
        <button
          @click="login()"
          class="
            border border-green-400
            hover:border-green-500
            px-4
            py-1
            rounded-sm
            bg-green-400
            text-white
            active:bg-green-500
          "
        >
          Login
        </button>
        <p class="text-black font-normal text-sm absolute bottom-1">
          Don't own an account yet?
          <span
            class="text-green-500 font-semibold text-sm cursor-pointer"
            @click="authType = !authType"
            >Register</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { app } from "../firebaseInit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import router from "../router";
const db = getFirestore(app);
const auth = getAuth(app);

export default {
  name: "Auth",
  data: () => {
    return {
      email: "",
      password: "",
      authType: false,
    };
  },
  methods: {
    register() {
      if (this.email && this.password) {
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then(function (UserCredential) {
            // get user data from the auth trigger
            const userUid = UserCredential.user.uid; // The UID of the user.

            // set account  doc
            const account = {
              useruid: userUid,
              tasks: [],
            };

            setDoc(doc(db, "accounts", userUid), account);
          })
          .catch(function (error) {
            // Handle Errors here.
            console.log(error);
          });
      }
    },
    login() {
      if (this.email && this.password) {
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then(function () {
            router.push("/overview");
          })
          .catch(function (error) {
            // Handle Errors here.
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
</style>