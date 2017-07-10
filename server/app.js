const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', function (ctx, next) {
  ctx.body = 'Hello World';
});
router.get('/api1', function (ctx, next) {
  ctx.body = 'api1';
});
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3000);
