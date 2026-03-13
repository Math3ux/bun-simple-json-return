
const resposta = new Response("Hello World")

const server = Bun.serve({
    port: 3000,
    fetch: () => resposta,
})
