import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://backflask.onrender.com/send-email';

  constructor(private http: HttpClient) {}

  sendEmail(name: string, email: string, message: string) {
    const body = { name, email, message };
    return this.http.post(this.apiUrl, body);
  }
}