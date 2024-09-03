import { SUCCESS_CODE } from '../../src/constants'
const timeout = 1000
const List: {
  username: string
  type: string
}[] = [
    // type 1 南方 type 0 北方
  {
    username: '南大',
    type: '1',
  },
  {
    username: '北大',
    type: '0',
  },
  {
    username: '西交大',
    type: '1',
  },
  {
    username: '南大',
    type: '1',
  }
]
export default [
  // 列表接口
  {
    url: '/mock/school/list',
    method: 'get',
    response: ({ query }) => {
      const { username, pageIndex, pageSize } = query
      const mockList = List.filter((item) => {
        if (username && item.username.indexOf(username) < 0) return false
        return true
      })
      const pageList = mockList.filter(
        (_, index) => index < pageSize * pageIndex && index >= pageSize * (pageIndex - 1)
      )
      return {
        code: SUCCESS_CODE,
        data: {
          total: mockList.length,
          list: pageList
        }
      }
    }
  },
]
