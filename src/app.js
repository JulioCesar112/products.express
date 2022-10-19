const express = require('express')
const initModels = require('./models/initModels')
const config = require('./config')
const productsRouter = require('./products/products.routers')


const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({
    message: "Server Started now!!!",
    AllMovies: 'http://127.0.0.1:9000/products',
    CreateBy: 'Jesus Arechider'

  })
})

app.use('/products', productsRouter) 

const db = require('./utils/database')

db.authenticate()
  .then(() => console.log('DB Authetication Succesfull y'))
  .catch(err => console.log(err))

db.sync()
  .then( () => console.log('synchronized database'))
  .catch( err => console.log(err))

initModels()



app.listen(config.port, () => {
  console.log(`Server started in PORT: ${config.port}!`)
});
