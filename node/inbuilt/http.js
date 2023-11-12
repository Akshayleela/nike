let http= require('http');

// req(request)=whatever we send to the server(params,queryParams,body)
// res(response)=whatever we get from the server
let server = http.createServer((req, res) => {
    res.write('<h1>this is sent to the server</h1>')
    res.write('<h1>Hi from Akshay</h1>')
    res.end()
})

server.listen(5440);