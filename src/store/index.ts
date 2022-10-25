import { defineStore } from 'pinia'

export default defineStore('index', {
    state: () => {
        return {
            uid: '',
            phone: ''
        }
    }
})