// ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// dados
const DATA = {
  categorias: [
    {
      nome: 'Linguagens de Programação',
      itens: ['Java', 'Dart', 'C#', 'SQL', 'TypeScript']
    },
    {
      nome: 'Frameworks & Runtimes',
      itens: ['Quarkus', 'Flutter', 'Spring Boot', '.Net', 'Angular', 'Unity']
    },
    {
      nome: 'Cloud & DevOps',
      itens: ['Docker', 'AWS', 'Hashicorp', 'CI/CD']
    },
    {
      nome: 'Testes & Qualidade',
      itens: ['JUnit']
    }
  ],
  detalhes: {
    Java: {
      sobre: 'Possuo conhecimento sólido em Java, que é reconhecido por sua biblioteca robusta e ecossistema maduro para' +
        ' servidores e cloud. Atualmente gerencio aplicações em Java 8/11/17 e dou manutenção em dois apps legado em Java SE.',
      relacionados: ['Quarkus', 'Spring Boot', 'JUnit']
    },
    Quarkus: {
      sobre: 'Framework Java otimizado para arranque rápido e baixo uso de memória. Sendo ele uma alternativa ao Spring Boot,' +
        ' devido ao seu boot rápido, baixo consumo e live reload que melhoram a produtividade ao realizar desenvolvimentos com ele,' +
        ' hoje todos os projetos que trabalho são feitos em cima desse framework.',
      relacionados: ['Java', 'Spring Boot']
    },
    'Spring Boot': {
      sobre: 'Framework do ecossistema Spring que padroniza apps com auto-configuration, starters e Actuator, priorizando' +
        ' produtividade e integração. Ainda não o usei em produção, estudo à parte, criando projetos pessoais e mirando certificações.',
      relacionados: ['Java', 'Quarkus']
    },
    Dart: {
      sobre: 'Dart é uma linguagem orientada a objetos com tipagem estática e sound null safety, com compilação JIT (hot reload)' +
        ' para dev e AOT para produção. Uso com o Flutter para apps mobile/web/desktop, a empregando em toda a parte lógica do front-end, ' +
        ' modelado com base nos padrões do DDD.',
      relacionados: ['Flutter']
    },
    Flutter: {
      sobre: 'Flutter é um toolkit UI multiplataforma (mobile/web/desktop) em dart, com layout reativo baseado em widgets.' +
        ' Pela produtividade e pelo codebase único para múltiplas plataformas, utilizo Flutter em todos os aplicativos que desenvolvo.',
      relacionados: ['Dart']
    },
    'C#': {
      sobre: 'C# é uma linguagem moderna, orientada a objetos e estaticamente tipada na plataforma .NET, com boa portabilidade' +
        ' e implantação simples (JIT/AOT). Minha experiência é majoritariamente em jogos com Unity (mecânicas e gameplay), além de suporte a uma aplicação' +
        ' além de suporte a uma aplicação .NET legada e uso recente em um projeto web com .NET + Angular.',
      relacionados: ['.Net', 'Unity']
    },
    '.Net': {
      sobre: '.NET é uma plataforma multiplataforma (Windows/Linux/macOS) com bibliotecas e ferramentas unificadas.' +
        ' Não possuo grande experência com o framework, mas sou responsável pela manutenção de um projeto legado e uso recente em um projeto web com .NET + Angular.',
      relacionados: ['C#']
    },
    Unity: {
      sobre: 'Unity é um motor de jogos multiplataforma com suporte para URP/HDRP, física, animação, UI e áudio.' +
        ' Utilizo para prototipar mecânicas e contar histórias em jogos, sempre utilizando C# no código.',
      relacionados: ['C#']
    },
    SQL: {
      sobre: 'SQL é a linguagem padrão para bancos relacionais. Com ele modelo esquemas, escrevo DDL/DML/DQL, crio índices e faço migrações.' +
        ' Uso majoritoriamente MySQL e SQLite (local em apps mobile) em meu trabalho,' +
        ' mas também já utilizei PostgresSQL e conheço um pouco do SQL Server',
      relacionados: []
    },
    TypeScript: {
      sobre: 'TypeScript é um superconjunto de JavaScript com tipagem estrutural, com melhorias em manutenção e seguraça' +
        ' para grandes codebases. Sempre a utilizei com aplicações Angular, sendo ela a parte core do funcionamento da tela.',
      relacionados: ['Angular']
    },
    Docker: {
      sobre: 'Docker é uma plataforma de contêineres (OCI) que empacota app + dependências em imagens imutáveis em camadas,' +
        ' executadas isoladas por namespaces/cgroups. Uso em projetos pessoais para orquestrar serviços com docker-compose' +
        ' (principalmente bancos de dados) sem instalar nada localmente.',
      relacionados: []
    },
    AWS: {
      sobre: 'AWS: uso principalmente S3 para armazenamento de objetos para realizar o versionamento de integrações, e para,' +
        ' que elas sejam repassadas aos clientes. Já realizei a configuração inicial do IAM (usuários, roles, políticas' +
        ' gerenciadas e chaves de acesso).',
      relacionados: []
    },
    Angular: {
      sobre: 'Angular é um framework TypeScript para fazer Single-Page Applications e aplicações mais robustas, com uma' +
        ' implementação simples de Injeção de Dependência e programação reativa. Já trabalhei profissionalmente com' +
        ' Angular em uma aplicação legado, e retomei recentemente em um projeto .NET + Angular.',
      relacionados: ['TypeScript']
    },
    HashiCorp: {
      sobre: 'A HashiCorp fornece ferramentas de automação para operar e organizar sistemas em nuvem. Com ela ajudei a' +
        ' implementar o Nomad e o Vault, sendo o Nomad um orquestrador para cuidar de agendamentos e gerenciar o ciclo' +
        ' de vida de aplicações do cliente, enquanto o Vault faz uma gestão de secrets criptografados para proteger' +
        ' os dados dos clientes.',
      relacionados: []
    },
    'CI/CD': {
      sobre: 'Automatizo build, testes e deploy com CircleCI, usando workflows por branch/tag e artefatos publicados para' +
        ' Play Store, TestFlight e AWS.',
      relacionados: []
    },
    JUnit: {
      sobre: 'Uso JUnit 5 no Quarkus para testes unitários e de integração. Quando preciso de dados reais, utilizo o banco' +
        ' de testes da empresa; nos demais casos, isolo dependências com mocks para cenários rápidos.',
      relacionados: []
    }
  }
};

