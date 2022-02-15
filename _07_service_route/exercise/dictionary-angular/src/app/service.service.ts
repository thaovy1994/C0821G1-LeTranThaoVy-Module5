import { Injectable } from '@angular/core';
import {IWord} from './iword';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  translate(){
  const listWord: Array<IWord> = [
      {word: 'apple', mean: 'táo'},
      {word: 'orange', mean: 'cam'}
    ];
  return listWord;
  }
  findByWord(word: string): IWord{
    return this.translate().find(wordFind => wordFind.word === word);
  }
}
