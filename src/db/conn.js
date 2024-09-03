
const mongoose = require('mongoose')

exports.db_Connection = async()=>{
    try {
        const db = await mongoose.connect(process.env.DATABASE_URL);

        if(db){
            console.log('db connected successfully');
        }
    } catch (error) {
        console.log("error in db connection",error);
        
    }
}