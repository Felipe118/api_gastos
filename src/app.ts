import express from 'express'
//import config from 'config'
import db from './db/connection'

const cors = require('cors')

const app = express()

app.use(express.json())

//solve cors
app.use(cors({ credentials: true, origin: '*', methods:"GET,HEAD,PUT,PATCH,POST,DELETE" }))



app.listen(3000, async  () => {
    await db();
    console.log("DEU CERTO")
})


console.log('deu certo')