
import { DeleteAsync, UpdateAsync  } from  "~/services/account-card/accountCardService";
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { AccountCardToUpdate } from "~/services/account-card/types";

export const useAccountCardStore = defineStore("account-card-store", () => {
   

    async function Update(accountId, creditCardId) {
        UpdateAsync(new AccountCardToUpdate(accountId,creditCardId))
        .then((response ) => {
            if (response.success){
                window.alert("Güncellendi")
            }
        })
        
        
      
    }

    function Delete(accountId, creditCardId){
        return DeleteAsync(accountId, creditCardId)
        .then((response) => {
            if (response.success){
                window.alert("Silindi")
            }
        })

    }

    return {
        Update,
        Delete
      
    };
});
