// ============================================================
//  DADOS DO PORTFÓLIO — edite tudo por aqui, sem tocar no CSS
// ============================================================

export const profile = {
  name: "Heitor Farias Santos",
  firstName: "heitor.farias",
  role: "Estudante de Ciência da Computação",
  heroTaglines: [
    "Estudante de Ciência da Computação",
    "Análise de Dados · Automação com IA",
  ],
  about: [
    "Meu nome é Heitor, tenho 19 anos e estou atualmente no 5º período de Ciência da Computação. Tenho grande interesse em áreas como Análise de Dados e Automações com IA.",
    "Também já atuei em projetos freelance de design gráfico e edição de vídeo, o que me deu uma visão criativa na resolução de desafios e experiência com clientes reais e trabalho em equipe. Busco oportunidades em desenvolvimento e tecnologia para aplicar e expandir meus conhecimentos, contribuindo com soluções inovadoras.",
  ],
  contact: {
    email: "heitorfariassantos@gmail.com",
    github: "https://github.com/heitorfariass",
    linkedin: "https://linkedin.com/in/heitorfariassantos/",
  },
};

export const education = [
  {
    title: "Ciência da Computação",
    institution: "Universidade Católica de Pernambuco",
    period: "5º período de 8 · em andamento",
    courses: [
      "Análise de Algoritmos",
      "Análise e Desenvolvimento de Software",
      "Estrutura de Dados",
      "Inteligência Artificial",
      "Programação Orientada a Objetos",
      "Programação Web e Mobile",
      "Projeto de Banco de Dados",
      "Robótica Inclusiva",
    ],
  },
];

export const experience = [
  {
    title: "Freelancer — Design Gráfico & Edição de Vídeo",
    company: "Agência Veeda (marketing)",
    period: "nov 2024 – abr 2025 · 6 meses",
    description:
      "Atuação freelance pela agência de marketing Veeda, desenvolvendo conteúdos digitais de design gráfico e edição de vídeo para a cliente principal, @marcelagaia.mkt — unindo criatividade e técnica para fortalecer a presença digital da marca.",
    skills: [
      "Criatividade",
      "Trabalho sob demanda",
      "Organização",
      "Comunicação com cliente",
    ],
    link: {
      label: "ver portfólio de design",
      url: "https://www.instagram.com/veeda.mkt/",
    },
  },
];

export const extracurricular = [
  {
    title: "Google Cloud Data Analytics Certificate",
    institution: "Programa de aprendizado Google",
    period: "em andamento",
    description:
      "Trilha com 5 cursos e mais de 100 horas de aprendizado em análise de dados com Google Cloud. Primeiro curso concluído em setembro de 2026: Introduction to Data Analytics in Google Cloud.",
    progress: { done: 1, total: 5 },
    image: {
      src: "/google-cloud-badge.png",
      alt: "Selo de conclusão do curso Introduction to Data Analytics in Google Cloud — Completion Badge",
      width: 359,
      height: 300,
    },
  },
];

export const skillGroups = [
  {
    label: "técnicas",
    items: [
      "Programação Orientada a Objetos",
      "Estrutura de Dados & Árvores",
      "Banco de Dados (SQL · BigQuery · Firebase)",
      "Frontend (HTML · CSS · React)",
      "IA & Automação de Processos",
    ],
  },
  {
    label: "interpessoais",
    items: [
      "Gestão de Tempo",
      "Trabalho em Equipe",
      "Comunicação com Clientes",
    ],
  },
];

export const projects = [
  {
    title: "DINEUP",
    tagline: "descoberta e curadoria de restaurantes",
    description: [
      "O DINEUP começou com a ideia do meu sócio Júlio: um aplicativo de descoberta e curadoria de restaurantes. Ele trouxe a visão do negócio e eu me voluntariei para dar vida à ideia como desenvolvedor. Eu estava ainda no 3º período e, como autodidata, pesquisei, testei e construí o produto do zero, enquanto Júlio cuidava do marketing, financeiro e planejamento — aprendi muito no caminho.",
      "Com o amadurecimento do projeto, entendemos o tamanho do desafio de lançar um app mobile: burocracia, alto investimento para lançar e manter a plataforma e a missão de conquistar usuários e restaurantes parceiros ao mesmo tempo. O DINEUP entrou em pausa estratégica — mas o que ele me deixou permanece: foi minha maior escola prática de desenvolvimento de software, produto e trabalho em equipe, e a experiência que confirmou como eu gosto de transformar uma ideia em algo real.",
    ],
    tech: ["React", "Firebase", "IA", "Vercel"],
    url: "https://dineup1.vercel.app/",
    linkLabel: "dineup1.vercel.app",
    featured: true,
  },
  {
    title: "JOGO DA FORCA",
    tagline: "projeto pessoal — web",
    description:
      "Jogo clássico da forca construído em Next.js, com teclado virtual, boneco desenhado em SVG, sistema de tentativas e mais de 40 palavras sorteadas aleatoriamente. Feito com foco em CSS e experiência do usuário.",
    tech: ["Next.js", "React", "CSS"],
    url: "/forca",
    linkLabel: "jogar agora",
    featured: false,
  },
];
