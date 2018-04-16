import { Injectable } from '@angular/core';
import { Room } from '../domain/room';

@Injectable()
export class RoomService {
  private  items: Room[] = [];
  constructor() {
    this.items.push(new Room(1, 'green', 'content', 'Зеленая', 10),
      new Room(2, 'red', 'content', 'Красная', 15),
      new Room(3, 'blue', 'content', 'Голубая', 20))

  }

  getAll(): Room[] {
    return this.items;
  }
  getItemById(id: number): Room {
    return this.items.find(item => item.id === id);
  }

}
