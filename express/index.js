const express = require("express")
const morgan = require('morgan')

const app = express()

app.use(morgan("dev"))
app.use(express.json())

// Add your code here. : Define our router from Express' prebuilt Router object.
const indexRoute = express.Router();

//define our first middleware function ("CONTROLLER")
const controllerOne = function(request, response, next) {
    console.log("is this thing on?");
    next();
}

//define second controller
const controllerTwo = function(request, response, next) {
    return response.json({status: 200, data:null, message:"this thing is on"});
}

indexRoute.route("/apis").get(controllerOne, controllerTwo);

app.use(indexRoute);

app.listen(4200, () => {console.log("Express has Started")})

