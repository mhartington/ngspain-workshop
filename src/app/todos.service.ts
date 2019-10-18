import { Injectable } from '@angular/core';

type Item = {
  id: number;
  text: string
};

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private items: Item[] = [
    { id: 1, text: 'Hello World' },
    { id: 2, text: 'Foo' },
    { id: 3, text: 'Bar' }
  ];
  constructor() { }
  getItems() {
    return this.items;
  }
  addItem(todo: string) {
    this.items.push( { text: todo, id: this.items.length + 1 } )
  }
  getItem(id: number) {
    return this.items.find(entry => entry.id === id);
  }
}
