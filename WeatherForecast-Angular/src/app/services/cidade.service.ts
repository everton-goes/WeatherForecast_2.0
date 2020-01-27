import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  cidadesUrl = 'http://localhost:8080/cidades';

  constructor(private http: HttpClient) { }

  getListaCidades(): Observable<any> {
    return this.http.get(`${this.cidadesUrl}`);
  }

  salvarCidade(cidade) {
    return this.http.post(this.cidadesUrl, cidade);
  }

  excluirCidade(id: number) {
    return this.http.delete(`${this.cidadesUrl}/${id}`);
  }

  getCidade(id: number) {
    return this.http.get(`${this.cidadesUrl}/${id}`);
  }

}
