import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';

export interface TelemetryCreateDto {
  deviceId: string;
  timestamp: string;
  engineRPM: number;
  fuelLevelPercentage: number;
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root'
})
export class TelemetryService {
  private readonly apiUrl = 'http://localhost:5000/api/v1/telemetry';

  constructor(private http: HttpClient) {}


  create(dto: TelemetryCreateDto): Observable<void> {
    return this.http.post<void>(this.apiUrl, dto).pipe(
      catchError(err => {
        return throwError(() => err);
      })
    );
  }

  getLatest(deviceId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${deviceId}/latest`);
  }
}
