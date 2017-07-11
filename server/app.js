const Koa = require('koa');
const Router = require('koa-router');
// const koaBody = require('koa-body');
const cors = require('koa-cors');

const router = new Router();
const app = new Koa();

app.use(cors());

router.get('/api1', async (ctx, next) => {
	console.log(111);
	function a(){
		console.log(222);
		return 123
	}
	ctx.body = await a();
	console.log(333,ctx.body);
	return ctx.body;
});




app.use(router.routes());

// 在3001端口起服务
app.listen(3000);
