import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MtgComponent } from './mtg/mtg.component';
import { DeckComponent } from './mtg/deck/deck.component';

@NgModule({
  declarations: [
    AppComponent,
    MtgComponent,
    DeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
