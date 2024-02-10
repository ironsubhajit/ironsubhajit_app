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
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { CustomTextComponent } from './components/custom-text/custom-text.component';
import { RactCardComponent } from './components/ract-card/ract-card.component';
import { SquareCardComponent } from './components/square-card/square-card.component';
import { CustomCaroselComponent } from './components/custom-carosel/custom-carosel.component';

// primeng modules
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ScheduleMeetingBtnComponent } from './components/schedule-meeting-btn/schedule-meeting-btn.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputTextModule } from 'primeng/inputtext';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomTextAreaComponent } from './components/custom-text-area/custom-text-area.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';

// Material modules
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const primengModules = [CarouselModule, TagModule, ButtonModule, InputTextModule];
const matModules = [MatButtonModule, MatProgressSpinnerModule];

@NgModule({
  declarations: [
    AppComponent,
    CustomNavbarComponent,
    HomePageComponent,
    ProjectListPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    PageNotFoundComponent,
    ProjectCardComponent,
    ProjectDetailComponent,
    CustomTextComponent,
    RactCardComponent,
    SquareCardComponent,
    CustomCaroselComponent,
    ScheduleMeetingBtnComponent,
    FooterComponent,
    CustomInputComponent,
    CustomTextAreaComponent,
    CustomButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ...primengModules,
    ...matModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
