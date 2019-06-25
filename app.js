// require package and storing it in express variable
const express = require('express');
// calling express and
const app = express();

// routing any traffic going to the root url and sending back a response
app.get('/', function(request, response){
   response.send("Landing page!!");
});

//rerouting any traffic going to the root url and sending it back to the user
app.get('/touba', function(req, res){
   res.send("Get out me swamp")
});

// application is listening for requests on port 3000
app.listen(3000);

// just letting you know that the server is live
console.log("Server is live and on port 3000.....");
