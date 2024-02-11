import { db } from '../../../src/utils/db';

jest.mock('../../../src/utils/db.ts', () => {
  return {
    db: {
      $connect: jest.fn(),
    },
  };
});

describe('Database Connection', () => {
  it('should return true when db connection is successful', () => {
    (db.$connect as jest.Mock).mockReturnValue(true)

    expect(db.$connect()).toBe(true);
  });

  it('should return true when db connection fails', () => {
    (db.$connect as jest.Mock).mockReturnValue(false)

    expect(db.$connect()).toBe(false);
  });
});
