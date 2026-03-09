1.作用域
 定义：执行环境中变量或函数的作用范围，作用域定义了变量或函数有权访问的其他数据，作用域都有一个变量对象
 全局作用域：
    1.全局作用域在页面打开时创建 在页面关闭时销毁
    2.编写在script标签中的变量或函数是全局作用域的 可以在页面的任意位置访问到
    3.全局作用域可以理解为window， 因为所有全局变量和函数都是作为window的属性和方法创建的
局部作用域：
    1.函数调用时函数作用域被创建，函数执行完后函数作用域被销毁
    2.每调用一次函数就会创建一个新的函数作用域，函数作用域之间是相互独立的 
    3.函数作用域可以访问上层作用域，但是相邻的函数作用域是相互独立的
ES6新增了块级作用域,对外不可见

2.作用域链
用途：保证执行环境中变量和函数的有序访问

底层逻辑：
在创建fn函数时，会创建一个预先包涵全局变量对象的作用域链，这个作用域链被保存在内部的Scope属性中。
当调用fn函数时，会为函数创建一个执行环境，然后通过复制 Scope属性中的对象 创建执行环境的作用域链，然后创建活动对象AO并推入执行环境的作用域链
在fn函数执行后，作用域就会被销毁

3.预编译 全局预编译 和函数预编译
全局预编译
全局上下文创建后，会生成变量对象VO，VO首先寻找变量声明，将var声明的变量作为VO对象的属性名，属性值为undefined
然后寻找函数声明，属性值为函数本身，如果函数名与变量冲突，函数声明会将变量声明覆盖
 
函数预编译
函数上下文创建后，会生成变量对象AO
寻找变量声明，变量名作为AO对象的属性名，属性值为undefined
寻找形参，形参名作为AO对象的属性名，属性值置为undefined
将实参值符给形参，即替换AO对象中形参的值
寻找函数声明，函数名作为AO对象的属性名，属性值为函数对象
函数名和变量名冲突时，函数名优先级高


5.堆栈 
堆：先进先出
栈：先进后出

计算机存储空间
  内存：容量小 访问速度快 程序运行时（临时占用）
  硬盘：容量大 访问速度慢 程序安装

js运行和存储空间的关联
  js运行在哪里？ 运行在内存
  和硬盘完全没有关联吗？ 数据的持久化存储

js的哪些场景会占用内存空间？
  函数声明 -> 函数体：页面运行期间持续存在
  函数运行 -> 执行上下文：临时占用内存空间，函数运行结束释放内存

内存的生命周期（内存管理的过程）
  分配内存 (定义变量)
  使用内存（变量值的读取或写入）
  回收内存（对不在使用的数据进行回收）

基本数据类型：
string,
number,
boolean,
null,
undefined,
symbol,
bigInt

引用数据类型：
Array,
Object,
function,
Date,
RegExp,
...

7.深拷贝与浅拷贝
浅拷贝是其属性与拷贝源对象的属性共享相同引用，当你更改源或副本时，也可能导致其他对象也发生更改
深拷贝是指其属性与其拷贝的源对象的属性不共享相同的引用，当你更改源或副本时，可以确保不会导致其他对象也发生更改深拷贝 方法：Json.parse(Json.stringify()) 弊端：函数，symbol，RegExp,undefined会造成数据丢失
        第三方库：Lodash   Lodash.cloneDeep()

***手撕深拷贝（cloneDeep）****

function cloneDeep(obj, map = new WeakMap()){
    if(typeof obj !== 'object' || obj instanceof function || obj instanceof Date || obj instance ResExp || obj instance symbol){
        return obj
    }
    else if(obj instanceof Object){
        const newObj = {}
        map.set(obj, newObj)
        for(let key in obj){
            newObj[key] = cloneDeep(obj[key])
        }
        return newObj
    }
    else if(obj instanceof Array){
        const newObj = []
        map.set(obj, newObj)
        obj.forEach(item => {
            newObj.push(cloneDeep(obj[item]))
        })
        return newObj
    }
    else if(obj instanceof Map){
        const newObj = new Map()
        map.set(obj, newObj)
        for(item of obj){
            newObj.set(newObj[item], cloneDeep(obj[item]))
        }
        return newObj
    }
    else if(obj instanceof Set){
        const newObj = new Set()
        map.set(obj, newObj)
        for(item of obj){
            newObj.add(newObj[item], cloneDeep(obj[item]))
        }
        return newObj
    }
}