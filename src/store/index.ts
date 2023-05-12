import { defineStore } from "pinia";
import $http from "@/http";
export default defineStore("home", {
  persist: true,
  state: () => {
    return {
      uid: "",
      phone: "",
    };
  },
  actions: {
    //获取参数
    async getquery(res: any) {
      this.uid = res.userid;
      this.phone = res.telphone;
    },
  },
});
