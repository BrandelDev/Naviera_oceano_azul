import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './features/shared/shared.module';
import { HomeComponent } from './features/views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';
import { SkeletonComponent } from './features/layout/skeleton/skeleton.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkeletonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
