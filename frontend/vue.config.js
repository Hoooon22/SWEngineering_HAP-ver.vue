var path = require("path");

module.exports = {
    outputDir: path.resolve("../backend/public"),
    
    devServer:{
        proxy:{
            '/api': {
                target: 'https://localhost:3000/api',
                changeOrigin : true,
                pathRewrite:{
                    "^api" : ''
                }
            }
        }
    },
    
    pages:{
         schedule:{
            entry: 'src/pages/schedule/main.js',
            template: 'public/schedule.html',
            filename: 'schedule.out.html'
         },
         subject:{
            entry: 'src/pages/subject/main.js',
            template: 'public/subject.html',
            filename: 'subject.out.html'
         }
     }
 }