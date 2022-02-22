import {Degree} from './degree';
import {Division} from './division';
import {Position} from './position';

export class Employee {
  id: number;
  name: string;
  birthDay: string;
  idCard: string;
  salary: number;
  phone: string;
  email: string;
  address: string;
  degree: Degree;
  position: Position;
  division: Division;
}
