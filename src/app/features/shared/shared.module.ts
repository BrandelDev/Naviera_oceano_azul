import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TicketsBuyComponent } from './tickets-buy/tickets-buy.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    NavbarComponent,
    TicketsBuyComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    TabsModule.forRoot()
  ],
  exports :[
    NavbarComponent,
    LoginComponent,
  ]
})
export class SharedModule { }
