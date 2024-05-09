const express = require("express");
const useRouter = require('./routes/router.js');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// app.use(bodyparser.json());


app.set('view engine', 'ejs');
app.use("/",useRouter);  

// ========= create table in database ================//

// const User = require('./database/models/users.js');
// User.sync(); creates the table if it doesn't exist
// User.sync({ force: true }); This creates the table, dropping it first if it already existed  
// User.sync({ alter: true })
// User.drop();  for drop table
require('./database/models/index.js');

// ==================== end ==========================// 


app.listen("3000", (err)=>{
    if(err){
        console.log("connection error");
    }else{
        console.log("server is listing at 3000");
    }
})

