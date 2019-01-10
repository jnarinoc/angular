import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {

  alerta: string ;
  propiedades: object;
  loading: boolean ;
  constructor() {
    this.alerta = 'alert-danger';
    this.propiedades = {
      danger: true,
      info: false
    };
    this.loading = false;
  }

  ngOnInit() {
  }

  ejecutar () {
    this.loading = true;
    setTimeout( () => this.loading = false , 3000);
  }

}
