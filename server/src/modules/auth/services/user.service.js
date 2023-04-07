import UserViewDto from "../dtos/userView.dto.js";
import userRepository from "../repositories/user.repository.js";

class UserService {
  async getAll() {
    const users = await userRepository.getAll();
    const models = users.map((user) => new UserViewDto(user));
    return models;
  }
  async getById(id) {
    const user = await userRepository.getById(id);
    return new UserViewDto(user);
  }
  async getTicketInfo(id) {
    const user = await userRepository.getTicketInfo(id);
    return user;
  }
  async getTicket(ticketId) {
    const user = await userRepository.getTicket(ticketId);
    return user;
  }
  async getInfo(id) {
    const user = await userRepository.getInfo(id);
    return user;
  }
  async createUser(user) {
    const created = await userRepository.create(user);
    return new UserViewDto(created);
  }
  async updateToken(user) {
    const updated = await userRepository.updateToken(user);
    return new UserViewDto(updated);
  }
}

const instance = new UserService();

export default instance;

export { UserService };
