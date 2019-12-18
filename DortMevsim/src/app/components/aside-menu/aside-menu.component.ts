import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Subscription } from 'rxjs';
import { IResponse } from 'src/app/core/models/IResponse';
import { IMenuItem } from 'src/app/core/models/IMenuItem';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css']
})
export class AsideMenuComponent implements AfterViewInit, OnDestroy {
  //private menuServiceSubscription: Subscription;
  model: Array<IMenuItem>;
  constructor(private menuService: MenuService) { }

  ngAfterViewInit(): void {
    // this.menuServiceSubscription = 
    this.model = this.menuService
      .findAll();
    // .subscribe(r => { this.model = r.data; });
  }

  ngOnDestroy(): void {
    // this.menuServiceSubscription.unsubscribe();
  }

}
