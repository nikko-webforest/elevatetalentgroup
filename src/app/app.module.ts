import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './elements/header/header.component';
import { PrimaryBtnComponent } from './elements/primary-btn/primary-btn.component';
import { SectionNavigatorComponent } from './elements/section-navigator/section-navigator.component';
import { FooterComponent } from './elements/footer/footer.component';

import { BannerComponent } from './sections/banner/banner.component';
import { CollabComponent } from './sections/collab/collab.component';
import { OurCreatorsComponent } from './sections/our-creators/our-creators.component';
import { StatisticsComponent } from './sections/statistics/statistics.component';
import { LatestComponent } from './sections/latest/latest.component';
import { ProcessComponent } from './sections/process/process.component';
import { FullServiceComponent } from './sections/full-service/full-service.component';
import { ServicesAndCapabilitiesComponent } from './sections/services-and-capabilities/services-and-capabilities.component';
import { KeyToSuccessComponent } from './sections/key-to-success/key-to-success.component';
import { PartnersOnlyComponent } from './sections/partners-only/partners-only.component';

import { ContactUsComponent } from './sections/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    PrimaryBtnComponent,
    SectionNavigatorComponent,
    FooterComponent,

    BannerComponent,
    CollabComponent,
    OurCreatorsComponent,
    StatisticsComponent,
    LatestComponent,
    ProcessComponent,
    FullServiceComponent,
    ServicesAndCapabilitiesComponent,
    KeyToSuccessComponent,
    PartnersOnlyComponent,

    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
