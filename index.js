#! /usr/bin/env node
const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();
const dir = process.cwd();

const modelsDir = path.join(dir, "models");
const viewsDir = path.join(dir, "views");
const controllersDir = path.join(dir, "controllers");
const assetsDir = path.join(dir, "assets");
const serverFile = path.join(dir, "server.js");

if (!fs.existsSync(modelsDir)) {
  fs.mkdirSync(modelsDir);
}
if (!fs.existsSync(routesDir)) {
  fs.mkdirSync(routesDir);
}

if (!fs.existsSync(viewsDir)) {
  fs.mkdirSync(viewsDir);
}

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir);
}

if (!fs.existsSync(controllersDir)) {
  fs.mkdirSync(controllersDir);
}

if (!fs.existsSync(serverFile)) {
  fs.writeFileSync(serverFile, `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Your root endpoint running successfully');
});

app.get('/profile', (req, res)=>{
  res.send('Here is your profile page!');
})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
`);


console.log("Express MVC structure created successfully!");
}else{
  console.log('Express MVC Directory Structure already exists !');
}