import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from './user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "https://127.0.0.1:8000/api/login_check"

  constructor(
    private http: HttpClient
  ) { }

  login(credentials:any): Observable<Token> {
    return this.http.post<Token>(this.url, credentials)
  }
}
