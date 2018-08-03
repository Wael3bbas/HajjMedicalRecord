import { Injectable } from '@angular/core';
import { IncidentModel } from '../Models/incident.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IncidentService {

  constructor(private httpClient: HttpClient) {
  }

  public AddIncident(incident: IncidentModel) {
    return this.httpClient.post<object>(`${environment.ApiUrl}/Incident`, incident);
  }

  public ListIncidents() {
    return this.httpClient.get<IncidentModel[]>(`${environment.ApiUrl}/Incident/`);
  }

}
