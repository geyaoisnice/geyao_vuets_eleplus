
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
export default ({ command, mode }: ConfigEnv): UserConfig => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        // default
        mockPath: 'mock',
        enable: true,
      }),
    ],
  }
}