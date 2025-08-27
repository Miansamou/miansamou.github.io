document.getElementById('year').textContent = new Date().getFullYear();

const DATA = [
  {
    id: 'angular',
    nome: '.NET 9 + Angular',
    ano: 2025,
    desc: 'Monorepo com API (.NET 9) e SPA (Angular). Persistência em PostgreSQL (Docker), autenticação com JWT, CRUD de Products, cadastro/login de usuários.',
    tags: ['backend', 'web'],
    tech: ['.NET', 'Angular', 'Docker', 'PostgreSQL'],
    thumb: '../../assets/images/angular.jpg',
    links: {
      github: 'https://github.com/Miansamou/angular-dotnet-orders'
    }
  },
  {
    id: 'dav',
    nome: 'DAV by Hipcom',
    ano: 2022,
    desc: 'Emissão de pedidos online/offline, multi-loja e painel administrativo.',
    tags: ['mobile'],
    tech: ['Flutter', 'Quarkus', 'SQLite', 'Mysql'],
    thumb: '../../assets/images/dav.jpeg',
    links: {
      appstore: 'https://apps.apple.com/br/app/dav-by-hipcom/id1613205650',
      play: 'https://play.google.com/store/apps/details?id=br.com.hipcom.dav'
    }
  },
  {
    id: 'base',
    nome: 'Base by Hipcom',
    ano: 2023,
    desc: 'Dashboards e relatórios com atualização em tempo real.',
    tags: ['mobile', 'desktop'],
    tech: ['Flutter', 'Quarkus', 'SQLite', 'Mysql'],
    thumb: '../../assets/images/base.jpeg',
    links: {
      appstore: 'https://apps.apple.com/br/app/base-by-hipcom/id1636719687',
      play: 'https://play.google.com/store/apps/details?id=br.com.hipcom.base'
    }
  },
  {
    id: 'compras',
    nome: 'Compras by Hipcom',
    ano: 2024,
    desc: 'Pedidos de compras por fornecedor com autonomia e agilidade.',
    tags: ['mobile'],
    tech: ['Flutter', 'Quarkus', 'SQLite', 'Mysql'],
    thumb: '../../assets/images/compras.jpeg',
    links: {
      appstore: 'https://apps.apple.com/br/app/compras-by-hipcom/id6450755920',
      play: 'https://play.google.com/store/apps/details?id=br.com.hipcom.pedido'
    }
  },
  {
    id: 'anguysh',
    nome: 'Anguysh',
    ano: 2021,
    desc: 'Controle um pequeno dragão que encontra-se perdido nas profundidades de uma masmorra misteriosa. Sozinho,' +
      ' você terá que explorar o local para encontrar as suas memórias perdidas que estão espalhadas por toda essa prisão.',
    tags: ['game'],
    tech: ['Unity', 'C#'],
    thumb: '../../assets/images/anguysh.jpg',
    links: { itch: 'https://felipesenacjogos.itch.io/anguysh', github: 'https://github.com/Miansamou/Anguysh' }
  }
];

const grid = document.getElementById('grid');
const filters = document.getElementById('filters');
const q = document.getElementById('q');

function linkBtn(href, label) {
  return `<a class="btn" href="${href}" target="_blank" rel="noopener">${label}</a>`;
}

function card(p) {
  const actions = [
    p.links?.appstore && linkBtn(p.links.appstore, 'App Store'),
    p.links?.play && linkBtn(p.links.play, 'Google Play'),
    p.links?.itch && linkBtn(p.links.itch, 'Itch.io'),
    p.links?.github && linkBtn(p.links.github, 'GitHub'),
    p.links?.site && linkBtn(p.links.site, 'Site')
  ].filter(Boolean).join('');

  return `
  <article class="card" data-tags="${p.tags.join(',')}">
    <div class="thumb">
      ${p.thumb ? `<img src="${p.thumb}" alt="">` : ''}
      <span class="badge">${p.ano}</span>
    </div>
    <div class="body">
      <div class="title"><h3>${p.nome}</h3><span class="meta">${p.tech.join(' • ')}</span></div>
      <p class="desc">${p.desc}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="actions">${actions}</div>
    </div>
  </article>`;
}

function render(list) {
  grid.innerHTML = list.map(card).join('');
}

function applyFilter() {
  const tag = filters.querySelector('.active')?.dataset.tag || 'all';
  const term = q.value.trim().toLowerCase();
  const out = DATA.filter(p => {
    const byTag = tag === 'all' || p.tags.includes(tag);
    const byText = !term || `${p.nome} ${p.desc} ${p.tech.join(' ')}`
      .toLowerCase().includes(term);
    return byTag && byText;
  });
  render(out);
}

filters.addEventListener('click', (e) => {
  const b = e.target.closest('.chip');
  if (!b) return;
  filters.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  applyFilter();
});
q.addEventListener('input', applyFilter);

document.getElementById('year').textContent = new Date().getFullYear();
applyFilter();
