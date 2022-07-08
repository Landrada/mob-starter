import mongoose from 'mongoose'
const url = 'mongodb://localhost/starter';
const connection = mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{ console.log("Connected to the db successfully")})
.catch((err)=> console.log("Failed to connect to the db",err.message))
export default connection