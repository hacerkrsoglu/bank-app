<template>
    <div class="d-flex align-items-center flex-column justify-content-center" style="gap: 20px">

        <div class="card" v-for="item in accountSummary" style="width: 50rem;">
           <div class="card-header"><b>Hesap Numarası - </b>{{ item.AccountNo }}</div>
           <div class="card-body">
                <h5><b>Hesap İşlemleri</b></h5>
               <ul v-if="item.AccountSummary.length > 0">
                   <li v-for="summary in item.AccountSummary">{{ summary }}</li>
               </ul>
               <span v-else>Bu hesap için herhangi bir işlem yapılmamıştır.</span>
           </div>
           <div class="card-footer">
               <h5><b> Bakiye -  {{ item.Balance }}</b> {{ item.Currency }}</h5>
           </div>
        </div>
    </div>



</template>

<script setup>
    import { useAccountStore } from '~/stores/account/accountStores';
    const accountStore = useAccountStore();

    onMounted(() => {
        accountStore.GetAccountSummaries();
    })


    const accountSummary = computed(() => accountStore.accountSummaries)

</script>

