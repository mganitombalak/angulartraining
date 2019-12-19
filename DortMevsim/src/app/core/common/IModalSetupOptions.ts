import { ElementRef } from '@angular/core';
import { ModalComponent } from 'src/app/modules/shared/components/modal/modal.component';

export interface IModalSetupOptions {
    modalContainer: ElementRef;
    modalComponent: ModalComponent;
}
