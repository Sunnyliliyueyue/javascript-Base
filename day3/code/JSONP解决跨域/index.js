const express = require('express')
// 创建实例
const app = express()
// 监听端口号
const port = 3000
app.get('/api/getData', (req, res)=>{
    // 获取前端接收参数
    const { cd } = req.query
    res.send(`${cd}(${JSON.stringify({
        code: 1000,
        data: {
            msg: 'HELLO WORLD'
        }
    })})`)
})

app.listen(port, ()=>{
    console.log(`sever start! port:${port}`)
})