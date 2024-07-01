const read = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Node.js Class</title></head><body>');

    // Check the request URL
    if (req.url === '/sid') {
        res.write('<h1>Hello sid !</h1>');
    } else {
        res.write('<h1>Hello World !</h1>');
    }

    res.write('</body></html>');
    res.end();
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});




