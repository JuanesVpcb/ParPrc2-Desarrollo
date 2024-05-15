import { Component, Input } from '@angular/core';
import { Pais } from '../pais';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-pais-detail',
  templateUrl: './pais-detail.component.html',
  styleUrl: './pais-detail.component.css'
})
export class PaisDetailComponent {
  paisId!: string;
  @Input() selectedPais!: Pais;

  constructor(
    private paisService: PaisService
  ) {}

  getPais(){
    this.paisService.getPais(this.paisId).subscribe((newPais) => {
      this.selectedPais = newPais;
    });
  }

  ngOnInit() {
    
  }
}
