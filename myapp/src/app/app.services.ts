import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Entertainment } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    getData(): Observable<Entertainment[]> {
      return this.http.get<Entertainment[]>('assets/data.json'); // Đường dẫn tới file JSON
    }
}