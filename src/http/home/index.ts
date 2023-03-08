import $http from "../axios";
//所有商品类目
const cataloglist = (data: any) => {
  return $http({
    url: "/api/publish_catalog/catalog_list",
    method: "get",
    data,
  });
};

export default {
  cataloglist,
};
