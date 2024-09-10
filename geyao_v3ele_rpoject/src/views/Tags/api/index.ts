import request from "../../../api/request.ts"
// 用户列表接口
export const getTagShowList = (params?: any) => 
	request({ url: '/mock/tag/list', method: 'get', params: params })
