var mysql= require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Kunal@123',
  database : 'kunal'

});
connection.connect(function(err) {
    if (err) {
      return console.error("my error is: " + err.message);
    }
  
    console.log('Connected to the MySQL server.');
   // var sql="insert into sonofkunal (id,name) values (1,'Vivek')";
    connection.query("select *from sonofkunal ", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });