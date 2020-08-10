// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '',
    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: ['./src', './public'], // both src and output dirs
        inline: true,
        hot: true
    }
}