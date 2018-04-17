import { Injectable } from '@angular/core';
import { Room } from '../domain/Room';

@Injectable()
export class RoomService {
  private items: Room[] = [];

  constructor() {
    this.items.push(new Room(1, 'Зеленая', 'content', 'Зеленая', 10, 0),
      new Room(2, 'Красная', 'content', 'Красная', 15, 0),
      new Room(3, 'Голубая', 'content', 'Голубая', 20, 0));

  }

  getAll(): Room[] {
    return this.items;
  }

  getItemById(id: number): Room {
    return this.items.find(item => item.id === id);
  }

  takeById(id: number) {
    const item = this.items.find(e => e.id === id);
    if (item !== undefined) {
      item.participant++;
    }
  }

  declineById(id: number) {
    const item = this.items.find(e => e.id === id);
    if (item !== undefined) {
      item.participant--;
    }
  }
}
