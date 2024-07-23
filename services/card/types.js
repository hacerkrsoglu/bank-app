export class CreditCardToAdd {
    UserId = 0
    CardNumber = ''
    CVV = ''
    ExpiryDate = ''
    constructor(userId ,  cardNumber , cvv , expiryDate) {
        this.UserId = userId
        this.CardNumber = cardNumber
        this.CVV = cvv
        this.ExpiryDate = expiryDate
        
    }
}
export class CreditCardsToGet{
    Id= 0
    CardNumber = ''
   
    constructor(id,cardNumber){
        this.Id = id
        this.CardNumber = cardNumber
    }
}