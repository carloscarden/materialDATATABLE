import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';



export class Persona {
  documento: string;
  apellido: string;
  descDistrito: string;
  numDistrito: number;
  // tslint:disable-next-line: variable-name
  tipo_org: string;
  dependencia: number;
  escuela: number;
  reg: string;

}

const personas: Persona[] = [
  {
    documento: '11287541',
    apellido: 'HARISTOY MARIA CRISTINA',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '11287541',
    apellido: 'HARISTOY MARIA CRISTINA0',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '13366011',
    apellido: 'HARISTOY GRISELDA MABEL',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '17827802',
    apellido: 'HARISTOY JUAN JAVIER          ',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '17918472',
    apellido: 'HARISTOY SANTIAGO D',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '17918472',
    apellido: 'HARISTOY SANTIAGO D           ',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '17918472',
    apellido: 'HARISTOY SANTIAGO D 0',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '17918472',
    apellido: 'HARISTOY SANTIAGO D 0',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '17918472',
    apellido: 'HARISTOY SANTIAGO DANIE       ',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '17918472',
    apellido: 'HARISTOY SANTIAGO DANIE       ',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '17918472',
    apellido: 'HARISTOY SANTIAGO DANIEL      ',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '22038519',
    apellido: 'HARISTOY GUSTAVO              ',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '22868542',
    apellido: 'HARISTOY MONICA               ',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '23747181',
    apellido: 'HARISTOY VALERIA              ',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '26526843',
    apellido: 'HARISTOY MARTA                ',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '26526894',
    apellido: 'HARISTOY CINTIA',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '27852380',
    apellido: 'HARISTOY MARCELA',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '27852380',
    apellido: 'HARISTOY MARCELA ADRIANA ',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '27852380',
    apellido: 'HARISTOY MáRCELA',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '28660621',
    apellido: 'HARISTOY ADRIAN ALBERTO',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '32294502',
    apellido: 'HARISTOY TAMARA D',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '36526800',
    apellido: 'HARISTOY LEANDRO              ',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '36526849',
    apellido: 'HARISTOY PALMAZ JOSEFINA      ',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '36526849',
    apellido: 'HARISTOY PALMÁZ JOSEFIN       ',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '36526849',
    apellido: 'HARISTOY PALMÁZ JOSEFINA      ',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  },
  {
    documento: '38362921',
    apellido: 'HARISTOY CRISTIAN D           ',
    descDistrito: null,
    numDistrito: 0,
    tipo_org: null,
    dependencia: 0,
    escuela: 0,
    reg: null
  }
];


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  displayedColumns: string[] =
    ['documento', 'apellido', 'descDistrito',
      'numDistrito', 'tipo_org', 'dependencia',
      'escuela', 'reg'];
  dataSource = new MatTableDataSource<Persona>(personas);
  selection = new SelectionModel<Persona>(false, []);
  personaAbuscar;


  constructor() { }

  ngOnInit() {
  }

  cancelar() {
    console.log(this.selection.selected);
  }


  buscarPersona() {
    console.log(this.selection.selected);

  }


}
