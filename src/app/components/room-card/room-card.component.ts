import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Room } from '../../domain/room';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class RoomCardComponent implements OnInit {
  @Input() room: Room;
  @Output() take = new EventEmitter<number>();
  @Output() decline = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  onTake() {
    this.take.emit(this.room.id);
  }

  onDecline() {
    this.decline.emit(this.room.id);
  }

}
