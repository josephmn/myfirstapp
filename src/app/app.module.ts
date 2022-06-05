import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"; // binding para datos
import { HttpClientModule } from "@angular/common/http"; // cliente http module

import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';

// import services
import { DataService } from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //modulo usado para binding
    HttpClientModule //modulo para http cliente modulo
  ],
  providers: [DataService], // aqui se declare el services
  bootstrap: [AppComponent]
})
export class AppModule { }
