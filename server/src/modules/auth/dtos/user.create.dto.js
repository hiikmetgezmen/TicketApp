

class UserCreateDto {
  constructor(data) {
    this.name = data.name;
    this.surname = data.surname;
    this.email = data.email;
    this.phone=data.phone;
    this.password = data.password;
    this.age = data.age;
    this.gender = data.gender;
  }
}

export default UserCreateDto;
