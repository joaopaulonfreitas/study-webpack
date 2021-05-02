const path = require('path')

module.exports = {

    // Alterando forma de entrada
    entry: './src/teste.js',

    // Alterando forma de saída
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}