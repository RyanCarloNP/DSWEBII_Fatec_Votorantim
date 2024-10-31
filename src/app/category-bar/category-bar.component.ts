import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './category-bar.component.html',
  styleUrl: './category-bar.component.css'
})
export class CategoryBarComponent {
  categories: Category[] = [
    { id: 1, title: 'Cursos de TI', image: 'https://as1.ftcdn.net/v2/jpg/05/64/07/62/1000_F_564076251_5PqF6STIgMymtdv9pFsEFJ8tUfaabnm9.jpg' },
    { id: 2, title: 'Cursos Juridíco', image: 'https://as1.ftcdn.net/v2/jpg/09/93/80/88/1000_F_993808849_dYkecagrTNv5Q7rUs2s9qsJymHqPBZmD.jpg' },
    { id: 3, title: 'Cursos de Gastronomia', image: 'https://t4.ftcdn.net/jpg/09/71/79/83/240_F_971798308_nXXFIJ0RMZj94NB2ioFiphbriLUdwb9J.jpg' },
    { id: 4, title: 'Cursos de Administração', image: 'https://t3.ftcdn.net/jpg/04/93/38/88/240_F_493388825_FhdU8adxPHL2hFVftoCJ1fqi5PloPgWz.jpg' },
    { id: 5, title: 'Cursos de Automação Industrial', image: 'https://t4.ftcdn.net/jpg/07/85/41/43/240_F_785414353_jkzg2rMC2yJA3TmQcVjwLGP6WDqf3yzc.jpg' },
  ]
}
