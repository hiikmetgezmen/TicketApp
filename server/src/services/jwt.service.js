import jwt from "jsonwebtoken";

class JwtService {
  maxAge = 3 * 24 * 60 * 60;
  createToken = ({ id, email, name, surname }) => {
    return jwt.sign(
      { id: id.toString(), email, name, surname },
      process.env.JWT_SECRET,
      {
        expiresIn: this.maxAge,
      }
    );
  };
  verify(token, callback) {
    try {
      jwt.verify(token, process.env.JWT_SECRET, callback);
    } catch (err) {
      callback(err);
    }
  }
}

const instance = new JwtService();

export default instance;

export { JwtService };
