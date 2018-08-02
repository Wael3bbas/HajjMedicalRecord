import { Component, OnInit } from '@angular/core';
import { IncidentModel } from '../../Models/incident.model';

@Component({
  selector: 'app-list-incident',
  templateUrl: './list-incident.component.html',
  styleUrls: ['./list-incident.component.css']
})
export class ListIncidentComponent implements OnInit {

  constructor() { }

  incidents: IncidentModel[] = [];

  ngOnInit() {
  }

}
