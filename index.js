require('dotenv').config();
const express = require("express");
const {db_Connection} = require('./src/db/conn')
const schoolRouter = require('./src/routes/school.routes')


const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({extended:false}));

// routes 

app.use('/api/school', schoolRouter);

db_Connection().then(()=>{
    app.listen(port,()=>{
        console.log(`server started at ${port}`);
        
    })
})



