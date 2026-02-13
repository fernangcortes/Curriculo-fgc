import { ExperienceItem, Project, FilmEntry, EducationEntry, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "FERNANDO GOMES CÔRTES",
  roles: ["Técnico de Broadcast", "Desenvolvedor de Soluções Audiovisuais (IA)", "Repórter Cinematográfico"],
  email: "vozesdoasfalto@gmail.com",
  phone: "(62) 98189-9522",
  links: {
    linktree: "https://linktr.ee/Fernangc",
    github: "https://github.com/fernangcortes"
  },
  summary: "Profissional com trajetória híbrida que une mais de 20 anos de jornalismo na linha de frente (Rio de Janeiro e Goiás) ao desenvolvimento de tecnologias para broadcast. Especialista em captar a história em tempo real — desde o acompanhamento documental de atletas de alto rendimento até crises de segurança pública. Atualmente, lidera a inovação em estúdio na UEG, criando ecossistemas de IA (CapIAu), automação via vMix UTC e aplicativos móveis, democratizando a produção de alto nível."
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "ueg",
    company: "UEG / CriaLab (Universidade Estadual de Goiás)",
    role: "Técnico de Audiovisual e Desenvolvedor",
    period: "Maio/2024 – Atual",
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
    description: "Ferramenta web de transparência financeira para servidores públicos.",
    url: "https://github.com/fernangcortes"
  },
  {
    name: "HTML para PNG",
    year: "2026",
    description: "Conversor automatizado que transforma snippets de código ou layouts web em imagens para social media.",
    url: "https://github.com/fernangcortes"
  }
];

export const FILMOGRAPHY: FilmEntry[] = [
  { title: "Hopekillers: Matadores da Esperança", year: "2021", role: "Técnico de Som" },
  { title: "Centelha", year: "2009", role: "Assistente de Técnico de Som", type: "Curta" },
  { title: "Espectro", year: "2008", role: "Som Direto" },
  { title: "Vide O Galeno", year: "2006", role: "Som Direto", type: "Curta" }
];

export const EDUCATION: EducationEntry[] = [
  { degree: "Graduação em Comunicação Social – Audiovisual", institution: "UnB", period: "2003 – 2008" },
  { degree: "Jornalismo (4 semestres)", institution: "PUC Goiás", period: "2011 – 2012" },
  { degree: "Publicidade (5 semestres)", institution: "UnB", period: "2004 – 2006" }
];

export const SKILLS: SkillCategory[] = [
  { category: "Broadcast", skills: ["vMix (Scripting UTC)", "StreamYard", "OBS Studio", "Painéis de LED", "NDI Workflows"] },
  { category: "Audiovisual", skills: ["Premiere Pro", "Photoshop (Avançado)", "After Effects", "Lightroom", "Operação de Câmera"] },
  { category: "Desenvolvimento", skills: ["Integração de APIs de IA", "Automação", "React", "Node.js", "WebSockets"] }
];