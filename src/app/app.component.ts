import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modal-example';
  isShowModal = false;
    
  showModal() {
      this.isShowModal = true;
  }

  closeModal() {
    this.isShowModal = false;
  }
}
