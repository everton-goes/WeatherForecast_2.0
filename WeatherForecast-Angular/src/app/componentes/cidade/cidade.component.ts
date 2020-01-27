import { FormGroup, FormBuilder} from '@angular/forms';
import { CidadeService } from 'src/app/services/cidade.service';
import { AlertsService } from '../../shared/services/alerts.service';
import { PrevisaoTempoService } from 'src/app/services/previsao-tempo.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  infoCidades: {};
  cidade: string;
  cidades: any = [];
  idCidadeSelecionada: number;
  color: string;
  form: FormGroup;

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal', { static: true }) deleteModal;

  constructor(
    private previsaoTempoService: PrevisaoTempoService,
    private alertsService: AlertsService,
    private cidadeService: CidadeService,
    private modalService: BsModalService,
    private fb: FormBuilder
    ) {}

  ngOnInit() {
    this.listarCidades();

    this.form = this.fb.group({
      cidade: ['']
    });
  }

  listarCidades() {
    this.cidadeService.getListaCidades().subscribe(
      data => {
        this.cidades = data;
    }, error => {
        console.error('Erro ao listar cidades: ', error);
      }
    );
  }

  buscaCidade() {
    if (this.cidade === '' || this.cidade === undefined) {
      this.alertsService.alert('danger', 'Obrigatório informar a cidade!');
      this.color = 'red';
    } else {
      this.previsaoTempoService.getCidade(this.cidade).subscribe(
        data => {
          this.salvarCidade(data);
      }, error => {
          this.alertsService.alert('danger', 'Cidade não encontrada!');
          console.error('Erro ao buscar cidade: ', error);
        }
      );
    }
  }

  salvarCidade(dados: any) {
    this.infoCidades = {
      idCidade: dados.id,
      nomeCidade: dados.name,
      siglaPais: dados.sys.country
    };

    this.cidadeService.salvarCidade(this.infoCidades).subscribe(
      data => {
        this.alertsService.alert('success', 'A cidade foi cadastrada com sucesso!');
        this.listarCidades();
        this.color = '';
        this.form.reset(this.cidade = '');
      }, error => {
          if (error.status === 400) {
            this.alertsService.alert('danger', error.error.message);
          } else {
            this.alertsService.alert('danger', 'Erro ao cadastrar a cidade!');
            console.error('Erro ao cadastrar cidade: ', error);
          }
      }
    );
  }

  excluirCidade(id: number) {
    this.idCidadeSelecionada = id;
    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
  }

  confirmarExclusao() {
    this.cidadeService.excluirCidade(this.idCidadeSelecionada).subscribe(
      data => {
        this.alertsService.alert('success', 'A cidade foi excluida com sucesso!');
        this.listarCidades();
        this.deleteModalRef.hide();
      }, error => {
        this.alertsService.alert('danger', 'Não foi possivel excluir a cidade!');
        console.error('Erro ao excluir cidade: ', error);
      }
    );
  }

  recusarExclusao() {
    this.deleteModalRef.hide();
  }

}
