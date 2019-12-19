import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { HoverDirective } from './core/directives/hover.directive';
import { DropdownMenuDirective } from './core/directives/dropdown-menu.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/interceptors/token-interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ModalHostDirective } from './core/directives/modal-host.directive';
import { ArrayCheckPipe } from './core/pipes/array-check.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideMenuComponent,
    HoverDirective,
    DropdownMenuDirective,
    DashboardComponent,
    ArrayCheckPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
