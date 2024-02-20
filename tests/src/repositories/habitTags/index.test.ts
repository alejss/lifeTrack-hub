import { db } from '../../../../src/utils/db';
import { findOne } from '../../../../src/repositories/habitTags'

jest.mock('../../../../src/utils/db', () => {
  return {
    db: {
      habitTags: {
        findUnique: jest.fn()
      },
    },
  };
});

describe('Repository HabitTags', () => {

    const tagCreated = { id: '28282', name: 'Test', enable: true }

    afterAll(() => {
        jest.clearAllMocks();
    })

    it('should return the habitTag if found', async () => {
        (db.habitTags.findUnique as jest.Mock).mockResolvedValueOnce(tagCreated)

        const result = await findOne('28282')

        expect(result).toEqual(tagCreated);
        expect(db.habitTags.findUnique).toHaveBeenCalledWith({ where: { id: '28282' } });
    })

    it('should return null if no item is found', async () => {
        (db.habitTags.findUnique as jest.Mock).mockResolvedValueOnce(null)

        const result = await findOne('28283')

        expect(result).toEqual(null);
        expect(db.habitTags.findUnique).toHaveBeenCalledWith({ where: { id: '28283' } });
    })
})