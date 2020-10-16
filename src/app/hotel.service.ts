import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private baseUrl = 'http://localhost:8080/api/v1/hotels';

  constructor(private http: HttpClient) { }

  getHotel(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createHotel(hotel: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, hotel);
  }

  updateHotel(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteHotel(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getHotelsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
