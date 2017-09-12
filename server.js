const express     = require('express')
const bodyParser  = require('body-parser')


// Routes
const signup = require('./routes/signup')

let app = express()
const PORT = process.env.PORT || '4000'

// Accept url-encoded and json headers
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use('/api/signup', signup)

app.get('/', (req, res) => res.send('Reached root path of API'))

app.listen(PORT, () => {
  console.log(`Server started at localhost:${PORT}`)
})