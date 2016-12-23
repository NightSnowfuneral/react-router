var path = require('path')
var config = {
  entry:{
    main:path.resolve(__dirname,'js/main.js'),//���ļ�
  },
  output:{
    filename:'[name].js',
    path:path.resolve(__dirname,"dist"),
    publicPath:'/dist/'
  },
  module:{
    loaders:[
      {     
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        query:{
          presets:['react','es2015']
        }
      }
    ]
  }
}

module.exports=config;