import { Get} from "../core/baseService";

export function GetByIdAsync(userId) {
  return Get(`/Users/get-by-id`, { id: userId });
}