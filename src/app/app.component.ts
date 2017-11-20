import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';


@Component({
  selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `
      <button (click)='modalService.open(modalId)'>Open Modal</button>
      <app-modal [modalTitle]="'Some title'" [blocking]='false' [modalId]='modalId' [(ngModel)]="hero.name" >
        <div>Text inside the modal: {{hero.name}}</div>
      </app-modal>
      <a [routerLink] = ['/page-2']>Go to page 2</a>`
})
export class AppComponent {
  modalId = 'hoplaModal';

  constructor(
    public modalService: ModalService
  ) {}
}
