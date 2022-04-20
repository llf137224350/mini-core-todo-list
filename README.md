# 项目使用说明

> 因为项目存在开发依赖，所以首先需要安装依赖 ```npm i``` 或者 ```yarn install```，然后在微信开发者工具中选择构建npm
> 
> 项目依赖mini-core开发，框架文档
> [mini-core](http://www.uicoder.cn/mini_core_docs/)


# 如何快速创建组件或者页面
> 首先终端工具进入需要创建页面或者组件的目录

- 创建页面：[wx-page-template](https://www.npmjs.com/package/wx-page-template)
- 创建组件：[wx-component-template](https://www.npmjs.com/package/wx-component-template)


# 装饰器和原生对应关系
> 更多请关注[mini-core](http://www.uicoder.cn/mini_core_docs/)，不定期维护更新

| 目录                | 说明                                                                         |
|-------------------|----------------------------------------------------------------------------|
| @App              | App({}) - 应用实例                                                             |
| @GlobalData       | App({Symbol.for('__globalData__'): {}}) - 应用实例上挂载的全局属性                     |
| @Controller/@Page | Page({}) - 页面实例，推荐使用@Page                                                  |
| @Data             | Page({data: {}}) - 原生页面实例中data属性对应的对象属性                                    |
| @Reactive         | Page({data: {}}) - 原生页面实例中data属性对应的对象属性如果是对象可以使用Reactive装饰器将其装换为响应式对象      |
| @Observer         | Page({}) - 原生页面实例中属性的监听                                                    |
| @Computed         | Page({}) - 原生页面实例中计算属性                                                     |
| @OnLoad           | onLoad声明周期函数，可作用于多个方法上，支持async/await异步调用，执行顺序为先执行onLoad方法，然后按@OnLoad声明顺序执行 |
| @Component        | Component({}) - 组件实例中计算属性                                                  |
| @Prop             | Component({properties: {}}) - 组件实例中properties                              |
| @Data             | Component({data: {}}) - 组件实例中data                                          |
| @Reactive         | Component({data: {}}) - 原生页面实例中data属性对应的对象属性如果是对象可以使用Reactive装饰器将其装换为响应式对象 |
| @ExternalClasses  | Component({externalClasses: {}}) - 原生页面实例中externalClasses属性                |
| @Behaviors        | Component({behaviors: {}}) - 原生页面实例中behaviors属性                            |
| @Observers        | Component({observers: {}}) - 原生页面实例中observers属性                            |
| @Lifetimes        | Component({lifetimes: {}}) - 原生页面实例中lifetimes属性                            |
| @PageLifetimes    | Component({pageLifetimes: {}}) - 原生页面实例中pageLifetimes属性                    |
| @Computed         | Component({}) - 原生页面实例中计算属性                                                |
| @Lock             | 给同步方法加锁，防止在方法未执行完成前再次执行，比如提交数据（作用于方法）                                      |
| @AutoLog          | 自动捕获并提交日志（作用于方法）                                                           |


# 案例效果
<image src="./screenshot/1.png"/>
