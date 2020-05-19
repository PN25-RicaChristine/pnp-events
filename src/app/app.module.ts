import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { AddEventComponent } from './add-event/add-event.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    EventDetailsComponent,
    ParticipantListComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
