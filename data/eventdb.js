

// const sql=require('mysql2')

// let conn=sql.createConnection({

//     host:"localhost",
//     user:"root",
//     password:"Harsha@123",
//     database:"gyangrove"
// })



// conn.connect((err) => {
//     if (err) {
//       console.error('Error connecting to database:', err);
//       return;
//     }
//     console.log('Connected to database');
    
    

//   });

// module.exports=conn



const sql=require('mysql2')
// console.log(process.env.DB_HOST);

let conn=sql.createConnection({

    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
})

// conn.connect(()=>{
//     console.log("sql connected")
// })

conn.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database');
    
    // Test the connection by running a simple query
    // conn.query('SELECT 1 + 1 AS solution', (err, results) => {
    //   if (err) {
    //     console.error('Error executing query:', err);
    //     return;
    //   }
    //   console.log('Database connection test successful. Result:', results[0].solution);
    // });

  });

module.exports=conn