import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortableInterface } from './portable.interface';

@Injectable({
  providedIn: 'root'
})
export class PortableService {

  constructor(
    private http: HttpClient
  ) { }

  url= "https://127.0.0.1:8000/api/portables";

  getAll(): Observable<PortableInterface[]>{
    return this.http.get<PortableInterface[]>(this.url);
  }
}
