import path from 'path'
import express from 'express'

import renderClient from './serverRendering'

const app = express()
const port = 7777

app.use('/assets', express.static('assets'))

app.use(renderClient)

app.listen(port)

