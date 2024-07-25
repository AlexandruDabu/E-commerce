const express = require('express');
const mountRoutes = require('./routes/index')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
app.use(bodyParser.json());
mountRoutes(app)


app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})