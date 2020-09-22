const Router = require('koa-router')
 
const a = new Router()
 
a.get('/a',(ctx,next)=>{
    ctx.body = "hello A module router"
})
 
module.exports = a
