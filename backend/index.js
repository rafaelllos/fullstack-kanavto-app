const express = require('express')
require('dotenv').config()
const carRouter = require('./routes/carRouter.js')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(cors({
    origin: ['https://celebrated-kheer-164935.netlify.app', 'http://localhost:3000'] // или http://localhost:5000?
}))
app.use('/car', carRouter)

const port = process.env.PORT || 5000

const start = () => {    
    try {
        app.listen(port, '0.0.0.0', () => console.log(`Server opened on ${port} port!`)) // hostname - 0.0.0.0
    } catch (err) {
        console.log(err)   
    }
}

start()