import {Component, OnInit} from '@angular/core';
import {IWord} from '../iword';
import {ServiceService} from '../service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  iWord: IWord;

  constructor(private serviceList: ServiceService,
              private activatedRoute: ActivatedRoute) {
    const word = this.activatedRoute.snapshot.params.word;
    this.iWord = this.serviceList.findByWord(word);
  }

  ngOnInit(): void {
  }

}
