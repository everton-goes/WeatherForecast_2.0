import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrevisaoTempoService {

  cidadePrevisaoUrl = 'https://api.openweathermap.org/data/2.5/weather';

  previsaoTempoUrl = 'https://api.openweathermap.org/data/2.5/forecast';

  apiKey = 'eb8b1a9405e659b2ffc78f0a520b1a46';

  constructor(private http: HttpClient) { }

  public getCidade(cidade: string) {
    return this.http.get(`${this.cidadePrevisaoUrl}?q=${cidade}&appid=${this.apiKey}`);
  }

  public getPrevisaoTempo(id: number) {
    return this.http.get(`${this.previsaoTempoUrl}?id=${id}&appid=${this.apiKey}&lang=pt_br&units=metric`);
  }

}
