import { Component, OnInit } from '@angular/core';
import { MedicalRecordService } from '../../Services/medical-record.service';
import { ProfileDataModel } from '../../Models/profile-data.model';

@Component({
  selector: 'app-view-medical-record',
  templateUrl: './view-medical-record.component.html',
  styleUrls: ['./view-medical-record.component.css']
})
export class ViewMedicalRecordComponent implements OnInit {
  constructor(private medicalRecordService: MedicalRecordService) { }

  patientId: number = 0;
  patient: ProfileDataModel = new ProfileDataModel();

  ngOnInit() {
    this.patientId = 12345;
    this.medicalRecordService.ViewMedicalRecord(12345).subscribe(
      data => {
        this.patient = <ProfileDataModel>(data);
      },
      err => {

      });

  }

}
