import { PrevisaoTempoService } from 'src/app/services/previsao-tempo.service';
import { CidadeService } from 'src/app/services/cidade.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-previsao-tempo',
  templateUrl: './previsao-tempo.component.html',
  styleUrls: ['./previsao-tempo.component.css']
})
export class PrevisaoTempoComponent implements OnInit {

  id: number;
  cidade: any = [];
  previsoes: any = [];

  constructor(
    private route: ActivatedRoute,
    private cidadeService: CidadeService,
    private previsaoTempoService: PrevisaoTempoService
    ) {
    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit() {
    this.getCidade();
  }

  getCidade() {
    this.cidadeService.getCidade(this.id).subscribe(
      data => {
        this.cidade = data;
        this.preenchePrevisao(this.cidade);
      }, error => {
        console.error('Erro ao preencher titulo da previsao: ', error);
      }
    );
  }

  preenchePrevisao(cidade: any) {
    this.previsaoTempoService.getPrevisaoTempo(cidade.idCidade).subscribe(
      data => {
        this.previsoes = data;
      }, error => {
        console.error('Erro ao preencher previsao: ', error);
      }
    );
  }

}
