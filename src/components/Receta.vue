<script setup>
    import { useBebidasStore } from '../stores/bebidas'    
    
    defineProps({
        bebida: {
            type: Object
        }
    })

    let bebidas = useBebidasStore()
    
</script>

<template>
    <div class="border shadow-lg">
        <div class="overflow-hidden">
            <img :src="bebida.strDrinkThumb" class="hover:scale-125 transition-transform hover:rotate-2"/>
        </div>

        <div class="p-5">
            <h2 class="text-2xl truncate font-extrabold">{{ bebida.strDrink }}</h2>
            <button type="button" class="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg" @click="bebidas.obtenerReceta(bebida.idDrink)">Ver Receta</button>
        </div>
    </div>
</template>

