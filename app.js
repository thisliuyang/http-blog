const express = require('express');
const app = express(function (req, res) {
  res.writeHead(301, {
    'Location': 'https://thisliuyang.cn'
  });
  res.end();
});
const path = require('path');
const template = require('express-art-template');
const https = require('https');
const http = require('http')
const fs = require('fs');
const options = {
  key: fs.readFileSync('./Nginx/2_www.thisliuyang.cn.key'),
  cert: fs.readFileSync('./Nginx/1_www.thisliuyang.cn_bundle.crt')
};
app.engine('html', template);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));

https.createServer(options, app).listen(443);

app.listen(8080, () => console.log('express-server is running'));



app.use('/public', express.static(path.join(__dirname, 'view', 'public')));
app.get('/', (req, res) => res.render(path.join(__dirname, 'view', 'index.html')));
app.get('/index', (req, res) => res.render(path.join(__dirname, 'view', 'pages', 'index.html')));
app.get('/about', (req, res) => res.render(path.join(__dirname, 'view', 'pages', 'about.html')));
app.get('/gbook', (req, res) => res.render(path.join(__dirname, 'view', 'pages', 'gbook.html')));
app.get('/info', (req, res) => res.render(path.join(__dirname, 'view', 'pages', 'info.html')));
app.get('/life', (req, res) => res.render(path.join(__dirname, 'view', 'pages', 'life.html')));
app.get('/list', (req, res) => res.render(path.join(__dirname, 'view', 'pages', 'list.html')));
app.get('/share', (req, res) => res.render(path.join(__dirname, 'view', 'pages', 'share.html')));
app.get('/time', (req, res) => res.render(path.join(__dirname, 'view', 'pages', 'time.html')));