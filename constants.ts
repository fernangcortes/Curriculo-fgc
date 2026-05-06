import { ExperienceItem, Project, FilmEntry, EducationEntry, CourseEntry, SkillCategory, ProductionCategory } from './types';

export const PERSONAL_INFO = {
  name: "FERNANDO GOMES CÔRTES",
  roles: ["Cineasta", "Técnico de Broadcast", "Desenvolvedor de Soluções Audiovisuais (IA)", "Repórter Cinematográfico"],
  email: "vozesdoasfalto@gmail.com",
  phone: "(62) 98189-9522",
  links: {
    linktree: "https://linktr.ee/Fernangc",
    github: "https://github.com/fernangcortes",
    certificates: "https://drive.google.com/drive/folders/1QG1JC6oy3sa-Bpks6KuZMJ_8W0GvHlle?usp=drive_link"
  },
  summary: "Profissional com trajetória híbrida que une mais de 20 anos de jornalismo na linha de frente (Rio de Janeiro e Goiás) ao cinema e o desenvolvimento de tecnologias para broadcast. Especialista em captar a história em tempo real — desde o acompanhamento documental de atletas de alto rendimento até crises de segurança pública. Atualmente, lidera a inovação em estúdio na UEG, criando ecossistemas de IA (CapIAu), automação via vMix UTC e aplicativos móveis, democratizando a produção de alto nível."
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "ueg",
    company: "UEG / CriaLab (Universidade Estadual de Goiás)",
    role: "Técnico de Audiovisual e Desenvolvedor",
    period: "Maio/2024 – Atual",
    url: "https://www.ueg.br/uegtv/",
    highlights: [
      {
        title: "Desenvolvimento de Software e IA",
        items: [
          "Projeto CapIAu (2026): Arquitetura de um 'sistema operacional da arte' que traduz expressões humanas e biofeedback em comandos de corte de broadcast em tempo real.",
          "Inventário com IA (2026): Desenvolvimento de sistema que identifica equipamentos por foto, buscando automaticamente manuais e tutoriais na web.",
          "App Rádio UEG (2026): Desenvolvimento completo da plataforma mobile (streaming e notícias).",
          "Automação de Estúdio: Criação de scripts vMix UTC personalizados para agilizar rotinas de direção e testes de Teleprompter com IA para rastreamento de voz."
        ]
      },
      {
        title: "Operação de Grandes Eventos e TV",
        items: [
          "Transmissão e coordenação técnica de eventos oficiais como a Posse do Reitor (2025), Calourada Institucional 2026 (operação de LED, câmeras e corte) e o X Congresso de Ensino, Pesquisa e Extensão (CEPE).",
          "Operação de transmissões multilíngues (StreamYard) para eventos internacionais como o II Seminário Internacional Redimensionando Caminhos Além Cárcere."
        ]
      }
    ]
  },
  {
    id: "ebc",
    company: "EBC - TV Brasil (Rio de Janeiro)",
    role: "Assistente de Repórter Cinematográfico",
    period: "Agosto/2014 – Dezembro/2018",
    url: "https://tvbrasil.ebc.com.br/",
    highlights: [
      {
        items: [
          "🏅 Ciclo Paralímpico e Rio 2016: Cobertura documental de longo prazo focada no esporte paralímpico. Acompanhamento da rotina, treinos e histórias de superação dos atletas brasileiros durante os anos de preparação, culminando na cobertura do ápice esportivo nos Jogos Paralímpicos Rio 2016.",
          "Crise e Segurança: Cobertura in loco da Intervenção Federal (2018), da guerra do tráfico na Rocinha (2017) e do assassinato de Marielle Franco.",
          "Cultura: Registro do incêndio do Museu Nacional (2018) e edições do Rock in Rio (2015/2017)."
        ]
      }
    ]
  },
  {
    id: "tbc",
    company: "TBC - TV Brasil Central (Goiás)",
    role: "Repórter Cinematográfico",
    period: "Setembro/2010 – Agosto/2014",
    url: "https://www.tvbrasilcentral.com.br/",
    links: [
      { title: "YouTube", url: "https://youtube.com/tvbrasilcentral" },
      { title: "TBC Flix", url: "https://tbcflix.com.br/" }
    ],
    highlights: [
      {
        title: "⚽ Coberturas Esportivas Históricas",
        items: [
          "Superclássico das Américas (2012): Cobertura de Brasil x Argentina, registrando a atuação de Neymar e a complexa logística de iluminação e transmissão internacional.",
          "Copa do Brasil (2013): Semifinal épica entre Goiás x Flamengo, com destaque para a cobertura do fenômeno midiático do jogador Walter.",
          "Títulos Nacionais: Registro da invasão de campo no título do Goiás (Série B 2012) e a festa da torcida do Vila Nova (Série C 2013) com mais de 60 mil pessoas.",
          "Seleção Brasileira: Amistoso Brasil x Panamá (4x0) pré-Copa do Mundo (2014)."
        ]
      },
      {
        title: "Coberturas Culturais e Factuais",
        items: [
          "Festival Villa Mix: Cobertura da ascensão do festival, desde a 1ª edição até o recorde do Guinness (2014), documentando a montagem de megaestruturas e shows de Jorge & Mateus.",
          "Shows Internacionais: Registro de grandes turnês em Goiânia, incluindo Elton John (2014).",
          "Investigação Policial: Cobertura intensa do caso do Serial Killer de Goiânia (2014), Chacina da Serra das Areias e Operação Monte Carlo.",
          "Manifestações: Registro das Jornadas de Junho de 2013, atuando em meio a confrontos e incêndios de ônibus na Praça da Bíblia."
        ]
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    name: "CapIAu",
    year: "2026",
    description: "O CapIAu é uma plataforma completa que gerencia todas as etapas da produção audiovisual: do roteiro à distribuição, da pré-produção à preservação do acervo, tudo potencializado por Inteligência Artificial.",
    url: "https://cap-i-au-7wr2.vercel.app/"
  },
  {
    name: "CapIAudio",
    year: "2026",
    description: "Aplicação avançada de gravação de áudio com criação de marcadores sincronizados para Adobe Premiere e DaVinci Resolve, integrada com serviços Google. Ideal para produtores e editores, agiliza a marcação de trechos importantes, organização de takes e revisão, tornando o fluxo de pós-produção muito mais rápido e preciso. Futuramente será um módulo do CapIAu.",
    url: "https://github.com/fernangcortes/CapIAudio"
  },
  {
    name: "Ponto Real G0",
    year: "2026",
    description: "Uma ferramenta web que automatiza o processo de análise de folhas de frequência (ponto eletrônico) para servidores públicos. O sistema utiliza IA (Google Gemini) para extrair dados de imagens/PDFs da folha de ponto, calcula automaticamente os saldos de horas e gera textos de ocorrência e justificativa prontos para uso no sistema do estado.",
    url: "https://ponto-real-go.onrender.com"
  },
  {
    name: "eMei Portal",
    year: "2026",
    description: "Plataforma completa para Microempreendedores Individuais (MEI), integrando gestão de clientes, serviços e finanças em um único painel. Facilita o controle do dia a dia do negócio, automatiza tarefas repetitivas e oferece visão clara dos resultados, ajudando o MEI a crescer com organização e profissionalismo.",
    url: "https://emei-portal.vercel.app/"
  },
  {
    name: "Teste Dominância Cerebral",
    year: "2026",
    description: "Aplicação interativa para análise de perfil comportamental baseada na teoria dos hemisférios cerebrais.",
    url: "https://github.com/fernangcortes/teste-dominancia-cerebral"
  },
  {
    name: "TeleprompterIA",
    year: "2026",
    description: "App que sincroniza texto e fala via IA, permitindo leitura natural sem operador manual.",
    url: "https://teleprompteria.com.br/"
  },
  {
    name: "Calculadora de Consignado",
    year: "2026",
    description: "Calculadora de consignado para servidor público: custo real, CET e simulações.",
    url: "https://github.com/fernangcortes/calculadora-consignado-servidor-go"
  },
  {
    name: "HTML para PNG",
    year: "2026",
    description: "Gerador de PNG a partir de HTML/CSS para cards e posts em redes sociais.",
    url: "https://github.com/fernangcortes/html-to-png"
  },
  {
    name: "Currículo FGC",
    year: "2026",
    description: "Currículo online/portfólio de Fernando G. Cortes.",
    url: "https://github.com/fernangcortes/Curriculo-fgc"
  },
  {
    name: "Gerador de Lista de Itens",
    year: "2026",
    description: "Gerenciador de pedidos de produção audiovisual com IA (briefing → lista de itens).",
    url: "https://github.com/fernangcortes/gerador-de-lista-de-itens"
  },
  {
    name: "AI Doc Editor",
    year: "2026",
    description: "Editor automático de vídeo baseado em transcrição: cortes, marcações e organização por roteiro.",
    url: "https://github.com/fernangcortes/ai-doc-editor"
  },
  {
    name: "Lista de Itens",
    year: "2026",
    description: "Gerador de lista de itens para produção (checklists e organização de demandas).",
    url: "https://github.com/fernangcortes/lista-itens"
  },
  {
    name: "IES Gestão Orçamentária",
    year: "2026",
    description: "Plataforma interativa de capacitação em gestão orçamentária para IES públicas (trilhas, glossário e RPG).",
    url: "https://github.com/fernangcortes/ies-gestao-orcamentaria"
  },
  {
    name: "CapIAu Play",
    year: "2026",
    description: "Player/ambiente de testes para protótipos e demos (web app).",
    url: "https://github.com/fernangcortes/capIAu-play"
  },
  {
    name: "Palácio dos Sonhos",
    year: "2026",
    description: "PWA de hábitos gamificados com XP, níveis, metas e analytics.",
    url: "https://github.com/fernangcortes/palacio-dos-sonhos"
  },
  {
    name: "Gestão de Contratos",
    year: "2026",
    description: "Módulo para gestão de contratos (cadastro, status e acompanhamento).",
    url: "https://github.com/fernangcortes/contratos"
  },
  {
    name: "Ghost Editor AI",
    year: "2026",
    description: "Edição de vídeo automatizada com IA: curadoria, transcrição e montagem (exporta OTIO/Kdenlive).",
    url: "https://github.com/fernangcortes/ghost-editor-ai"
  },
  {
    name: "CapIAu Streaming",
    year: "2026",
    description: "Módulo para streaming e operação ao vivo (automação e controle).",
    url: "https://github.com/fernangcortes/capIAu-streaming"
  },
  {
    name: "Omnimix Controller",
    year: "2026",
    description: "Control surface modular para broadcast: vMix, ATEM, PTZ e plugins (React + Node.js).",
    url: "https://github.com/fernangcortes/omnimix-controller"
  },
  {
    name: "CineAsset Generator",
    year: "2026",
    description: "Gerador de assets vetoriais para inventário de equipamentos (ícones padronizados).",
    url: "https://github.com/fernangcortes/CineAsset-Generator"
  },
  {
    name: "crIAprompter Web",
    year: "2026",
    description: "Mentor em chat para teleprompter: roteiro, ritmo, ajustes e prática de fala.",
    url: "https://github.com/fernangcortes/criaprompter-web"
  },
  {
    name: "Gerador Lista Itens (Backend)",
    year: "2026",
    description: "Serviço/módulo do gerador de listas de itens (backend/infra).",
    url: "https://github.com/fernangcortes/gerador-lista-itens"
  },
  {
    name: "CapIAu Portfólio AV",
    year: "2026",
    description: "Landing page/portfólio interativo do ecossistema (audiovisual + IA).",
    url: "https://github.com/fernangcortes/capiau-portfolio-av"
  },
  {
    name: "Gestão de Inventário CriaLab",
    year: "2026",
    description: "Sistema de gestão de inventário do CriaLab (cadastro, controle e organização).",
    url: "https://github.com/fernangcortes/gestao-inventario-crialab"
  }
];

export const FILMOGRAPHY: FilmEntry[] = [
  { title: "O monstro que reside dentro da casa acima da colina", year: "2026", role: "Assistente de Direção e Making Off - Direção e Montagem", type: "Longa (Em produção)" },
  { title: "Todo poder à imaginação", year: "2021", role: "Direção", type: "Documentário / 17 min", description: "Realização dos canais 'Conhecer & Transformar' e 'Vozes do Asfalto' que retrata o presente vivido no ponto de cultura A Casa de Vidro, em Goiânia, durante a pandemia de covid-19. Utiliza recursos do documentário e da video-reportagem digital para sua mensagem de reXistência.", url: "https://www.youtube.com/watch?v=kVX7EKrSsR4" },
  { title: "Hopekillers: Matadores da Esperança", year: "2021", role: "Técnico de Som", type: "120 min", description: "Longa-metragem de ação e ficção científica distópica dirigido por Thiago Moyses, onde um grupo busca sobreviver e enfrentar forças opressoras em um futuro desolado.", url: "https://www.imdb.com/title/tt3727970/" },
  { title: "O Muro (The Wall)", year: "2010", role: "Direção", type: "Curta", description: "O curta questiona se é possível enxergar algo além do muro, com locações nos arredores do Alphaville Flamboyant.", url: "http://www.youtube.com/watch?v=ab4YwdVIU-4" },
  { title: "Nós, João", year: "2010", role: "Diretor de Fotografia", type: "Curta", description: "Acompanha o amanhecer e a rotina de milhões de brasileiros, focando na figura de um cidadão comum.", url: "http://www.youtube.com/watch?v=qAui7fFUw0s" },
  { title: "Pã!", year: "2010", role: "Direção", type: "Curta", description: "Vencedor da mostra competitiva da Internet no 9º SMVC.", url: "http://www.youtube.com/watch?v=7ge1Q-ef-nE" },
  { title: "Augusto, um viciado em games", year: "2009", role: "Direção / Produção", type: "Curta", description: "Curta que aborda de forma cômica e reflexiva como pode ser o cotidiano e a vida de um viciado em video games.", url: "https://vimeo.com/3770609" },
  { title: "Big Mouse Brasil", year: "2009", role: "Direção / Produção", type: "Série Web", description: "Projeto de humor consistindo em uma paródia de reality show protagonizada por ratos. Produção em múltiplos episódios e teasers.", url: "https://vimeo.com/6674568" },
  { title: "Centelha", year: "2009", role: "Assistente de Técnico de Som", type: "21 min", description: "Curta-metragem de ficção científica dirigido por Thiago Moyses, caracterizado por sua atmosfera onírica e especulativa.", url: "https://www.imdb.com/title/tt4493536/" },
  { title: "Espectro", year: "2008", role: "Som Direto", type: "77 min", description: "Longa-metragem independente dirigido por Thiago Moyses, explorando elementos do thriller psicológico e investigação do subconsciente humano.", url: "https://www.imdb.com/title/tt3736820/" },
  { title: "Vide O Galeno", year: "2006", role: "Som Direto", type: "30 min", description: "Documentário/Curta dirigido por Thiago Moyses sobre a vida e a arte, focando em personagens e recortes poéticos da cultura.", url: "https://www.imdb.com/title/tt3736788/" },
  { title: "A triste e solitária historia de um corpo", year: "2005", role: "Direção / Produção", type: "Curta / Festival do Minuto", description: "Primeira produção VPPP elaborada para o Festival do Minuto de 2005. Uma experiência audiovisual poética focada em isolamento e linguagem corporal." }
];

export const COURSES: CourseEntry[] = [
  { title: "AI VideoLab 3", institution: "Time Human Academy", description: "Curso prático e intensivo focado em experimentação e direção criativa aplicada à Inteligência Artificial.", url: "https://www.humanacademy.ai/" },
  { title: "Jornada IA", institution: "Alura / Governo de Goiás", duration: "26 horas", description: "Formação voltada à aplicação e desenvolvimento em Inteligência Artificial.", url: "https://www.alura.com.br/empresas/governo" },
  { title: "Masterclass Engenharia de Prompt para Pesquisa Acadêmica", institution: "ITS Rio", description: "Focada na elaboração avançada de prompts para otimização e condução de pesquisas através de IA.", url: "https://itsrio.org/" },
  { title: "Formação de Operadores de vMix", institution: "vMix Academy", description: "Abrange fundamentos de broadcast, NDI, SRT, Áudio Dante, BitRate, FrameRate e redes.", url: "https://main.vmixacademy.com.br/" },
  { title: "Automação de Estúdio e Transmissões Técnicas", institution: "CriaLab / UEG TV", description: "Treinamentos práticos em softwares de automação de fluxos de transmissão e controle de infraestrutura audiovisual.", url: "https://www.ueg.br/uegtv/" },
  { title: "Operação de Rádio", institution: "CriaLab / UEG TV", description: "Workshops sobre fluxo de áudio e rotinas técnicas de um estúdio radiofônico.", url: "https://www.ueg.br/uegtv/" },
  { title: "Streaming na prática: faça lives profissionais com o OBS", institution: "Escola Itaú Cultural", description: "Operação técnica detalhada do software OBS para transmissões ao vivo.", url: "https://fundacaoitau.org.br/escola/autoformativos/streaming-na-pratica-faca-lives-profissionais-com-o-obs" },
  { title: "Streaming na prática: faça lives profissionais com o Streamlabs Talk Studio", institution: "Escola Itaú Cultural", description: "Foco na ferramenta Streamlabs para viabilizar transmissões e eventos digitais.", url: "https://fundacaoitau.org.br/escola/autoformativos/streaming-na-pratica-faca-lives-profissionais-com-o-streamlabs-talk-studio" },
  { title: "Planejamento de lives e eventos de streaming", institution: "Escola Itaú Cultural", description: "Estruturação, pré-produção e organização de eventos digitais ao vivo.", url: "https://fundacaoitau.org.br/escola/autoformativos/planejamento-de-lives-e-eventos-de-streaming" },
  { title: "Streaming: conceitos e fundamentos", institution: "Escola Itaú Cultural", description: "Base teórica essencial sobre o funcionamento e tecnologias de streaming.", url: "https://fundacaoitau.org.br/escola/autoformativos/streaming-conceitos-e-fundamentos" },
  { title: "Constelação das Artes - história da música e sonoridades brasileiras", institution: "Escola Itaú Cultural", description: "Estudo sobre o percurso histórico e cultural da música no Brasil.", url: "https://fundacaoitau.org.br/escola/autoformativos/constelacao-das-artes-historia-da-musica-e-sonoridades-brasileiras" },
  { title: "Constelação das artes - cinema brasileiro: fabulações sobre um território em disputa", institution: "Escola Itaú Cultural", description: "Análise da história, narrativas e o contexto social do cinema nacional.", url: "https://fundacaoitau.org.br/escola/autoformativos/constelacao-das-artes-cinema-brasileiro-fabulacoes-sobre-um-territorio-em-disputa" },
  { title: "Comunicação Visual e Narrativa de Dados", institution: "ENAP", description: "Uso de dados para criação de narrativas claras e impacto visual na comunicação.", url: "https://www.escolavirtual.gov.br/" },
  { title: "Storytelling com Dados para Comunicação Profissional de Sucesso", institution: "ENAP", duration: "25 horas", description: "Capacitação sobre a visualização estratégica de informações, combinando narrativas (storytelling) a gráficos e análises com o propósito de apresentar relatórios e dados da forma mais clara e atrativa possível.", url: "https://www.escolavirtual.gov.br/curso/815" },
  { title: "Inteligência Artificial para simplificar o dia a dia", institution: "ENAP", duration: "4 horas", description: "Introdução e aplicação de modelos de geração de texto (como GPT-3) e imagem em tarefas criativas.", url: "https://www.escolavirtual.gov.br/curso/861" },
  { title: "Fotografia Institucional", institution: "ENAP", duration: "25 horas", description: "Técnicas fotográficas voltadas para comunicação governamental e institucional.", url: "https://www.escolavirtual.gov.br/curso/466" },
  { title: "Fotografia e Audiovisual para Produção de Janelas de Libras", institution: "ENAP", duration: "20 horas", description: "Parâmetros técnicos de captação de imagem e luz para garantir acessibilidade audiovisual.", url: "https://www.escolavirtual.gov.br/curso/769" },
  { title: "Mídias para Educação: produção de vídeos e lives com qualidade", institution: "ENAP", duration: "20 horas", description: "Técnicas de captação e transmissão voltadas ao conteúdo educacional.", url: "https://www.escolavirtual.gov.br/curso/771" },
  { title: "Uso de Mídias Sociais na Comunicação Institucional", institution: "ENAP", duration: "20 horas", description: "Estratégias e gestão de redes sociais para órgãos públicos e corporativos.", url: "https://www.escolavirtual.gov.br/curso/445" },
  { title: "Comunicação Pública e Comunicação de Governo", institution: "ENAP", duration: "10 horas", description: "Princípios fundamentais da comunicação direcionada ao cidadão e transparência.", url: "https://www.escolavirtual.gov.br/curso/488" },
  { title: "Valores Culturais da Natureza", institution: "ENAP", duration: "20 horas", description: "Relação transversal entre cultura, sociedade e a preservação ambiental.", url: "https://www.escolavirtual.gov.br/curso/909" },
  { title: "Jornalismo na pandemia: Cobertura da COVID-19 agora e no futuro", institution: "Knight Center for Journalism / Univ. Texas", description: "Capacitação em jornalismo científico para cobertura segura e precisa da pandemia.", url: "https://journalismcourses.org/course/jornalismo-na-pandemia-cobertura-da-covid-19-agora-e-no-futuro/" },
  { title: "Cobertura da vacina para COVID-19: O que os jornalistas precisam saber", institution: "Knight Center for Journalism / Univ. Texas", description: "Atualização jornalística focada no funcionamento e na distribuição das vacinas.", url: "https://journalismcourses.org/course/cobertura-da-vacina-para-covid-19-o-que-os-jornalistas-precisam-saber/" },
  { title: "Jornalismo Científico: da pandemia à crise climática, como melhorar a cobertura de ciência", institution: "Knight Center for Journalism / Univ. Texas", description: "Técnicas e abordagens para cobrir temas complexos de ciência e meio ambiente.", url: "https://journalismcourses.org/course/jornalismo-cientifico-da-pandemia-a-crise-climatica-como-melhorar-a-cobertura-de-ciencia/" },
  { title: "O Marco Jurídico Internacional da Liberdade de Expressão, Acesso à Informação e Proteção de Jornalistas", institution: "Knight Center for Journalism / Desembargador André Gustavo Corrêa de Andrade", description: "Aspectos legais para garantia de acesso à informação e proteção da imprensa.", url: "https://journalismcourses.org/course/o-marco-juridico-internacional-da-liberdade-de-expressao-acesso-a-informacao-e-protecao-de-jornalistas/" },
  { title: "Curso / Oficina de Cinema e Realização Audiovisual", institution: "Dellani Lima", description: "Formação teórica e prática conduzida pelo cineasta Dellani Lima." },
  { title: "Introdução ao Documentário", institution: "Formação Spcine / Thiago B. Mendonça", description: "Exploração teórica e estética do gênero documental.", url: "https://spcineplay.com.br/" },
  { title: "Gestão Empresarial para os Desafios do Mercado Audiovisual", institution: "Sebrae / Objetiva", duration: "34 horas", description: "Comercialização, distribuição, legislação, financiamento e modelos de negócios audiovisuais.", url: "https://sebrae.com.br/sites/PortalSebrae/cursosonline" },
  { title: "Vozes: Comunicar é Direito", institution: "Anistia Internacional Brasil", duration: "20 horas", description: "Estratégias de comunicação articuladas com a defesa dos direitos humanos.", url: "https://anistia.org.br/curso/vozes-comunicar-e-direito/" },
  { title: "Produção de Vídeos: uma introdução", institution: "ENAP", duration: "6 horas", description: "Módulo básico focando nos rudimentos rápidos da elaboração de roteiros eficientes, captação enxuta de áudio, noções de iluminação de set e princípios fundamentais da montagem não linear de vídeo.", url: "https://www.escolavirtual.gov.br/curso/844" },
  { title: "FICA 2024: Participação como ouvinte", institution: "FICA", duration: "80 horas", description: "Imersão como ouvinte nas palestras e exibições do Festival Internacional, enriquecendo o repertório com tendências estéticas, inovações e abordagens sustentáveis nos modelos de produção de cinema digital." },
  { title: "Merlin Road Show 2022 em Goiânia", institution: "Merlin Video", description: "Circuito focado nas evoluções em broadcast, incluindo apresentações de equipamentos inovadores de audiovisual (câmeras, fluxos IP/NDI) para otimizar os pipelines de operações ao vivo e gravações locais." },
  { title: "cinema mínimo reau", institution: "Certificado Independente", description: "Intervenção imersiva de viés autoral e independente focada nos paradigmas da produção minimalista (do-it-yourself), resolvendo restrições orçamentárias com imensa criatividade cinematográfica de guerrilha." }
];

export const EDUCATION: EducationEntry[] = [
  { degree: "Graduação em Comunicação Social – Audiovisual", institution: "UnB", period: "2003 – 2008", url: "https://www.unb.br/" },
  { degree: "Jornalismo (4 semestres)", institution: "PUC Goiás", period: "2011 – 2012", url: "https://www.pucgoias.edu.br/" },
  { degree: "Publicidade (5 semestres)", institution: "UnB", period: "2004 – 2006", url: "https://www.unb.br/" }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Engenharia de Transmissão (Broadcast) e Automação de Estúdio",
    description: "Núcleo de maior expertise técnica, unindo operação ao vivo e arquitetura de sistemas de transmissão.",
    skills: [
      { name: "vMix", level: 95, tooltip: "Integração complexa, Scripting UTC, montagem e ajuste de projetos." },
      { name: "Switchers e Mesas de Corte", level: 90, tooltip: "Operação de ATEM (Blackmagic) e NewTek TriCaster." },
      { name: "TriCaster", level: 85, tooltip: "Operação e configuração." },
      { name: "Controle de Câmeras PTZ", level: 95, tooltip: "Operação de câmeras robóticas (ex: PTZ NEOiD) e controladores universais (RMC-300A)." },
      { name: "Protocolos de Vídeo IP", level: 90, tooltip: "NDI Workflows." },
      { name: "Automação de Hardware", level: 85, tooltip: "Bitfocus Companion." },
      { name: "Softwares de Streaming", level: 95, tooltip: "OBS Studio, StreamYard." },
      { name: "Infraestrutura de Estúdio", level: 90, tooltip: "Configuração e operação de Painéis de LED e Teleprompter (TP)." }
    ]
  },
  {
    category: "Produção, Direção e Gestão de Set",
    description: "Competências voltadas para a liderança técnica e criativa, do planejamento à execução cinematográfica e televisiva.",
    skills: [
      { name: "1ª Assistência de Direção (1º AD)", level: 90, tooltip: "Coordenação de set, elaboração de Ordem do Dia (Call Sheets), logística de atores e equipe." },
      { name: "Planejamento de Produção", level: 90, tooltip: "Decupagem de roteiro, elaboração de planos de filmagem, análise técnica e cronogramas." },
      { name: "Direção de Fotografia e Cinegrafia", level: 95, tooltip: "Iluminação, composição e estética visual para cinema e TV." },
      { name: "Sistemas de Câmera (Cinema e Broadcast)", level: 95, tooltip: "Operação e configuração de ecossistemas Sony (Alpha, FX), Blackmagic Design (URSA, Pyxis, Pocket), Canon, Panasonic e Nikon." },
      { name: "Estabilização de Imagem", level: 85, tooltip: "Operação de estabilizadores (DJI Ronin)." },
      { name: "Pilotagem de Drone", level: 80, tooltip: "Captação de imagens aéreas." },
      { name: "Acessibilidade", level: 85, tooltip: "Fotografia e Audiovisual aplicados à produção de Janelas de Libras." }
    ]
  },
  {
    category: "Gestão de Mídia, Pós-Produção e Design Visual",
    description: "Tratamento, finalização e organização do material captado.",
    skills: [
      { name: "DIT / Logger", level: 90, tooltip: "Gerenciamento de mídias digitais, ingestão, log e backup seguro de dados no set." },
      { name: "Edição e Montagem", level: 95, tooltip: "Adobe Premiere Pro." },
      { name: "Color Grading e Finalização", level: 85, tooltip: "DaVinci Resolve." },
      { name: "VFX e Motion Graphics", level: 80, tooltip: "Adobe After Effects." },
      { name: "Design Gráfico e Tratamento", level: 90, tooltip: "Adobe Photoshop e Lightroom." },
      { name: "Padrões de Exibição", level: 85, tooltip: "Fechamento e mapeamento de Padrões DCP para cinema." },
      { name: "Kdenlive & GIMP", level: 85, tooltip: "Edição e tratamento open source." }
    ]
  },
  {
    category: "Desenho de Som (Sound Design) e Áudio",
    description: "Captação e pós-produção sonora.",
    skills: [
      { name: "Operação de Mesas de Som", level: 85, tooltip: "Consoles digitais e analógicos (Behringer X32, Behringer Xenyx X2442USB)." },
      { name: "Captação", level: 90, tooltip: "Som Direto em set." },
      { name: "Edição e Mixagem de Áudio", level: 85, tooltip: "Reaper, Audacity." }
    ]
  },
  {
    category: "Desenvolvimento de Software e Integração Tecnológica",
    description: "Criação de ferramentas próprias (CapIAu, Na Risca) otimizando fluxos através de código e inteligência artificial.",
    skills: [
      { name: "Linguagens e Frameworks", level: 90, tooltip: "Python, Node.js, React, Electron, HTML/CSS (Tailwind)." },
      { name: "Inteligência Artificial", level: 95, tooltip: "Integração de APIs de IA (Gemini, OpenAI), implantação de IA Local (Ollama), automação de fluxos ('Vibecoding') e geração de relatórios." },
      { name: "Visão Computacional e Mídia", level: 85, tooltip: "OpenCV, MediaPipe." },
      { name: "Arquitetura e Banco de Dados", level: 85, tooltip: "Supabase, WebSockets para comunicação em tempo real." },
      { name: "UI/UX", level: 85, tooltip: "Design de interfaces limpas e funcionais para ferramentas de estúdio." },
      { name: "DevOps & Self-Hosting", level: 90, tooltip: "Docker, Jellyfin e Lidarr." }
    ]
  }
];

