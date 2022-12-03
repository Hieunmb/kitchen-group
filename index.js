const express= require("express");
const app=express();
const PORT= process.env.PORT || 5000;
const mysql = require("mysql");

app.listen(PORT,function (){
  console.log("server is running...");
});

const config ={
  host: '139.180.186.20',
  port:3306,
  user:'t2207a',
  password:'t2207a123',
  database:'t2207a',
  multipleStatements:true
};
const conn=mysql.createConnection(config);

app.get("/", function (req,res){
  const sql ="select * from nhom2_product";
  conn.query(sql,function (err,data){
    res.send(data)
  })
});app.get("/lophoc", function (req,res) {
  const sql = "select * from nhom2_product limit 0,16";
  conn.query(sql, function (err, data) {
    res.send(data)
  })
});
app.get("/sinhvien-theo-lop", function (req,res) {
  const lh=req.query.lhid;
  const sql = "select * from sinhvien where lhid="+lh;
  conn.query(sql, function (err, data) {
    res.send(data)
  })
});
app.get("/sinhvien-theo-ten", function (req,res) {
  const q=req.query.q;
  const sql = `select * from sinhvien where name like '%${q}%'`;
  conn.query(sql, function (err, data) {
    res.send(data)
  })
});
