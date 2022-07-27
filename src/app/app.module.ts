import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { FromularioComponent } from './fromulario/fromulario.component';
import { IngresoService } from './ingreso/ingresoService';
import { EgresoService} from './egreso/egresoService';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    IngresoComponent,
    EgresoComponent,
    FromularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IngresoService,EgresoService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
