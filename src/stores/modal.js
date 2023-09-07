import { ref, computed } from "vue"
import { defineStore } from "pinia"
import { useFavoritosStore } from '../stores/favoritos'
import { useBebidasStore } from '../stores/bebidas'

export let useModalStore = defineStore('modal', () => {
    let modal = ref(false)
    let favoritos = useFavoritosStore()
    let bebidas = useBebidasStore()

    function handleClickModal() {
        modal.value = !modal.value
    }

    let textoBoton = computed(() => {
        return favoritos.existeFavorito(bebidas.receta.idDrink) ? 'Eliminar de favoritos' : 'Agregar a favoritos'
    })

    return {
        modal,
        handleClickModal,
        textoBoton
    }
})