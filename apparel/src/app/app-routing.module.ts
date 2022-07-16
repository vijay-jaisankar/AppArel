import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtboardComponent } from './artboard/artboard.component';
import { LandingComponent } from './landing/landing.component';
import { LookbookComponent } from './lookbook/lookbook.component';

const routes: Routes = [

  { path: 'home', component: LandingComponent },
  { path: 'artboard', component: ArtboardComponent},
  { path: 'lookbook', component: LookbookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
