import express from 'express'
import router from './routes/lcs.routes.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(cors())

// Quitamos el cors para que funcione en el navegador

app.use('/api/lcs', router)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
