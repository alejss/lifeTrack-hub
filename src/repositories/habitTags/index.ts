import { db } from '../../utils/db'

const findOne = async (id: string): Promise<habitTag | null> => {
  const item = await db.habitTags.findUnique({
    where: {
      id
    }
  })

  return item
}

const findAll = async (): Promise<habitTag[] | []> => {
  const item = await db.habitTags.findMany()

  return item
}

const create = async (tag: habitTag): Promise<habitTag> => {
  const item = await db.habitTags.create({
    data: tag
  })

  return item
}

const update = async (id: string, name: string): Promise<habitTag> => {
  const item = await db.habitTags.upsert({
    where: {
      id
    },
    update: { name },
    create: { name }
  })

  return item
}

const destroy = async (id: string): Promise<habitTag> => {
  const item = await db.habitTags.update({
    where: {
      id
    },
    data: {
      enable: false
    }
  })

  return item
}

export {
  findOne,
  findAll,
  create,
  update,
  destroy
}
