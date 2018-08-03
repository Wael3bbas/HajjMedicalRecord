import { Component, OnInit } from '@angular/core';
import { IncidentModel } from '../../Models/incident.model';
import { IncidentService } from '../../Services/incident.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-incident',
  templateUrl: './list-incident.component.html',
  styleUrls: ['./list-incident.component.css']
})
export class ListIncidentComponent implements OnInit {

  constructor(private incidentService: IncidentService, private route: ActivatedRoute,
    private router: Router) { }

  incidents: IncidentModel[] = [];
  display: boolean = false;
  description: string = "";

  closeDialog() {
    this.display = false;
    this.description = "";
  }

  ngOnInit() {
    this.incidentService.ListIncidents().subscribe(
      data => {
        this.incidents = <IncidentModel[]>(data);
      },
      err => {

      });
  }

  search(hajjId) {
    this.router.navigate(['/View', hajjId]);
  }

  more(desc: string) {
    this.description = desc;
    this.display = true;
  }

}
