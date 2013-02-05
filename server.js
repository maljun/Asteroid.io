var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(1337);
console.log("Server is listening on http://127.0.0.1:1337");