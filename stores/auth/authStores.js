import { UserToLogin,UserToRegister,UserToUpdate } from "~/services/auth/types";

import { GetByIdAsync } from "~/services/auth/userService";
import { LoginAsync } from "~/services/auth/authService";
import { RegisterAsync } from "~/services/auth/registerService";
import { UpdateAsync } from "~/services/auth/update-user";

import { setCurrentUserId, getCurrentUserId } from "~/services/core/localStorageBase";
import { navigateTo } from "nuxt/app";

export const useAuthStore = defineStore("auth-store", () => {
  const isLoggedIn = ref(false);
  const userToLogin = ref({...new UserToLogin()});
  const userToRegister = ref({...new UserToRegister()});
  const userToUpdate = ref({...new UserToUpdate()});


  function Login() {
    LoginAsync(userToLogin.value.Email, userToLogin.value.Password)
      .then((response) => {
        if (response.success) {
          isLoggedIn.value = true;
          setCurrentUserId(response.data);
          navigateTo("/home");
        }
      })
     
  }

  function Register() {
    RegisterAsync({
      Email: userToRegister.value.Email,
      Password: userToRegister.value.Password,
      FirstName: userToRegister.value.FirstName,
      LastName: userToRegister.value.LastName,
      GenderId: userToRegister.value.GenderId,
      IdentityNumber: userToRegister.value.IdentityNumber,
      DateOfBirth: userToRegister.value.DateOfBirth
    })
    .then((response) => {
    if (response.success) {
        isLoggedIn.value = true;
        setCurrentUserId(response.data);
        navigateTo("/auth/Login");
    }
    })
    
  }

  function Logout() {
    isLoggedIn.value = false;
    setCurrentUserId(null);
    navigateTo("");
  }

  async function Update() {
    let userId = await getCurrentUserId()
    UpdateAsync({
      Id: userId,
      Email: userToUpdate.value.Email,
      Password: userToUpdate.value.Password,
      FirstName: userToUpdate.value.FirstName,
      LastName: userToUpdate.value.LastName
    }) }

    async function GetUser() {
        let userId = await getCurrentUserId()
        console.log(userId);

      GetByIdAsync(userId).then((response) => {

            userToUpdate.value.FirstName = response.firstName
            userToUpdate.value.LastName = response.lastName
            userToUpdate.value.Email = response.email
            userToUpdate.value.Password= response.password

      })
    }
      
    
 

  return {
    isLoggedIn,
    Login,
    Register,
    Logout,
    Update,
    userToLogin,
    userToRegister,
    userToUpdate,
    GetUser
  
  };
});