export class Customer {
  public id: number;
  public firstName: string;
  public lastName: string;
  public dateOfBirth: string;
  public gender: number;
  public phone: string;
  public email: string;
  public address: string;


  constructor(id: number, firstName: string, lastName: string, dateOfBirth: string, gender: number, phone: string, email: string, address: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.phone = phone;
    this.email = email;
    this.address = address;
  }
}
