import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomNavbarComponent } from './components/custom-navbar/custom-navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectListPageComponent } from './pages/project-list-page/project-list-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomNavbarComponent,
    HomePageComponent,
    ProjectListPageComponent,
    ContactPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
