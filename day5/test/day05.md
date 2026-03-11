#### Set的数据类型及特性？

#### Map的数据类型及特性？

#### iterator接口的作用？

#### for of与for in的区别？

#### 箭头函数与普通函数的区别？

#### 箭头函数的this的指向？

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
o();
obj.say();
obj.pro.getPro();
```

```js
var a = 10
var obj = {
  a: 20,
  say: () => {
    console.log(this.a)
  }
}
obj.say() 

var anotherObj = { a: 30 } 
obj.say.apply(anotherObj) 
```
