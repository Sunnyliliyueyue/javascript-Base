#### instanceof 为什么可以区分数组和对象，比较的是什么？
通过原型链判断 prototype的指向
#### 什么是防抖，节流 有哪些运用场景？
防抖：事件连续多次触发时 执行最后一次
节流：事件连续多次触发时 每隔一段时间执行一次

#### 手写防抖与节流函数？
```js
function debounce(func, wait, immediate = false) {
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
        timer = setTimeout(function(){
            func()
        }, wait)
    }
}

function throttle(func, wait, immediate = false) {
    let timer = null
    return function(){
        if(immediate){
            func()
            immediate = false
            return
        }
        if(timer) return
        let context = this
        let args = arguments
        timer = setInterval(function(){
            func.apply(context, args)
            timer = null
        }, wait)
    }
}
```
#### web性能优化能做哪些事情？
1.按需引入UI组件库，如element-ui
2.分包
3.减少主线程的工作
4.强缓存
#### 用正则实现校验两位小数？
```js
var num = '123.45'
var reg = /^\d+(\.\d{1, 2})?$/
console.log(reg.test(num))
```