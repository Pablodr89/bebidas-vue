<script setup>
    import { useBebidasStore } from '../stores/bebidas'
    import Receta from '../components/Receta.vue'

    let bebidas = useBebidasStore()
</script>

<template>
    <h1 class="text-6xl font-extrabold">Recetas</h1>

    <p v-if="bebidas.noBebidas" class="my-10 text-center text-2xl">No hay Resultados, utiliza el formulario para buscar recetas</p>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
        <Receta 
            v-for="bebida in bebidas.bebidas"
            :bebida="bebida"
            :key="bebida.idDrink"
        />
    </div>
</template>
