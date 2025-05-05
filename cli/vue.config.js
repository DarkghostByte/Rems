const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    //https: true,
    // Puedes especificar tus propios archivos de certificado y clave si lo deseas
    // cert: './path/to/your/cert.crt',
    // key: './path/to/your/key.key'
  }
})
