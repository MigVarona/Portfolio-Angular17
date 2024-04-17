import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import emailjs from '@emailjs/browser';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactUsComponent, HeaderComponent, AboutComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}
