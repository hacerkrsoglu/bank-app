export class AccountToAdd {
    UserId = 0
    AccountPurposeId = ''
    AccountTypeId = ''
    CurrencyId = ''
    constructor(userId ,  accountPurposeId , accountTypeId , currencyId) {
        this.UserId = userId;
        this.AccountPurposeId = accountPurposeId;
        this.AccountTypeId = accountTypeId;
        this.CurrencyId = currencyId;
        
    }
}

export class AccountDetailsDto{
    UserId = 0
    AccountPurposeId = 0
    AccountTypeId = 0
    CurrencyId = 0
    AccountPurposeName = ''
    AccountCurrencyName = ''
    AccountTypeName = ''
    AccountId = 0
    AccountNo = ''
    Balance = 0
    IBAN = ''
    CreditCardId = 0
    CreditCardName =''

    constructor(userId ,  accountPurposeId , accountTypeId , currencyId ,iban,balance,accountNo,accountId,accountTypeName,accountCurrencyName,accountPurposeName,creditCardId,creditCardName) {
        this.UserId = userId;
        this.AccountPurposeId = accountPurposeId;
        this.AccountTypeId = accountTypeId;
        this.CurrencyId = currencyId;
        this.IBAN = iban;
        this.Balance = balance;
        this.AccountNo = accountNo;
        this.AccountId = accountId;
        this.AccountTypeName = accountTypeName;
        this.AccountCurrencyName = accountCurrencyName;
        this.AccountPurposeName = accountPurposeName;
        this.CreditCardId = creditCardId;
        this.CreditCardName = creditCardName;
    }

}

export class AccountSummaryDto {
    AccountNo = ""
    Balance = 0
    CreatedDate = ""
    Currency = ""
    AccountSummary = []

    constructor(accountNo, balance, createdDate, currency, accountSummary) {
        this.AccountNo = accountNo,
        this.Balance = balance,
        this.CreatedDate = createdDate,
        this.Currency = currency
        this.AccountSummary = accountSummary
    }
}

export class AccountToSelect {
    Id = 0
    AccountNo = ""
    IsSelected = false

    constructor(id, accountNo, isSelected) {
        this.Id = id
        this.AccountNo = accountNo,
        this.IsSelected = isSelected
    }
}