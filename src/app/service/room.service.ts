import { Injectable } from '@angular/core';
import { Room } from '../domain/room';

@Injectable()
export class RoomService {
  private  items: Room[] = [];
  constructor() {
    this.items.push(new Room(1, 'green', 'content'),
      new Room(1, 'red', 'content'),)

  }

  getAll(): Room[] {
    return this.items;
  }
  getItemById(): Room {
    return this.items.find(item => item.id === id);
  }

}
