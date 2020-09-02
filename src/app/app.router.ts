import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { InfoComponent } from './info/info.component';
import { ServiceComponent } from './service/service.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { BuildingComponent } from './service/building.component';
import { LeisureComponent } from './service/leisure.component';
import { TransportationComponent } from './service/transportation.component';
import { PetsComponent } from './service/pets.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ProductsComponent } from './products/products.component';
import { InstalledComponent } from './installed/installed.component';
import { PetHospitalComponent } from './installed/pet-hospital.component';
import { GolfComponent } from './installed/golf.component';

import { InfoKorComponent } from './info-kor/info-kor.component';
import { ServiceKorComponent } from './service-kor/service-kor.component';
import { BuildingKorComponent } from './service-kor/building-kor.component';
import { LeisureKorComponent } from './service-kor/leisure-kor.component';
import { TransportationKorComponent } from './service-kor/transportation-kor.component';
import { PetsKorComponent } from './service-kor/pets-kor.component';
import { FaqKorComponent } from './faq-kor/faq-kor.component';
import { ContactKorComponent } from './contact-kor/contact-kor.component';
import { ProductsKorComponent } from './products-kor/products-kor.component';
import { InstalledKorComponent } from './installed-kor/installed-kor.component';
import { PetHospitalKorComponent } from './installed-kor/pet-hospital-kor.component';
import { GolfKorComponent } from './installed-kor/golf-kor.component';
import { CertificatesKorComponent } from './certificates-kor/certificates-kor.component';

export const router: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'home', component: HomeComponent },
{ path: 'info', component: InfoComponent },
{ path: 'info-kor', component: InfoKorComponent },
{ path: 'service', component: ServiceComponent },
{ path: 'service/building', component: BuildingComponent },
{ path: 'service/shoes', component: LeisureComponent },
{ path: 'service/transportation', component: TransportationComponent },
{ path: 'service/pets', component: PetsComponent },
{ path: 'service-kor', component: ServiceKorComponent },
{ path: 'service-building', component: BuildingComponent },
{ path: 'service-leisure', component: LeisureComponent },
{ path: 'service-transportation', component: TransportationComponent },
{ path: 'service-pets', component: PetsComponent },
{ path: 'service-kor/building-kor', component: BuildingKorComponent },
{ path: 'service-kor/shoes-kor', component: LeisureKorComponent },
{ path: 'service-kor/transportation-kor', component: TransportationKorComponent },
{ path: 'service-kor/pets-kor', component: PetsKorComponent },
{ path: 'service-building-kor', component: BuildingKorComponent },
{ path: 'service-leisure-kor', component: LeisureKorComponent },
{ path: 'service-transportation-kor', component: TransportationKorComponent },
{ path: 'service-pets-kor', component: PetsKorComponent },
{ path: 'products', component: ProductsComponent },
{ path: 'products-kor', component: ProductsKorComponent },
{ path: 'installed', component: InstalledComponent},
{ path: 'installed/golf-club', component: GolfComponent},
{ path: 'installed/pet-hospital', component: PetHospitalComponent },
{ path: 'installed-kor', component: InstalledKorComponent},
{ path: 'installed-kor/golf-club-kor', component: GolfKorComponent},
{ path: 'installed-kor/pet-hospital-kor', component: PetHospitalKorComponent },
{ path: 'certificates', component: CertificatesComponent },
{ path: 'certificates-kor', component: CertificatesKorComponent },
{ path: 'faq', component: FaqComponent },
{ path: 'faq-kor', component: FaqKorComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'contact-kor', component: ContactKorComponent }
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);