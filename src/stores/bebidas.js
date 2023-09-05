import { ref, reactive, onMounted } from "vue"
import { defineStore } from "pinia"
import apiService from '../services/APIService'
import { useModalStore } from "./modal"

export let useBebidasStore = defineStore('bebidas', () => {
    let categorias = ref([])
    let busqueda = reactive({
        nombre: '',
        categoria: ''
    })
    let bebidas = ref([])
    let receta = ref({})
    let modal = useModalStore()

    onMounted(async() => {
        let {data: {drinks}} = await apiService.obtenerCategorias()
        categorias.value = drinks
    })

    async function obtenerBebidas() {
        let {data: {drinks}} = await apiService.busquedaBebidas(busqueda)
        bebidas.value = drinks
    }

    async function obtenerReceta(id) {
        let {data: {drinks}} = await apiService.buscarReceta(id)
        receta.value = drinks[0]
        modal.handleClickModal()
    }

    return {
        categorias,
        busqueda,
        obtenerBebidas,
        bebidas,
        obtenerReceta,
        receta
    }
})