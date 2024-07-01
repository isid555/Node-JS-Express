const fs = require('fs');
const http = require('http');

const data = fs.readFileSync("index.html", "utf8");
// console.log(" " +  data)

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/HTML');
    res.write( data);
    res.end();
})

const port  = 4000;
const host = "localhost";

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
})
