import { Component } from '@angular/core';
import { EmailService } from '../email.service';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  imports: [
    FormsModule
  ]
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private emailService: EmailService) {}

  sendEmail() {
    if (!this.name || !this.email || !this.message) {
      console.error('Please fill out all fields');
      return;
    }

    this.emailService.sendEmail(this.name, this.email, this.message)
      .subscribe(
        response => {
          console.log('Email sent successfully', response);
          // Aquí podrías agregar lógica adicional si necesitas manejar la respuesta
        },
        error => {
          console.error('Error sending email', error);
          // Manejar el error aquí si es necesario
        }
      );

    // Limpiar los campos después del envío
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
