import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {
    const html = await Bun.file('../frontend/index.html').text()
    return c.html(html)
})

Bun.serve({
    port: 3000,
    fetch: app.fetch
})

console.log('Servidor rodando em http://localhost:3000')