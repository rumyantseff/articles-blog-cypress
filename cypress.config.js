const { defineConfig } = require("cypress");

const fs = require('fs')
module.exports = defineConfig({
  viewportHeight: 1090,
  viewportWidth: 1920,
  uncaught: 'exception',
  chromeWebSecurity: false,
  defaultCommandTimeout: 100000,
  requestTimeout: 100000,
  numTestsKeptInMemory: 0,
  e2e: {
    setupNodeEvents(on, config) {
      // ------------- SHOW FILES IN DEFINED DIRECTORY
      on('task', {   
        showFiles(path) {
          return new Promise((resolve, reject) => {
            fs.readdir(process.cwd() + '/' + path, function (err, files) {
              if (err) {
                console.log(err)
                return
              }
              resolve(files)
              console.log(files)
            })
          })     
        }
      })
    },
  },
});
