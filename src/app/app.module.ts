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
import { FullArticleComponent } from './full-article/full-article.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import {DropdownModule} from "ngx-dropdown";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { InfoComponent } from './info/info.component';

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
    FullArticleComponent,
    InfoComponent,
    // EventModel
  ],
  imports: [
    DropdownModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
