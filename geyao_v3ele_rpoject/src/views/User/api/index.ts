import request from "../../../api/request.ts"
// 用户列表接口
export const getDataList = (params?: any) => 
	request({ url: '/mock/user/list', method: 'get', params: params })
