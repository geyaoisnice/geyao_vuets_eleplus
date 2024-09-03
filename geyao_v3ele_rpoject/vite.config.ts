
import vue from '@vitejs/plugin-vue'
// 模拟数据
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'
const resolve = (p: string) => {
  return path.resolve(__dirname, p);
}
export default ({ command, mode }: ConfigEnv): UserConfig => {
  return {
    plugins: [
      vue(),
      // 模拟服务
      viteMockServe({
        // default
        mockPath: 'mock',
        enable: true,
      }),
    ],
    resolve: {
      alias: {
        '@': resolve('./src')
      },
    },
  }
}