<template>
    <div>
        <div class="row">
            <div class="col-12 d-flex align-items-center justify-content-center">
                <h2>Hesap Detayları </h2>
            </div>
            
            <div class="col-10 d-flex align-items-center justify-content-center flex-wrap" style="gap:15px;">
                <div class="card" v-for="account in accounts" :key="account.AccountId" style="width: 25rem;">
                    <div class="card-title p-3" style="border-bottom: 1px black solid;">
                        {{ account.AccountNo }}
                    </div>
                    <div class="card-body p-1 px-3 d-flex flex-column text-start">
                        <span><b>IBAN - </b>{{ account.IBAN }}</span>
                        <span><b>Açılış Amacı - </b>{{ account.AccountPurposeName }}</span>
                        <span><b>Hesap Tipi - </b>{{ account.AccountTypeName }}</span>
                        <span><b>Para Birimi - </b>{{ account.AccountCurrencyName }}</span>
                        <span class="pb-2"><b>Para Miktarı - </b>{{ account.Balance }}</span>
                        <label class="pb-1" for="card">Bağlı Olduğu Kart</label>
                        <select v-model="account.CreditCardId" id="card" class="form-select" >
                            <option value="0">Seçiniz</option>
                            <option  v-for="card in cards" :key="card.Id" :value="card.Id">
                                {{ card.CardNumber }}
                            </option>
                        </select>
                    </div>
                    <div class="card-footer d-flex align-items-center justify-content-between">
                        <div @click="Delete(account.AccountId, account.CreditCardId)" class="btn btn-danger btn-sm">Kartı Kaldır</div>
                        <div class="d-flex align-items-center justify-content-end" style="gap:10px;">
                            <div @click="Update(account.AccountId, account.CreditCardId)" class="btn btn-info btn-sm">Kaydet</div>
                            <div @click="GoToDetails(account)" class="btn btn-sm btn-dark" >Para Yükle/Çek </div>

                        </div>
                    


                    </div>
                </div>
            </div>
            <div class="col-2 d-flex flex-column " style="gap:10px;">
                <div>
                    <NuxtLink class="btn btn-success" to="/account/account-add"> Hesap Ekle</NuxtLink>
                </div>
                <div>
                    <NuxtLink class="btn btn-dark" to="/creditCard/card-add"> Kart Ekle </NuxtLink>
                </div>
                <div>
                    <NuxtLink class="btn btn-warning" to="/transaction"> Para Transferi Yap </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useAccountStore } from '~/stores/account/accountStores';
import { useCardStore } from '~/stores/card/cardStores'; 
import { useAccountCardStore } from '~/stores/account-card/accountCardStores'; 


const accountStore = useAccountStore();
const cardStore = useCardStore();
const accountCardStore = useAccountCardStore();
const accounts = computed(() => accountStore.accounts);
const cards = computed(() => cardStore.cards);

onMounted(() => {
    accountStore.AccountGet();
    cardStore.GetCreditCards();
   
});

function Update(AccountId,CreditCardId){
    accountCardStore.Update(AccountId,CreditCardId);
}
function Delete(AccountId, CreditCard){
    accountCardStore.Delete(AccountId,CreditCard)
    .then(() => {
        accountStore.AccountGet();
    })
}
function GoToDetails(Account){
    accountStore.currentAccountDetail = Account;
    navigateTo("/account/account-details")
}
</script>
