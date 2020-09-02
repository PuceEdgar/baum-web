import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ContactService } from './contact/contact.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';

import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Tab } from './info/tab';
import { Tabs } from './info/tabs';

import { AboutComponent } from './info/about.component';
import { WordComponent } from './info/word.component';


import { CertificatesComponent } from './certificates/certificates.component';
import { BuildingComponent } from './service/building.component';
import { LeisureComponent } from './service/leisure.component';
import { TransportationComponent } from './service/transportation.component';
import { VisionComponent } from './info/vision.component';
import { InfoKorComponent } from './info-kor/info-kor.component';
import { AboutKorComponent } from './info-kor/about-kor.component';
import { WordKorComponent } from './info-kor/word-kor.component';
import { VisionKorComponent } from './info-kor/vision-kor.component';
import { ServiceKorComponent } from './service-kor/service-kor.component';
import { BuildingKorComponent } from './service-kor/building-kor.component';
import { LeisureKorComponent } from './service-kor/leisure-kor.component';
import { TransportationKorComponent } from './service-kor/transportation-kor.component';
import { FaqKorComponent } from './faq-kor/faq-kor.component';
import { ContactKorComponent } from './contact-kor/contact-kor.component';
import { PetsKorComponent } from './service-kor/pets-kor.component';
import { PetsComponent } from './service/pets.component';
import { ProductsComponent } from './products/products.component';
import { ProductsKorComponent } from './products-kor/products-kor.component';
import { InstalledComponent } from './installed/installed.component';
import { InstalledKorComponent } from './installed-kor/installed-kor.component';
import { PetHospitalComponent } from './installed/pet-hospital.component';
import { PetHospitalKorComponent } from './installed-kor/pet-hospital-kor.component';
import { GolfKorComponent } from './installed-kor/golf-kor.component';
import { GolfComponent } from './installed/golf.component';
import { CertificatesKorComponent } from './certificates-kor/certificates-kor.component';

import { CertKorComponent } from './certificates-kor/cert-kor.component';
import { WhyKorComponent } from './certificates-kor/why-kor.component';
import { WhyComponent } from './certificates/why.component';
import { CertComponent } from './certificates/cert.component';
import { MadeKorComponent } from './certificates-kor/made-kor.component';
import { MadeComponent } from './certificates/made.component';



@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    
    ServiceComponent,
    ContactComponent,
    FaqComponent,    
    HomeComponent,
    NavigationComponent,
    Tab,
    Tabs,
    AboutComponent,
    WordComponent,
    
    
    CertificatesComponent,
    BuildingComponent,
    LeisureComponent,
    TransportationComponent,
    VisionComponent,
    InfoKorComponent,
    AboutKorComponent,
    WordKorComponent,
    VisionKorComponent,
    ServiceKorComponent,
    BuildingKorComponent,
    LeisureKorComponent,
    TransportationKorComponent,
    FaqKorComponent,
    ContactKorComponent,
    PetsKorComponent,
    PetsComponent,
    ProductsComponent,
    ProductsKorComponent,
    InstalledComponent,
    InstalledKorComponent,
    PetHospitalComponent,
    PetHospitalKorComponent,
    GolfKorComponent,
    GolfComponent,
    CertificatesKorComponent,
    
    CertKorComponent,
    WhyKorComponent,
    WhyComponent,
    CertComponent,
    MadeKorComponent,
    MadeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [ContactService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
