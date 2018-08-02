import { Component, OnInit } from '@angular/core';
import { ProfileDataModel } from '../../Models/profile-data.model';
import { MedicalRecordService } from '../../Services/medical-record.service';

@Component({
  selector: 'app-list-medical-records',
  templateUrl: './list-medical-records.component.html',
  styleUrls: ['./list-medical-records.component.css']
})
export class ListMedicalRecordsComponent implements OnInit {

  constructor(private medicalRecordService: MedicalRecordService) { }

  cols: any[] = [

    { field: 'FullName', header: 'FullName' },
    { field: 'Gender', header: 'Gender' },
    { field: 'Nationality', header: 'Nationality' },
    { field: 'PasportNumber', header: 'Pasport Number' },
    { field: 'Age', header: 'Age' }
  ];

  patientId: number = 0;
  patients: ProfileDataModel[] = [];

  ngOnInit() {

    //medicalRecordService
    this.medicalRecordService.ListMedicalRecord().subscribe(
      data => {
        this.patients = <ProfileDataModel[]>(data);
      },
      err => {


      });

  }
}
