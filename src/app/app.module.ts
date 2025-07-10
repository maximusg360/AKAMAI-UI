import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CpcodeListComponent } from './cpcode-list/cpcode-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    CpcodeListComponent,
 
  ],
  imports: [ MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSortModule,
    BrowserModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
