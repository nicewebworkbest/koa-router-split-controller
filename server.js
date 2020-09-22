const Koa = require('koa')
const Router = require('koa-router')
const registerRouter  = require('./server/routes')
 
const app = new Koa()
app.use(registerRouter.routes(), registerRouter.allowedMethods())
 
app.listen(3000)
