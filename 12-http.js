const http = require('http');

const server = http.createServer((req,res) => {
    // req and res are objects
    // req - represents incoming requests
    // res - what we're sending back
    if(req.url === '/') {
        res.end('Welcome to our home page');
    }else if (req.url === '/about') {
        res.end('Here is our short history');
    } else {
    res.end(`
    <h1>Opps!</h1>
    <p> We can't seem to find the page you're looking for </p>
    <a href="/">back home</a>
    `)
    }

})

server.listen(3000);