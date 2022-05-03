const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('api_gastos','root','root', {
    host:'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectado ao Sequelize')
} catch (error) {
    console.log('ERROR:', error)
}