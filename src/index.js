const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const res = require('express/lib/response')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')
//connect to db
db.connect()

app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//http logger
app.use(morgan('combined'))

//template engine
app.engine('hbs',handlebars.engine({extname: '.hbs'}))
app.set('view engine','hbs')
app.set('views', path.join(__dirname,'resources','views'))

//Home, search, contact


//Routes init
route(app)

app.listen(port, () => console.log('App listening at http://localhost:${port}'))
