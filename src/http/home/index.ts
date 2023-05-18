/*
 * @Description:
 * @Date: 2023-05-15 10:35:14
 * @Author: didi
 * @LastEditTime: 2023-05-18 14:57:22
 */
import $http from "../axios";

//统计
const cencus = (data: any) => {
  return $http({
    url: "https://kk.weface.com.cn/statistic/event",
    method: "post",
    data,
  });
};

export default {
  cencus,
};
