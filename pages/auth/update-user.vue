<template>
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <h1 class="h3 mb-3 fw-normal">Update</h1>
        <div class="form-floating">
          <input v-model="userToUpdate.FirstName" type="text" class="form-control" id="floatingFirstName" placeholder="First Name" required>
          <label for="floatingFirstName">First Name</label>
        </div>
        <div class="form-floating">
          <input v-model="userToUpdate.LastName" type="text" class="form-control" id="floatingLastName" placeholder="Last Name" required>
          <label for="floatingLastName">Last Name</label>
        </div>
        <div class="form-floating">
          <input v-model="userToUpdate.Email" type="email" class="form-control" id="floatingEmail" placeholder="Email" required>
          <label for="floatingEmail">Email</label>
        </div>
        <div class="form-floating">
          <input v-model="userToUpdate.Password"  class="form-control" id="floatingPassword" placeholder="Password" required>
          <label for="floatingPassword">Password</label>
        </div>
        <button @click="Update()" class="btn btn-primary w-100 py-2">Update</button>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { useAuthStore } from '~/stores/auth/authStores'
  
  const authStore = useAuthStore()
  const userToUpdate = computed(() => authStore.userToUpdate)
  
  onMounted(() => {
    authStore.GetUser();
  })
  
 
  
  function Update() {
    authStore.Update()
  }
  </script>
  