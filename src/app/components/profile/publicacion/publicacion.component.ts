import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LiquidezService } from 'src/app/services/liquidez.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormGroup, FormControl } from '@angular/forms';
import { TraspasosService } from 'src/app/services/traspasos.service';
import { EquipamientosService } from 'src/app/services/equipamientos.service';
import { Liquid } from '../../business/liquidity/liquidity';
import Swal from 'sweetalert2';
import { Sales } from '../../business/sale/sale';
import { Equipamients } from '../../business/sale-equipment/equipament';
import { ModalLiquidezComponent } from '../../modals/modal-liquidez/modal-liquidez.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalTraspasoComponent } from '../../modals/modal-traspaso/modal-traspaso.component';
import { ModalEquiposComponent } from '../../modals/modal-equipos/modal-equipos.component';


@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  equip: Equipamients[];
  liquid: Liquid[];
  sale: Sales[];
  formLiquid: FormGroup;
  respuesta;
  resultados: any[] = [];
  resultadosT: any[] = [];
  resultadosEquipamiento: any[] = [];
  myProducts: any;
  usuario: any;
  headElements = ['Id', 'Empresa', 'Ubicación', 'Descripción', 'Imagen', 'Tipo Socio',
    'Tipo Negocio', 'Monto Inversion', 'Competidores'];
  headElementsTras = ['Id', 'Empresa', 'Ubicación', 'Descripción', 'Imagen', '**GOM',
    'Tipo Negocio', '**VMP', 'Competidores'];
  headElementsEquipa = ['Id', 'Empresa', 'Ubicación', 'Descripción', 'Imagen', 'Tipo Negocio', 'Monto']

  constructor(private activatedRoute: ActivatedRoute, private _sLiqui: LiquidezService,
    private _us: UsuariosService, private _tras: TraspasosService, private _equipa: EquipamientosService
    ,  public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.usuario = localStorage.getItem('idusu')
    this.formLiduids();
    this.obterPublicaciones();
    this.obterPublicacionesT();
    this.obterPublicacionesEqui();

  }

  formLiduids() {
    this.formLiquid = new FormGroup({
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
      ubicacion: new FormControl(''),
      tipoNegocio: new FormControl(''),
      tipoSocio: new FormControl(''),
      monto: new FormControl(''),
      ventaMensualEsperada: new FormControl(''),
      gastosOperacionMensual: new FormControl(''),
      competidores: new FormControl(''),
      porcentaje: new FormControl(''),
      imagenes: new FormControl(''),
      id: new FormControl(localStorage.getItem('idusu'))
    })
  }

  obterPublicaciones() {
    this._sLiqui.obtenerLiquidezTodos().subscribe((result: any) => {
      this.myProducts = result.data;
      this.usuario = JSON.parse(this.usuario);
      this.resultados = this.myProducts.filter(obtener => obtener.creador === this.usuario)
      console.log(this.resultados)
    })
  }
  obterPublicacionesT() {
    this._tras.obtenerTraspasoTodos().subscribe((result: any) => {
      this.myProducts = result.data;
      this.usuario = JSON.parse(this.usuario);
      this.resultadosT = this.myProducts.filter(obtener => obtener.creador === this.usuario)

    })
  }
  obterPublicacionesEqui() {
    this._equipa.obtenerEquipamientoTodos().subscribe((result: any) => {
      this.myProducts = result.data;
      this.usuario = JSON.parse(this.usuario);
      this.resultadosEquipamiento = this.myProducts.filter(obtener => obtener.creador === this.usuario)

    })
  }

  eliminarLiquidez(liqui: Liquid) {
    Swal.fire({
      title: '¿Està seguro?',
      text: "¿Seguro de eliminar tu negocio? ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo eliminar!'
    }).then((result) => {
      if (result.value) {
        this._sLiqui.eliminarLiquidez(liqui.id).subscribe(
          response => {
            this.obterPublicaciones()
            this.formLiquid.reset()
            Swal.fire(
              'Eliminar!',
              'Eliminado con éxito.',
              'success'
            )
          }
        )
      }
    })
    this.formLiquid.reset()
  }

  eliminarTraspaso(sal: Sales) {
    Swal.fire({
      title: '¿Està seguro?',
      text: "¿Seguro de eliminar tu negocio? ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo eliminar!'
    }).then((result) => {
      if (result.value) {
        this._tras.eliminarTraspaso(sal.id).subscribe(
          response => {
            this.obterPublicacionesT()
            this.formLiquid.reset()
            Swal.fire(
              'Eliminar!',
              'Eliminado con éxito.',
              'success'
            )
          }
        )
      }
    })
    this.formLiquid.reset()
  }

  eliminarEquipamiento(equip: Equipamients) {
    Swal.fire({
      title: '¿Està seguro?',
      text: "¿Seguro de eliminar tus equipos? ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo eliminar!'
    }).then((result) => {
      if (result.value) {
        this._equipa.eliminarTraspaso(equip.id).subscribe(
          response => {
            this.obterPublicacionesEqui()
            this.formLiquid.reset()
            Swal.fire(
              'Eliminar!',
              'Eliminado con éxito.',
              'success'
            )
          }
        )
      }
    })
    this.formLiquid.reset()
  }

// ACTUALIZAR LIQUIDACIONES
openDialog(value){
  const dialogRef = this.dialog.open(ModalLiquidezComponent, {
    width: '900px',
    height: '500px',
    data: { id : value }
  });
  dialogRef.afterClosed().subscribe(result => {
    if (!result){
      return this.obterPublicaciones();;
    }
    value = result
    this.obterPublicaciones();
    
  });
}

// ACTUALIZAR TRASPASO
openDialogTras(value){
  const dialogRef = this.dialog.open(ModalTraspasoComponent, {
    width: '900px',
    height: '500px',
    data: { id : value }
  });
  dialogRef.afterClosed().subscribe(result => {
    if (!result){
      return this.obterPublicacionesT();;
    }
    value = result
    this.obterPublicacionesT();
    
  });
}
// ACTUALIZAR EQUIPAMIENTO
openDialogEquipa(value){
  const dialogRef = this.dialog.open(ModalEquiposComponent, {
    width: '900px',
    height: '500px',
    data: { id : value }
  });
  dialogRef.afterClosed().subscribe(result => {
    if (!result){
      return this.obterPublicacionesEqui();;
    }
    value = result
    this.obterPublicacionesEqui();
    
  });
}


}
