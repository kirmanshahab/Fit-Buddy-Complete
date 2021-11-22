const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

//connect to db
mongoose.connect(
 process.env.DB_CONNECT,
 {useUnifiedTopology: true, useNewUrlParser: true},
 ()=> console.log("connected to db")
);

// import routes
const taskRoutes = require("./routes/task");

//Middlewares
app.use(express.json());
app.use(cors());

//route middlewares
app.use("/tasks", taskRoutes);

app.listen(4000, ()=>{
    console.log("server is up and running on port 4000");
});