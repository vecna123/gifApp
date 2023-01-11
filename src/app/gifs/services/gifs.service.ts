import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsAppResponse } from '../interface/gifs';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('Historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('Gifs')!) || [];
  }
  private apikey: string = 'd6a7UOAFJdtjNmK2u9oPzQ1Yzys6VmyN';
  private servicioUrl:string = 'https://api.giphy.com/v1/gifs'
  private _historial: string[] = [];
  public resultados: Gif[] = [];
  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();

    if (query.trim().length === 0) {
      return;
    }
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('Historial', JSON.stringify(this._historial));

    }
    const params = new HttpParams()
    .set('api_key', this.apikey)
    .set('limit', '10')
    .set('q', query);

    this.http
      .get<GifsAppResponse>(
        `${this.servicioUrl}/search`,{params})
      .subscribe((response) => {
    
        this.resultados = response.data;
        localStorage.setItem('Gifs', JSON.stringify(this.resultados));
      });
  }
}
