import { Component, OnInit } from '@angular/core';
import { ProfileDataModel } from '../../Models/profile-data.model';

@Component({
  selector: 'app-add-medical-record',
  templateUrl: './add-medical-record.component.html',
  styleUrls: ['./add-medical-record.component.css']
})
export class AddMedicalRecordComponent implements OnInit {

  patientId: number = 0;
  patient: ProfileDataModel = new ProfileDataModel();

  constructor() { }

  ngOnInit() {
  }

}
