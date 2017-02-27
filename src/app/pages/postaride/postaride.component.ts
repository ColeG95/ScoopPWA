import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  templateUrl: `./postaride.component.html`,
  styleUrls: ['./postaride.component.css']

})

export class PostarideComponent { 

public isCollapsed = false;

  model: NgbDateStruct;
  date: {year: number, month: number};

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()}
}

time = {hour: 13, minute: 30};
  meridian = true;

  time1 = {hour: 13, minute: 30};
  meridian1 = true;

  toggleMeridian() {
      this.meridian = !this.meridian;
      this.meridian1 = !this.meridian1;
  }



}