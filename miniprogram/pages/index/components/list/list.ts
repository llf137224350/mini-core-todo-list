import {Component, Prop} from 'mini-core';
import {TodoItem} from '../../../../service';

@Component
export default class List {
  ['triggerEvent']: any;

  @Prop
  public todoList: TodoItem[] = [];

  public handleFinished(e: { detail: { id: number; finished: boolean } }) {
    this.triggerEvent('Finished', e.detail);
  }
}
