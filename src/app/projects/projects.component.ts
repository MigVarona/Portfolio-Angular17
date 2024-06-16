import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [
    CommonModule 
  ]
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [];

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects(): void {
    this.backendService.getProjects().subscribe(
      (data) => {
        this.projects = data;
      },
      (error) => {
        console.error('Error al obtener proyectos:', error);
      }
    );
  }
}
