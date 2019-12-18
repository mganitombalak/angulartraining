import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';

@Component({
  selector: 'app-grid-cell',
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.css']
})
export class GridCellComponent implements AgRendererComponent {
  private params: any;
  refresh(params: any): boolean {
    return false;
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }
  
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    this.params = params;
  }

  invokeEdit(): void {
    this.params.context.componentParent.onEditClicked(this.params.data);
  }
  invokeDelete(): void {
    this.params.context.componentParent.onDeleteClicked(this.params.data);
  }
  invokeInfo(): void {
    this.params.context.componentParent.onInfoClicked(this.params.data);
  }
}