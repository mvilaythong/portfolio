const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    res.send('heyo')
});

app.get('/messages', (req, res)=>{
    let messages = [
        {name: "Jim", message: "Hi, how are you?"},
        {name: "Jane", message: "How about pasta for dinner?"},
        {name: "Gary", message: "I like my pasta with butter"}
    ];
    res.render('messages', { messages: messages });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`server is running on ${PORT}`));