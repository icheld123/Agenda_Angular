import { Component } from '@angular/core';
import eventos from 'src/assets/csv/eventos.json';

@Component({
  selector: 'app-academicos',
  templateUrl: './academicos.component.html',
  styleUrls: ['./academicos.component.css']
})
export class AcademicosComponent {
 Evento: any = eventos;
}
