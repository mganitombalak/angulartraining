import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ModalHostDirective } from 'src/app/core/directives/modal-host.directive';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterViewInit {

  @ViewChild('globalModal', { static: false }) modalContainer: ElementRef;
  @ViewChild(ModalHostDirective, { static: false }) modalHost: ModalHostDirective;
  constructor(public modalService: ModalService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.modalService.setup({ modalContainer: this.modalContainer, modalComponent: this });
  }

  onOpening(): void {
    if (this.modalHost) {
      const componentFactory = this.componentFactoryResolver.
        resolveComponentFactory(this.modalService.modalOptions.activeComponent);
      const componentRef = this.modalHost.viewContainerRef.createComponent(componentFactory);
    }
  }
  onClosing(): void {
    this.modalHost.viewContainerRef.clear();
  }

}
