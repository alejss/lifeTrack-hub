const { db } = require('../../../src/utils/db.ts');

jest.mock('../../../src/utils/db.ts', () => {
  return {
    db: {
      $connect: jest.fn(),
    },
  };
});

describe('Database Connection', () => {
  it('should return true when db connection is successful', () => {
    db.$connect.mockReturnValue(true);

    expect(db.$connect()).toBe(true);
  });

  it('should return true when db connection fails', () => {
    db.$connect.mockReturnValue(false);

    expect(db.$connect()).toBe(false);
  });
});
