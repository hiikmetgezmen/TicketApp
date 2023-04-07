import TicketService from "../services/ticket.service.js";
import { ServiceResponse } from "../../../common/serviceResponse.js";
import HttpStatusCodes from "http-status-codes";





export const getAll = async (req,res,next)=>{
    const infoId = req.body.infoId;
    try {
        const data = await TicketService.getAll(infoId);
        return res
        .status(HttpStatusCodes.OK)
        .json(ServiceResponse.successWithData(data, HttpStatusCodes.OK));
    } catch (error) {
        next(error);
    }
}
export const takeTicketRequest = async (req, res, next) => {
    const user = req.user.id;
    const {infoId,id,gender} = req.body
    try {
      const response = await TicketService.getTicket(id,infoId,user,gender);
      return res
        .status(HttpStatusCodes.CREATED)
        .json(ServiceResponse.successWithData(response, HttpStatusCodes.CREATED));
    } catch (error) {
      next(error);
    }
  };
export const getById = async (req,res,next)=>{
    try {
        const data = await TicketService.getById();
        return res
        .status(HttpStatusCodes.OK)
        .json(ServiceResponse.successWithData(data, HttpStatusCodes.OK));
    } catch (error) {
        next(error);
    }
}

export default {
    getAll,
    getById,
    takeTicketRequest
}