const Router = require('koa-router')
const a = require('./a')
const b = require('./b')

const registerRouter = new Router();
const nestedRoutes = [a, b]
for (var router of nestedRoutes) {
  registerRouter.use(router.routes(), router.allowedMethods())
}

module.exports = registerRouter
