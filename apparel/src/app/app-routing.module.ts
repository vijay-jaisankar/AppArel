import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtboardComponent } from './artboard/artboard.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { LookbookComponent } from './lookbook/lookbook.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  { path: 'home', component: LandingComponent },
  { path: 'artboard', component: ArtboardComponent},
  { path: 'lookbook', component: LookbookComponent },
  {path: 'sign-up', component: SignupComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
