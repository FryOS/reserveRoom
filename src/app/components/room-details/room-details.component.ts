import { Component, OnInit } from '@angular/core';
import { Room } from '../../domain/Room';
import { RoomService } from '../../service/room.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {
  room: Room;
  constructor(
    private  service: RoomService,
    private route: ActivatedRoute,
    private router: Router

  ) {
    console.log('constructed');
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(id)) {
      this.router.navigate(['/']);
      return;
    }
    this.load(id);
  }

  onTake(id: number) {
    this.service.takeById(id);
    this.load(id);
  }

  onDecline(id: number) {
    this.service.declineById(id);
    this.load(id);
  }
  private  load(id) {
    this.room = this.service.getItemById(id);
  }

}
