const mysql = require("mysql");
//konfig koneksi ke db
const dbConfig = {
    host: "34.128.92.249",
    user: "root",
    password: "andhy060402",
    database: "paddy_cure",
  };
  
  const db = mysql.createConnection(dbConfig);

  db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL database:", err);
      return;
    }
    console.log("Connected to MySQL database!");
  });
  

  module.exports = db;