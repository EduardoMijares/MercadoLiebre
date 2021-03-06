const path = require('path')
const express = require('express');
const app = express();

app.get('/', function(req, res) {
        let file = path.resolve('index.html')
        res.sendFile(file);
    })

app.get('*', function(req, res) {
    if (req.url.includes('.')) {
        let file = path.resolve('public' + req.url)
        return res.sendFile(file)
    }


  res.send('Not found')

})

app.listen(3000, () => {
    console.log('http://localhost3000')
})