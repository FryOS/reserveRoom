import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralViewRoomsComponent } from './components/general-view-rooms/general-view-rooms.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';

const routes: Routes = [
  {path: '', component: GeneralViewRoomsComponent},
  {path: ':id', component: RoomDetailsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
