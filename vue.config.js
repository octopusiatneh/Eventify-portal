const fs = require('fs')

module.exports = {
  devServer: {
    port: '8081',
    https: {
      key: fs.readFileSync('./certs/local-key.pem'),
      cert: fs.readFileSync('./certs/local.pem'),
    },
  },
}
