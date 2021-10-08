const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const ENV_VAR_ONE = process.env.ENV_VAR_ONE;

app.get('/', (req, res) => {
  res.send('Ping!')
})

app.get('/env-var-one', (req, res) => {
  res.send(`VAR_ONE: ${ENV_VAR_ONE}`)
})

app.listen(PORT, () => {
  console.log(`Example app listening at port: ${PORT} with ENV_VAR_ONE: ${ENV_VAR_ONE}`)
})