const express = require('express');
const app = express();
const http = require('http');

app.use(express.static('public'));

const server = http.createServer(app);

server.listen(3000, () => {
    console.log('server started');
});
