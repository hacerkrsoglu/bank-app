<template>
  <div class="d-flex align-items-center justify-content-center " style="height: 80vh;">
    <div class="card " style="width: 18rem;">
      
      <div class="card-body">
      
          <div class="form-group">
            <label for="cardNumber">Kart Numarası</label>
            <input v-model="creditCardToAdd.CardNumber" type="text" id="cardNumber" name="cardNumber"class="form-control" placeholder="Kart Numarasını Giriniz"/>
          </div>
          <div class="form-group">
            <label for="expiryDate">Son Kullanma Tarihi</label>
            <input v-model="creditCardToAdd.ExpiryDate"  type="date"  id="expiryDate" name="expiryDate" class="form-control"/>
          </div>
          <div class="form-group">
            <label for="cvv">CVV</label>
            <input  v-model="creditCardToAdd.CVV" type="text"  id="cvv" name="cvv" class="form-control" placeholder="CVV Kodunu Giriniz"/>
          </div>
          <div class="d-flex align-items-center justify-content-between py-3">
            
            <NuxtLink class="btn btn-success " to="/account/account-home"> Geri Dön </NuxtLink>
            <button @click="CardsAdd()" class="btn btn-primary ">Kartı Tanımla</button>
          </div>
      
      </div>
    </div>
  </div>
</template>
<script setup>

import { useCardStore } from '~/stores/card/cardStores'



const cardStore = useCardStore();
let creditCardToAdd = computed(() => cardStore.creditCardToAdd);

function CardsAdd() {
    cardStore.CreditCardAdd();
}
</script>