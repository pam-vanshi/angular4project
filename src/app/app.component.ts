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
    <div style="padding:20px;">
    <button onclick="document.location.href = '/home/pramudit/angular-project/public/page-2.html'" style="background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;">Go to page-2</button></div>
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
