const Koa = require('koa');
const Router = require('koa-router');
// const koaBody = require('koa-body');
const cors = require('koa-cors');

const router = new Router();
const app = new Koa();

app.use(cors());
const date = new Date();

router.get('/api1', async (ctx, next) => {
	ctx.body = {
		msg: 'success',
		code: 'S01'
	};
	ctx.set({
		'Cache-Control': 'max-age=10',
		'Last-Modified': date,
	});
	console.log('ims',ctx.get("If-Modified-Since"));
	// console.log(ctx);
	// ctx.status = 404;
	return ctx.body;
});




app.use(router.routes());

// 在3001端口起服务
app.listen(3000);
