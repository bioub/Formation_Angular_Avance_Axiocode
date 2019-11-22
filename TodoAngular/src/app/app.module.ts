import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { AxioModule } from "axio-components-lib";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AxioModule,
  ],
  providers: [
    NgbTooltipConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
