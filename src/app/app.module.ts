import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { Catalogo } from "./components/catalogo/catalogo.component";
import { Producto } from "./components/addproducto/addproducto.component";
import { Lista } from "./components/lista/lista.component";
import { FormsModule } from "@angular/forms";
import { ConectionService } from "./services/conexion.service";
import { AdministracionComponent } from "./components/administracion/administracion.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { routing, appRoutingProviders } from "./app.routing";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    routing
  ],
  declarations: [
    AppComponent,
    Producto,
    Catalogo,
    Lista,
    AdministracionComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent],
  providers: [ConectionService, appRoutingProviders]
})
export class AppModule {}
