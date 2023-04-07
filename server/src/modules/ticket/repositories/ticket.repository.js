import Ticket from "../models/Ticket.schema.js";
import User from "../../auth/models/User.schema.js";

class TicketRepository {
  getById(id) {
    return Ticket.findById({ id });
  }
  async getAll(infoId) {
    const ticket = await Ticket.find({infoId:infoId});
    const count = await Ticket.countDocuments({
      infoId: infoId,
    }); 
    const empty = await Ticket.countDocuments({
      infoId: infoId,
      status:true
    }); 

    return {
      "Koltuk Sayısı": count,
      "Boş koltuk sayısı":empty,
      "Bilet Bilgileri": ticket,
    };
  }

  

  async getTicket(id, infoId, userId,gender) {
    const check = await Ticket.findById(id);
    console.log(check.id);
    if (check.status === false) {
      return "Koltuk dolu";
    }
    const count = await Ticket.countDocuments({
      userId: userId,
      infoId: infoId,
    });
    if (count > 4) {
      return "Daha fazla koltuk alamazsınız.";
    } else {
      if (check.seatNo % 2 == 0) {
        var a = 1;
      } else {
        var a = -1;
      }
      const checkGender = await Ticket.findOne({ seatNo: (check.seatNo - a) });
      const user = await User.findOne({ userId });
      
      if (checkGender.status !== true) {
        if (checkGender.userId !== user.id) {
          if (checkGender.gender !== gender) {
            return "Farklı bir koltuk seçin";
          }
        }
      }
       await Ticket.findByIdAndUpdate(
        check.id,
        {
          status: false,
          userId: userId,
        },
        { new: true, useFindAndModify: false }
      );
    }
  }
}

const instance = new TicketRepository();
export default instance;
export { instance };
