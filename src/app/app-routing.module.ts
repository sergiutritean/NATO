import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./home/header/profile/profile.component";
import {FullArticleComponent} from "./full-article/full-article.component";
import { InfoComponent } from "./info/info.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'fullArticle',
    component: FullArticleComponent
  },
  {
    path: 'info',
    component: InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
