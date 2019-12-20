import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';


const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: DashboardComponent },
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: 'category', canActivate: [AuthGuard], loadChildren: './modules/category/category.module#CategoryModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
