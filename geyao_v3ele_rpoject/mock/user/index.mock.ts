import { SUCCESS_CODE } from '../../src/constants'
const timeout = 1000
const List: {
  username: string
  password: string
}[] = [
  {
    username: 'admin',
    password: 'admin',
  },
  {
    username: 'test',
    password: 'test',
  },
  {
    username: 'geyao',
    password: 'geyao',
  },
  {
    username: 'lanlan',
    password: 'lanlan',
  },
  {
    username: 'junjun',
    password: 'junjun',
  },
  {
    username: 'taotao',
    password: 'taotao',
  },
  {
    username: 'huahua',
    password: 'huahua',
  },
  {
    username: 'gege',
    password: 'gege',
  },
  {
    username: 'meimei',
    password: 'meimei',
  },
  {
    username: 'haha',
    password: 'haha',
  },
  {
    username: 'dada',
    password: 'dada',
  },
  {
    username: 'xiexie',
    password: 'xiexie',
  },
  {
    username: 'gugu',
    password: 'gugu',
  }
]
export default [
  // 列表接口
  {
    url: '/mock/user/list',
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
  // 登录接口
  {
    url: '/mock/user/login',
    method: 'post',
    timeout,
    response: ({ body }) => {
      const data = body
      let hasUser = false
      for (const user of List) {
        if (user.username === data.username && user.password === data.password) {
          hasUser = true
          return {
            code: SUCCESS_CODE,
            data: user
          }
        }
      }
      if (!hasUser) {
        return {
          code: 500,
          message: '账号或密码错误'
        }
      }
    }
  },
  // 退出接口
  {
    url: '/mock/user/loginOut',
    method: 'get',
    timeout,
    response: () => {
      return {
        code: SUCCESS_CODE,
        data: null
      }
    }
  }
]
