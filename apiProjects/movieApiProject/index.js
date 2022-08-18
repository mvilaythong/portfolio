const express = require('express')
const app = express()
const request = require('request')

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.redirect('/home')
})

app.get('/home', (req, res)=>{
    res.render('home.ejs')
})

let baseUrl = "https://api.themoviedb.org"

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))