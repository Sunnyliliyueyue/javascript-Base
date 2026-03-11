1.this指向：
调用函数时 this一般指向window
构造函数中的this一般指向他所创建的实例
对象方法调用时指向调用方法的对象
call apply bind 改变this指向 this指向第一个参数
2.手写call，bind，apply
```js
function MyCall(context, ...args){
    // 0.判断是否是函数调用
    if (typeof this !== 'function') {
        throw new TypeError('被调用对象必须是个函数')
    }
    // 1.判断context是否存在 如果不存在则指向window
    context = context || window
    // 2.创建一个唯一的属性名 防止覆盖
    let key = Symbol('key')
    // 3.将函数赋值给context对象的属性
    context[key] = this
    // 4.调用函数
    let result = context[key](...args)
    // 5.删除属性
    delete context[key]
    // 6.返回结果
    return result
}


// apply
function MyApply(context, argArray){
    // 0.判断是否是函数调用
    if (typeof this !== 'function') {
        throw new TypeError('被调用对象必须是个函数')
    }
    // 0.判断argArray是否存在 如果不存在则指向空数组
    argArray = argArray instanceof Array ? argArray : throw new TypeError('被调用对象必须是个数组')
    // 1.判断context是否存在 如果不存在则指向window
    context = context || window
    // 2.创建一个唯一的属性名 防止覆盖
    let key = Symbol('key')
    // 3.将函数赋值给context对象的属性
    context[key] = this
    // 4.调用函数
    let result =  Array.isArray(argArray) ? context[key](...argArray) : context[key]()
    // 5.删除属性
    delete context[key]
    // 6.返回结果
    return result
}

// bind
function MyBind(context, ...args){
    if (typeof this !== 'function') {
        throw new TypeError('被调用对象必须是个函数')
    }
    // 若没有传如上下文对象，默认为全局对象
    context = context === null ? globalThis : context
    // 保存原始函数的引用
    const _this = this
    return function fn(...innerArgs){
        // 判断返回的函数是不是构造函数
        if(this instanceof fn){
            return new _this(...args, ...innerArgs)
        }
        return _this.apply(context, args.concat(innerArgs))
    }
}

```
3.原型和原型链
原型：每个对象都有一个原型（prototype）保存该对象共享的实例和方法
原型链：对象原型上有一个指向原型的指针（__proto__），这个指针指向另一个对象的原型，以此类推，就形成了一个原型链
4.手写防抖和节流
```js

function debounce(func, wite, immediate = false){
    let timer = null
    return function(){
        if(immediate){
            func()
            immediate = false
            return
        }
        if(timer){
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
