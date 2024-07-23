<template>
    <div>
        <div class="container">
            <div class="row mt-3">
                <div class="col-6 offset-3 d-flex flex-column align-items-center">
                    <div>Banka Uygulamasına Hoş Geldiniz</div>
                    <div class="mt-2">Lütfen bir işlem seçin:</div>
                    <div class="mt-3">
                        <NuxtLink class="btn btn-success me-3" to="/auth/login">Giriş Yap</NuxtLink>
                        <NuxtLink class="btn btn-primary" to="/auth/register">Kayıt Ol</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


definePageMeta({
    layout: false
});
</script>
