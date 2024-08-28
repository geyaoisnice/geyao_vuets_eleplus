import request from "./request.ts"

export const getDataApi = (params?: any) => 
	request({ url: '/mock/user/list', method: 'get', params: params })
