#### 什么是闭包？
能访问到其他函数的对象，被称为闭包
#### 什么是EventLoop事件循环？
JS是单线程的，当他处理异步任务或多线程任务时采用事件循环的方式来执行
执行过程：同步任务>微任务>宏任务
#### 下面几题的代码的执行结果分别是什么？
```js
var obj = { 
    a: 1, 
    foo() {
        console.log(this.a);
    } 
};
var a = 2;
var foo = obj.foo;
var obj2 = { a: 3, foo: obj.foo }

obj.foo(); //1
foo(); // 2
obj2.foo(); // 3
```
```js
function Foo(){
    getName = function(){ console.log(1); };
    return this;
}
Foo.getName = function(){ console.log(2); };
Foo.prototype.getName = function(){ console.log(3); };
var getName = function(){ console.log(4); };
function getName(){ console.log(5) };

Foo.getName();      // 2   
getName();   // 4     
Foo().getName();   // 1     this->window  
getName();  //  1     
new Foo.getName();          //  2
new Foo().getName();        // 3
new new Foo().getName();    // 3
```