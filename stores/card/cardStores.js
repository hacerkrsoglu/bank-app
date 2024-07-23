import { CreditCardToAdd  , CreditCardsToGet} from "~/services/card/types";
import { AddAsync , CreditCardsGetByIdAsync } from "~/services/card/cardService";
import { getCurrentUserId } from "~/services/core/localStorageBase";
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCardStore = defineStore("card-store", () => {
    const creditCardToAdd = ref({...new CreditCardToAdd()});
    const cards = ref([])

    async function CreditCardAdd() {
        let userId = await getCurrentUserId();
        AddAsync({
            UserId : userId,
            CardNumber : creditCardToAdd.value.CardNumber,
            CVV : creditCardToAdd.value.CVV,
            ExpiryDate : creditCardToAdd.value.ExpiryDate
        })
        .then((response) => {
            if (response.success) {
                navigateTo("/home");
            }
        })

    }
    async function GetCreditCards() {
        let userId = await getCurrentUserId();
        
        CreditCardsGetByIdAsync(userId).then((response) => {

           
            if (response.success) {
                cards.value = response.data.map(x => new CreditCardsToGet(
                 x.id,
                 x.cardNumber
                ));
                console.log('Cards:', cards.value); 
            } else {
                console.error('API Error:', response.message);
            }
        }).catch((error) => {
            console.error('API Call Failed:', error);
        });

    }  

    return {
        CreditCardAdd,
        creditCardToAdd,
        GetCreditCards,
        cards

    };
});
