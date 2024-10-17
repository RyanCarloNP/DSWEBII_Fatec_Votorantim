import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Course } from '../models/course';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, RouterLinkActive,RouterLink],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  courses: Course[]=[
    {id: 1, idCategory: 1, title: 'TI - Vivendo em Java', description: 'Primeiros conceitos de Java orientado a objeto', cost: 'R$29,99', image: 'https://miro.medium.com/v2/resize:fit:1200/1*GCu4cNWIU1ElDbY7d4ycZw.png', duration: '40 horas'},
    {id: 2, idCategory: 1, title: 'TI - Respirando Java', description: 'Java avançado orientado a objeto', cost: 'R$39,99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFTdcW2W9NofAWpuWmQZOjY8RTyOLJ6_9AQ&s', duration: '48 horas'},
    {id: 3, idCategory: 1, title: 'TI - Logica de Programação', description: 'Conceitos do basico ao avançado', cost: 'R$49,99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmTNni7M3Hzog2HCP9O9kXVnQLFXHmOdshw&s', duration: '96 horas'},
    {id: 4, idCategory: 1, title: 'TI - Front e Back', description: 'Conceitos basico ao avançado de front-end e back-end', cost: 'R$79,99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJQddXbS9hsEsqDeZPsWsT_ND19Fkypg2lA&s', duration: '128 horas'},
  ]
}
