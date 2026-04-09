const botao = document.getElementById('botao-tema');
const body = document.body;
const header = document.querySelector('header');

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

botao.addEventListener('click', (e) => {
  e.preventDefault();
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Filtro e busca de projetos
const buscaProjeto = document.getElementById('busca-projeto');
const filtroBotoes = document.querySelectorAll('.filtro-btn');
const cardsProjeto = document.querySelectorAll('#projeto-container .projeto');
let filtroAtivo = 'todos';

function aplicarFiltroProjetos() {
  const termo = (buscaProjeto?.value || '').trim().toLowerCase();

  cardsProjeto.forEach(card => {
    const titulo = card.querySelector('.titulo')?.textContent.toLowerCase() || '';
    const tags = card.dataset.tags || '';
    const combinaFiltro = filtroAtivo === 'todos' || tags.includes(filtroAtivo);
    const combinaBusca = titulo.includes(termo);
    card.style.display = combinaFiltro && combinaBusca ? '' : 'none';
  });
}

if (buscaProjeto) {
  buscaProjeto.addEventListener('input', aplicarFiltroProjetos);
}

filtroBotoes.forEach(botaoFiltro => {
  botaoFiltro.addEventListener('click', () => {
    filtroAtivo = botaoFiltro.dataset.filter || 'todos';
    filtroBotoes.forEach(btn => btn.classList.remove('ativo'));
    botaoFiltro.classList.add('ativo');
    aplicarFiltroProjetos();
  });
});

// Botão de voltar ao topo
const botaoTopo = document.getElementById('voltar-topo');
function atualizarBotaoTopo() {
  if (!botaoTopo) return;
  botaoTopo.classList.toggle('visivel', window.scrollY > 380);
}

if (botaoTopo) {
  botaoTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

window.addEventListener('scroll', atualizarBotaoTopo);
window.addEventListener('load', () => {
  atualizarBotaoTopo();
  aplicarFiltroProjetos();
});