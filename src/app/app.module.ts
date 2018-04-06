import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.router';
import { LoadingModule } from 'ngx-loading';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { LoginComponent, HeaderComponent, NavbarComponent, SidebarComponent, ContentComponent, DashboardComponent } from './components/index';
import { AuthService } from './services/index';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule,
    HttpModule,
    routes
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
