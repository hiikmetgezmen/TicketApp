class UserViewDto {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.surname = user.surname;
    this.email = user.email;
    this.age = user.age;
    this.registrationToken = user.registrationToken;
    this.fullName = `${this.name} ${this.surname}`;
    this.phone = user.phone;
    this.gender = user.gender;
  }
}

export default UserViewDto;
