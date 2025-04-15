const fetchWithError = require('./axiosError');

test('повертає повідомлення про помилку при невдалому запиті', async () => {
  const result = await fetchWithError();

  
  expect(result).toMatch(/^Error: (.+)$/);
});