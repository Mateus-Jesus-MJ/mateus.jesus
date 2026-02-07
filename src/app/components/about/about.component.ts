import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  anosExperiencia: number = 0;

  ngOnInit(): void {
    const anoInicio = 2019;
    const anoAtual = new Date().getFullYear();
    this.anosExperiencia = anoAtual - anoInicio;
  }
}
