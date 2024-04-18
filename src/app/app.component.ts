import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { inject } from "@vercel/analytics"

inject();


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactUsComponent, HeaderComponent, AboutComponent, ProjectsComponent, FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}

