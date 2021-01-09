class User{
  constructor(id, name, phone, mail, password){
    this.name = name;
    this.id = id;
    this.phone = phone;
    this.mail = mail;
    this.password = password;
  }
}

module.exports = User