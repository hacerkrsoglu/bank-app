<template>
    <div>
        <div class="row">
            <div class="col-md-4 offset-md-4" >
            
        <img class="mb-4"  alt="" >
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input v-model="userToLogin.Email"  type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input  v-model="userToLogin.Password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button @click="Login()" class="btn btn-primary w-100 py-2" >Sign in</button>
    <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
  

            </div>
        </div>
        
    </div>

</template>


<script setup>

import { useAuthStore } from '~/stores/auth/authStores'


// const toast = useToast()

const authStore = useAuthStore()

let userToLogin = computed(() => authStore.userToLogin )


function Login(){

    authStore.Login()
  
    // toast.success("Hello")
}
definePageMeta({
        layout: false
    })

</script>