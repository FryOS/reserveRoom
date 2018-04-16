import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GeneralViewRoomsComponent } from './components/general-view-rooms/general-view-rooms.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { RoomComponent } from './service/room/room.component';
import { RoomService } from './service/room.service';


@NgModule({
  declarations: [
    AppComponent,
    GeneralViewRoomsComponent,
    RoomDetailsComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
