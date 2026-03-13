# Rota JSON Simples

Este projeto é um exemplo básico de um servidor HTTP utilizando o [Bun](https://bun.sh/), que retorna uma resposta JSON simples.

## Descrição

O servidor responde na porta `3000` com uma mensagem JSON contendo:

```json
{
  "message": "Olá, mundo!"
}
```

## Requisitos

- [Bun](https://bun.sh/) instalado na máquina.

## Como executar

1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd rota-json-simples
   ```

2. Instale as dependências (se houver):
   ```bash
   bun install
   ```

3. Inicie o servidor:
   ```bash
   bun run index.ts
   ```

4. Acesse o servidor em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

- `index.ts`: Contém a lógica do servidor.
- `package.json`: Configurações do projeto.
- `tsconfig.json`: Configurações do TypeScript.
- `README.md`: Documentação do projeto.

## Tecnologias Utilizadas

- [Bun](https://bun.sh/)
- TypeScript
