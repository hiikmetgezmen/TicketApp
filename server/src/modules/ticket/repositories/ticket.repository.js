import Ticket from "../models/Ticket.schema.js";
import User from "../../auth/models/User.schema.js"

class TicketRepository {
    getById(id) {
        return Ticket.findById({ id });
    }
    getAll() {
        return Ticket.find({});
    }
    async getTicket(id, userId) {
        const check = await Ticket.findById({ id });
        if (check.status === false) { // koltuk dolu mu
            return "Koltuk dolu";
        }
        const count = await Ticket.countDocuments({ userId: userId, id: id });
        if (count > 4) { //kullanıcı koltuk sayısı
            return "Daha fazla koltuk alamazsınız.";
        }
        else {
            if (check.seatNo % 2 == 0) { // çift sayı ise 1 çıkar
                const checkGender = await Ticket.findOne({ seatNo: check.seatNo - 1 });
            }
            else { // tek sayı ise 1 ekle
                const checkGender = await Ticket.findOne({ seatNo: check.seatNo + 1 });
            }
            const gender = await User.findById({ id: userId });
            if (checkGender.status !== true) // yan boş değilse
            {
                if (checkGender.id !== gender.id) { // id aynı değilse
                    if (checkGender.gender !== gender.gender) { //cinsiyet aynı değilse  değişecek kullanıcı
                        return "Farklı bir koltuk seçin";
                    }
                }
            }
            //koltuğu al
            return await Ticket.findByIdAndUpdate(
                id.id,
                {
                    status:false,
                    $push: {
                        userId: userId.id,
                    },
                },
                { new: true, useFindAndModify: false }
            );



        }

    }


}

const instance = new TicketRepository();
export default instance;
export { instance };