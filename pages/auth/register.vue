<template>
  <div>
      <div class="row">
          <div class="col-md-4 offset-md-4">
              <h1 class="h3 mb-3 fw-normal">Register</h1>

             
                  <div class="form-floating">
                      <input v-model="userToRegister.Email" type="email" class="form-control" id="floatingEmail" placeholder="Email" required>
                      <label for="floatingEmail">Email</label>
                  </div>
                  <div class="form-floating">
                      <input v-model="userToRegister.Password" type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
                      <label for="floatingPassword">Password</label>
                  </div>
                  <div class="form-floating">
                      <input v-model="userToRegister.FirstName" type="text" class="form-control" id="floatingFirstName" placeholder="First Name" required>
                      <label for="floatingFirstName">First Name</label>
                  </div>
                  <div class="form-floating">
                      <input v-model="userToRegister.LastName" type="text" class="form-control" id="floatingLastName" placeholder="Last Name" required>
                      <label for="floatingLastName">Last Name</label>
                  </div>
                  <div class="form-floating">
                      <select v-model="userToRegister.GenderId" class="form-control" id="floatingGenderId" required>
                          <option value="1">Erkek</option>
                          <option value="2">Kadın</option>
                      </select>
                      <label for="floatingGenderId">Cinsiyet</label>
                  </div>
                  <div class="form-floating">
                      <input v-model="userToRegister.IdentityNumber" type="text" class="form-control" id="floatingIdentityNumber" placeholder="Identity Number" required>
                      <label for="floatingIdentityNumber">Identity Number</label>
                  </div>
                  <div class="form-floating">
                      <input v-model="userToRegister.DateOfBirth" type="date" class="form-control" id="floatingDateOfBirth" placeholder="Date of Birth" required>
                      <label for="floatingDateOfBirth">Date of Birth</label>
                  </div>

                  <button @click="Register()" class="btn btn-primary w-100 py-2">Register</button>
            

              <div v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</div>
          </div>
      </div>
  </div>
</template>
  
<script setup>

import { useAuthStore } from '~/stores/auth/authStores'
    
const authStore = useAuthStore()
const userToRegister = computed(() => authStore.userToRegister)
  
  
function Register() {
    authStore.Register()
}

definePageMeta({
        layout: false
    })
</script>
