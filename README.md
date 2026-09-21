# >_ heitor.farias — Portfólio + Jogo da Forca

Portfólio pessoal em **Next.js** com tema dark matrix minimalista e um **Jogo da Forca** completo em `/forca`.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). O jogo fica em [/forca](http://localhost:3000/forca).

## Publicar no Vercel (passo a passo)

1. Crie um repositório no [GitHub](https://github.com/new) (ex.: `portfolio`).
2. Envie o código:

```bash
git init
git add .
git commit -m "feat: portfólio Next.js com jogo da forca"
git branch -M main
git remote add origin https://github.com/heitorfariass/portfolio.git
git push -u origin main
```

3. Acesse [vercel.com/new](https://vercel.com/new), importe o repositório e clique em **Deploy** (aceite as configurações padrão de Next.js).
4. Copie a URL gerada (ex.: `https://portfolio-seuusuario.vercel.app`) — esse é o link do site para a atividade.

> Dica: a cada `git push` na branch `main`, a Vercel atualiza o site automaticamente.

## Roteiro do vídeo (≤ 1 minuto, YouTube público ou não listado)

1. **0–15s** — Home: mostre o hero, a chuva matrix sutil e role rápido pelas seções (sobre, acadêmico, profissional, habilidades).
2. **15–30s** — Galeria de projetos: abra o DINEUP ao vivo e volte.
3. **30–55s** — Forca: entre em `/forca`, jogue uma palavra até vencer (ou errar de propósito para mostrar o boneco), clique em **reiniciar**.
4. **55–60s** — Feche no rodapé com seu nome e os links de contato.

Grave com o gravador do Windows (`Win+G`) ou OBS. Faça upload no YouTube como **público ou não listado** (nunca privado) e anexe o link do YouTube na atividade — não anexe o arquivo de vídeo nem links de OneDrive/Drive.

## Mapa dos requisitos (para conferência)

**Portfólio:** experiência acadêmica · profissional · extracurriculares · galeria de projetos · CSS caprichado · Next.js.

**Forca:** exibição com underlines ✓ · entrada por teclado virtual + teclado físico ✓ · 6 tentativas com penalidade por erro ✓ · lista de tentativas corretas/erradas ✓ · mensagens de vitória e derrota com a palavra ✓ · botão reiniciar com nova palavra ✓ · 44 palavras (mín. 30) ✓ · boneco desenhado em SVG ✓.

## Estrutura

```
app/            layout, home, página /forca, tema global
components/     Navbar, Hero, MatrixRain, Timeline, Cards...
components/forca/  Game, HangmanSVG, Keyboard
data/           profile.js (seus dados) · words.js (palavras)
```
