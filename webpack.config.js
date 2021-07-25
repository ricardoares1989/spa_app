const path = require('path');
// Nos permite saber hacia donde nos estamos moviendo en las carpetas
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlgin = require('copy-webpack-plugin');

module.exports = {
    //Nuestro punto de entrada lo declaramos.
    entry: ['@babel/polyfill','./src/index.js'],
    output: {
        //Nos mandara a donde se encuentre la carpeta para que se
        //cree una carpeta de nuestro bundle.
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js"
    },
    resolve: {
        extensions: [
            '.js',
        ]
    },
    module: {
        rules: [
            {
                // Colocamos test para reconocer lo que queremos
                // indentificar en neustro proyecto.
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: "./public/index.html",
                //Al usar . estara dentro de dist, por que aqui estamos mandando
                //el output.
                filename: "./index.html"
            }
        ),
        new CopyWebpackPlgin(
            {
                patterns: [
                    {
                        from: './src/styles/styles.css',
                        to: '',
                    }
                ]
            }
        )
    ]
}
