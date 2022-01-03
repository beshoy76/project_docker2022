const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
var mysql = require('mysql');
//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

var con = mysql.createConnection({
  host: "db",
  user: "root",
  password: "test123",
});


app.use('/',(req,res)=>{
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
    res.send(`<h1>Connected to db service </h1>`)

    //res.json({
    //    msg:"connected successfuly"

    //})
});

app.listen(9595, () => {
    console.log('App listening on port 9595!');
});