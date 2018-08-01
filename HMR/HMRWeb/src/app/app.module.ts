import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddMedicalRecordComponent } from './Components/add-medical-record/add-medical-record.component';
import { ViewMedicalRecordComponent } from './Components/view-medical-record/view-medical-record.component';


@NgModule({
  declarations: [
    AppComponent,
    AddMedicalRecordComponent,
    ViewMedicalRecordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
