import { ref, watch, computed, onMounted } from "vue"
import { defineStore } from "pinia"
import { useBebidasStore } from '../stores/bebidas'
import { useModalStore } from '../stores/modal'
import { useNotificacionStore } from '../stores/notificaciones'

export let useFavoritosStore = defineStore('favoritos', () => {
    let bebidas = useBebidasStore()
    let modal = useModalStore()
    let notificaciones = useNotificacionStore()
    let favoritos = ref([])

    watch(favoritos, () => {
        localStorageFavoritos()
    }, {
        deep: true
    })

    onMounted(() => {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? []
    })

    function localStorageFavoritos () {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value)) 
    }

    function existeFavorito() {
        let favoritosStorage = JSON.parse(localStorage.getItem('favoritos')) ?? []
        return favoritosStorage.some(favorito => favorito.idDrink === bebidas.receta.idDrink)
    }

    function eliminarFavorito() {
        favoritos.value = favoritos.value.filter(favorito => favorito.idDrink !== bebidas.receta.idDrink)
        notificaciones.mostrar = true
        notificaciones.texto = 'La bebida se ha eliminado de favoritos'
    }

    function agregarFavorito() {
        favoritos.value.push(bebidas.receta)
        notificaciones.mostrar = true
        notificaciones.texto = 'La bebida se ha agregado a favoritos'
    }

    function handleClickFavoritos () {
        if(existeFavorito()) {
            eliminarFavorito()
        } else {
            agregarFavorito()
        }
        modal.modal = false
    }

    let noFavoritos = computed(() => favoritos.value.length === 0)

    return {
        handleClickFavoritos,
        favoritos,
        existeFavorito,
        noFavoritos
    }
})