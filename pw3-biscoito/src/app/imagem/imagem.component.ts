import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem',
  standalone: false,
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {
  imagemInteira: string = "biscoito.png";
  imagemQuebrada: string = "biscoito-aberto.png";
  imagemAtual: string = this.imagemInteira;
  biscoitoQuebrado: boolean = false;

  quebrarOuRestaurar() {
    this.biscoitoQuebrado = !this.biscoitoQuebrado;
    this.imagemAtual = this.biscoitoQuebrado ? this.imagemQuebrada : this.imagemInteira;
  }
}
