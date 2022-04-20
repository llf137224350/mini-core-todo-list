import {Component, Data} from 'mini-core';

@Component
export default class Test {
  ['triggerEvent']: any;
  @Data
  public title: string = '';

  public handleInput(e: { detail: { value: string } }) {
    this.title = e.detail.value.trim();
  }

  public handleClick() {
    if (!this.title) {
      return;
    }
    this.triggerEvent('Add', this.title);
    this.title = '';
  }
}

