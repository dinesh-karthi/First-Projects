

var connection = mysql.createConnection({
  host     : '3306',
  user     : 'root',
  password : 'lenovoE41-15',
  name     : 'dineshdb'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

export default connection;
/*
var mysql      = require('mysql');
var connection = mysql.createConnection(...);
 
connection.query('SELECT 1', function (error, results, fields) {
  if (error) throw error;
  // connected!
}); */