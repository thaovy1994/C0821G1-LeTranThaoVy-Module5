import {Component, OnInit} from '@angular/core';
import {IWord} from '../iword';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  listEnglishWord: IWord[];

  constructor(private serviceList: ServiceService) {
    this.listEnglishWord = this.serviceList.translate();
  }

  ngOnInit(): void {
  }

}
