#### Set的数据类型及特性？
数据类型：引用数据类型
特性：1.唯一性，没有重复值
     2.属于引用数据类型
     3.支持链式调用
#### Map的数据类型及特性？
数据类型：引用数据类型
特性：1.键值对的集合，键和值可以是任意类型
     2.属于引用数据类型
     3.支持链式调用
#### iterator接口的作用？
1. 可以使用for of循环遍历集合对象的元素
2. 迭代较为复杂的集合对象
#### for of与for in的区别？
1. for of循环可以遍历可迭代对象（如数组、字符串、Set、Map等），而for in循环可以遍历对象的可枚举属性（包括原型链上的属性）
2. for of循环返回的是元素值，而for in循环返回的是属性名
#### 箭头函数与普通函数的区别？
箭头函数this指向上一层继承来的this,且无法通过call、apply、bind改变this指向
不能作用构造函数，没有prototype属性
没有形参列表arguments
#### 箭头函数的this的指向？
指向上一层继承来的this
#### 代码的执行结果是什么？
```js
var obj = {
   say: function() {
     var f1 = () =>  {
       console.log(this);
     }
     f1();
   },
   pro: {
     getPro:() =>  {
        console.log(this);
     }
   }
}
var o = obj.say;
o();  // window
obj.say();  // obj
obj.pro.getPro();  // window?
```

```js
var a = 10
var obj = {
  a: 20,
  say: () => {
    console.log(this.a)
  }
}
obj.say() // 10

var anotherObj = { a: 30 } 
obj.say.apply(anotherObj) // 10
```
 
