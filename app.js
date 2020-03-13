const express = require('express');
const { errorHandler } = require('./middlewares/ErrorHandler');

const app = express();

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
