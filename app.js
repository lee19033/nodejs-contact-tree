

const http= require('http');
const hostname = '127.0.0.1';
const port=3000;
const fs= require('fs');


fs.readFile('index.html', (err,html) => {
    if(err) {
        throw(err);
    }
    const server=http.createServer((req,res)=> {
        res.statusCode = 200; 
        res.setHeader('contentType','text/html');
        res.write(html);
        res.end('');
    });
    
    server.listen(port,hostname,()=> {
        console.log('server started on port ' + port);
    });
});
