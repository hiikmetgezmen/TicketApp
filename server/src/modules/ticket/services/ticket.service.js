import TicketRepository from "../repositories/ticket.repository.js";

class InfoService{
    getById(id){
        return TicketRepository.getById(id);
    }
    getAll(infoId){
        return TicketRepository.getAll(infoId);
    }
    getTicket(id,infoId,userId,gender)
    {
        return TicketRepository.getTicket(id,infoId,userId,gender);
    }

}

const instance = new InfoService();
export default instance;
export {instance};