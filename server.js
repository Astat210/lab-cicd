const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello! CI/CD Pipeline is working correctly.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});