import Info from "../models/Info.schema.js";

class InfoRepository{
    getById(id){
        return Info.findById({id});
    }
    getAll(){
        return Info.find({});
    }
}

const instance = new InfoRepository();
export default instance;
export {instance};