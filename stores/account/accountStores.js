import { AccountToAdd , AccountDetailsDto, AccountSummaryDto, AccountToSelect} from "~/services/account/types";
import { AddAsync, UpdateBalanceAsync, GetAccountSummariesByUserId, GetAccountsForSelectionByUserId } from "~/services/account/accountService";
import { GetByIdAsync } from "~/services/account/accountService";
import { getCurrentUserId } from "~/services/core/localStorageBase";
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAccountStore = defineStore("account-store", () => {
    const accountToAdd = ref({...new AccountToAdd()});
    const accounts = ref([]);
    const currentAccountDetail = ref({...new AccountDetailsDto()});
    const balance = ref(0);
    const accountSummaries = ref([])
    const accountsToSelect = ref([])

    async function AccountAdd() {
        let userId = await getCurrentUserId();
        AddAsync({
            UserId: userId,
            AccountPurposeId: accountToAdd.value.AccountPurposeId,
            AccountTypeId: accountToAdd.value.AccountTypeId,
            CurrencyId: accountToAdd.value.CurrencyId,
        })
        .then((response) => {
            if (response.success) {
                navigateTo("/home");
            }
        })
    }

    async function AccountGet() {
        let userId = await getCurrentUserId();
        
        GetByIdAsync(userId).then((response) => {

           
            if (response.success) {
                accounts.value = response.data.map(x => new AccountDetailsDto(
                    x.userId,
                    x.accountPurposeId,
                    x.accountTypeId,
                    x.currencyId,
                    x.iban,
                    x.balance,
                    x.accountNo,
                    x.accountId,
                    x.accountTypeName,
                    x.accountCurrencyName,
                    x.accountPurposeName,
                    x.creditCardId,
                    x.creditCardName
               


                ));
                console.log('Accounts:', accounts.value); // accounts dizisini kontrol edin
            } else {
                console.error('API Error:', response.message);
            }
        }).catch((error) => {
            console.error('API Call Failed:', error);
        });

    }  

    function UpdateBalance(typeId){
    
        return UpdateBalanceAsync(currentAccountDetail.value.AccountId , typeId, balance.value)
        .then((response) => {
            if(response.success){
                window.alert("Para Güncellendi")
                navigateTo("/account/account-home")
            }

        })
        

    }
       
    async function GetAccountSummaries() {
        const userId = await getCurrentUserId();

        GetAccountSummariesByUserId(userId).then((response) => {
            console.log(response);

            accountSummaries.value = response.data.map(x => new AccountSummaryDto(
                x.accountNo,
                x.balance,
                x.createdDate,
                x.currency,
                x.accountSummary
            ))
        })
    }

    async function GetAccountsForSelection() {
        const userId = await getCurrentUserId();

        GetAccountsForSelectionByUserId(userId).then((response) => {
            accountsToSelect.value = response.data.map(x => new AccountToSelect(
                x.id,
                x.accountNo,
                false
            ))
        })
    }

    return {
        AccountAdd,
        accountToAdd,
        AccountGet,
        accounts,
        UpdateBalance,
        currentAccountDetail,
        balance,
        accountSummaries,
        GetAccountSummaries,
        GetAccountsForSelection,
        accountsToSelect
    };
});
