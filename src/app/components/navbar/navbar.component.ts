import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html"
})
export class NavbarComponent implements OnInit {
  public app_name: string;
  public isLogged: boolean;
  constructor(public _authS:AuthService) {
    this.app_name = "HouseShop";
    this.isLogged = false;
  }
  ngOnInit() {}
}
