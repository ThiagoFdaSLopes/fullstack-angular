import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import IUser from '../interfaces/IUser';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3001'

  constructor(private http: HttpClient) { }

  Login(user: IUser): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user)
  }
}
