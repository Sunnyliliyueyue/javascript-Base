#### 什么是promise 包含哪些状态？
promise: 一个对象，用于表示异步操作的最终完成或失败
状态:pending: 初始状态
    fulfilled: 成功状态
    rejected: 失败状态

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
obj.say();  //obj
obj.pro.getPro();  // window
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

```js
async function fn () {
    setTimeout(() => {
        console.log(4)
    }, 0)
    Promise.resolve().then(() => {
        console.log(1)
    })

    await Promise.resolve().then(() => {
        console.log(2)
    })

    console.log(3)
}
fn()

// 1
// 2
// 3
// 4
```

```js
function fn () {
  return new Promise((resolve) => {
    console.log('Promise1')
    fn1()
    setTimeout(() => {
      console.log('Promise2')
      resolve()
      console.log('Promise3')
    }, 0);
  })
}
async function fn1() {
  var p = Promise.resolve().then(() => {
    console.log('Promise6')
  })
  await p.then(() => {
    console.log('Promise7')
  })
  console.log('end')
}
console.log('script')
setTimeout(() => {
  console.log('setTimeout')
}, 0)
fn().then(() => {
  console.log('Promise4')
})


// script
// Promise1
// Promise6
// Promise7
// end
// setTimeout
// Promise2
// Promise3
// Promise4
```