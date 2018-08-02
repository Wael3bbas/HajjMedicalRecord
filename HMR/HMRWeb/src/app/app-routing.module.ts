import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMedicalRecordComponent } from './Components/view-medical-record/view-medical-record.component';
import { ListMedicalRecordsComponent } from './Components/list-medical-records/list-medical-records.component';
import { AddMedicalRecordComponent } from './Components/add-medical-record/add-medical-record.component';
import { LandingComponent } from './Components/landing/landing.component';
import { AddIncidentComponent } from './Components/add-incident/add-incident.component';

const routes: Routes = [

    { path: '', component: LandingComponent },
    { path: 'Search', component: ListMedicalRecordsComponent, data: { breadcrumb: 'Search' } },
    { path: 'View', component: ViewMedicalRecordComponent, data: { breadcrumb: 'View' } },
    { path: 'Add', component: AddMedicalRecordComponent, data: { breadcrumb: 'Add' } },
    { path: 'AddIncident', component: AddIncidentComponent, data: { breadcrumb: 'Add' } },

    // {
    //     path: 'External', children: [
    //         { path: 'ViewPayroll', component: ViewPayrollExternalComponent, data: { breadcrumb: 'View Payroll External' } },
    //     ]
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
