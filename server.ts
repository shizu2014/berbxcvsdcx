import { Application, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

// 静态文件中间件
app.use(async (ctx, next) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/public`,
    index: "index.html",
  });
  await next();
});

// 启动服务器
const port = 8000; // 设置端口号
console.log(`Server is running on port ${port}`);
await app.listen({ port });
