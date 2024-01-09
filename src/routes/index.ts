import express from 'express'
import health from '../handler/health'

const router = express.Router()

router.use('/health', health)

export default router
