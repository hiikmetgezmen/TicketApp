import mongoose from "mongoose"
const Schema = mongoose.Schema;


export const InfoSchema = new Schema({
    name:{
        type:String,
        required:[true, "Name is required"]
    },
    from:{
        type:String,
        required:[true, "from is required"]
    },
    to:{
        type:String,
        required:[true, "to is required"]
    },
    date:{
        type:String,
        required:[true, "Date is required"]
    }   
})

const Info = mongoose.model("info",InfoSchema);
export default Info;