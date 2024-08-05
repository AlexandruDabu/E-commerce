const express = require('express');
const bodyParser = require('body-parser')
const mountRoutes = require('./routes/index')
const session = require('express-session')
const cors = require('cors');
// creating the server
const app = express();
const port = 3000;

// parsing body into json
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:5173',
}))

//Session middleware
app.use(session({
    secret: 'mySecret_Key',
    resave: false,
    saveUninitialized: false
}))

//Setting up login session

// routing
mountRoutes(app)


app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})