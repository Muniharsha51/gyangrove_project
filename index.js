

let express=require('express')
const cors = require('cors');


let app=express()
app.use(express.json())
app.use(cors());

const router=require('./routes/route');

app.use(router)


app.listen(3001,()=>{

    console.log("Server is Connected and running sucessfully")
})
