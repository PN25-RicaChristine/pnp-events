import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardComponent,
    EventDetailsComponent,
    ParticipantListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
