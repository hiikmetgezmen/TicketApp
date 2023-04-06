import TicketRepository from "../repositories/ticket.repository.js";

class InfoService{
    getById(id){
        return TicketRepository.getById(id);
    }
    getAll(){
        return TicketRepository.getAll();
    }
    getTicket(id,infoId,userId)
    {
        return TicketRepository.getTicket(id,infoId,userId);
    }

}

const instance = new InfoService();
export default instance;
export {instance};