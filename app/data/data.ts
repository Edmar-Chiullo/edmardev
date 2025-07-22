
export const technologies = [
    {
        title: 'html',
        icon: "/technology-icons/html-5.png",
        color: "bg-orange-600",
        value:0
    },
    {
        title: 'css',
        icon: "/technology-icons/css-3.png",
        color: "bg-blue-600",
        value:0
    },
    {
        title: 'javascript',
        icon: "/technology-icons/js.png",
        color: "bg-yellow-500",
        value:0
    },
    {
        title: 'react',
        icon: "/technology-icons/react.png",
        color: "bg-cyan-600",
        value:0
    },
    {
        title: 'next',
        icon: "/technology-icons/nextjs.png",
        color: "bg-gray-900",
        value:0
    },
    {
        title: 'typescript',
        icon: "/technology-icons/typescript.png",
        color: "bg-blue-600",
        value:0
    },
    {
        title: 'node',
        icon: "/technology-icons/nodejs.png",
        color: "bg-green-600",
        value:0
    },
    {
        title: 'git',
        icon: "/technology-icons/git.png",
        color: "bg-orange-600",
        value:0
    },
    {
        title: 'github',
        icon: "/technology-icons/github.png",
        color: "bg-gray-800",
        value:0
    }
];

// Dados definidos por tópicos de tecnologias
export const technologyTopics = [{
    html: [
      // 🔰 Nível Iniciante
      { assunto: "O que é HTML e sua importância na web.", concluido: true },
      { assunto: "Estrutura básica de um documento HTML", concluido: true },
      { assunto: "Tags básicas: <h1> a <h6>, <p>, <a>, <img>, <br>, <hr>", concluido: true },
      { assunto: "Listas: <ul>, <ol>, <li>", concluido: true },
      { assunto: "Comentários no HTML", concluido: true },
      { assunto: "Inserção de imagens e links", concluido: true },
      { assunto: "Introdução a tags semânticas: <header>, <footer>, <main>, <section>, <article>, <nav>", concluido: true },
      { assunto: "Uso de <div> e <span> corretamente", concluido: true },
      { assunto: "Formatação de texto com <strong>, <em>, <u>", concluido: true },
      { assunto: "Tags de citação: <blockquote>, <q>, <cite>", concluido: true },

      // 🧩 Nível Intermediário
      { assunto: "Estrutura de um formulário: <form>, action, method", concluido: true },
      { assunto: "Campos comuns: <input>, <textarea>, <select>, <option>, <label>", concluido: true },
      { assunto: "Tipos de input: text, email, password, radio, checkbox, file, submit, date", concluido: true },
      { assunto: "Agrupamento de campos com <fieldset> e <legend>", concluido: true },
      { assunto: "Atributos importantes: placeholder, required, readonly, disabled", concluido: true },
      { assunto: "Inserindo áudio e vídeo com <audio> e <video>", concluido: true },
      { assunto: "Atributos: controls, autoplay, loop, muted, poster", concluido: true },
      { assunto: "Criando tabelas com <table>, <thead>, <tbody>, <tr>, <td>, <th>", concluido: true },
      { assunto: "Atributos de acessibilidade em tabelas: scope, caption", concluido: false },
      { assunto: "Uso correto de alt em imagens", concluido: true },
      { assunto: "Atributos como aria-label, tabindex, role", concluido: false },

      // ⚙️ Nível Avançado
      { assunto: "API de geolocalização (navigator.geolocation)", concluido: false },
      { assunto: "API de armazenamento local: localStorage e sessionStorage", concluido: false },
      { assunto: "Drag and Drop API", concluido: false },
      { assunto: "Web Workers (multithreading com JavaScript)", concluido: false },
      { assunto: "Uso de <template> e <slot> em Custom Elements", concluido: false },
      { assunto: "Shadow DOM", concluido: false },
      { assunto: "Estruturação semântica ideal para SEO", concluido: false },
      { assunto: "Uso de meta tags: description, viewport, charset, robots", concluido: false },
      { assunto: "Carregamento assíncrono de scripts: async e defer", concluido: false },
      { assunto: "Navegação por teclado e foco acessível", concluido: false },
      { assunto: "Compreensão e uso de WAI-ARIA roles", concluido: false }
    ],

    css: [
      // Iniciante
      { assunto: "O que é CSS e sua função", concluido: true },
      { assunto: "Sintaxe básica e seletores simples", concluido: true },
      { assunto: "Cores, unidades e comentários", concluido: true },
      { assunto: "Classes e IDs", concluido: true },
      { assunto: "Propriedades de texto (font-size, color, etc.)", concluido: true },
      { assunto: "Box Model (padding, margin, border, content)", concluido: true },
      { assunto: "Backgrounds e bordas", concluido: true },
      { assunto: "Display e visibility", concluido: true },
      { assunto: "Posicionamento (static, relative, absolute, fixed)", concluido: true },

      // Intermediário
      { assunto: "Seletores avançados (child, nth-child, etc.)", concluido: true },
      { assunto: "Flexbox (justify-content, align-items, etc.)", concluido: true },
      { assunto: "Grid layout", concluido: true },
      { assunto: "Pseudo-classes e pseudo-elementos", concluido: true },
      { assunto: "Transições e animações básicas", concluido: true },
      { assunto: "Media queries (responsividade)", concluido: true },
      { assunto: "Unidades relativas (em, rem, vh, vw)", concluido: true },
      { assunto: "Reset e Normalize CSS", concluido: true },

      // Avançado
      { assunto: "Animações com @keyframes", concluido: true },
      { assunto: "Custom properties (variáveis CSS)", concluido: false },
      { assunto: "Z-index e contexto de empilhamento", concluido: true },
      { assunto: "Layout fluido e mobile first", concluido: true },
      { assunto: "Clipping e masking", concluido: false },
      { assunto: "Pré-processadores (Sass, Less – conceito)", concluido: false },
      { assunto: "Composição visual (transforms, filters, blur)", concluido: false },
    ],

    javascript: [
      // Iniciante
      { assunto: "O que é JavaScript e onde é usado", concluido: true },
      { assunto: "Inserção do JavaScript no HTML (inline, script, externo)", concluido: true },
      { assunto: "Tipos de dados primitivos (string, number, boolean, etc.)", concluido: true },
      { assunto: "Declaração de variáveis (var, let, const)", concluido: true },
      { assunto: "Operadores aritméticos, lógicos e relacionais", concluido: true },
      { assunto: "Condicionais (if, else, switch)", concluido: true },
      { assunto: "Laços de repetição (for, while, do while)", concluido: true },
      { assunto: "Funções básicas e arrow functions", concluido: true },
      { assunto: "Manipulação de DOM (getElementById, querySelector, etc.)", concluido: true },

      // Intermediário
      { assunto: "Arrays e métodos comuns (map, filter, reduce)", concluido: false },
      { assunto: "Objetos e manipulação de propriedades", concluido: true },
      { assunto: "Eventos (click, submit, etc.)", concluido: true },
      { assunto: "Funções anônimas e callbacks", concluido: true },
      { assunto: "Escopo, hoisting e closure", concluido: true },
      { assunto: "Desestruturação (arrays e objetos)", concluido: true },
      { assunto: "Operador spread e rest", concluido: true },

      // Avançado
      { assunto: "Promises e async/await", concluido: true },
      { assunto: "Manipulação de APIs com fetch", concluido: false },
      { assunto: "Classes e orientação a objetos em JavaScript", concluido: true },
      { assunto: "Modules (import/export)", concluido: true },
      { assunto: "Tratamento de erros com try/catch/finally", concluido: true },
      { assunto: "Expressões regulares (RegEx)", concluido: true },
      { assunto: "Debounce e throttle", concluido: false },
      { assunto: "Conceito de Event Loop e call stack", concluido: false },
    ],

    react: [
      // Iniciante
      { assunto: "O que é React e por que utilizá-lo", concluido: true },
      { assunto: "Criando um componente funcional", concluido: true },
      { assunto: "JSX e sua sintaxe", concluido: true },
      { assunto: "Props e composição de componentes", concluido: true },
      { assunto: "useState - estado local", concluido: true },

      // Intermediário
      { assunto: "useEffect - efeitos colaterais", concluido: true },
      { assunto: "Eventos e manipulação de formulários", concluido: true },
      { assunto: "Listas e chaves (keys)", concluido: true },
      { assunto: "Context API para estado global", concluido: true },
      { assunto: "Custom Hooks", concluido: true },

      // Avançado
      { assunto: "Renderização condicional avançada", concluido: false },
      { assunto: "Memoização: React.memo, useMemo e useCallback", concluido: false },
      { assunto: "Performance e otimização", concluido: false },
      { assunto: "Code Splitting e Lazy Loading", concluido: false },
      { assunto: "Testes com React Testing Library", concluido: false },
    ],

    next: [
      // Iniciante
      { assunto: "O que é Next.js e suas vantagens", concluido: true },
      { assunto: "Estrutura de pastas no Next.js", concluido: true },
      { assunto: "Rotas baseadas em arquivos", concluido: true },
      { assunto: "Pages e componentes", concluido: true },
      { assunto: "Estilização com CSS Modules", concluido: true },

      // Intermediário
      { assunto: "getStaticProps e getServerSideProps", concluido: false },
      { assunto: "API Routes", concluido: true },
      { assunto: "Imagens com next/image", concluido: true },
      { assunto: "Redirecionamento e Reescritas", concluido: true },
      { assunto: "Deploy com Vercel", concluido: true },

      // Avançado
      { assunto: "Middleware no Next.js", concluido: true },
      { assunto: "Incremental Static Regeneration (ISR)", concluido: false },
      { assunto: "Internacionalização (i18n)", concluido: false },
      { assunto: "Autenticação com NextAuth", concluido: false },
      { assunto: "Estratégias de cache e revalidação", concluido: false },
    ],

    typescript: [
      // Iniciante
      { assunto: "O que é TypeScript e vantagens sobre JavaScript", concluido: true },
      { assunto: "Tipos primitivos: string, number, boolean", concluido: true },
      { assunto: "Interfaces e Tipagem de objetos", concluido: true },
      { assunto: "Union e Literal Types", concluido: false },
      { assunto: "Funções com tipagem", concluido: false },

      // Intermediário
      { assunto: "Type Assertions", concluido: false },
      { assunto: "Generics", concluido: true },
      { assunto: "Tipos Utilitários: Partial, Pick, Omit", concluido: false },
      { assunto: "Módulos e importação/exportação", concluido: true },
      { assunto: "Configuração básica com tsconfig.json", concluido: false },

      // Avançado
      { assunto: "Narrowing e Type Guards", concluido: false },
      { assunto: "Inferência de tipos avançada", concluido: false },
      { assunto: "Intersection Types e Mapped Types", concluido: false },
      { assunto: "Decorators", concluido: false },
      { assunto: "Integração com bibliotecas JavaScript", concluido: false },
    ],

    node: [
      // Iniciante
      { assunto: "O que é Node.js e para que serve", concluido: true },
      { assunto: "Instalação e configuração do Node.js", concluido: true },
      { assunto: "Módulos nativos (fs, http, path)", concluido: true },
      { assunto: "Executando scripts via terminal", concluido: true },
      { assunto: "Criando seu primeiro projeto Node.js", concluido: true },
      { assunto: "O que é Node.js e para que serve", concluido: true },
      // Intermediario
      { assunto: "Gerenciador de pacotes (npm e npx)", concluido: true },
      { assunto: "Criando servidor com HTTP nativo", concluido: true },
      { assunto: "Utilizando Express.js para rotas", concluido: true },
      { assunto: "Middlewares e rotas dinâmicas", concluido: false },
      { assunto: "Manipulação de arquivos (fs)", concluido: true },
      // Avançado
      { assunto: "Conexão com banco de dados (ex: MongoDB)", concluido: false },
      { assunto: "Autenticação e autorização", concluido: false },
      { assunto: "WebSockets e comunicação em tempo real", concluido: false },
      { assunto: "Async/Await e Promises", concluido: true },
      { assunto: "Trabalhando com banco de dados (ex: MongoDB)", concluido: true },
      { assunto: "Arquitetura MVC em Node.js", concluido: true },
      { assunto: "Deploy de aplicações Node", concluido: false },
      { assunto: "Criando APIs RESTful com Express", concluido: true },
    ],

    git: [
      // Iniciante
      { assunto: "O que é Git e para que serve", concluido: true },
      { assunto: "Instalação e configuração inicial (user.name / user.email)", concluido: true },
      { assunto: "Criando repositório local", concluido: true },
      { assunto: "Comandos básicos: init, add, commit, status", concluido: true },
      { assunto: "Criando e usando .gitignore", concluido: true },
      //Intermediário
      { assunto: "Visualizando histórico: log, diff", concluido: true },
      { assunto: "Branches: criação e navegação", concluido: true },
      { assunto: "Merge e resolução de conflitos", concluido: false },
      { assunto: "Stash: salvando alterações temporárias", concluido: false },
      { assunto: "Tags: marcando versões", concluido: false },
      // avançado
      { assunto: "Rebase vs Merge", concluido: false },
      { assunto: "Cherry-pick", concluido: false },
      { assunto: "Hooks personalizados", concluido: false },
      { assunto: "Trabalhando com múltiplos remotes", concluido: false },
      { assunto: "Análise de performance de repositórios", concluido: false },
    ],

    github: [
      // Iniciante
      { assunto: "O que é GitHub e sua importância", concluido: true },
      { assunto: "Criando conta no GitHub", concluido: true },
      { assunto: "Navegando pela interface do GitHub", concluido: true },
      { assunto: "Criando repositório no GitHub", concluido: true },
      { assunto: "O que é GitHub e como se conecta ao Git", concluido: true },
      { assunto: "Criando repositório remoto", concluido: true },
      { assunto: "Push e pull de repositórios", concluido: true },
      { assunto: "Clonando repositórios", concluido: true },
      { assunto: "Entendendo commits e branches no GitHub", concluido: true },
      // Intermediário
      { assunto: "Pull Requests: criação e revisão", concluido: false },
      { assunto: "Issues e gerenciamento de tarefas", concluido: false },
      { assunto: "Adicionando colaboradores ao projeto", concluido: false },
      { assunto: "Utilizando GitHub Projects", concluido: false },
      { assunto: "GitHub Pages para hospedar sites", concluido: true },
      // Avançado
      { assunto: "GitHub Actions: automação de CI/CD", concluido: false },
      { assunto: "Segurança com tokens de acesso", concluido: false },
      { assunto: "Autenticação 2FA", concluido: false },
      { assunto: "Templates e repositórios organizacionais", concluido: false },
      { assunto: "GitHub CLI: utilizando via terminal", concluido: false },
    ]  

  },
];
