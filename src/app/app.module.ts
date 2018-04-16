import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GeneralViewRoomsComponent } from './components/general-view-rooms/general-view-rooms.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneralViewRoomsComponent,
    RoomDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
