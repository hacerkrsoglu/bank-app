<template>
    <div style="width: 100%;" class="d-flex align-items-center justify-content-center">
        <div class="card" style="width: 30rem;" v-if="transacitonType == 1">
            <div class="card-header">Hesaplarım Arası Transfer</div>
            <div class="card-body d-flex flex-column align-items-center justify-content-center" style="gap: 15px;">
                <div style="width: 100%;">
                    <label for="senderAccount">Gönderen Hesap</label>
                    <select v-on:change="setToTrueOfSelected()" v-model="transactionToAdd.SenderAccountId" id="senderAccount" class="form-select">
                        <option value="0">Seçiniz...</option>
                        <option :disabled="item.IsSelected" v-for="item in accountsToSelect" :value="item.Id">{{ item.AccountNo }}</option>
                    </select>
                </div>
                <div style="width: 100%;">
                    <label for="recieverAccount">Alıcı Hesap</label>
                    <select v-model="transactionToAdd.RecieverAccountId" id="recieverAccount" class="form-select">
                        <option value="0">Seçiniz...</option>
                        <option :disabled="item.IsSelected" v-for="item in accountsToSelect" :value="item.Id">{{ item.AccountNo }}</option>
                    </select>
                </div>
                <div style="width: 100%;">
                    <label for="amount">Miktar</label>
                    <input v-model="transactionToAdd.Amount" class="form-control" id="amount" type="text" placeholder="Giriniz...">
                </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
                <div @click="() => { transacitonType = 2 }" class="btn btn-warning">Başka Hesaba Gönder</div>
                <div @click="AddTransaciton()" class="btn btn-success">Gönder</div>
            </div>
        </div>
        <div class="card" style="width: 30rem;" v-if="transacitonType == 2">
            <div class="card-header">Başka Hesaba Transfer</div>
            <div class="card-body d-flex flex-column align-items-center justify-content-center" style="gap: 15px;">
                <div style="width: 100%;">
                    <label @change="" for="senderAccount">Gönderen Hesap</label>
                    <select v-model="transactionToAdd.SenderAccountId" id="senderAccount" class="form-select">
                        <option value="0">Seçiniz...</option>
                        <option :disabled="item.IsSelected" v-for="item in accountsToSelect" :value="item.Id">{{ item.AccountNo }}</option>
                    </select>
                </div>
                <div style="width: 100%;">
                    <label for="recieverIBAN">IBAN</label>
                    <input v-model="transactionToAdd.IBAN" class="form-control" id="recieverIBAN" type="text">
                </div>
                <div style="width: 100%;">
                    <label for="amount">Miktar</label>
                    <input v-model="transactionToAdd.Amount" class="form-control" id="amount" type="text" placeholder="Giriniz...">
                </div>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
                <div @click="() => { transacitonType = 1 }" class="btn btn-warning">Kendi Hesabına Gönder</div>
                <div @click="AddTransaciton()" class="btn btn-success">Gönder</div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { useTransactionStore } from '~/stores/transaction/transactionStore';
    import { useAccountStore } from '~/stores/account/accountStores';

    const transactionStore = useTransactionStore();
    const accountStore = useAccountStore();

    onMounted(() => {
        accountStore.GetAccountsForSelection()
    })

    const accountsToSelect = computed(() => accountStore.accountsToSelect)
    const transactionToAdd = computed(() => transactionStore.transactionToAdd)
    const transacitonType = computed({
        get: () => transactionStore.transactionType,
        set: (value) => {
            transactionStore.transactionToAdd.SenderAccountId = 0
            transactionStore.transactionToAdd.RecieverAccountId = 0
            transactionStore.transactionToAdd.IBAN = ""
            transactionStore.transactionToAdd.Amount = 0
            transactionStore.transactionType = value
            accountStore.accountsToSelect.forEach(x => x.IsSelected = false)
        }
    })

    function setToTrueOfSelected() {
        for (const item of this.accountsToSelect) {
            item.IsSelected = false;
        }

        let selectedAccount = this.accountsToSelect.find(x => x.Id === this.transactionToAdd.SenderAccountId)
        selectedAccount.IsSelected = true;
        this.transactionToAdd.RecieverAccountId = 0
    }

    function AddTransaciton() {
        transactionStore.AddTransaction()
    }

</script>