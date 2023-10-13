import express from 'express'
import { doLcs } from '../controller/lcsController.js'
const router = express.Router()

router.route('/').get((req, res) => {
  res.send(`<h1>Hello World from ${req.baseUrl}</h1>`)
})

router.route('/').post(doLcs)

export default router