const list = document.getElementById('skills-list');
const detail = document.getElementById('skill-detail');
const title = document.getElementById('detail-title');
const body = document.getElementById('detail-body');
const sub = document.getElementById('subskills');
const back = document.getElementById('btn-back');

function show(el, cb) {
  if (!el.classList.contains('hidden')) {
    cb && cb();
    return;
  }
  el.classList.remove('hidden', 'fade-out', 'fade-in');
  void el.offsetWidth;               // reflow
  el.classList.add('fade-in');
  el.addEventListener('animationend', () => {
    el.classList.remove('fade-in');
    cb && cb();
  }, { once: true });
}

function hide(el, cb) {
  if (el.classList.contains('hidden')) {
    cb && cb();
    return;
  }
  el.classList.remove('fade-in');
  el.classList.add('fade-out');
  el.addEventListener('animationend', () => {
    el.classList.add('hidden');
    el.classList.remove('fade-out');
    cb && cb();
  }, { once: true });
}

function renderList() {
  hide(detail, () => show(list));
  list.innerHTML = '';
  DATA.categorias.forEach(cat => {
    const card = document.createElement('section');
    card.className = 'category';
    card.innerHTML = `<h3>${cat.nome}</h3><div class="skills"></div>`;
    const wrap = card.querySelector('.skills');
    cat.itens.forEach(name => {
      const el = document.createElement('button');
      el.className = 'skill';
      el.type = 'button';
      el.textContent = name;
      el.addEventListener('click', () => openDetail(name));
      wrap.appendChild(el);
    });
    list.appendChild(card);
  });
}

function openDetail(name) {
  const d = DATA.detalhes[name] || { sobre: 'Em breve.', relacionados: [] };
  title.textContent = name;
  body.textContent = d.sobre;
  sub.innerHTML = '';
  (d.relacionados || []).forEach(r => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = r;
    btn.addEventListener('click', () => openDetail(r));
    li.appendChild(btn);
    sub.appendChild(li);
  });
  list.classList.remove('visible', 'reveal');
  detail.classList.remove('visible', 'reveal');
  hide(list, () => {
    show(detail);
    const headerH = document.querySelector('header')?.offsetHeight || 0;
    detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.scrollBy({ top: -(headerH + 12), left: 0, behavior: 'instant' });
  });
}

back.addEventListener('click', renderList);

const reveal = () => {
  const rect = list.getBoundingClientRect();
  const vh = window.innerHeight;
  if (rect.top < vh - 60) list.classList.add('visible');
};
document.addEventListener('scroll', reveal, { passive: true });
window.addEventListener('load', () => {
  renderList();
  reveal();
});
