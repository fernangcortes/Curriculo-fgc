# Currículo/Portfólio Interativo - White Label Template

Este repositório contém uma aplicação React + Vite criada e otimizada para ser um currículo e portfólio interativo potente e veloz. Originalmente desenvolvido por Fernando Gomes Côrtes, este template pode ser facilmente customizado (estilo "white-label") para servir de base para o seu próprio currículo profissional.

## 🚀 Principais Features

- **Assistente de IA Integrado (AIPitchAgent)**: Responde dúvidas dos recrutadores baseando-se no seu portfólio.
- **Tour Guiado (React Joyride)**: Apresenta os recursos fundamentais logo na primeira visita.
- **Divisão em Módulos**: Abas organizadas para Dev, Audiovisual, Educação e Experiência.
- **Lightbox de Imagens e Player YouTube Otimizado**: Carregamento rápido de portfólio em vídeo/foto sem prejudicar o tempo de renderização.
- **Busca por Contexto e Fuzzy**: Digite habilidades, empresas ou nomes de projetos para instantaneamente filtrar todo o site.
- **Grupos Inteligentes**: Botões e filtros para agrupar projetos em conjunto.
- **Dashboard e Impressão Amigável**: Quando em modo \`print\` (Ctrl/Cmd+P), o site vira um currículo tradicional pronto para PDF!

## ⚙️ Como customizar para você

A lógica principal de dados é estática, puxada através de variáveis (no modo local) sem depender diretamente do Firebase ou de APIs complexas. Para colocar seus dados:

### 1. Dados Pessoais

Caminho: \`constants.ts\`
Ao abrir o arquivo \`constants.ts\`, procure por \`PERSONAL_INFO\`.
Edite as propriedades \`name\`, \`role\`, \`summary\`, \`location\`, \`email\`, e \`links\` com as suas URLs.

### 2. Dados de Portfólio, Cursos e Trabalhos
Caminho Principal: \`constants.ts\` e \`new_data.json\`.

A maior parte da sua experiência pode ser configurada no \`constants.ts\` em forma de constantes (como \`EXPERIENCE\`, \`COURSES\`, \`SKILLS\`, etc).

Para o grande portfólio de vídeos/filmes organizados, o aplicativo consome arquivos JSON como \`new_data.json\` ou os importa estaticamente através de mapas no \`constants.ts\`.

Basta trocar:
- \`title\`: Nome da Obra/Projeto
- \`role\`: O que você fez (ex: "Desenvolvedor Backend", "Editor de Vídeo")
- \`type\`: Categoria exata (Isso alimenta automaticamente as abas baseadas em tipo no componente **Audiovisual**)
- \`url\`: URL para vídeos do Youtube ou sites externos
- \`group\` *(opcional)*: Um apelido usado para forçar um agrupamento daquela marca no Portfólio (Por exemplo, \`group: "O Boticário"\` puxa todas as obras).

### 3. Modificando os Ícones e Tema
O site usa o **Tailwind CSS** (\`bg-stone-50\`, \`emerald-500\`, etc.), suportando "Dark Mode" automaticamente seguindo o sistema.
Os ícones vêm da biblioteca **Lucide React**. É só importar um novo ícone no componente escolhido e substituir na matriz.

## 🤖 Configurando sua IA

Para que o chatbot conheça o SEU currículo:
1. Ao atualizar o \`constants.ts\` e \`new_data.json\`, os dados são passados como contexto via props no arquivo \`App.tsx\` para \`<AIPitchAgent contextData={JSON.stringify(...)} />\`.
2. Garanta que você configurou uma chava de API válida do **Google Gemini API** (\`process.env.GEMINI_API_KEY\`) no console de deploy do seu ambiente.
3. Se desejar, afine as regras de prompt (Instrução de Sistema) dentro do arquivo \`components/AIPitchAgent.tsx\` no parâmetro \`systemInstruction\`.

## 📦 Desenvolvimento Local

Abra o seu terminal:

\`\`\`bash
# Instale os pacotes principais e dependências locais
npm install

# Inicie o servidor de desenvolvimento Vite
npm run dev
\`\`\`

## O que é esse Tour Guiado?
Na 1ª visita à sua landing page de currículo, os visitantes e recrutadores verão um *Tour* chamativo os ensinando como procurar pelas suas skills. Usando \`localStorage\`, nós guardamos essa interação para que ele só rode uma vez.

Sinta-se à vontade para "forkar" (Fork), mexer à vontade, e não se esqueça de hospedar na vercel ou no Google Cloud Run!

Feito com 💚.
