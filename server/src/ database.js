const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


// mongo option
const options = {
    useNewUrlParser: true ,
    useFindAndModify:true,
    useCreateIndex:true,
    useUnifiedTopology :true,
    autoIndex:true,
    poolSize:true,
    bufferMaxEntries:0
}

// mongo environment variables

const {
    MONGO_HOSTNAME ,
    MONGO_DB,
    MONGO_PORT
}= process.env;
const dbConnectionURL = {
    "LOCALURL" : `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`
};
mongoose.connect(dbConnectionURL.LOCALURL , options)
const  db = mongoose.connection;
db.on("error" , console.error.bind(console , "MONGODB connection error :" + dbConnectionURL.LOCALURL))
db.once("open", ()=> {
    console.log("Mongodb connection successfully")
})










