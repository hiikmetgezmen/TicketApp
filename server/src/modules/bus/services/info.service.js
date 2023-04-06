import InfoRepository from "../repositories/info.repository.js";

class InfoService{
    getById(id){
        return InfoRepository.getById(id);
    }
    getAll(){
        return InfoRepository.getAll();
    }
}

const instance = new InfoService();
export default instance;
export {instance};