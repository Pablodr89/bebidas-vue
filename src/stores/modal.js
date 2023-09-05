import { ref } from "vue"
import { defineStore } from "pinia"

export let useModalStore = defineStore('modal', () => {
    let modal = ref(false)

    function handleClickModal() {
        modal.value = !modal.value
    }

    return {
        modal,
        handleClickModal
    }
})