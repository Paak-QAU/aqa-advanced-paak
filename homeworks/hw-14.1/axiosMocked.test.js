const axios = require('axios');
const getUserData = require('./axiosMocked');

jest.mock('axios');

describe('getUserData', () => {
  it('повертає дані користувача при успішному запиті', async () => {
    axios.get.mockResolvedValue({ data: { name: 'Іван', id: 1 } });

    const result = await getUserData(1);
    expect(result).toEqual({ name: 'Іван', id: 1 });
  });

  it('повертає повідомлення про помилку при невдачі', async () => {
    axios.get.mockRejectedValue(new Error('404 Not Found'));

    const result = await getUserData(1);
    expect(result).toEqual({ error: '404 Not Found' });
  });
});