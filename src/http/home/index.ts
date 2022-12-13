import $http from '../axios'
//所有商品类目
const cataloglist = (data: any) => {
    return $http({
        url: '/api/publish_catalog/catalog_list',
        method: 'get',
        data
    })
}
//所有商品列表
const publishinfolist = (data: any) => {
    return $http({
        url: '/api/publish_info/publish_info_list',
        method: 'post',
        data
    })
}
//详情
const publishinfodetail = (data: any) => {
    return $http({
        url: '/api/publish_info/publish_info_detail',
        method: 'post',
        data
    })
}

const replyinfolist = (data: any) => {
    return $http({
        url: '/api/publish_reply/reply_info_list',
        method: 'post',
        data
    })
}
//发布信息

const savepublishinfo = (data: any) => {
    return $http({
        url: '/api/publish_info/save_publish_info',
        method: 'post',
        data
    })
}
//提交评论
const savereplyinfo = (data: any) => {
    return $http({
        url: '/api/publish_reply/save_reply_info',
        method: 'post',
        data
    })
}
//
const login = (data: any) => {
    return $http({
        url: '/api/login',
        method: 'post',
        data
    })
}
const complainttag = (data: any) => {
    return $http({
        url: '/api/complaint_tag/list',
        method: 'get',
        data
    })
}
const tocomplaint = (data: any) => {
    return $http({
        url: '/api/complaint/to_complaint',
        method: 'post',
        data
    })
}
export default {
    cataloglist,
    publishinfolist,
    publishinfodetail,
    replyinfolist,
    savereplyinfo,
    savepublishinfo,
    login,
    complainttag,
    tocomplaint
}