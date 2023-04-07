import userService from "../services/user.service.js";
import UserCreateDto from "../dtos/user.create.dto.js";
import UserTokenUpdateDto from "../dtos/userTokenUpdate.dto.js";
import { ServiceResponse } from "../../../common/serviceResponse.js";
import HttpStatusCodes from "http-status-codes";
import UserViewDto from "../dtos/userView.dto.js";

export const getAllRequest = async (req, res) => {
  const data = await userService.getAll();
  return res
    .status(HttpStatusCodes.OK)
    .json(ServiceResponse.successWithData(data, HttpStatusCodes.OK));
};

export const postRequest = async (req, res, next) => {
  const model = new UserCreateDto(req.body);
  try {
    const response = await userService.createUser(model);
    return res
      .status(HttpStatusCodes.CREATED)
      .json(ServiceResponse.successWithData(response, HttpStatusCodes.CREATED));
  } catch (error) {
    next(error);
  }
};

export const getByIdRequest = async (req, res) => {
  const data = await userService.getById(req.params.id);
  return res
    .status(HttpStatusCodes.OK)
    .json(ServiceResponse.successWithData(data, HttpStatusCodes.OK));
};

export const getTicketInfo = async (req, res,next) => {
  const id = req.user.id;
  try {
      const data = await userService.getTicketInfo(id);
  return res
    .status(HttpStatusCodes.OK)
    .json(ServiceResponse.successWithData(data, HttpStatusCodes.OK));

  } catch (error) {
    next(error);
  }

};
export const getInfo = async (req, res,next) => {
  const id = req.user.id;
  const ticketId = req.body.ticketId;
  try {
      const data = await userService.getInfo(id,ticketId);
  return res
    .status(HttpStatusCodes.OK)
    .json(ServiceResponse.successWithData(data, HttpStatusCodes.OK));

  } catch (error) {
    next(error);
  }

};

export const getTicket = async (req, res,next) => {
  const {ticketId} = req.body;
  try {
      const data = await userService.getTicket(ticketId);
  return res
    .status(HttpStatusCodes.OK)
    .json(ServiceResponse.successWithData(data, HttpStatusCodes.OK));

  } catch (error) {
    next(error);
  }

};

export const getByTokenRequest = async (req, res) => {
  return res
    .status(HttpStatusCodes.OK)
    .json(
      ServiceResponse.successWithData(
        new UserViewDto(req.user),
        HttpStatusCodes.OK
      )
    );
};


export const updateNotifyTokenByIdRequest = async (req, res) => {
  const model = new UserTokenUpdateDto(req.body);
  const data = await userService.updateToken(model);
  return res
    .status(HttpStatusCodes.OK)
    .json(ServiceResponse.successWithData(data, HttpStatusCodes.OK));
};

export default {
  getAllRequest,
  postRequest,
  getByIdRequest,
  getByTokenRequest,
  updateNotifyTokenByIdRequest,
  getTicketInfo,
  getInfo,
  getTicket
};
