import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  periodo: string;
  documento: number;
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

const ELEMENT_DATA: PeriodicElement[] = [
  {
    periodo: 'Hydrogen', documento: 1.0079, secuencia: 'H', fechaafec: '2020', apellido: 'garcia',
    foja: 'a', cargo: 'b', dep: 's', dis: '12', tor: 'b', escu: 'escu', opag: 'opago', dopag: 'dopag',
    cdoc: 'cdoc', liquido: 'liquid', fecafec: 'fecafec', nrocheq: '2', fpago: 'fpago', cat: 'cat',
    apart: 'apart', item: 'item'
  },
  {
    periodo: 'Helium', documento: 4.0026, secuencia: 'He', fechaafec: '2020', apellido: 'garcia',
    foja: 'a', cargo: 'b', dep: 's', dis: '12', tor: 'b', escu: 'escu', opag: 'opago', dopag: 'dopago',
    cdoc: 'cdoc', liquido: 'liquid', fecafec: 'fecafec', nrocheq: '2', fpago: 'fpago', cat: 'cat',
    apart: 'apart', item: 'item'
  },
  {
    periodo: 'Lithium', documento: 6.941, secuencia: 'Li', fechaafec: '2020', apellido: 'garcia',
    foja: 'a', cargo: 'b', dep: 's', dis: '12', tor: 'b', escu: 'escu', opag: 'opago', dopag: 'dopago',
    cdoc: 'cdoc', liquido: 'liquid', fecafec: 'fecafec', nrocheq: '2', fpago: 'fpago', cat: 'cat',
    apart: 'apart', item: 'item'
  },
  {
    periodo: 'Beryllium', documento: 9.0122, secuencia: 'Be', fechaafec: '2020', apellido: 'garcia',
    foja: 'a', cargo: 'b', dep: 's', dis: '12', tor: 'b', escu: 'escu', opag: 'opago', dopag: 'dopago',
    cdoc: 'cdoc', liquido: 'liquid', fecafec: 'fecafec', nrocheq: '2', fpago: 'fpago', cat: 'cat', apart: 'apart', item: 'item'
  },
  {
    periodo: 'Boron', documento: 10.811, secuencia: 'B', fechaafec: '2020', apellido: 'garcia',
    foja: 'a', cargo: 'b', dep: 's', dis: '12', tor: 'b', escu: 'escu', opag: 'opago', dopag: 'dopago',
    cdoc: 'cdoc', liquido: 'liquid', fecafec: 'fecafec', nrocheq: '2', fpago: 'fpago', cat: 'cat',
    apart: 'apart', item: 'item'
  },
  {
    periodo: 'Carbon', documento: 12.0107, secuencia: 'C', fechaafec: '2020', apellido: 'garcia',
    foja: 'a', cargo: 'b', dep: 's', dis: '12', tor: 'b', escu: 'escu', opag: 'opago', dopag: 'dopago',
    cdoc: 'cdoc', liquido: 'liquid', fecafec: 'fecafec', nrocheq: '2', fpago: 'fpago', cat: 'cat',
    apart: 'apart', item: 'item'
  },
  {
    periodo: 'Nitrogen', documento: 14.0067, secuencia: 'N', fechaafec: '2020', apellido: 'garcia',
    foja: 'a', cargo: 'b', dep: 's', dis: '12', tor: 'b', escu: 'escu', opag: 'opago', dopag: 'dopago',
    cdoc: 'cdoc', liquido: 'liquid', fecafec: 'fecafec', nrocheq: '2', fpago: 'fpago', cat: 'cat',
    apart: 'apart', item: 'item'
  },
  {
    periodo: 'Oxygen', documento: 15.9994, secuencia: 'O', fechaafec: '2020', apellido: 'garcia',
    foja: 'a', cargo: 'b', dep: 's', dis: '12', tor: 'b', escu: 'escu', opag: 'opago', dopag: 'dopago',
    cdoc: 'cdoc', liquido: 'liquid', fecafec: 'fecafec', nrocheq: '2', fpago: 'fpago', cat: 'cat',
    apart: 'apart', item: 'item'
  },
  {
    periodo: 'Fluorine', documento: 18.9984, secuencia: 'F', fechaafec: '2020', apellido: 'garcia',
    foja: 'a', cargo: 'b', dep: 's', dis: '12', tor: 'b', escu: 'escu', opag: 'opago', dopag: 'dopago',
    cdoc: 'cdoc', liquido: 'liquid', fecafec: 'fecafec', nrocheq: '2', fpago: 'fpago', cat: 'cat',
    apart: 'apart', item: 'item'
  },
  {
    periodo: 'Neon', documento: 20.1797, secuencia: 'Ne', fechaafec: '2020', apellido: 'garcia',
    foja: 'a', cargo: 'b', dep: 's', dis: '12', tor: 'b', escu: 'escu', opag: 'opago', dopag: 'dopago',
    cdoc: 'cdoc', liquido: 'liquid', fecafec: 'fecafec', nrocheq: '2', fpago: 'fpago', cat: 'cat',
    apart: 'apart', item: 'item'
  },
];



@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {
  // Sec.	Período	Fecha Afec.	Foja	Cargo	Orden de Pago	Fecha Pago	Líquido	Depend	Distrito	T.Org.	Esc
  displayedColumns: string[]
    = ['select', 'secuencia', 'periodo', 'fechaafec',
      'foja', 'cargo', 'opag', 'fpago', 'liquido', 'dep', 'dis', 'tor', 'escu'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor() { }

  ngOnInit() {
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


  imprimir() {
    console.log(this.selection.selected);
    const s = this.selection.selected;
    s.pop();
    console.log(s);

  }


  cancelar() {

  }




}
