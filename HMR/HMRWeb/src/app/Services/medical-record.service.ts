import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfileDataModel } from '../Models/profile-data.model';
import { environment } from '../../environments/environment';

@Injectable()
export class MedicalRecordService {

  constructor(private httpClient: HttpClient) {
  }

  public ViewMedicalRecord(patientId: number) {

    return this.httpClient.get<ProfileDataModel>(`${environment.ApiUrl}/MedicalRecord/${patientId}`);
  }

  public ListMedicalRecord() {

    return this.httpClient.get<ProfileDataModel[]>(`${environment.ApiUrl}/MedicalRecord/`);
  }


}
