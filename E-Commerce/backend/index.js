const express = require("express");
const mysql = require("mysql")
const bodyparse = require("body-parser")

// dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyparse.urlencoded({extended:false}))
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
  console.log(req);
  
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
 
});

// mysql connection
const connect = mysql.createPool({
  connectionLimit:10,
  host     : process.env.DB_HOST,
  port     : port,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE

})

connect.getConnection((err,connection)=>{
  if(err) throw err
  console.log('connection successful',connection.threadId)
  
})