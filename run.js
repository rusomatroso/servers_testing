var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

var message1 = "You are alive and breathing!";
var message2 = "You will die eventually, everybody will die one day...";

function handleRequest1(request, response) {
    response.end(message1);
};
function handleRequest2(request, response) {
    response.end(message2);
};

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);


server1.listen(PORT1, function () {
    console.log("Server listening on http://localhost:" + PORT1);
});
server2.listen(PORT2, function () {
    console.log("Server listening on http://localhost:" + PORT2);
});