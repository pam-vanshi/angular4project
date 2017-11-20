import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { InsideModel } from '/angular.ts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <button (click)='modalService.open(modalId)'>Open Modal</button>
    <app-modal [modalTitle]="'Some title'" [blocking]='false' [modalId]='modalId'[(ngModel)]="Text.name" >
      <div>{{Text.name}}</div>
    </app-modal>
  `
})
export class HeroesComponent implements OnInit {
  Text: InsideModel = {
    id: 1,
    name: 'Windstorm'
  };


export class AppComponent {
modalId = 'hoplaModal';
constructor(
    public modalService: ModalService
  ) {}
}
