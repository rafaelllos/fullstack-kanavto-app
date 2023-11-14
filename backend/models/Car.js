const Sequelize = require("sequelize")

module.exports = (connection) => {
    return connection.define('Car', {
        car_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        car_image: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        car_brand: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        car_model: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        car_body: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        car_transmission: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        car_transmissionType: {
            type: Sequelize.STRING(10),
            allowNull: false,
        },
        car_litres: {
            type: Sequelize.STRING(10),
            allowNull: false,
        },
        car_power: {
            type: Sequelize.STRING(10),
            allowNull: false,
        },
        car_engineType: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        car_price: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false,
        tableName: 'Car',
    })
}