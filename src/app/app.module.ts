import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"; // binding para datos
import { HttpClientModule } from "@angular/common/http"; // cliente http module
import { RouterModule, Route, RouterEvent } from "@angular/router";

import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';

// import services
import { DataService } from "./data.service";
import { AboutComponent } from './about/about.component';

// constante para rutas, son objetos
const routes: Route[] = [
  {path: '', component: HolaMundoComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //modulo usado para binding
    HttpClientModule, //modulo para http cliente modulo
    RouterModule.forRoot(routes)
  ],
  providers: [DataService], // aqui se declare el services
  bootstrap: [AppComponent]
})
export class AppModule { }
