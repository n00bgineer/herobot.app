import { Hono } from 'hono'

const app = new Hono()

app.get('/', (ctx) => {
  return ctx.text('Hello Hono!')
})

export default app
