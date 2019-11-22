import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from "@nguniversal/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ContactsModule } from './contacts/contacts.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CoreModule,
    // ContactsModule,
    TransferHttpCacheModule,
    AppRoutingModule, // toujours en dernier
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
