const http = require('http')

const port = 5001// 4 digits port is IPv4, and 6 digits port is IPv6
const server = http.createServer() //creating reference to server

server.on('request',function (req, res) { //creating node event for server instance  //here the request event name is a builting name so no need call this name
    //req.url => to read the path from the browser tht is url

    switch(req.url) {
        case "/":
            res.end(
                `<div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
                <h1>Home page</h1>
                    </div>`
            )
            break;
           
            case "/about":
                res.end(
                    `<div>
                    <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
                    <h1>About page</h1>
                        </div>`
                )
                break;
                case "/contact":
                    res.end(
                        `<div>
                        <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </nav>
                        <h1>Contact page</h1>
                            </div>`
                    )
                    break;
                    default:
                        res.end(
                            `<div>
                            <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/login">Login</a></li>
                            </ul>
                        </nav>
                            <h1>page not found</h1>
                                </div>`
                        )
                        break;
    }
})
server.listen(port, function(){
    console.log('server satrted @ https://localhost:', port)
})