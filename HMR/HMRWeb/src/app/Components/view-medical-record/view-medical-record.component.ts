import { Component, OnInit } from '@angular/core';
import { MedicalRecordService } from '../../Services/medical-record.service';
import { ProfileDataModel } from '../../Models/profile-data.model';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-view-medical-record',
  templateUrl: './view-medical-record.component.html',
  styleUrls: ['./view-medical-record.component.css']
})
export class ViewMedicalRecordComponent implements OnInit {
  constructor(private medicalRecordService: MedicalRecordService, private route: ActivatedRoute,
    private router: Router) { }

  hajjId: string = "";
  patient: ProfileDataModel = new ProfileDataModel();

  ngOnInit() {

    this.hajjId = this.route.snapshot.paramMap.get('id') || "12345";

    this.medicalRecordService.ViewMedicalRecord(this.hajjId).subscribe(
      data => {
        this.patient = <ProfileDataModel>(data);
      },
      err => {

      });

  }

}
