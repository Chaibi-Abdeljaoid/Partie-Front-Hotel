import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private baseUrl = 'http://localhost:8080/api/v1/demandes';

  constructor(private http: HttpClient) { }

  getDemande(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDemande(demande: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, demande);
  }

  updateDemande(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteDemande(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getDemandesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
