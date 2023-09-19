import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "https://127.0.0.1:8000/api/login_check"

  constructor(
    private http: HttpClient
  ) { }

  login(credentials:any){
    return this.http.post<Credential>(this.url, credentials)
  }
}
