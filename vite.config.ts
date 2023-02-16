import { resolve } from 'pathe'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    insertTypesEntry: true
  })],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  build:{
    lib: {
      entry:path.resolve(__dirname, 'src/index.ts'),
      name: 'MuiThemePack',
      fileName: 'index',
      formats:['es', 'cjs', 'umd', 'iife'],
    },    
  },
})
