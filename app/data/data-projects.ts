import { PortfolioProject } from '../types/types';

export const projects: PortfolioProject[] = [
    {
        id: '01',
        title: 'PCE Tools - CPD',
        slug: 'pce-tools-cpd',
        description: 'Sistema de gerenciamento de cadastro e chegada de caminhões no CPD.',
        category: 'front-end',
        platform: 'desktop',
        src: '',
        image: '/imgs-projetos/pce-tools-cpd-tela-cadastro-chegada-do-caminhao.png',
        imageList: [
            { title: 'Tela de cadastro - chegada do caminhão', image: '/imgs-projetos/pce-tools-cpd-tela-cadastro-chegada-do-caminhao.png' },
            { title: 'Tela de gerenciamento de estado', image: '/imgs-projetos/pce-tools-cpd-tela-de-gerenciamento-de-estado_liberar_entrada-do-caminhao-e-alteracao-cadastrais.png' }
        ],
        technologies: ['React.js', 'Next.js', 'NextAuth', 'TypeScript', 'Tailwind', 'Shadcn UI', 'PDF.js', 'XLSX.js', 'Firebase', 'Evolution API']
    },
    {
        id: '02',
        title: 'Pull Time',
        slug: 'pull-time',
        description: 'Fornecendo visibilidade para saber visualmente como estão todas as cargas paradas no piso do recebimento.',
        category: 'front-end',
        platform: 'desktop',
        src: '',
        image: '/imgs-projetos/pulltime-tela-inicial-primeiro-estado-carga.png',
        imageList: [
            { title: 'Tela inicial - primeiro estado da carga', image: '/imgs-projetos/pulltime-tela-inicial-primeiro-estado-carga.png' },
            { title: 'Tela inicial - segundo estado da carga', image: '/imgs-projetos/pulltime-tela-inicial-segundo-estado-carga.png' },
            { title: 'Tela inicial - terceiro estado da carga', image: '/imgs-projetos/pulltime-tela-inicial-terceiro-estado-carga.png' },
            { title: 'Gerenciando estado da carga', image: '/imgs-projetos/pulltime-gerenciando-estado-carga.png' },
            { title: 'Modelo de impressão', image: '/imgs-projetos/pulltime-modelo-de-impressao.png' }
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Webpack']
    },
    {
        id: '03',
        title: 'PCE Tools - Recebimento Conferência',
        slug: 'pce-tools-recebimento-conferencia',
        description: 'Aplicação para gestão de todas as cargas liberadas pelo CPD no recebimento.',
        category: 'front-end',
        platform: 'desktop',
        src: '',
        image: '/imgs-projetos/pce-tools-recebimento_conferencia-tela-de-liberacao-carga.png',
        imageList: [
            { title: 'Tela de liberação de carga', image: '/imgs-projetos/pce-tools-recebimento_conferencia-tela-de-liberacao-carga.png' },
            { title: 'Cargas descarregadas', image: '/imgs-projetos/pce-tools-recebimento_conferencia-cargas-descarregadas.png' },
            { title: 'Alterando o status', image: '/imgs-projetos/pce-tools-recebimento_conferencia-alterando-o-status.png' },
            { title: 'Cargas conferidas finalizadas', image: '/imgs-projetos/pce-tools-recebimento_conferencia-cargas_conferecia_finalizadas-para-puxar-para-o-estoque.png' },
            { title: 'Status acima de 30 minutos', image: '/imgs-projetos/pce-tools-recebimento_conferencia-cargas_conferecia_finalizadas-para-puxar-para-o-estoque-status-acima-de-30_minutos.png' },
            { title: 'Status acima de 50 minutos', image: '/imgs-projetos/pce-tools-recebimento_conferencia-cargas_conferecia_finalizadas-para-puxar-para-o-estoque-status-acima-50-minutos.png' },
            { title: 'Módulo de impressão', image: '/imgs-projetos/pce-tools-recebimento_conferencia-modulo-para-impressao-para-identificar-cargas-liberadas.png' },
            { title: 'Controle de docas', image: '/imgs-projetos/pce-tools-recebimento-controle-de-docas-liberacao-para-descarga.png' }
        ],
        technologies: ['React.js', 'Next.js', 'NextAuth', 'TypeScript', 'Tailwind', 'Shadcn UI', 'PDF.js', 'XLSX.js', 'Firebase', 'Evolution API']
    },
    {
        id: '04',
        title: 'PCE Tools - Painel de Tarefas',
        slug: 'pce-tools-painel-tarefas',
        description: 'Dashboard web para gerenciamento de tarefas do almoxarifado, visualização de status e acompanhamento de operações.',
        category: 'front-end',
        platform: 'desktop',
        src: '',
        image: '/imgs-projetos/pce-tools-gestao-estoque-painel-de-tarefas.png',
        imageList: [
            { title: 'Painel de tarefas', image: '/imgs-projetos/pce-tools-gestao-estoque-painel-de-tarefas.png' }
        ],
        technologies: ['React.js', 'Next.js', 'NextAuth', 'TypeScript', 'Tailwind', 'Shadcn UI', 'PDF.js', 'XLSX.js', 'Firebase', 'Evolution API']
    },
    {
        id: '05',
        title: 'PCE Tools - Módulo Coletor',
        slug: 'pce-tools-modulo-coletor',
        description: 'Aplicação para coletor de dados (handheld) com operações de picking, contagem, impressão de fichas pallet e quarentena.',
        category: 'front-end',
        platform: 'mobile',
        src: '',
        image: '/imgs-projetos/pce-tools-modulo-de-opercoes-via-coletor-tela-inicial.png',
        imageList: [
            { title: 'Tela inicial do coletor', image: '/imgs-projetos/pce-tools-modulo-de-opercoes-via-coletor-tela-inicial.png' },
            { title: 'Lista de aplicações', image: '/imgs-projetos/pce-tools-modulo-de-opercoes-via-coletor-lista-de-aplicacoes.png' },
            { title: 'Iniciar atividade', image: '/imgs-projetos/pce-tools-gestao-de-estoque-modulo-de-opercoes-via-coletor-tela-inicar-atividade.png' },
            { title: 'Contagem aérea', image: '/imgs-projetos/pce-tools-gestao-de-estoque-modulo-de-opercoes-via-coletor-tela-cotativo-aereo.png' },
            { title: 'Picking reativo', image: '/imgs-projetos/pce-tools-modulo-de-opercoes-via-coletor-retativo-picking.png' },
            { title: 'Quarentena fracionada', image: '/imgs-projetos/pce-tools-modulo-de-opercoes-via-coletor-querentena-fracionada.png' },
            { title: 'Seleção de arquivo - impressão', image: '/imgs-projetos/pce-tools-modulo-impressao-ficha-pallet-selecao-arquivp.png' },
            { title: 'Visualização do documento para impressão', image: '/imgs-projetos/pce-tools-modulo-impressao-ficha-pallet-visualizacao-do-documento-para-impressao.png' }
        ],
        technologies: ['React.js', 'Next.js', 'NextAuth', 'TypeScript', 'Tailwind', 'Shadcn UI', 'PDF.js', 'XLSX.js', 'Firebase', 'Evolution API']
    },
    {
        id: '06',
        title: 'To Fill In',
        slug: 'to-fill-in',
        description: 'Projeto de automação que auxilia no preenchimento de formulários.',
        category: 'automacao',
        platform: 'desktop',
        src: '',
        image: '/imgs-projetos/tofillin-tela-login.png',
        imageList: [
            { title: 'Tela de login', image: '/imgs-projetos/tofillin-tela-login.png' },
            { title: 'Tela inicial', image: '/imgs-projetos/tofillin-tela-ininicial.png' },
            { title: 'Seleção de arquivo', image: '/imgs-projetos/tofillin-selecao-arquivo.png' }
        ],
        technologies: ['Electron.js', 'JavaScript', 'HTML', 'CSS']
    }
];
