import { Component, OnInit } from '@angular/core';
import { Room } from '../../domain/room';
import { RoomService } from '../../service/room.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {
  room: Room;
  constructor(
    private  service: RoomService,
    private route: ActivatedRoute

  ) {
    console.log('constructed');
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    if (isNaN(id)){
      //todo redirect
      return;
    }
    this.room = this.service.getItemById(id);
  }

}
