原型链继承
 原型链继承，直接让子类的原型指向父类的实例，当子类找不到自身属性和方法的时候，就会往原型上去查找，实现夫类的属性和方法的继承

缺点：
 由于所有的child指向同一个Parent实例，对其中一个child实例的夫类的属性和方法的修改，会影响到其他的child

构造函数的继承
 子类构造函数执行父类的构造函数，给子类的this绑定，把父类的属性绑定到子类的this上，避免实例原型修改，还能解决父类构造函数传参问题

缺点：
 子类实例继承不到父类原型上的属性和方法

组合式继承:
 原型链继承和函数继承的优点的结合
 缺点：
  调用了两次父类构造函数，生成了两份实例

寄生组合式继承：
 为了解决组合式继承重复调用的问题，将指向父类的实例改成指向父类的原型，减少一次调用

```js
function fn(name, age){
    this.name = name
    this.age = age
}
fn.prototype.say = function(){
    console.log(this.name, this.age)
}

function Child(name) {
    Parent.call(this, name)
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

```

防抖：当事件在n秒内被连续处发时，值执行最后一次 (setTimeout)
节流：当事件在n秒内被连续处发时，每隔n秒执行一次 (setInterval)

```js
function debounce(func, wite, immediate = false){
    let timer = null
    return function(){
      if(immediate){
        func()
        immediate = false
        return
      }
      if(timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(()=>{
        func()
        timer = null
      }, wite)
  }
}
function throttle(func, wite, immediate = false){
  let timer = null
  return function(){
    if(immediate){
      func()
      immediate = false
      return
    }
    if(timer) return
    let args = arguments
    timer = setInterval(()=>{
      func(arguments)      
      timer = null
    }, wite)
  }
}

```
性能优化
1.打包：
      1.按需引入组件库
      2.分包：将代码按照功能拆分成多个包，每个包只包含该功能相关的代码，减少每个包的大小，提高加载速度
              config.js->webpack
              optimization{
                splitChunks:{}
                }
2.代码：减少不必要的组件渲染
3.浏览器缓存：
        强缓存：
            1.Expires：过期时间，http1.0的缓存过期时间，缺点：客户端时间和服务器时间不同步，导致缓存过期时间错误
            2.Cache-Control：缓存控制，http1.1的缓存过期时间，常用的指令有：
                max-age：缓存时间，单位秒
                no-cache：不缓存，每次都向服务器请求
                no-store：不缓存，不向服务器请求

正则表达式：
\d：匹配数字
\D：匹配非数字
\w：匹配字母、数字、下划线 相当于[a-zA-Z0-9_]
\W：匹配非字母、数字、下划线 相当于[^a-zA-Z0-9_]
\b：匹配单词边界

字符组内的取反（[^...]）
在外面表示以。。。开头
$：匹配字符串的结尾
字符集和中有一系列字符，表示匹配这些字符中的任意一个

test() 方法用于检测一个字符串是否匹配某个正则表达式，返回一个布尔值
replace() 方法用于在字符串中替换匹配的内容，返回一个新的字符串，不会修改原字符串

```js
 var reg = /[abc]/
 console.log(reg.test('a')) // true
 console.log(reg.test('b')) // true
 console.log(reg.test('c')) // true
 console.log(reg.test('1')) // false
 var reg = /^[abc]$/ // 只能以a b c开头 a b c结尾
 var reg = /^[a-z]/ // 不能存在a-z以外的字符
```

量词符号：
*：匹配0个或多个
+：匹配1个或多个
?：匹配0个或1个
{n}：匹配n个
{n,}：匹配n个或多个
{n,m}：匹配n到m个

var reg = /^\d+(\.\d{1, 2})?$/ // 匹配正整数或两位小数的数字


