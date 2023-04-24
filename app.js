const express = require('express');
const { suppressDeprecationWarnings } = require('moment');
const app = express();
const path = require('path')

console.log(__dirname)

app.use(express.static(path.join(__dirname,'public')))