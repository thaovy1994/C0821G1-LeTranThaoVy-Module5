import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
public student = new Array();
  constructor() { }

  ngOnInit(): void {
    this.student = this.getStudent();
  }

  private getStudent() {
    return [
      {}
    ];
  }
}
