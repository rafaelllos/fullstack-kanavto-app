const Sequelize = require("sequelize")

module.exports = (connection) => {
    return connection.define('Booking', {
        booking_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        client_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        car_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    }, {
        timestamps: false,
        tableName: 'Booking',
    })
}