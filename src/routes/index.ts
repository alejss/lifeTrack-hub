import express from 'express'
import health from '../handler/health'
import habitTags from '../handler/habitTags'

const router = express.Router()

router.use('/health', health)
router.use('/habits/tags', habitTags)

export default router
