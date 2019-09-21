const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) =>{
    return res.status(200).send({message: 'Ok'})
})

app.listen(3000);