export const PRODUCTIONS: ProductionCategory[] = [
  {
    category: "Programas Institucionais (UEG TV / CriaLab)",
    items: [
      {
        name: "Saberes UEG",
        description: "Programa de viés acadêmico e educativo focado em entrevistas e debates com especialistas, pesquisadores e docentes. Aborda temas de relevância social, científica e educacional, atuando como uma ponte entre o conhecimento produzido na universidade e a sociedade.",
        role: "Gravação de episódios, montagem de cenário, operação técnica e edições especiais.",
        occurrences: 28,
        url: "https://youtube.com/playlist?list=PLkcaFk7ukgQ1HYAqhhR93s_i4eQ0bm6mg"
      },
      {
        name: "UEG Entrevista",
        description: "Formato clássico de entrevistas em estúdio que visa dar voz a autoridades, gestores públicos, acadêmicos e personalidades culturais, aprofundando discussões sobre políticas públicas, cultura e gestão.",
        role: "Captação em estúdio, direção técnica e regravações de áudio/vídeo.",
        occurrences: 9,
        url: "https://youtube.com/playlist?list=PLkcaFk7ukgQ1V9QVnEXOb8fy0jhptrn7A"
      },
      {
        name: "Memórias UEG",
        description: "Projeto de resgate e preservação do patrimônio histórico e humano da Universidade Estadual de Goiás, consistindo em gravações de depoimentos e documentários que registram a trajetória da instituição e de seus colaboradores.",
        role: "Gestão de cenário e gravação de entrevistas.",
        occurrences: 4,
        url: "https://youtube.com/playlist?list=PLkcaFk7ukgQ1XApKrXBaOqB-PH6VFt2x2"
      },
      {
        name: "UEG em Sintonia",
        description: "Programa de rádio e videocast (transmitido pela Rádio UEG Educativa e UEG TV) focado em comunicação dinâmica, notícias universitárias e debates de interesse da comunidade acadêmica.",
        role: "Testes de novos apresentadores e operação de transmissão.",
        occurrences: 4,
        url: "https://www.youtube.com/@UEGTV/search?query=UEG+em+Sintonia"
      },
      {
        name: "Sua Saúde",
        description: "Série audiovisual voltada para a divulgação científica na área da saúde, abordando temas de prevenção, bem-estar e saúde pública com linguagem acessível, gravada em formato de videocast/estúdio.",
        role: "Gravação de série de episódios informativos.",
        occurrences: 4,
        url: "https://youtube.com/playlist?list=PLkcaFk7ukgQ2znDrU6Z2GSGvEYb7s0N1h"
      }
    ]
  },
  {
    category: "Eventos Culturais e Festivais",
    items: [
      {
        name: "FICA (Festival Internacional de Cinema e Vídeo Ambiental)",
        description: "Um dos mais importantes festivais de cinema de temática ambiental do mundo, realizado na Cidade de Goiás. O evento reúne mostras competitivas, debates e oficinas focadas na interseção entre audiovisual e sustentabilidade.",
        role: "Cobertura de reuniões de balanço, alinhamentos estratégicos e sorteio de bolsas.",
        occurrences: 4,
        url: "https://fica.go.gov.br/"
      },
      {
        name: "Mercado SAPI (8ª e 9ª edições)",
        description: "Evento de mercado audiovisual focado no Centro-Oeste brasileiro. Reúne produtoras, distribuidoras, canais de TV e streamings para rodadas de negócios, painéis sobre o futuro do cinema e fomento à coprodução nacional e internacional.",
        role: "Transmissões remotas, logística de montagem e desmontagem de equipamentos no HUB Goiás.",
        occurrences: 11,
        url: "https://www.mercadosapi.com/"
      },
      {
        name: "13ª SAU (Semana de Cinema e Audiovisual da UEG)",
        description: "Evento acadêmico e cultural organizado pelo curso de Cinema e Audiovisual da UEG Laranjeiras. Promove exibições de filmes, debates com realizadores, oficinas técnicas e reflexões sobre a linguagem cinematográfica.",
        role: "Transmissão de painéis e debates acadêmicos.",
        occurrences: 3
      },
      {
        name: "Tenda Multiétnica",
        description: "Espaço de encontro, debate e apresentações culturais, dedicado à valorização das culturas indígenas, quilombolas e tradicionais por meio de rodas de conversa e apresentações.",
        role: "Transmissão ao vivo de conferências e rodas de conversa.",
        occurrences: 4
      }
    ]
  },
  {
    category: "Projetos Governamentais e de Inovação",
    items: [
      {
        name: "Goiás Tec (Comunidade Kalunga e Festas Típicas)",
        description: "Política pública da Secretaria de Educação de Goiás (Seduc-GO) que leva o ensino médio a regiões de difícil acesso por meio de transmissões via satélite e conteúdos audiovisuais.",
        role: "Cobertura externa, gravação de episódios e captação de projetos especiais.",
        occurrences: 8,
        url: "https://site.educacao.go.gov.br/goiastec/"
      },
      {
        name: "PequiConecta",
        description: "Evento ou iniciativa de inovação, tecnologia e networking, geralmente sediado no HUB Goiás, voltado para a conexão entre estudantes, startups, gestão pública e o ecossistema de empreendedorismo do estado.",
        role: "Ensaios de câmera, montagem estrutural e transmissão oficial.",
        occurrences: 4
      }
    ]
  },
  {
    category: "Congressos, Conselhos e Seminários Acadêmicos",
    items: [
      {
        name: "Conselho Universitário (CsU)",
        description: "Órgão máximo deliberativo e consultivo da universidade. As transmissões plenárias garantem a transparência das decisões institucionais, políticas educacionais e administrativas da UEG.",
        role: "Transmissão oficial das sessões plenárias matutinas e vespertinas.",
        occurrences: 2
      },
      {
        name: "XI EDIPE (Encontro Estadual de Didática e Práticas de Ensino)",
        description: "Importante congresso da área da educação (realizado na PUC Goiás) que reúne professores e pesquisadores para debater os rumos da didática, formação docente e inclusão no ambiente escolar.",
        role: "Visitas técnicas prévias, montagem de estrutura e transmissão final.",
        occurrences: 3
      },
      {
        name: "Eventos Acadêmicos (CELT e V Ciclo de Estudos)",
        description: "Eventos acadêmicos multidisciplinares focados nas transformações do ensino a partir das novas tecnologias e das múltiplas linguagens.",
        role: "Transmissões remotas de congressos e simpósios temáticos.",
        occurrences: 4
      },
      {
        name: "Cursos de Extensão (PPG Educação)",
        description: "Transmissões de ciclos de estudos e seminários internacionais, voltados para a formação continuada, interiorização e internacionalização da pesquisa em educação.",
        role: "Transmissões remotas e roteamento de sinal via StreamYard.",
        occurrences: 6
      }
    ]
  },
  {
    category: "Projetos Especiais e Logística de Estúdio",
    items: [
      {
        name: "Gravações e Coberturas Externas Singulares",
        description: "Registro de palestras, campanhas (ex: 20 de Novembro), posses e eventos de integração (Calouradas, SIP, Viva Ciência).",
        role: "Captação de palestras, operação técnica, direção e cobertura fotográfica.",
        occurrences: 14
      },
      {
        name: "Transmissões e Lives Especiais",
        description: "Cobertura de eventos diversos como Evento CEAR, III Colóquio Nac. de Geografia, PIBID, Audiência Pública, MERCADO NO LANTERNA, entre outros.",
        role: "Transmissão de eventos institucionais e coberturas ao vivo.",
        occurrences: 10
      },
      {
        name: "Logística, Inovação e Testes",
        description: "Gestão de acervo de estúdio, pesquisa de tecnologias para acessibilidade (SBTVD) e estruturação metodológica do laboratório.",
        role: "Coordenação logística, tombamento e integração de novos sistemas (vMix UTC, Teleprompter com IA).",
        occurrences: "Múltiplas"
      }
    ]
  }
];