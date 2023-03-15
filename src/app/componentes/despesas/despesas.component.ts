import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Despesas } from 'src/app/Despesas';
import { DespesaService } from 'src/app/despesa.service';
import { AlertModule } from 'src/app/_alert';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent implements OnInit {

  formulario: any;
  tituloFormulario: string;
  id: 1

  constructor(private despesaservice: DespesaService) {}

  ngOnInit(): void {

    this.tituloFormulario = 'Nova Despesa';
    this.formulario = new FormGroup({
      nomeDespesa: new FormControl(null),
      vlrDespesa: new FormControl(null),
      dtDespesa: new FormControl(null),
      dtVencimento: new FormControl(null)
    });
  }

  EnviarFormulario() : void {
    const despesa : Despesas = this.formulario.value;
    this.despesaservice.IncluirDespesa(despesa).subscribe()
      alert('Despesa adicionada !')
    };

  }

