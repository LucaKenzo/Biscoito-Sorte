import { Component } from '@angular/core';

@Component({
  selector: 'app-frase',
  standalone: false,
  templateUrl: './frase.component.html',
  styleUrl: './frase.component.css'
})
export class FraseComponent {
  frases : string[] = [
    "Grandes jornadas começam com um pequeno passo.",
    "Oportunidades brilham mais para aqueles que estão prontos para vê-las.",
    "A paciência e a perseverança transformam sonhos em realidade.",
    "O segredo do sucesso está em nunca parar de aprender.",
    "A sorte favorece os que ousam acreditar em si mesmos.",
    "Cada desafio é uma nova chance de crescer.",
    "Sorrisos abrem portas que força jamais conseguiria.",
    "Hoje é o primeiro dia do resto da sua melhor história.",
    "O vento pode mudar, mas sua determinação guia seu caminho.",
    "Você já tem tudo o que precisa para vencer só precisa agir.",
  ];
  
  fraseAtual: string = "";

  constructor() {
    this.gerarFrase(); // Gera uma frase aleatória ao carregar a página
  }

  gerarFrase() {
    const indice = Math.floor(Math.random() * this.frases.length);
    this.fraseAtual = this.frases[indice];
  }
}
