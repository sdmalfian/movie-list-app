const mongoose =  require("mongoose");
const mongoDB = require("mongodb://localhost/First_App");

mongoose.connect(
    mongoDB,
    { useNewUrlParser: true}
)
.then(() => console.log("MongoDB Connected"));

mongoose.Promise = global.Promise;

module.exports = mongoose;