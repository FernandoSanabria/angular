// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
// export class AppRoutingModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GirlsComponent }      from './girls/girls.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { GirlDetailComponent }  from './girl-detail/girl-detail.component';

const routes: Routes = [
  { path: 'girls', component: GirlsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detalle/:id', component: GirlDetailComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}

