#### 什么是作用域，作用域有哪些?
执行变量或函数的作用范围
全局作用域：在全局对象中声明的变量或者函数 （script标签内、window）
局部作用域：在函数内部声明的变量或者函数 （1.函数内部可以访问全局的变量/函数，（外部，相邻）不能访问函数内部的变量/函数 2.函数调用时创建，执行完销毁 3.每次调用都会创建作用域 多次调用相互独立）
#### 预编译的过程有哪些？
全局预编译：
1.创建虚拟AO，进行存储
2.找到变量声明 将变量值赋值为undefined
3.若变量名与函数名相同 函数替换变量
函数预编译：
1.创建虚拟VO，进行存储
2.找到变量声明 将变量值赋值为undefined
3.将形参的值赋值为undefined
4.实参值覆盖对应形参值
5.找到函数声明，函数名作为属性名，属性值为函数对象
6.若变量名与函数名相同 函数替换变量
#### 下面几题的代码的执行结果分别是什么？
```js
var foo = 1;
function bar() {
    console.log(foo);  // undefined
    if (!foo) {
        var foo = 10;
    }
    console.log(foo); // 10
}

bar();
```

```js
function fn () {
    func()  // 声明式
    var func = function () {
        console.log('表达式')
    }
    function func() {
        console.log('声明式')
    }
    func() // 表达式
}
fn()
```

```js
function test(d) {
    console.log(b); //10
    if (a) {
        b = 100; 
    }
    console.log(b); // 100
    c = 4;
    console.log(d); //3
    var d = 20;
    console.log(d); // 20
}
var a = 10;
var b = 10;
test(3);
console.log(c);  // undefined
```

#### js的数据类型有哪些？
基本数据类型：string、number、boolean、null、undefined、symbol、bigInt
引用数据类型：Array、Object、function、ResExp、Date、Map、Set...

#### 什么是深拷贝 深拷贝有哪些方式？

属性与其拷贝的源对象属性不共享共同的引用（复制内容，改变指向）
方式：Json.parse(Json.stringify()),
    第三方库Lodash (lodash.cloneDeep())