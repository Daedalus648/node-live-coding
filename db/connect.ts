const URL: string = "mongodb://127.0.0.1:27017/wilderdb"
const mongoose: any = require('mongoose')

// Database
async function connect(){
    try {
    await mongoose
        .connect(URL)
        console.log("Successfully connected to database.")
    }
        catch(err){
            (console.error(err.message))
        }
}
export { connect };