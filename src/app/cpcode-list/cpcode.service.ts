import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CpCode } from './cpcode.model';

@Injectable({
  providedIn: 'root'
})
export class CpcodeService {
  private baseUrl = '/api/cpcodes';

  constructor(private http: HttpClient) {}

  getAllCpCodes(): Observable<CpCode[]> {
    return this.http.get<CpCode[]>(this.baseUrl);
  }

  getCpCode(cpcodeId: string): Observable<CpCode> {
    return this.http.get<CpCode>(`${this.baseUrl}/${cpcodeId}`);
  }

  purgeCpCode(cpcodeId: string): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${cpcodeId}/purge`, {});
  }

  invalidateCpCode(cpcodeId: string): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${cpcodeId}/invalidate`, {});
  }
}
