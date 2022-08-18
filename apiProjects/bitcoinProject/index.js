const express = require('express')
const app = express()
const request = require('request')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res)=>{
    // res.send(`heyo i'm connected`)
    res.redirect('/index')
})


app.get('/index', (req, res)=>{
    let endpoint = "https://api.coindesk.com/v1/bpi/currentprice.json"
    request(endpoint,(error, response, body) => {
        // console.log(response)
        if (!error && response.statusCode === 200) {
            let data = JSON.parse(body)
            let country = req.query.isValue
            console
            // console.log(data.bpi.GBP.rate_float)
            // console.log(data.bpi.EUR.rate_float)
            res.render('index', { data: data.bpi, currency: country  })
        } else {
            res.render('error', { error: 'Something wrong happened' })
        }
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))