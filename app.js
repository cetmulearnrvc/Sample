const http=require('http')
const fs=require('fs')
http.createServer(function (req,res)
{
    if(req.url==='/')
    {
    fs.readFile('welcome.html', function(err,data)
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
    }
else if(req.url === '/exercise-2')
{
    res.writeHead(301,{'Location' : '/exercise-2-redirected'});
    res.end();
}
else if(req.url === '/exercise-2-redirected')
    {
        fs.readFile('Redirection.html', function(err,data)
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
    }
    
    
}).listen(1000)