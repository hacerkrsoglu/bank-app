import { Post } from "../core/baseService";

export function AddAsync (creditCardToAdd){
    return Post('/CreditCards/add', null, creditCardToAdd);
}
 
import { Get} from "../core/baseService";

export function CreditCardsGetByIdAsync(userId) {
  return Get('/CreditCards/get-by-id', { userId: userId });
}