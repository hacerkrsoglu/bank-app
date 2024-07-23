import { Post } from "../core/baseService";

export function UpdateAsync(userToUpdate) {
  return Post('/Users/update', null, userToUpdate);
}
