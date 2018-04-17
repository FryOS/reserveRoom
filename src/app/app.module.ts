import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MomentModule } from 'ngx-moment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GeneralViewRoomsComponent } from './components/general-view-rooms/general-view-rooms.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';

import { RoomService } from './service/room.service';
import { RoomCardComponent } from './components/room-card/room-card.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneralViewRoomsComponent,
    RoomDetailsComponent,
    RoomCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
