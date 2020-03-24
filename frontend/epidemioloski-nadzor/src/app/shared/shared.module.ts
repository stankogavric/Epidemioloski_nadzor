import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from '../app-routing.module';

//import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
    //FlexLayoutModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ConfirmationDialogComponent
    //FlexLayoutModule
  ],
  entryComponents: [ 
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }
