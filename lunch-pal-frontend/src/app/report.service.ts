import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface Report {
  reporter: string;
  reportee: string;
  date: Date;
  comment: string;
  id_reportee: string;
  blocked: boolean;
}

@Injectable({ providedIn: 'root' })
export class ReportService {
  private url = 'http://localhost:3000/reports';
  // private url = 'https://httpdump.io/grtt4';

  constructor( private http: HttpClient ) { }

  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this.url);
  }

  blockUser(report: Report): Observable<any> {
    return this.http.post<any>(this.url, report.id_reportee, httpOptions);
  }
}
