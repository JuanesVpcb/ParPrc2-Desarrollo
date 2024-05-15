import { Component } from '@angular/core';
import { Pais } from '../pais';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrl: './pais-list.component.css'
})
export class PaisListComponent {
  paises: Array<Pais> = [];

  selected: Boolean = false;
  selectedPais!: Pais;

  constructor(private paisService: PaisService) { }

  getPaises(): void {
    this.paisService.getPaises().subscribe((paises) => {
      this.paises = paises;
    });
  }

  ngOnInit(){
    this.getPaises();
  }

  onSelected(pais: Pais){
    this.selected = true;
    this.selectedPais = pais;
  }
}