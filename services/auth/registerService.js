
import { Post } from "../core/baseService";

export function RegisterAsync(userToRegister ) {
    return Post('/Users/register', null, {
        Email: userToRegister.Email,
        Password: userToRegister.Password,
        FirstName: userToRegister.FirstName,
        LastName: userToRegister.LastName,
        GenderId: userToRegister.GenderId,
        IdentityNumber: userToRegister.IdentityNumber,
        DateOfBirth: userToRegister.DateOfBirth
    });
}
