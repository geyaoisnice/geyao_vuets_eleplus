import { SUCCESS_CODE } from '../../src/constants'
const timeout = 1000
const List: {
  color: string
  name: string
}[] = [
    // type 1 南方 type 0 北方
  {
    color: '#ccccc',
    name: '歌谣',
  },
]
export default [
  // 列表接口
  {
    url: '/mock/tag/list',
    method: 'get',
    response: ({ query }) => {
      return {
        code: SUCCESS_CODE,
        data: {
          list: List
        }
      }
    }
  },
]
