import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.send({
    status: 'ok',
    version: '1.0.0'
  })
})

export default router
