import { Post ,Delete} from "../core/baseService";

export function UpdateAsync (accountCardToUpdate){
    console.log(accountCardToUpdate)
    return Post('/AccountCard/update', null, {
        AccountId: accountCardToUpdate.AccountId,
        CreditCardId : accountCardToUpdate.CreditCardId

    });
    
}

export function DeleteAsync (accountId, creditCardId){
    return Delete('/AccountCard/delete', {
        accountId:accountId,
        creditCardId:creditCardId

    })
}

 