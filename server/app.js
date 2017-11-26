const Koa = require('koa');
const Router = require('koa-router');
// const koaBody = require('koa-body');
const cors = require('koa-cors');

const router = new Router();
const app = new Koa();

app.use(cors());
const date = new Date();

router.get('/', async (ctx, next) => {
	ctx.body = {
		msg: 'this is /',
		code: 'S01'
	};
	ctx.set({
		'Set-cookie': 1000
	});
	return ctx.body;
});

router.get('/test', async (ctx, next) => {
	ctx.body = {
		msg: 'this is /test',
		code: 'S01'
	};
	return ctx.body;
});

router.get('/set', async (ctx, next) => {
	ctx.body = {
		msg: 'this is /set',
		code: 'S01'
	};
	ctx.set({
		'Set-cookie': 22222
	});
	return ctx.body;
});



app.use(router.routes());

// 在3001端口起服务
app.listen(3000);
