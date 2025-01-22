import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-principal',
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {
  data:any[]=[]
  condicional = true
  nombre = 'Jose Gabriel'
  constructor(private Miservicio: AuthService) { }

  ngOnInit() {
    this.Miservicio.getRickAndMorty().subscribe((respuesta: any) => {
      console.log(respuesta)
      this.data = respuesta.results[0]
    })
  }
}
