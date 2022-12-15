const express = require('express')
const cors = require('cors')
const path = require('path')
var Rollbar = require('rollbar')
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'fa69083a256e4651bed1f3478e82af0f',
  captureUncaught: true,
  captureUnhandledRejections: true,
})
  
rollbar.log('Hello rollbar!')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))


app.get('/', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(4000, console.log('Server running on 4000'))