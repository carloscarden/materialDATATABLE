import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';


import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ModalInfoComponent } from './modal-info/modal-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoComponent } from './listado/listado.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonasComponent } from './personas/personas.component';
import { MultiselectComponent } from './multiselect/multiselect.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalInfoComponent,
    ListadoComponent,
    HeaderComponent,
    FooterComponent,
    PersonasComponent,
    MultiselectComponent
  ],
  entryComponents: [
    ModalInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
