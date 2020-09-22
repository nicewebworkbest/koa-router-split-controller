const Router = require('koa-router')
 
const b = new Router()
 
b.get('/b',(ctx,next)=>{
    ctx.body = "hello B module router"
})
 
module.exports = b
