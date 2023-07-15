import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import IUser from '../interfaces/IUser';
import IUserRegister from '../interfaces/IUserRegister';
import { Observable } from 'rxjs';
import IInfluencer from '../interfaces/IInfluencer';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3001'

  constructor(private http: HttpClient) { }

  Login(user: IUser): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user)
  }

  Register(user: IUserRegister): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/register`, user)
  }

  GetRole(token: string): Observable<any> {
    const headers = new HttpHeaders().set("Authorization", token)
    return this.http.get(`${this.apiUrl}/login/role`, { headers })
  }

  GetInfluencers(token: string): Observable<any> {
    const headers = new HttpHeaders().set("Authorization", token)
    return this.http.get(`${this.apiUrl}/influencers`, { headers })
  }

  GetInlfuencerById(token: string, id: number): Observable<any> {
    const headers = new HttpHeaders().set("Authorization", token)
    return this.http.get(`${this.apiUrl}/influencers/${id}`, { headers })
  }

  Delete(id: number, token: string): Observable<any> {
    const headers = new HttpHeaders().set("Authorization", token)
    return this.http.delete(`${this.apiUrl}/influencers/delete/${id}`, { headers })
  }

  Edit(token: string, id:number, body: IInfluencer): Observable<any> {
    const headers = new HttpHeaders().set("Authorization", token)
    return this.http.put(`${this.apiUrl}/influencers/update/${id}`, body, { headers })
  }
}
