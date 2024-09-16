const http=require('http')
const fs=require('fs')
http.createServer(function (req,res)
{
    fs.readFile('welcome.html', function(err,data)
    {
        res.writeHeader(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
    
    
}).listen(1000)