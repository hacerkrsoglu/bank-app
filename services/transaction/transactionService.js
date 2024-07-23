import { Post } from "../core/baseService";

export function Insert(transactionToAdd) {
    return Post('/transactions', null, {
        SenderAccountId: transactionToAdd.SenderAccountId,
        RecieverAccountId: transactionToAdd.RecieverAccountId,
        IBAN: transactionToAdd.IBAN || "",
        Amount: Number(transactionToAdd.Amount)
    })
}