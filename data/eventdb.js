
const sql=require('mysql2')

let conn=sql.createConnection({

    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
})

conn.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database');
  });

module.exports=conn