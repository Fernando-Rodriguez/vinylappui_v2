const path = require("path");
var cors = require('cors');
const express = require('express');
const https = require('https');
const fs = require('fs');
const birds = require('./routes/routes');
const port = 3000;

// Generates the cert for https
var key = fs.readFileSync(__dirname + '/vinyl-app-ui/.cert/key.pem');
var cert = fs.readFileSync(__dirname + '/vinyl-app-ui/.cert/cert.pem');
var options = {
  key: key,
  cert: cert
};

app = express()

app.use(cors());
app.use(express.static(path.join(__dirname, 'vinyl-app-ui/build')));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'vinyl-app-ui/build'));
});

app.use('/api/birds', birds)

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'vinyl-app-ui/build/index.html'));
});

var server = https.createServer(options, app);

server.listen(port, () => {
  console.log("server starting on port : " + port)
});