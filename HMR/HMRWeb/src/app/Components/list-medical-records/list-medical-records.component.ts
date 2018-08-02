import { Component, OnInit } from '@angular/core';
import { ProfileDataModel } from '../../Models/profile-data.model';
import { MedicalRecordService } from '../../Services/medical-record.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-list-medical-records',
  templateUrl: './list-medical-records.component.html',
  styleUrls: ['./list-medical-records.component.css']
})
export class ListMedicalRecordsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  hajjId: string = "";
  patients: ProfileDataModel[] = [];

  ngOnInit() {

  }

  search() {
    this.router.navigate(['/View', this.hajjId]);

  }

}
