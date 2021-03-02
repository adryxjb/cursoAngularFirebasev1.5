import { Component, OnInit } from "@angular/core";
import { ConectionService } from "../../services/conexion.service";
import { Producto } from "../../interfaces/producto";

export interface ProductoId extends Producto {
  id: string;
}

@Component({
  selector: "catalogo",
  templateUrl: "./catalogo.component.html"
})
export class Catalogo implements OnInit {
  productos: any;
  productoEditar: any = {
    nombre: "",
    marca: "",
    precio: ""
  };

  constructor(private _conexion: ConectionService) {
    this._conexion.listaProductos().subscribe(
      (data) => {
        this.productos = data;
        console.log(this.productos);
      },
      (err) => console.log(err)
    );
  }

  ngOnInit() {}
  eliminar(producto: any) {
    this._conexion.deleteProducto(producto);
  }

  editar(producto: any) {
    this.productoEditar = producto;
  }

  agregarProductoEditado() {
    this._conexion.editProducto(this.productoEditar);
  }
}
