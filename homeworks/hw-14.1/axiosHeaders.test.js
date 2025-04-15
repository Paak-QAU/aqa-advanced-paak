const fetchDataWithHeadersAndParams = require('./axiosHeaders');

test(
    'перевіряє, що параметри і заголовки правильно додаються',
    async () => {
      const data = await fetchDataWithHeadersAndParams();
  
      expect(data.headers['X-Custom-Header']).toBe('TestHeader');
      expect(data.args.userId).toBe('123');
    },
    15000 
  );