import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public getRickAndMorty(): Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character/?page=19')
  }
}
