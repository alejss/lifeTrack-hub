import { PrismaClient } from '@prisma/client'

const db = new PrismaClient({
  log: ['info']
})

export { db }
