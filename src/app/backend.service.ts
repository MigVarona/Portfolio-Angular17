// backend.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseUrl = 'https://backflask.adaptable.app'; 

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/projects`)
      .pipe(
        catchError(this.handleError) 
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('Error en la solicitud:', error);
    return throwError(error); 
  }
}
