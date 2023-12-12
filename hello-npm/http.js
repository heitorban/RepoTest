import { createServer } from 'http';

createServer(function (req, res) {
    
        res.write("Hello world Heitor");
        res.end();
    }).listen(8080);