import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TicketsBuyComponent } from './tickets-buy/tickets-buy.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    NavbarComponent,
    TicketsBuyComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot()
  ],
  exports :[
  
    NavbarComponent
  ]
})
export class SharedModule { }
