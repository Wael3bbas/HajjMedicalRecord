import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfileDataModel } from '../Models/profile-data.model';
import { environment } from '../../environments/environment';

@Injectable()
export class MedicalRecordService {

  constructor(private httpClient: HttpClient) {
  }

  public ViewMedicalRecord(hajjId: string) {

    return this.httpClient.get<ProfileDataModel>(`${environment.ApiUrl}/MedicalRecord/${hajjId}`);
  }

  public ListMedicalRecord() {

    return this.httpClient.get<ProfileDataModel[]>(`${environment.ApiUrl}/MedicalRecord/`);
  }


}
