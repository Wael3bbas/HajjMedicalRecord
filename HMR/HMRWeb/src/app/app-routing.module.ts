import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMedicalRecordComponent } from './Components/view-medical-record/view-medical-record.component';
import { ListMedicalRecordsComponent } from './Components/list-medical-records/list-medical-records.component';
import { AddMedicalRecordComponent } from './Components/add-medical-record/add-medical-record.component';
import { LandingComponent } from './Components/landing/landing.component';
import { AddIncidentComponent } from './Components/add-incident/add-incident.component';
import { ListIncidentComponent } from './Components/list-incident/list-incident.component';

const routes: Routes = [

    { path: '', component: LandingComponent },
    { path: 'Search', component: ListMedicalRecordsComponent, data: { breadcrumb: 'Search' } },
    { path: 'View/:id', component: ViewMedicalRecordComponent, data: { breadcrumb: 'View' } },
    { path: 'Add', component: AddMedicalRecordComponent, data: { breadcrumb: 'Add' } },
    { path: 'AddIncident', component: AddIncidentComponent, data: { breadcrumb: 'Add' } },
    { path: 'Incidents', component: ListIncidentComponent, data: { breadcrumb: 'Add' } },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
