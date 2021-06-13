import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'billionaires', loadChildren: () => import('./billionaires/billionaires.module').then(m => m.BillionairesModule)},
  { path: 'happiness', loadChildren: () => import('./happiness/happiness.module').then(m => m.HappinessModule)},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
