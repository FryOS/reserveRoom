import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../service/room.service';
import { Room } from '../../domain/Room';


@Component({
  selector: 'app-general-view-rooms',
  templateUrl: './general-view-rooms.component.html',
  styleUrls: ['./general-view-rooms.component.scss']
})
export class GeneralViewRoomsComponent implements OnInit {
items: Room[] = [];
month = new Date();
months: string [] = [
                'Январь',
                'Февраль',
                'Март',
                'Апрель',
                'Май',
                'Июнь',
                'Июль',
                'Август',
                'Сентябрь',
                'Октябрь',
                'Ноябрь',
                'Декабрь' ];


  constructor(private service: RoomService) { }

  ngOnInit() {
    this.load();
  }

  onTake(id: number) {
    this.service.takeById(id);
    this.load();
  }

  onDecline(id: number) {
    this.service.declineById(id);
    this.load();
  }
  private  load() {
    this.items = this.service.getAll();

  }

  left() {
    console.log('left');
  }
  right() {
    console.log('right');
  }


}
