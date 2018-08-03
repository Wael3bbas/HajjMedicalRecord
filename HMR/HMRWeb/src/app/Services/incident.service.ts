import { Injectable } from '@angular/core';
import { IncidentModel } from '../Models/incident.model';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class IncidentService {

  constructor(private httpClient: HttpClient) {
  }

  public AddIncident(hajjId: string) {
    return this.httpClient.get<IncidentModel>(`${environment.ApiUrl}/Incident/${hajjId}`);
  }

  public ListIncidents() {
    return this.httpClient.get<IncidentModel[]>(`${environment.ApiUrl}/Incident/`);
  }

}
