import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { IModalSetupOptions } from 'src/app/core/common/IModalSetupOptions';
import { IModalOptions } from 'src/app/core/common/IModalOptions';

@Injectable({ providedIn: 'root' })
export class ModalService {

  modalSetupOptions: IModalSetupOptions;
  modalOptions: IModalOptions = { activeComponent: null, componentMode: ComponentMode.Read, data: null, title: '' };
  renderer: Renderer2;
  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setup(setupOptions: IModalSetupOptions) {
    this.modalSetupOptions = setupOptions;
  }

  open(options: IModalOptions): void {
    if (options) {
      this.modalOptions = options;
    }
    this.modalSetupOptions.modalComponent.onOpening();
    this.renderer.setStyle(this.modalSetupOptions.modalContainer.nativeElement, 'display', 'block');
    setTimeout(() => this.renderer.addClass(this.modalSetupOptions.modalContainer.nativeElement, 'show'), 100);
  }



  close(): void {
    this.modalSetupOptions.modalComponent.onClosing();
    this.renderer.setStyle(this.modalSetupOptions.modalContainer.nativeElement, 'display', 'none');
    setTimeout(() => this.renderer.removeClass(this.modalSetupOptions.modalContainer.nativeElement, 'show'), 200);
  }

}
