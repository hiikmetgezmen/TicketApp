import TicketService from "../services/ticket.service.js";





export const getAll = async (req,res,next)=>{
    try {
        const data = await TicketService.getAll();
        return res
        .status(HttpStatusCodes.OK)
        .json(ServiceResponse.successWithData(data, HttpStatusCodes.OK));
    } catch (error) {
        next(error);
    }
}
export const takeTicketRequest = async (req, res, next) => {
    const user = req.user.id;
    const id = req.body.id;
    try {
      const response = await userSessionService.createUserSession(id,user);
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