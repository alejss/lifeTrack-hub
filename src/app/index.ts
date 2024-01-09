import express from 'express'
import bodyParser from 'body-parser'

import router from '../routes'

const app = express()

app.use(bodyParser.json())
app.use(router)

export default app
