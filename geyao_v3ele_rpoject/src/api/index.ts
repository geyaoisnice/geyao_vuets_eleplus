import request from "./request.ts"

export const getDataApi = (params?: any) => 
	request({ url: '/mock/demo', method: 'get', params: params })
