import { Component } from '@angular/core';
import { EmailService } from '../email.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],  // Asegúrate de incluir CommonModule aquí
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  responseMessage: string = '';
  isSuccess: boolean = true;

  constructor(private emailService: EmailService) {}

  sendEmail() {
    this.emailService.sendEmail(this.name, this.email, this.message)
      .subscribe(
        response => {
          this.responseMessage = 'Email sent successfully';
          this.isSuccess = true;
          console.log('Email sent successfully', response);
          this.resetForm();  // Restablecer el formulario después de un envío exitoso
        },
        error => {
          this.responseMessage = 'Error sending email';
          this.isSuccess = false;
          console.error('Error sending email', error);
        }
      );
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
