import express from 'express'

import cors from 'cors'
import movieRoutes from './Routes/movieRoutes.js'
import userRoutes from './Routes/userRoutes.js'
import { errorHandler } from './middlewares/errorMiddlewares.js'

// initiallise express server
const app = express()
app.use(express.json())

app.use(cors())

//used Routes
app.use('/api/users', userRoutes)
app.use('/api/movies', movieRoutes)

//Error middilewares
//app.use(notFound)
app.use(errorHandler)
// server and port
app.get('/', (req, res) => {
  res.send('Api is running...')
  console.log('test')
})
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Listening on port ${port}...`))
