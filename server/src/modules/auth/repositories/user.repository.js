import User from "../models/User.schema.js";
import bcrypt from "bcrypt";
import { ApiError } from "../../../common/apiError.js";
import HttpStatusCodes from "http-status-codes";
import Ticket from "../../ticket/models/Ticket.schema.js";
import Info from "../../bus/models/Info.schema.js";

class UserRepository {
  async hashPassword(password) {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }
  async create(user) {
    const found = await this.ifExistUser(user.email);
    if (found != null)
      throw new ApiError(
        "email has been already exist",
        HttpStatusCodes.BAD_REQUEST,
        "userrepository->signup"
      );
    user.password = await this.hashPassword(user.password);
    return User.create(user);
  }
  ifExistUser(email) {
    return this.getByEmail(email);
  }
  getByEmail(email) {
    return User.findOne({ email: email });
  }
  getAll() {
    return User.find({});
  }
  getById(id) {
    return User.findById(id);
  }
  async getTicketInfo(id){
    return await Ticket.find({userId:id});
  }
  async getTicket(ticketId){
    const ticket =  await Ticket.findOne({id:ticketId});
    const info = await Info.findById(ticket.infoId);
    return {
      "Bilet Bilgileri" : ticket,
      "Detay" : info
    }
  }
  async getInfo(id){
  const result = [];
  const ticket =  await Ticket.find({userId:id});
    for (let i = 0; i < ticket.length; i++) {
      const tickets = ticket[i];
      const info = await Info.findById(tickets.infoId);
      result.push({
        id: tickets,
        info:info
      });
    }

    return result;
  }
  async getByEmailAndPassword(email, password) {
    const found = await this.ifExistUser(email);
    if (!found)
      throw new ApiError(
        "Not found user",
        HttpStatusCodes.NOT_FOUND,
        "userrepository->signin"
      );
    const isCompare = await bcrypt.compare(password, found.password);
    if (!isCompare)
      throw new ApiError(
        "Invalid email or password",
        HttpStatusCodes.BAD_REQUEST,
        "userrepository->signin"
      );
    return found;
  }
 
  updateToken({ userId, token }) {
    return User.findByIdAndUpdate(
      userId,
      { registrationToken: token },
      { new: true }
    );
  }
}

const instance = new UserRepository();

export default instance;

export { instance };
