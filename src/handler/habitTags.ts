import express from 'express'
import asyncHandler from 'express-async-handler'
import * as habitTagsRepository from '../repositories/habitTags'

const router = express.Router()

router.get('/all', asyncHandler(async (_req, res) => {
  try {
    const item = await habitTagsRepository.findAll()
    res.send(item)
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
}))

router.get('/:id', asyncHandler(async (req, res) => {
  try {
    const id = req.params.id
    const item = await habitTagsRepository.findOne(id)
    res.send(item)
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
}))

router.post('/', asyncHandler(async (req, res) => {
  try {
    const tagBody: habitTag = req.body
    const item = await habitTagsRepository.create(tagBody)
    res.send(item)
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
}))

router.put('/', asyncHandler(async (req, res) => {
  try {
    const tagBody: habitTag = req.body
    const item = await habitTagsRepository.update(tagBody.id, tagBody.name)
    res.send(item)
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
}))

router.delete('/:id', asyncHandler(async (req, res) => {
  try {
    const id = req.params.id
    const item = await habitTagsRepository.destroy(id)
    res.send(item)
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
}))

export default router
