const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url
    if(url =='/'){
        res.writeHead(200, { 'content-type':'text/html'})
        res.write(`<div style="padding:0">
        <nav style="padding:20px; background-color:#fff;
        box-shadow: 0px 4px 20px #b4b1b1; font-size:1.2em; display:flex; align-items:center; justify-content:space-between">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/users">Users</a>
        </nav>
        <div>
            <h1>Home Page</h1>
        </div>
        </div>`)
        res.end()
    }
    else if(url ===`/about`){
        res.writeHead(200, { 'content-type':'text/html'})
        res.write(`<div style="padding:0">
        <nav style="padding:20px; background-color:#fff;
        box-shadow: 0px 4px 20px #b4b1b1; font-size:1.2em; display:flex; align-items:center; justify-content:space-between">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/users">Users</a>
            <a href="/users">Login</a>
        </nav>
        <div>
            <h1>About Page</h1>
        </div>
        </div>`)
        res.end()
    }
    else if(url ===`/users`){
        res.writeHead(200, { 'content-type':'text/html'})
        res.write(`<div style="padding:0">
        <nav style="padding:20px; background-color:#fff;
        box-shadow: 0px 4px 20px #b4b1b1; font-size:1.2em; display:flex; align-items:center; justify-content:space-between">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/users">Users</a>
            <a href="/users">Login</a>
        </nav>
        <div>
            <h1>Users Page</h1>
        </div>
        </div>`)
        res.end()
    }
    else if(url ===`/login`){
        res.writeHead(200, { 'content-type':'text/html'})
        res.write(`<div style="padding:0">
        <nav style="padding:20px; background-color:#fff;
        box-shadow: 0px 4px 20px #b4b1b1; font-size:1.2em; display:flex; align-items:center; justify-content:space-between">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/users">Users</a>
            <a href="/users">Login</a>
        </nav>
        <div>
            <h1>Users Page</h1>
        </div>
        </div>`)
        res.end()
    }
    else{
        res.writeHead(404, { 'content-type':'text/html'})
        res.write(`<div style="padding:0">
        <nav style="padding:20px; background-color:#fff;
        box-shadow: 0px 4px 20px #b4b1b1; font-size:1.2em; display:flex; align-items:center; justify-content:space-between">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/users">Users</a>
            <a href="/users">Login</a>
        </nav>
        <div>
            <h1>Page Not Found</h1>
        </div>
        </div>`)
        res.end()
    }
})

server.listen(3040, ()=>{
    console.log(`server is started @ http://localhost:3040`)
})