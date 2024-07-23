
<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container d-flex justify-content-between">
                <div class="d-flex align-items-center" style="gap: 5px;">
                    <NuxtLink class="navbar-brand" to="/home">
                        <span>
                            <i class="bi bi-bank"></i>
                            Bank
                        </span>
                    </NuxtLink>
                </div>
                <div class="d-flex align-items-center" style="gap: 5px;">
                    <div class="dropdown">
                        <button class="btn btn-light dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>
                                <i class="bi bi-person-circle"></i>
                                Profilim
                            </span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><NuxtLink class="dropdown-item" to="/account/account-home">Hesap Bilgilerim</NuxtLink></li>
                            <li><NuxtLink class="dropdown-item" to="/auth/update-user">Kullanıcı Bilgileri Güncelleme</NuxtLink></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" @click="Logout()">Çıkış Yap</a></li>
                        </ul>
                    </div>
                   
                   
                </div>
            </div>
        </nav>
    </div>
    <div class="container">
        <div class="row">
            <div class="col col-12 mt-3 mb-3">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>

import { useAuthStore } from '~/stores/auth/authStores';



let loggedIn = false

onMounted(() => {

    loggedIn = isLoggedIn
    console.log(isLoggedIn.value);
})

const authStore = useAuthStore()


let isLoggedIn = computed(() => authStore.isLoggedIn).value

function Logout(){
    authStore.Logout();
}




</script>