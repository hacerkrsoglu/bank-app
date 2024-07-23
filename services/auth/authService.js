
import { Get } from "../core/baseService";


export function LoginAsync (Email,Password){

    return Get('/Users/Login', { email: Email, password: Password })
}

