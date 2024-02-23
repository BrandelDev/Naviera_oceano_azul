import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/views/home/home.component';
import { TicketsBuyComponent } from './features/shared/tickets-buy/tickets-buy.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'compra-tiquetes', component: TicketsBuyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
