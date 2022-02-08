import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { DescriptionComponent } from './description/description.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { RachealDirective } from './racheal.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    DescriptionComponent,
    QuoteFormComponent,
    RachealDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
