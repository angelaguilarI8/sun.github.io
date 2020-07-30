import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resul-cliquidity',
  templateUrl: './resul-cliquidity.component.html',
  styleUrls: ['./resul-cliquidity.component.css']
})
export class ResulCLiquidityComponent implements OnInit {

  producto; 
  usr;
  constructor( ) { }

  ngOnInit(): void {
    this.productos();
    this.usuario();
  }

  productos(){
    // this.producto = this.produc.consultaProductos();
    console.log();
  }

  usuario(){
    // this.usr = this.produc.consultaUsuarios();
    console.log();
  }

}
