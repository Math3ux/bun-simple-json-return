
const resposta = (req: Request): Response => {
    const body = JSON.stringify({message: "Olá, mundo!"});

    return new Response(body, {
        headers: {
            "Content-Type": "application/json",
        }
    });
}

const server = Bun.serve({
    port: 3000,
    fetch: resposta,
})
