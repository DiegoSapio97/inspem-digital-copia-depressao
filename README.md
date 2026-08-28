# INSPEM Digital — depressão

Cópia de trabalho do site da clínica **INSPEM** (TCC no Bom Fim, Porto Alegre), construída em [Astro](https://astro.build).

Esta versão recebe as melhorias de performance e de layout (carrossel das salas, FAQ fechado, Newsreader + fonte do sistema, LCP/CLS).

## Como rodar

Requer Node.js 22.12 ou superior.

```sh
npm install
npm run dev
```

O `npm install` baixa as fotos do repositório original (os binários não entram pelo MCP). O servidor sobe em `http://localhost:4329`.

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção em `./dist/` |
| `npm run preview` | Preview do build local |

## Fotos

Troque os arquivos em `public/assets/` **com o mesmo nome**. Catálogo em `src/data/photos.ts`.

| Arquivo | Onde aparece |
| --- | --- |
| `logo.webp` | Header, rodapé e favicon |
| `hero.webp` | Foto principal |
| `equipe.webp` | Foto da equipe |
| `supervisora-simone.webp` | Card da Simone |
| `supervisora-ingrid.webp` | Card da Ingrid |
| `fachada.webp` | Destaque da galeria |
| `sala-espera.webp` | Carrossel das salas |
| `entrada.webp` | Carrossel das salas |
| `sala-atendimento.webp` | Carrossel das salas |
| `sala-equipe.webp` | Carrossel das salas |
