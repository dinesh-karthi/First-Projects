const express = require("express");
const mysql = require("mysql")
const bodyparse = require("body-parser");

// dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyparse.urlencoded({extended:false}))
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
 
});

// mysql connection
const connect = mysql.createPool({
  connectionLimit:10,
  host     : 'localhost',
  port     : "3306",
  user     : 'root',
  password : 'lenovoE41-15',
  database : 'testdb'

})

connect.getConnection((err,connection)=>{
  if(err) throw err
  console.log('connection successful',connection.threadId)
  
})