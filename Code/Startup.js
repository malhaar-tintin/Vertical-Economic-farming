var http = require('http');
var url = require('url');
var fs = require('fs');
var path= require('path');
//const port = process.env.PORT || 3000;

http.createServer(function (req, res) {
      let filePath = path.join(
        __dirname,
        //"public",
        req.url === "/" ? "Main-Webpage.html" : req.url
    );

    let extName = path.extname(filePath);
    let contentType = 'text/html';

    switch (extName) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    console.log(`File path: ${filePath}`);
    console.log(`Content-Type: ${contentType}`)

    res.writeHead(200, {'Content-Type': contentType});

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  }).listen(8080);