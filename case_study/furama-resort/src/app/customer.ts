export class Customer {
  public id: number;
  public name: string;
  public dateOfBirth: string;
  public gender: number;
  public phone: string;
  public email: string;
  public address: string;


  constructor(id: number, name: string, dateOfBirth: string, gender: number, phone: string, email: string, address: string) {
    this.id = id;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.phone = phone;
    this.email = email;
    this.address = address;
  }
}
