import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../service/room.service';
import { Room } from '../../domain/room';

@Component({
  selector: 'app-general-view-rooms',
  templateUrl: './general-view-rooms.component.html',
  styleUrls: ['./general-view-rooms.component.scss']
})
export class GeneralViewRoomsComponent implements OnInit {
items: Room[] = [];
  constructor(private service:RoomService) { }

  ngOnInit() {
    this.items = this.service.getAll();
  }

}
