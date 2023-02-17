import { resolve } from 'pathe'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  build:{
    lib: {
      entry:resolve(__dirname, 'src/index.ts'),
      name: 'MuiThemePack',
      fileName: 'mui-them-pack',
      formats:['es', 'cjs', 'umd', 'iife'],
    },    
  },
  plugins: [react(), dts({
    insertTypesEntry: true
  })],
})
