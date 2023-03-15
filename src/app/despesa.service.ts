import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Despesas } from './Despesas';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  url = 'https://localhost:44351/api/Despesas/IncluirDespesas'

  constructor(private http: HttpClient) { }

  PegarTodos(): Observable<Despesas[]>{
    return this.http.get<Despesas[]>(this.url);
  }

  IncluirDespesa(despesa: Despesas) : Observable<any>{
    return this.http.post<Despesas>(this.url, despesa, httpOptions)
    alert('DEU CERTO');
  }

}
