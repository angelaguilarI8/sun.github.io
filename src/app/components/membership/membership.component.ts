import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}
export interface PeriodicElement2 {
  name1: string;
  position1: string;
  weight1: string;
  symbol1: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Cargo mensual por servicio', name: '$ 1500.00  + IVA', weight: '$ 1000.00 + IVA', symbol: '$ 500.00 + IVA'},
  {position: 'Número de contactos', name: 'ILIMITADOS', weight: '5 contactos', symbol: '1 contacto'},
  {position: 'Número de contactos con negocios', name: 'ILIMITADOS', weight: '5 contactos', symbol: '1 contacto'},
  {position: 'Visibilidad total de informacón', name: 'ILIMITADOS', weight: '5 contactos', symbol: '1 contacto'},
];

const ELEMENT_DATA2: PeriodicElement2[] = [
  {position1: 'Cargo mensual por servicio', name1: '$ 800.00  + IVA', weight1: '$ 500.00 + IVA', symbol1: 'GRATIS'},
  {position1: 'Intermediario', name1: 'Si', weight1: 'No*', symbol1: 'No*'},
  {position1: 'Análisis Financiero', name1: 'Si', weight1: 'Si*', symbol1: 'No*'},
  {position1: 'Tramite Legal**', name1: 'Si', weight1: 'Si*', symbol1: 'No*'},
];

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  dataSource2 = ELEMENT_DATA2;



  constructor() { }

  ngOnInit(): void {
  }


}
