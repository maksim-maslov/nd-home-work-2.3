'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use('/post', (req, res, next) => {
  if (!req.get('Key')) {
    res.status(401);
    next();
  }  
});

app.get('/', (req, res) => {
  res.status(200).send('Hello, Express.js');  
});

app.get('/hello', (req, res) => {
  res.status(200).send('Hello stranger!');  
});

app.get('/hello/:name', (req, res) => {
  res.status(200).send(`Hello! ${req.params.name}`);  
});

app.all('/sub/*', (req, res) => {
  res.status(200).send(`You requested URI: ${req.originalUrl}`);  
});

app.post('/post', (req, res) => {
  if (req.body) {
    res.json(req.body); 
  } else {
    res.status(404).send(`Not Found`); 
  }  
});

app.listen(3000, () => console.log('App started on 3000 port'));