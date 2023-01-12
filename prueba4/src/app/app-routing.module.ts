import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {
    path: 'women',
    component: WomenComponent,
  },
  { path: '', redirectTo: '/women', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
