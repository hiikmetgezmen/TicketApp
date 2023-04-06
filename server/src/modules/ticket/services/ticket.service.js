import TicketRepository from "../repositories/ticket.repository.js";

class InfoService{
    getById(id){
        return TicketRepository.getById(id);
    }
    getAll(){
        return TicketRepository.getAll();
    }
    getTicket()
    {
        return TicketRepository.getTicket();
    }

}

const instance = new InfoService();
export default instance;
export {instance};