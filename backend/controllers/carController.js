const connection = require('../databaseConfig.js')
const db = require('../databaseConfig.js')

class carController {
    async getCars(request, response) {
        try {
            const car = await db.Car.findAll()
            return response.send(car)
        } catch (error) {
            console.log(error)
            return response.send('Ошибка на сервере')
        }
    }

    async postCarBooking(request, response) {
        try {
            const { car_id, client_FIO, client_phone, client_email } = request.body

            const clientValidation = db.Client.count({ where: {
                client_email: request.body.client_email,
                client_phone: request.body.client_phone,
            }})
                .then((result) => {
                    if (result <= 0) {
                        const client = db.Client.create({
                            client_FIO: client_FIO,
                            client_phone: client_phone,
                            client_email: client_email,
                        }).then(() => {
                            const clientID = db.Client.findOne({ where: { client_phone: client_phone } })
                                .then(result => {
                                    const booking = db.Booking.create({
                                        client_id: result.dataValues.client_id,
                                        car_id: car_id,
                                    })
                                })
                        })

                        return response.send('Запись произведена!')
                    }
                    else {
                        const clientID = db.Client.findOne({ where: { client_phone: client_phone } })
                            .then(result => {
                                const booking = db.Booking.create({
                                    client_id: result.dataValues.client_id,
                                    car_id: car_id,
                                })
                            })

                        return response.send('Запись произведена!')
                    }
            })
        } catch (error) {
            console.log(error)
            return response.send('Ошибка на сервере')
        }
    }
}

module.exports = new carController()