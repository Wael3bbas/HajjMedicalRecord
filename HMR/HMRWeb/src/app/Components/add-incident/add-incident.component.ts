import { Component, OnInit } from '@angular/core';
import { IncidentModel } from '../../Models/incident.model';

@Component({
  selector: 'app-add-incident',
  templateUrl: './add-incident.component.html',
  styleUrls: ['./add-incident.component.css']
})
export class AddIncidentComponent implements OnInit {

  constructor() { }

  incident = new IncidentModel();

  ngOnInit() {
  }

}
