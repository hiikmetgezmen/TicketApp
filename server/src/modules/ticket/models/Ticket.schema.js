import mongoose from "mongoose"
const Schema = mongoose.Schema;


export const TicketSchema = new Schema({
    seatNo:{
        type:Number,
        required:[true, "seatNo is required"]
    },
    status:{
        type:Boolean,
        default: true,
        required:[true, "status is required"]
    },
    gender:{
        type:String,
        default: null,
        required:[true, "gender is required"]
    },
    userId:
        {
        //   type: mongoose.Schema.Types.ObjectId,
        //   ref: "users",
        type:String,
          default: null,
          required:[true, "userId is required"]
        },
      infoId:
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "infos",
          default: null,
          required:[true, "infoId is required"]
        },
      
    
})

const Ticket = mongoose.model("ticket",TicketSchema);
export default Ticket;