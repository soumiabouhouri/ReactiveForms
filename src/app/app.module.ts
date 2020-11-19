import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import {PostService} from './posts/post.service';
import { HeroesComponent } from './heroes/heroes.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import {GithubFollowersService} from './github-followers/github-followers.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component'; // CLI imports router

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'followers', component: GithubFollowersComponent },
  { path: 'profile/:id', component: ProfileComponent }, // to display smtg dynamically
  { path: '**', component: NotFoundComponent }, // the ** represents every url
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    PostsComponent,
    HeroesComponent,
    GithubFollowersComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostService, GithubFollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
