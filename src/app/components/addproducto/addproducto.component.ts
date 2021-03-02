import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { ConectionService } from "src/app/services/conexion.service";

@Component({
  selector: "Producto",
  templateUrl: "./addproducto.component.html"
})
export class Producto implements OnInit {
  producto: any = {
    nombre: "",
    marca: "",
    precio: "",
    uid: ""
  };
  constructor(private _conexion: ConectionService, public _authS: AuthService) {
    console.log(_conexion);
  }

  ngOnInit() {}

  agregar() {
    this.producto.uid = this._authS.usuario.uid;
    this._conexion.addProducto(this.producto);
  }
}
