import { defineStore } from 'pinia'
import $http from '@/http'
export default defineStore('home', {
    persist: true,
    state: () => {
        return {
            uid: '',
            phone: '',
            locationX: '',
            locationY: '',
            itemList: []
        }
    },
    actions: {
        //获取参数
        async getquery(res: any) {

            this.uid = res.userid
            this.phone = res.telphone
            this.locationX = res.lng
            this.locationY = res.lat


            if (sessionStorage.getItem('token')) return
            const { code, data } = await $http.login({
                userId: res.userid,
                mobile: res.telphone
            })
            sessionStorage.setItem('token', data.token)
        },
    }
})