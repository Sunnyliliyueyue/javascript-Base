Promise:
1. 是异步编程的一种解决方案 异步的过程是指promise的状态发生改变，
2. Promise对象的状态只能改变一次，从pending到fulfilled或从pending到rejected，状态一旦改变，就不会再变了
3. Promise创建是同步的，状态改变是异步的，当Promise对象的状态改变时，会调用then()方法中注册的回调函数

Promise状态：
pendding: 初始状态
fulfilled: 成功状态
rejected: 失败状态

静态方法：
Promise.resolve()
Promise.reject()
Promise.all()

手写Promise过程:
1. 定义Promise类
2. 定义Promise构造函数
3. 初始化Promise状态为pending，初始化成功时返回的参数、失败时返回的参数值都为undefined
4. 添加改变Promise状态的方法：resolve()、reject() 并将起接受到的参数值赋值给成功时返回的参数、失败时返回的参数值
5. 添加then()方法，接受两个参数分别是OnFilfilled、OnRejected,当Promise对象状态为fulfilled时，调用OnFilfilled回调函数并接收成功时传来的数据；当Promise对象状态为rejected时，调用OnRejected回调函数接收失败时传来的数据
6. 支持链式调用，可以在创建Promise后通过.then()方法一直触发
7. 静态方法的实现：Promise.resolve()、Promise.reject()、Promise.all()
```js
    class MyPromise {
        constructor (){
            this.status = 'pending'
            this.value = undefined
            this.reason = undefined
            const OnFilfilledCallback = []
            const OnRejectedCallback = []
            const resolve = (val) => {
                this.status = 'fulfilled'
                this.value = val
                OnOnFilfilledCallback.push((cb)=>cb())
            }
            const reject = (reason) => {
                this.status = 'rejected'
                this.reason = reason
                OnRejectedCallback.push((cb) => cb())
            }
            
            callback(resolve, reject)
        }
        then(OnFilfilled, OnRejected){
            const newOnFilfilled = typeof OnFilfilled === 'function' ? OnFilfilled : true
            const newOnRejected = typeof OnRejected === 'function' ? OnRejected : true
            if (newOnFilfilled && newOnRejected) {
                if (status === 'fulfilled'){
                    resolve(OnFilfilled(value))
                }
                if (status === 'rejected'){
                    try{
                        if(!OnRejected){
                            reject(OnFilfilled(value))
                        }else{
                            reject(OnRejected(reason))
                        }
                    }catch(err){
                        console.log('err')
                    }
                    reject(OnRejected(reason))
                }
                if (status === 'pending'){
                    this.OnOnFilfilledCallback.push(()=>{
                        resolve(OnFilfilled(value))
                    })
                    this.OnRejectedCallback.push(()=>{
                        try{
                            if(!OnRejected){
                                reject(OnFilfilled(value))
                            }else{
                                reject(OnRejected(reason))
                            }
                        }catch(err){
                            console.log('err')
                        }
                    })
                }
            }
        }
        static resolve(value){
            return new MyPromise((resolve, reject) => {
                resolve(value)
            })
        }
        static reject(reason){
            return new MyPromise((resolve, reject) => {
                reject(reason)
            })
        }
        static all(promise){
            return new MyPromise((resolve, reject) => {
                const result = []
                let count  = 0
                promise.forEach((item, index)=>{
                    item.then((val)=>{
                        result[item] = val
                        count++
                        if (count == promise.length){
                            resolve(result)
                        }
                    })
                    
                })
            })
        }
    }
```

async: 异步函数
1.ascnc函数内部会返回一个Promise对象，如果看起来不是Promise对象，那么他会隐式的将其包装成Promise对象
2.await能获取到promise对象改变后的值，如果后面不是一个promise的值，await会将它转换为已处理状态的promise对象
3.await后面的Promise对象状态为reject时，await后面的代码会被跳过，直接进入catch块
4.async函数内部存在await时，await会阻塞后面的代码执行，等待await后面的Promise对象状态改变后，再继续执行后面的代码


