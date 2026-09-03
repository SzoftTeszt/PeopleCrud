import { Component, inject } from '@angular/core';
import { Base } from '../base';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [JsonPipe, FormsModule],
  selector: 'app-people',
  styleUrl: './people.css',
  templateUrl: './people.html',
})
export class People {

  base = inject(Base)

  people = this.base.people

  ujEmber:any={}

  add(){
    this.base.add(this.ujEmber)
    this.ujEmber={}
  }
  save(p:any){
    this.base.ment(p)
  }

  torol(p:any){
    this.base.torol(p)
  }

}
