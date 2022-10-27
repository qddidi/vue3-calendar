import $http from '../axios'
//所有商品
const listall = (data: any) => {
    return $http({
        url: '/mall/goods/list/all',
        method: 'post',
        data
    })
}


export default {
    listall,
}