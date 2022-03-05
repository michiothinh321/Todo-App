import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-todocomponent',
  template:`
    <div class='listItem'>
      <ul>
        <li class="items" *ngFor="let item of list">
          {{item}}
            <button>Remove</button>
        </li>
      </ul>
  </div>
  <div class="addText">
    <input
    class="inputText"
    type="text"
    id='addJob'
    placeholder="Enter"
    [(ngModel)]="inputJob"
    />
    <button class="btnAdd" (click)="handleAddJob()">ADD TEXT</button>
  </div>
  `,
  styleUrls: ['./todocomponent.component.css']
})
export class TodocomponentComponent implements OnInit {

  @Input() list: Array<string>;
  inputJob = '';
  handleAddJob(){
    this.list= [this.inputJob,...this.list]
    this.inputJob='';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
