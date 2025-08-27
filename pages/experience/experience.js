document.getElementById('year').textContent = new Date().getFullYear();

const DATA = [
  {
    periodo: '2020 - Atual',
    cargo: 'Programador',
    empresa: 'Hipcom',
    desc: 'Desenvolvedor Fullstack, tendo que criar e manter aplicações principalente em Java e \n' +
      'Flutter, também tendo que lidar com manutenção em projetos .NET, Angular, Firebase e \n' +
      ' projetos devops com solução da Hashicorp e nuvem da Amazon',
  },
  {
    periodo: '2018 - 2020',
    cargo: 'Analista de Suporte',
    empresa: 'Locaweb',
    desc: '- Suporte técnico via protocolo, chat e telefone;<br>' +
      '- Análise em serviços de Email(Dovecot), Hospedagem Linux(Debian e CentOS) e hospedagem Windows(Windows Server);<br>' +
      '- Análise de servidores de banco de dados MySQL, SQL Server e Postgres;<br>' +
      '- Batimento de metas definidas pelo KPI do suporte.',
  },
  {
    periodo: '2018 - 2023',
    cargo: 'Estudante',
    empresa: 'Senac Santo Amaro',
    desc: 'Estudo focado no Desenvolvimento de Jogos e áreas afins, integrando programação (além de orientação a' +
      ' objetos, Inteligência Artificial, boas práticas e design pattern), arte (2D e modelagem) e gestão de projetos' +
      ' (metodologias ágeis, projeção e fluxo de trabalho em grupo).',
  }
];

const list = document.getElementById('timeline');

function render() {
  const frag = document.createDocumentFragment();
  DATA.forEach(d => {
    const li = document.createElement('li');
    li.className = 'tl-item fade-in';

    const dot = document.createElement('span');
    dot.className = 'tl-dot';
    li.appendChild(dot);

    const card = document.createElement('article');
    card.className = 'tl-card';
    card.innerHTML = `
      <header class="tl-head">
        <span class="tl-role">${d.cargo} - ${d.empresa}</span>
        <time class="tl-meta">${d.periodo}</time>
      </header>
      <p class="tl-desc">${d.desc}</p>
    `;
    li.appendChild(card);
    frag.appendChild(li);
  });
  list.innerHTML = '';
  list.appendChild(frag);
}

render();
