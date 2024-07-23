<template>
    {{ balance }}
<div class="card"  style="width: 30rem;">
                    <div class="card-title p-3" style="border-bottom: 1px black solid;">
                        {{ currentAccountDetail.AccountNo }}
                    </div>
                    <div class="card-body p-1 px-3 d-flex flex-column text-start">
                        <span><b>IBAN - </b>{{ currentAccountDetail.IBAN }}</span>
                        <span><b>Açılış Amacı - </b>{{ currentAccountDetail.AccountPurposeName }}</span>
                        <span><b>Hesap Tipi - </b>{{ currentAccountDetail.AccountTypeName }}</span>
                        <span><b>Para Birimi - </b>{{ currentAccountDetail.AccountCurrencyName }}</span>
                        <span class="pb-2"><b>Para Miktarı - </b>{{ currentAccountDetail.Balance }}</span>
                        <span class="pb-2"><b>Kartı- </b>{{ currentAccountDetail.CreditCardName }}</span>
                    </div>

                </div>

                <div class="card" style="width: 30rem;">
                    <div class="card-body d-flex align-items-center justify-content-between" style="gap:10px;">
                        <div @click="Update(1)" class="btn btn-danger"> Para Çek </div>
                        <input v-model="balance" type="text" class="form-control">
                        <div @click="Update(2)" class="btn btn-success"> Para Yükle </div>

                    </div>
                </div>
</template>
<script setup>

import { useAccountStore } from '~/stores/account/accountStores';

const accountStore = useAccountStore();
const currentAccountDetail = computed(() => accountStore.currentAccountDetail);
const balance = computed({
    get: () => accountStore.balance,
    set: (value) => accountStore.balance = value
});
function Update(typeId){
    accountStore.UpdateBalance(typeId);

}







</script>