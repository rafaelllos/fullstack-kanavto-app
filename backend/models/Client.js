const Sequelize = require("sequelize")

module.exports = (connection) => {
    return connection.define('Client', {
        client_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        client_FIO: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        client_phone: {
            type: Sequelize.STRING(11),
            unique: true,
            allowNull: false,
        },
        client_email: {
            type: Sequelize.STRING(255),
            unique: true,
            allowNull: false,
        },
    }, {
        timestamps: false,
        tableName: 'Client',
    })
}