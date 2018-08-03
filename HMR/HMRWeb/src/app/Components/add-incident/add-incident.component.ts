import { Component, OnInit, ViewChild } from '@angular/core';
import { IncidentModel } from '../../Models/incident.model';
import { NgQrScannerModule, QrScannerComponent } from 'angular2-qrscanner';
import { DialogModule } from 'primeng/dialog';
import { IncidentService } from '../../Services/incident.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-incident',
  templateUrl: './add-incident.component.html',
  styleUrls: ['./add-incident.component.css']
})
export class AddIncidentComponent implements OnInit {

  constructor(private incidentService: IncidentService, private route: ActivatedRoute,
    private router: Router) { }

  selectedPosition: any;

  display: boolean = false;
  incident: IncidentModel = new IncidentModel();

  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent;

  ngOnInit() {

  }

  closeDialog() {
    this.display = false;
  }

  scan() {
    this.display = true;
    this.qrScannerComponent.getMediaDevices().then(devices => {
      //console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }
      if (videoDevices.length > 0) {
        let choosenDev;
        for (const dev of videoDevices) {
          if (dev.label.includes('front')) {
            choosenDev = dev;
            break;
          }
        }
        if (choosenDev) {
          this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {
          this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
        }
      }
    });

    this.qrScannerComponent.capturedQr.subscribe(result => {
      this.incident.profileCode = result.toString();
      this.display = false;
    });
  }

  onSubmit(valid: boolean) {

    this.incidentService.AddIncident(this.incident).subscribe(
      data => {

        this.router.navigate(['/Incidents']);
      },
      err => {

      });

  }

}
