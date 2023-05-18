/*
 * @Description:
 * @Date: 2023-05-15 10:35:14
 * @Author: didi
 * @LastEditTime: 2023-05-18 14:58:14
 */
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
    async cencus(eventName: string, extendInfo?: any) {
      $http.cencus({
        eventName,
        appName: "com.weface.kksocialsecurity",
        deviceId: this.uid,
        unTel: this.phone,
        fromModel: "",
        version: "1",
        extendInfo: extendInfo,
        eventTime: "",
      });
    },
  },
});
