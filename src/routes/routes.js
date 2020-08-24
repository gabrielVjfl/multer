const express = require("express")
const multer = require('multer')
const route = express()
const multerConfig = require('../config/Multer')
// single, 1 upload de arquivo
// array, varios arquivos
route.post('/posts', multer(multerConfig).single("file"), (req,res) => {
  console.log(req.file)
 
})

module.exports = route