import { Component, OnInit } from '@angular/core';

import { SelectionModel } from '@angular/cdk/collections';

import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Cheque {
  periodo: string;
  documento: string;
  secuencia: string;
  fechaafec: string;
  apellido: string;
  foja: string;
  cargo: string;
  dep: string;
  dis: string;
  tor: string;
  escu: string;
  opag: string;
  dopag: string;
  cdoc: string;
  liquido: string;
  fecafec: string;
  nrocheq: string;
  fpago: string;
  cat: string;
  apart: string;
  item: string;

}

const ELEMENT_DATA: Cheque[] = [
  {
    periodo: '2004/01',
    documento: '23175024',
    secuencia: '6',
    fechaafec: '2004/01',
    apellido: 'CORTEZ MIRIAN',
    foja: '0',
    cargo: '0',
    dep: 'OFICIAL',
    dis: 'MERLO',
    tor: 'ESCUELA PRIMARIA BASICA',
    escu: '70',
    opag: '72',
    dopag: '72 - SDOS TIT 2004 CAJ.',
    cdoc: null,
    liquido: '430.82',
    fecafec: '200401',
    nrocheq: '76729',
    fpago: null,
    cat: 'MG',
    apart: null,
    item: null
  },
  {
    periodo: '2004/01',
    documento: '23175024',
    secuencia: '6',
    fechaafec: '2004/01',
    apellido: 'CORTEZ MIRIAN',
    foja: '0',
    cargo: '0',
    dep: 'OFICIAL',
    dis: 'MERLO               ',
    tor: 'ESCUELA PRIMARIA BASICA',
    escu: '70',
    opag: '145',
    dopag: '145 - INCENTIVO DOCENTE 1ER. SEM. 4TA. CUOTA -CAJERO',
    cdoc: null,
    liquido: '62.64',
    fecafec: '200401',
    nrocheq: '579441',
    fpago: null,
    cat: 'MG',
    apart: null,
    item: null
  },
  {
    periodo: '2004/02',
    documento: '23175024',
    secuencia: '6',
    fechaafec: '2004/01',
    apellido: 'CORTEZ MIRIAN',
    foja: '0',
    cargo: '0',
    dep: 'OFICIAL',
    dis: 'MERLO               ',
    tor: 'ESCUELA PRIMARIA BASICA',
    escu: '70',
    opag: '207',
    dopag: '207 - INCENTIVO DOCENTE 1ER. SEM 5TA CUOTA CAJERO',
    cdoc: null,
    liquido: '61.84',
    fecafec: '200401',
    nrocheq: '57804',
    fpago: null,
    cat: 'MG',
    apart: null,
    item: null
  },
  {
    periodo: '2004/02',
    documento: '23175024',
    secuencia: '6',
    fechaafec: '2004/02',
    apellido: 'CORTEZ MIRIAN',
    foja: '0',
    cargo: '0',
    dep: 'OFICIAL',
    dis: 'MERLO               ',
    tor: 'ESCUELA PRIMARIA BASICA',
    escu: '70',
    opag: '223',
    dopag: '223 - SDOS TIT FEB/2004 CAJERO',
    cdoc: null,
    liquido: '472.89',
    fecafec: '200402',
    nrocheq: '56769',
    fpago: null,
    cat: 'MG',
    apart: null,
    item: null
  }
];


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  displayedColumns: string[] =
    ['select', 'periodo', 'secuencia', 'fechaafec',
      'foja', 'cargo', 'opag', 'fpago', 'liquido', 'dep',
      'dis', 'tor', 'escu'];

  dataSource = new MatTableDataSource<Cheque>(ELEMENT_DATA);
  selection = new SelectionModel<Cheque>(false, []);

  years;
  binding;

  constructor() { }

  ngOnInit() {
    const now = new Date().getUTCFullYear();
    this.years = Array(now - 1989).fill('').map((v, idx) => now - idx);

  }

  openDialog() {
    console.log(this.binding);
  }

  buscarPersona() {
    console.log(this.selection.selected);

  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }



  imprimir() { }


  cancelar() {

  }

}
