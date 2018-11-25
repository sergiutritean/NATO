import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { ProfileComponent } from './home/header/profile/profile.component';
import { FeedComponent } from './home/feed/feed.component';
import { EventComponent } from './home/feed/event/event.component';
import { LoginComponent } from "./login/login.component";
import  { RegisterComponent } from "./register/register.component";
import {EventModel} from "../assets/event.model";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent,
    FeedComponent,
    EventComponent,
    LoginComponent,
    RegisterComponent,
    // EventModel
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
