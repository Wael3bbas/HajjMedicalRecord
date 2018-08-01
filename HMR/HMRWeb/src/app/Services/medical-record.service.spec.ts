import { TestBed, inject } from '@angular/core/testing';

import { MedicalRecordService } from './medical-record.service';

describe('MedicalRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicalRecordService]
    });
  });

  it('should be created', inject([MedicalRecordService], (service: MedicalRecordService) => {
    expect(service).toBeTruthy();
  }));
});
