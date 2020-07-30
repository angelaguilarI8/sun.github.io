import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-liquidity',
  templateUrl: './result-liquidity.component.html',
  styleUrls: ['./result-liquidity.component.css']
})
export class ResultLiquidityComponent implements OnInit {

  producto; 
  constructor(  ) { }

  ngOnInit(): void {
    this.productos();
  }

  productos(){
    // this.producto = this.produc.consultaProductos();
    console.log();
  }


}
