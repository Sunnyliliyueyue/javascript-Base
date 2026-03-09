1.闭包：
能够访问到其他函数作用域中的对象的函数，称为闭包

2.this:
    1. this不能在执行期间被赋值
    2. js中的this它不是固定不变的，是随着它执行环境的变化而改变

    指向：1. 函数调用时，this指向window
         2. 构造函数中this指向实例化出来的对象
         3. 作为对象方法调用时，this指向调用方法
         4. call和apply调用时，this指向第一个调用的对象

1.call、bind和apply的使用
call: 主要用于改变this指向从第二个参数开始是传递给函数的参数 立即执行
没有传参：严格模式：this值为undefined    非严格模式：this指向window
 
apply:也用于改变this指向但是必须使用数组进行传递 立即执行

bind: 改变this指向 不会立即执行而是返回一个新函数可以稍后调用 主要用于处理程序和setTimeOut等

不同： 
1.call和apply都是直接调用参数，bind不会立即调用
2.call和bind的参数都是参数列表，apply是数组

2.EventLoop(事件循环)
JS是 一门单线程语言，他的异步和多线程都是通过EventLoop实现的

执行过程：同步任务>微任务>宏任务
