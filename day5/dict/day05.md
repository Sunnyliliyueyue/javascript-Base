let const var 区别
let:
    1.声明的变量只在块级作用域内有效
    2.不能重复声明
    3.不存在变量提升
    4.暂时性死区
var:
    1.声明的变量在全局作用域内有效
    2.可以重复声明
    3.存在变量提升
const:
    1.声明的变量在全局作用域内有效
    2.不能重复声明
    3.不存在变量提升
    4.暂时性死区
    5.不能重新赋值

块级作用域特点：
    每一层都是一个单独的作用域，每层的数据都是不互通的 内部作用域可以访问外部作用域的变量，外部作用域不能访问内部作用域的变量

数组解构赋值：最重要的就是模式匹配 两边的变量要保持一致 

对象的解构赋值：


Symbol
 是ES6 引入的一种新的原始数据类型，它是独一无二的，不能被修改。
 特性：
    1.不能在字符串之前拼串
    2.可以转化成string，boolean类型，但不能转化成number类型
    3.不可枚举
 方法：Symbol.iterator: 指向该对象的默认编辑器
      Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名

Set:
    1.成员值唯一，没有重复值
    2.可以遍历，方法有forEach、map、filter、reduce、some、every等
    3.可以转化成数组，方法有Array.from、...运算符等
    4.属于引用数据类型，比较时地址不同
    6.Set支持链式调用
    7. 方法：add(value)：添加某个值，返回 Set 结构本身
            size：返回 Set 结构的成员总数
            has(value)：返回一个布尔值，表示该值是否为 Set 的成员

Map: 
     1.键值对的集合，任何值都可以作为键或值
     2.属于引用数据类型
     3.支持链式调用
     4.方法：set(key, value)：设置键名key对应的键值为value，返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。

箭头函数：
     1.箭头函数没有自己的this，箭头函数的this指向定义时所在的对象，而不是调用时所在的对象
     2.箭头函数不能作为构造函数，不能使用new关键字，箭头函数没有prototype属性
     3.箭头函数没有arguments对象，可以使用剩余参数代替
  箭头函数中的this：
     箭头函数本身没有this，他的this是从他作用域的上一层继承而来，并且无法使用call、apply、bind等方法改变this指向
       

```js
// 对象没有作用域
// 不看调用位置，只看定义位置
    var name = 'window'
    var obj = {
      name: 'obj',
      methods: () => {
        console.log(this.name)
      },
      fn: function (cb) {
        cb()
      }
    }
    obj.fn1 = function () {
      obj.fn(() => { console.log(this.name) })
    }
    var fn1 = obj.fn1
    obj.methods()
    obj.fn(() => { console.log(this.name) })
    fn1()
    obj.fn1()
```
