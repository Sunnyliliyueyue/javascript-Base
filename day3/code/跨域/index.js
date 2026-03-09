const express = require('express')
// 创建实例
const app = express()
// 监听端口号
const port = 3000
app.get('/api/getData', (req, res)=>{
    res.send({
        code:1000,
        data:{
            msg: 'hello world'
        }
    })
})

app.listen(port, ()=>{
    console.log(`sever start! port:${port}`)
})