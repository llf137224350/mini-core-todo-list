import {Bus, Component, Prop, toBoolean} from 'mini-core';
import {TodoItem} from '../../../../service';

@Component
export default class List {
  ['triggerEvent']: any;
  @Prop
  public item!: TodoItem;

  public handleChange(e: any) {
    const finished = toBoolean(e.detail.value.length);
    this.triggerEvent('Finished', {
      id: this.item.id,
      finished
    });
  }

  public handleDelete() {
    Bus.emit('DELETE_TODO_ITEM', this.item.id);
  }
}
