import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    MovieCardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,FormsModule
  ]
})
export class HomeModule { }
