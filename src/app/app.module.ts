import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AcademicosComponent } from './academicos/academicos.component';
import { InvestigacionComponent } from './investigacion/investigacion.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { RadioComponent } from './radio/radio.component';
import { TvComponent } from './tv/tv.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NavBarComponent,
    FooterComponent,
    AcademicosComponent,
    InvestigacionComponent,
    BibliotecaComponent,
    RadioComponent,
    TvComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
