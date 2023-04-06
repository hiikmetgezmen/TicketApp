import InfoService from "../services/info.service.js";
import { ServiceResponse } from "../../../common/serviceResponse.js";
import HttpStatusCodes from "http-status-codes";




export const getAll = async (req,res,next)=>{
    try {
        const data = await InfoService.getAll();
        return res
        .status(HttpStatusCodes.OK)
        .json(ServiceResponse.successWithData(data, HttpStatusCodes.OK));
    } catch (error) {
        next(error);
    }
}
export const getById = async (req,res,next)=>{
    try {
        const data = await InfoService.getById(req.params.id);
        return res
        .status(HttpStatusCodes.OK)
        .json(ServiceResponse.successWithData(data, HttpStatusCodes.OK));
    } catch (error) {
        next(error);
    }
}

export default {
    getAll,
    getById
}