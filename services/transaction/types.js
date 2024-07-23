export class TransactionToAdd {
    SenderAccountId = 0
    RecieverAccountId = 0
    IBAN = ""
    Amount = 0

    constructor(senderAccountId, recieverAccountId, iban, amount) {
        this.SenderAccountId = senderAccountId,
        this.RecieverAccountId = recieverAccountId,
        this.IBAN = iban,
        this.Amount = amount
    }
}