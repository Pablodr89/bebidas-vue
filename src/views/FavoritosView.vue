<script setup>
    import Receta from '../components/Receta.vue'
    import { useFavoritosStore } from '../stores/favoritos'

    let favoritos = useFavoritosStore()
</script>

<template>
    <h1 class="text-6xl font-extrabold">Favoritos</h1>

    <p v-if="favoritos.noFavoritos" class="my-10 text-center text-2xl">No hay Favoritos</p>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10 ">
        <Receta 
            v-for="bebida in favoritos.favoritos"
            :bebida="bebida"
            :key="bebida.idDrink"
        />
    </div>
</template>
