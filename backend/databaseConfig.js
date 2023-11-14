const { Sequelize } = require("sequelize")
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
const myEnv = dotenv.config()
dotenvExpand.expand(myEnv)

const connection = new Sequelize(process.env.DATABASE_URL_CONNECTION)

try {
    connection.authenticate()
    console.log(`Database '${process.env.DATABASE_NAME}' connected!`)
} catch(error) {
    console.log(error)
}

const Client = require('./models/Client.js')(connection)
const Car = require('./models/Car.js')(connection)
const Booking = require('./models/Booking.js')(connection)

module.exports = {
    connection: connection,
    Client: Client,
    Car: Car,
    Booking: Booking,
}