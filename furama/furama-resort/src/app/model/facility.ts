export class Facility {
  public id: number;
  public name: string;
  public area?: number;
  public price: number;
  public amountPerson?: number;
  public type?: string;


  constructor(id: number, name: string, area: number, price: number, amountPerson: number, type: string) {
    this.id = id;
    this.name = name;
    this.area = area;
    this.price = price;
    this.amountPerson = amountPerson;
    this.type = type;
  }
}
