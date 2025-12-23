import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TelemetryService } from './telemetry.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  deviceId = crypto.randomUUID();
  engineRPM = 1500;
  fuelLevelPercentage = 50;
  latitude = 45.815;
  longitude = 15.981;

  latestTelemetry: any;
  error?: string;

  constructor(
    private telemetryService: TelemetryService,
    private cd: ChangeDetectorRef
  ) {}

  sendTelemetry() {
    this.error = undefined;

    this.telemetryService.create({
      deviceId: this.deviceId,
      timestamp: new Date().toISOString(),
      engineRPM: this.engineRPM,
      fuelLevelPercentage: this.fuelLevelPercentage,
      latitude: this.latitude,
      longitude: this.longitude
    }).subscribe({
      next: () => alert('Telemetry sent successfully'),
      error: err => {
        if (err.status === 400 && err.error?.errors) {
          this.error = Object.values(err.error.errors)
            .flat()
            .join(' ');
        } else {
          this.error = 'Unexpected server error.';
        }
        this.cd.detectChanges();
      }
    });
  }

  loadLatest() {
    this.error = undefined;
    this.latestTelemetry = undefined;

    this.telemetryService.getLatest(this.deviceId).subscribe({
      next: res => {
        this.latestTelemetry = res;
        this.cd.detectChanges();
      },
      error: err => {
        if (err.status === 404) {
          this.error = `No telemetry found for device ${this.deviceId}`;
        } else if (err.status === 400) {
          this.error = 'Invalid Device ID format';
        } else {
          this.error = 'Failed to load telemetry data';
        }
        this.cd.detectChanges();
      }
    });
  }
}
