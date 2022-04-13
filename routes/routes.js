

// require an express library --similar to python import
let express = require('express')
// make a router. Create a router(object)that understands how to match
// different requests and paths with functions that understand how to respond to each individual request
let router = express.Router() 


// On a web server, routing is matching up different requests
// to a server with code that runs in response to that request and creaters somes kind of response. 

// In short, a server can identify a request, send it to a function that prove that data and create a response


// configure a route that is a get request that fetches data 
// path = /
// this function will run to provide a response

router.get('/',function(req,res,next){
    res.json({'message':'hello from me to me!'}) //response is a json object
})

module.exports=router
// another file will be able to access this router object