
import vue from '@vitejs/plugin-vue'
// 模拟数据
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'
// https://vitejs.dev/config/
const pathResolve = (pathStr) => {
  return path.resolve(__dirname, pathStr);
};
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
      // 设置路径别名
      alias: {
        "@": pathResolve("./src")
      },
    },
  }
}