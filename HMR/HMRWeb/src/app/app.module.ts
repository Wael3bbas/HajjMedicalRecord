import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';


import { AppComponent } from './app.component';
import { AddMedicalRecordComponent } from './Components/add-medical-record/add-medical-record.component';
import { ViewMedicalRecordComponent } from './Components/view-medical-record/view-medical-record.component';
import { ListMedicalRecordsComponent } from './Components/list-medical-records/list-medical-records.component';
import { AppRoutingModule } from './app-routing.module';
import { MedicalRecordService } from './Services/medical-record.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './Components/footer/footer.component';
import { LandingComponent } from './Components/landing/landing.component';
import { TopNavbarComponent } from './Components/top-navbar/top-navbar.component'; 



@NgModule({
  declarations: [
    AppComponent,
    AddMedicalRecordComponent,
    ViewMedicalRecordComponent,
    ListMedicalRecordsComponent,
    FooterComponent,
    LandingComponent,
    TopNavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TableModule
  ],
  providers: [
    MedicalRecordService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
