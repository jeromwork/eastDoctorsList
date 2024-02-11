import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'C:/work/eastclinic/qi/public/vendors/doctors-list', // Specify the output directory using forward slashes
    filenameHashing: false,
    assetsDir: '', // Set assetsDir to an empty string
    assetsInlineMaxSize:0,

      rollupOptions: {
        output: {
          entryFileNames: `[name].js`,
          chunkFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`,
          manualChunks
        },

      }

  },
})
// function manualChunks(id, { getModuleInfo }) {
//   const moduleInfo = getModuleInfo(id);
//   moduleInfo.code = '';
//   // console.log(moduleInfo)
//   if (moduleInfo) {
//     const relativePath = moduleInfo.id.replace(/\\/g, '/').replace(process.cwd(), '');
//     console.log(relativePath)
//     const outputPath = `vendors/${relativePath.replace(/^\/|\/$/g, '')}`; // Remove leading and trailing slashes
//
//     return outputPath;
//   }
//
// }

function manualChunks(id) {
  if (id.includes('node_modules/@vue')) {
    return 'vue_core';
  }
}