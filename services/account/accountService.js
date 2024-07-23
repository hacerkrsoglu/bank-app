import { Post, Get, Put } from "../core/baseService";

export function AddAsync (accountToAdd){
    return Post('/Accounts/add', null, accountToAdd);
}

export function GetByIdAsync(userId) {
  return Get('/Accounts/get-by-id', { userId: userId });
}


export function UpdateBalanceAsync(accountId, typeId, balance){
  return Put ('/Accounts/update-balance',null, {

    AccountId: accountId,
    TypeId:typeId,
    Balance:balance
  })
}

export function GetAccountSummariesByUserId(userId) {
  return Get('/Accounts/account-summaries', { userId: userId });
}

export function GetAccountsForSelectionByUserId(userId) {
  return Get('/Accounts/accounts-for-seleciton', { userId: userId });
}