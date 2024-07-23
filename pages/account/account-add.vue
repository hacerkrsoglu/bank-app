<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
      <div class="form-container">
        <div class="form-floating mb-3">
          <select v-model="accountToAdd.AccountPurposeId" class="form-select" id="accountPurpose" required>
            <option value="1">Şahsi Hesap</option>
            <option value="2">Kurumsal Hesap</option>
          </select>
          <label for="accountPurpose">Hesap Açma Amacınızı Seçiniz</label>
        </div>
  
        <div class="form-floating mb-3">
          <select v-model="accountToAdd.AccountTypeId" class="form-select" id="accountType" required>
            <option value="1">Vadeli Hesap</option>
            <option value="2">Vadesiz Hesap</option>
          </select>
          <label for="accountType">Hesap Tipini Seçiniz</label>
        </div>
  
        <div class="form-floating mb-3">
          <select v-model="accountToAdd.CurrencyId" class="form-select" id="currency" required>
            <option value="1">TL</option>
            <option value="2">USD</option>
            <option value="3">EURO</option>
          </select>
          <label for="currency">Para Birimini Seçiniz</label>
        </div>
  
        <div class="d-flex align-items-center justify-content-between">
          <NuxtLink class="btn btn-success me-3" to="/account/account-home"> Geri Dön </NuxtLink>
          <button @click="AccountAdd" class="btn btn-primary ">Hesap Ekle</button>
        </div>
     
      </div>
    </div>
  </template>
  

<script setup>
import { useAccountStore } from '~/stores/account/accountStores'



const accountStore = useAccountStore();
let accountToAdd = computed(() => accountStore.accountToAdd);

function AccountAdd() {
    accountStore.AccountAdd();
}
</script>

<style scoped>
/* Additional styling */
.form-container {
  max-width: 600px; /* Adjust the maximum width of the form container */
  width: 100%;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 1.5rem; /* Increased space between form controls */
}

.form-group label {
  display: block; /* Ensure the label takes up the full width */
  margin-bottom: 0.5rem; /* Space between label and select */
  font-weight: bold; /* Make label text bold */
  font-size: 1rem; /* Adjust font size for better readability */
}

.form-group select {
  width: 100%; /* Make the select element take the full width */
}

.btn-primary {
  min-width: 150px; /* Minimum width for the button */
}
</style>