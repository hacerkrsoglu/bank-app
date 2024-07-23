import {
    TransactionToAdd
} from "~/services/transaction/types"

import {
    Insert
} from "~/services/transaction/transactionService"

export const useTransactionStore = defineStore("transaction-store", () => {
    const transactionType = ref(1);
    const transactionToAdd = ref({...new TransactionToAdd()})

    function AddTransaction() {
        Insert(transactionToAdd.value).then((response) => {
            if (response.success) {
                window.alert("Başarılı")
            } else {
                window.alert(response.message)
            }
        })
    }

    return {
        transactionType,
        transactionToAdd,
        AddTransaction
    }
})