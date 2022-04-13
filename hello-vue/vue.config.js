// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// file to tell Vue how to connect to the server
// object that describes how to configure Vue developer server
// telling our Vue Developer Server tht if any API requests are made by the Vue
// client, they need to be sent to this particular address
module.exports={
  devServer:{
    // web address of the express server
    // proxy means to send messages via the vue developer server to the express server
    proxy:'http://127.0.0.1:3000'
  }
}
