import {Bus, Controller, OnLoad, Reactive} from 'mini-core';
import {TodoItem} from '../../service';

@Controller
export default class Index {
  @Reactive
  public todoList: TodoItem[] = [{id: Date.now(), title: 'い 狂奔的蜗牛', finished: false}];

  @OnLoad
  public initEvent() {
    // 第三个为当前对象，传入后无需手动移除监听
    Bus.on(this, 'DELETE_TODO_ITEM', this.deleteTodoItem);
  }

  /**
   * 添加
   * @param e
   */
  public handleAdd(e: { detail: string }) {
    this.todoList.push({
      id: Date.now(),
      title: e.detail,
      finished: false
    });
  }

  /**
   * 已完成
   * @param e
   */
  public handleFinished(e: { detail: { id: number; finished: boolean } }) {
    const {id, finished} = e.detail;
    const item = this.todoList.find((item: TodoItem) => item.id === id);
    item!.finished = finished;
  }

  /**
   * 删除
   * @param id 删除项id
   */
  public deleteTodoItem(id: number) {
    const itemIndex = this.todoList.findIndex((item: TodoItem) => item.id === id);
    this.todoList.splice(itemIndex, 1);
  }
}
