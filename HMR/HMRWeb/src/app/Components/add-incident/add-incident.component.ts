import { Component, OnInit } from '@angular/core';
import { IncidentModel } from '../../Models/incident.model';

@Component({
  selector: 'app-add-incident',
  templateUrl: './add-incident.component.html',
  styleUrls: ['./add-incident.component.css']
})
export class AddIncidentComponent implements OnInit {

  constructor() { }

  selectedPosition: any;

  incident: IncidentModel = new IncidentModel();

  ngOnInit() {
  }


}
