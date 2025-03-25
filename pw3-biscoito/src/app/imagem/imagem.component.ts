import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagem',
  standalone: false,
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {
imagemAtual: any;
@Input() biscoitoQuebrado : any;


  imagem="biscoito.png"

quebrar(){
  this.imagem="biscoito-aberto.png"
}

restaurar() {
  this.imagem="biscoito.png"
}
}
