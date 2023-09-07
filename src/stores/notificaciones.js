import { ref, watch } from "vue"
import { defineStore } from "pinia"

export let useNotificacionStore = defineStore('notificacion', () => {
    let texto = ref('')
    let error = ref(false)
    let mostrar = ref(false)

    watch(mostrar, () => {
        if(mostrar.value) {
            setTimeout(() => {
                texto.value = ''
                error.value = false
                mostrar.value = false
            },3000)
        }
    })

    return {
        texto,
        error,
        mostrar
    }
})
