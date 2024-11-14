const http = require('http');
const content = (req, res) => {
    res.end("Hello World");
}

const w = http.createServer(content);
w.listen(8000);