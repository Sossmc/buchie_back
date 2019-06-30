const mysql = require('mysql');
const dbConfig  = require('./config');

const con = mysql.createConnection(dbConfig);
const query = (sql) => new Promise((resolve, reject) => {
    console.log(sql);
    if(con.state==="disconnected"){
      con.connect(err=>{
        if(err) reject(err);
      });
      con.query(sql, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    }else{

      con.query(sql, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    }
  }
);

const end = () => new Promise((resolve,reject)=>{
  if(con.state!=="disconnected"){
    con.end(err=>{
      if(err) reject(err);
      else resolve("[ENDED]");
    })
  }
});

module.exports = {
  query,
  end
};