import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import emailjs from '@emailjs/browser';
import { ContactUsComponent } from './contact-us/contact-us.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactUsComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}
