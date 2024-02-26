import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/views/home/home.component';
import { TicketsBuyComponent } from './features/shared/tickets-buy/tickets-buy.component';
import { SkeletonComponent } from './features/layout/skeleton/skeleton.component';
import { LoginComponent } from './features/shared/login/login.component';

const routes: Routes = [
  {
    path: '', component: SkeletonComponent,
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: "full"
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'login/compra-tiquetes', component: TicketsBuyComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
