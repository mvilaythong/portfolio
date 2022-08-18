const express = require('express')
const app = express()
const data = require('./data.js')


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('home', { data })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))