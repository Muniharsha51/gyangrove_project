

const sql=require('mysql2')

let conn=sql.createConnection({

    host:"localhost",
    user:"root",
    password:"Harsha@123",
    database:"gyangrove"
})



conn.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database');
    
    

  });

module.exports=conn