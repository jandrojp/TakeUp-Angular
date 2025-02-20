import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() is_ModalOpen?: boolean;
  @Input() modal_product?: {
    image: string,
    product: string,
    price: number,
    rating: number,
    description: string
  } | null = null;
  @Output() buttonCloseModal = new EventEmitter();


  onCloseModal() {
    this.buttonCloseModal.emit();
  }

}
