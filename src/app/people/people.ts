import { Component, inject } from '@angular/core';
import { Base } from '../base';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  selector: 'app-people',
  styleUrl: './people.css',
  templateUrl: './people.html',
})
export class People {

  base = inject(Base)

  people = this.base.people

  add(){
    this.base.add()
  }

}
