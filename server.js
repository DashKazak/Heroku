// using Node.js to create a server
// Node server will serve our Vue app, API. The server hosts the Vue js code but the browser runs ir with JS interpreter. 
// Node app will use expressapplicatio framework to configure our server


let express=require('express')
let routes=require('./routes/routes')
let path=require('path')

// create a web app
let app=express()

app.use(express.static(path.join(__dirname,'hello-vue','dist')))
// tell app to use the route we created
app.use('/api',routes)

// start server running
// the app is listening for requests

let server=app.listen(process.env.PORT || 3000,function(){
    console.log('Express server running on port',server.address().port)
})


