(function () {
  const N = window.NEGOCIOS;
  const app = document.getElementById('app');
  const reais = (v, casas) => 'R$ ' + Number(v).toLocaleString('pt-BR', { minimumFractionDigits: casas || 0, maximumFractionDigits: casas || 0 });
  const invest = (n) => n.itens.reduce((a, i) => [a[0] + i[1], a[1] + i[2]], [0, 0]);
  const arred = (v) => Math.round(v / 50) * 50;
  const faixa = (n) => { const [a, b] = invest(n); return reais(arred(a)) + ' a ' + reais(arred(b)); };
  const NOMES_TAG = { mensal: 'paga todo mês', empresa: 'cliente empresa', casa: 'cliente casa' };
  const tagsHtml = (n) => n.tags.map(t => `<span class="tag ${t}">${NOMES_TAG[t]}</span>`).join('');
  const dific = (d) => ['', 'Fácil de começar', 'Precisa de treino', 'Exige experiência'][d];

  // guardar coisas do visitante (pode falhar em janela anônima)
  const guarda = {
    ler(k, pad) { try { const v = localStorage.getItem('pack-ze:' + k); return v == null ? pad : JSON.parse(v); } catch (e) { return pad; } },
    gravar(k, v) { try { localStorage.setItem('pack-ze:' + k, JSON.stringify(v)); } catch (e) { /* sem armazenamento */ } }
  };

  const toast = (() => { const el = document.createElement('div'); el.className = 'toast'; document.body.appendChild(el); let t; return (txt) => { el.textContent = txt; el.classList.add('on'); clearTimeout(t); t = setTimeout(() => el.classList.remove('on'), 1800); }; })();

  // número que rola até o valor
  const rola = (el, alvo, fmt, ms) => {
    const de = 0, t0 = performance.now(), dur = ms || 900;
    const passo = (t) => { const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3); el.textContent = fmt(de + (alvo - de) * e); if (p < 1) requestAnimationFrame(passo); };
    requestAnimationFrame(passo);
  };

  const revela = () => {
    const els = app.querySelectorAll('.aparece');
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('on')); return; }
    const io = new IntersectionObserver((ent) => ent.forEach(x => { if (x.isIntersecting) { x.target.classList.add('on'); io.unobserve(x.target); } }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => io.observe(e));
  };

  const cartao = (n, i) => `
    <a class="cartao aparece" href="#/n/${n.id}" style="transition-delay:${(i % 6) * 60}ms">
      <span class="num">${String(n.n).padStart(2, '0')}</span>
      ${n.campeao ? '<span class="campeao">🔥 o do vídeo</span>' : ''}
      <span class="emo">${n.emoji}</span>
      <h3>${n.nome}</h3>
      <p>${n.frase}</p>
      <div class="tags">${tagsHtml(n)}</div>
      <div class="rodape-c"><div><span>Pra começar</span><b>${faixa(n)}</b></div><div style="text-align:right"><span>Cobra</span><b>${n.cobrar[0][1].replace(/ \(est\.\)/, '')}</b></div></div>
    </a>`;

  // ---------- início ----------
  const FILTROS = [
    ['todos', 'Todos', () => true],
    ['ate1', 'Até R$ 1 mil', n => invest(n)[0] <= 1000],
    ['ate2', 'Até R$ 2 mil', n => invest(n)[0] <= 2000],
    ['mensal', 'Paga todo mês', n => n.tags.includes('mensal')],
    ['empresa', 'Cliente empresa', n => n.tags.includes('empresa')],
    ['casa', 'Cliente casa', n => n.tags.includes('casa')],
    ['facil', 'Fácil de começar', n => n.dificuldade === 1]
  ];
  let filtro = guarda.ler('filtro', 'todos');

  const inicio = () => {
    const menor = Math.min(...N.map(n => invest(n)[0]));
    const mensais = N.filter(n => n.tags.includes('mensal')).length;
    app.innerHTML = `
    <section class="pagina">
      <div class="heroi">
        <div>
          <h1 class="etiqueta">Negócios sem loja</h1><br>
          <div class="etiqueta branca sub">💸 20 jeitos de faturar sem pagar aluguel</div>
          <p class="lead">Cada negócio tem o que comprar e quanto custa, quanto cobrar, a conta do mês, a mensagem pronta pra mandar e o passo a passo do primeiro cliente.</p>
          <div class="acoes"><a class="botao" href="#/escolher">🎯 Me ajuda a escolher</a><a class="botao claro" href="#/n/frota">🚐 Ver o do lava-jato</a></div>
        </div>
        <div class="ze-caixa" id="zeCaixa"></div>
      </div>
      <div class="numeros">
        <div class="numero"><b data-n="20">0</b><span>negócios explicados</span></div>
        <div class="numero"><b data-n="${arred(menor)}" data-r>0</b><span>pra começar o mais barato</span></div>
        <div class="numero"><b data-n="${mensais}">0</b><span>com cliente que paga todo mês</span></div>
      </div>
      <div class="barra"><h2>Os 20 negócios</h2>${FILTROS.map(f => `<button class="chip${f[0] === filtro ? ' on' : ''}" data-f="${f[0]}">${f[1]}</button>`).join('')}</div>
      <div class="grade" id="grade"></div>
    </section>`;
    const ze = document.getElementById('ze').content.cloneNode(true);
    const caixa = document.getElementById('zeCaixa'); caixa.appendChild(ze);
    ['💵', '💸', '💵', '🪙'].forEach((g, i) => { const s = document.createElement('span'); s.className = 'grana'; s.textContent = g; s.style.left = (12 + i * 22) + '%'; s.style.top = '0'; s.style.animationDelay = (1.4 + i * 0.85) + 's'; caixa.appendChild(s); });
    app.querySelectorAll('.numero b').forEach(b => rola(b, +b.dataset.n, v => b.hasAttribute('data-r') ? reais(Math.round(v)) : Math.round(v), 1100));
    const pinta = () => {
      const f = FILTROS.find(x => x[0] === filtro) || FILTROS[0];
      const lista = N.filter(f[2]);
      document.getElementById('grade').innerHTML = lista.length ? lista.map(cartao).join('') : '<div class="vazio">Nenhum negócio nesse filtro.</div>';
      revela();
    };
    app.querySelectorAll('.chip').forEach(c => c.onclick = () => { filtro = c.dataset.f; guarda.gravar('filtro', filtro); app.querySelectorAll('.chip').forEach(x => x.classList.toggle('on', x === c)); pinta(); });
    pinta();
  };

  // ---------- negócio ----------
  const negocio = (id) => {
    const i = N.findIndex(n => n.id === id); if (i < 0) return inicio();
    const n = N[i], ant = N[(i + N.length - 1) % N.length], prox = N[(i + 1) % N.length];
    const [imin, imax] = invest(n);
    const c = n.conta;
    const casas = c.preco % 1 ? 2 : 0;
    const passoPreco = c.precoMax <= 15 ? 0.5 : c.precoMax <= 100 ? 1 : c.precoMax <= 500 ? 5 : 10;
    const passoQtd = c.qtdMax >= 2000 ? 50 : c.qtdMax >= 300 ? 5 : 1;
    const checks = guarda.ler('checks:' + n.id, []);
    const nome = guarda.ler('nome', '');
    app.innerHTML = `
    <article class="pagina">
      <a class="volta" href="#/">← Todos os negócios</a>
      <div class="cabeca">
        <div class="grande">${n.emoji}</div>
        <div><div class="qual">Negócio ${String(n.n).padStart(2, '0')} de 20 · ${dific(n.dificuldade)}</div><h1>${n.nome}</h1><p>${n.frase}</p></div>
      </div>
      <div class="tags">${tagsHtml(n)}</div>
      <div class="resumo">
        <div class="aparece"><small>Pra começar</small><b>${faixa(n)}</b></div>
        <div class="aparece" style="transition-delay:80ms"><small>Quanto cobrar</small><b>${n.cobrar[0][1]}</b><span class="quem">${n.cobrar[0][0]}</span></div>
        <div class="aparece" style="transition-delay:160ms"><small>Quem paga</small><div class="quem">${n.quem}</div></div>
      </div>

      <section class="bloco aparece"><h2><span class="ic">💡</span>Por que dá dinheiro</h2><p>${n.porque}</p></section>

      <section class="bloco aparece"><h2><span class="ic">🧰</span>O que tu precisa comprar</h2>
        <table class="lista">${n.itens.filter(x => x[2] > 0).map(x => `<tr><td><span class="marca-item">✓</span>${x[0]}</td><td>${x[1] === 0 ? 'até ' + reais(x[2]) : reais(x[1]) + ' a ' + reais(x[2])}</td></tr>`).join('')}
          <tr class="total"><td>Total pra começar</td><td>${reais(arred(imin))} a ${reais(arred(imax))}</td></tr></table>
        ${n.extra ? `<div class="nota">🚗 ${n.extra}</div>` : ''}
        <div class="nota">Dica: compra o modelo mais simples primeiro e só troca quando o trabalho pedir. Dá pra alugar o equipamento caro nas primeiras semanas.</div>
      </section>

      <section class="bloco aparece"><h2><span class="ic">💰</span>Quanto cobrar</h2>
        <table class="lista">${n.cobrar.map(x => `<tr><td>${x[0]}</td><td>${x[1]}</td></tr>`).join('')}</table>
        <div class="nota">"est." = estimativa nossa, sem fonte brasileira boa. Antes de fechar tua tabela, pede orçamento pra 3 concorrentes da tua cidade.</div>
      </section>

      <section class="bloco aparece"><h2><span class="ic">🧮</span>A conta do mês</h2>
        <div class="calc">
          <div>
            <div class="campo"><label>Preço ${c.un} <output id="oPreco"></output></label><input id="iPreco" type="range" min="${passoPreco}" max="${c.precoMax}" step="${passoPreco}" value="${c.preco}"></div>
            <div class="campo"><label>${c.qtdLabel[0].toUpperCase() + c.qtdLabel.slice(1)} <output id="oQtd"></output></label><input id="iQtd" type="range" min="${passoQtd}" max="${c.qtdMax}" step="${passoQtd}" value="${c.qtd}"></div>
            <div class="nota">${n.contaNota}</div>
          </div>
          <div class="res">
            <div class="linha"><span>Faturamento</span><b id="rFat"></b></div>
            <div class="linha"><span>Produto e material (${reais(c.custoUnit, c.custoUnit % 1 ? 2 : 0)} ${c.un.replace(/^por /, 'por ')})</span><b id="rVar"></b></div>
            <div class="linha"><span>Custo fixo (${c.fixoLabel})</span><b id="rFixo">${reais(c.fixo)}</b></div>
            <div class="barras"><div class="barra-c"><i id="bFat" style="background:var(--azul)"></i></div><div class="barra-c"><i id="bCusto" style="background:var(--vermelho)"></i></div><div class="barra-c"><i id="bSobra" style="background:var(--verde)"></i></div></div>
            <div class="sobra"><small>Sobra no mês, antes do imposto do MEI</small><b id="rSobra"></b></div>
            <div class="aviso">Exemplo de conta, não promessa. Teu resultado depende da tua cidade, do teu preço e de quantos clientes tu fecha.</div>
          </div>
        </div>
      </section>

      <section class="bloco aparece"><h2><span class="ic">🎯</span>Como fechar o primeiro cliente</h2><ol class="passos">${n.passos.map(p => `<li>${p}</li>`).join('')}</ol></section>

      <section class="bloco aparece"><h2><span class="ic">💬</span>Mensagem pronta pra mandar</h2>
        <input class="msg-nome" id="iNome" placeholder="Teu nome (entra na mensagem)" value="${nome.replace(/"/g, '&quot;')}">
        <div class="balao" id="balao"></div>
        <div class="msg-acoes"><button class="botao" id="bCopia">📋 Copiar mensagem</button><a class="botao verde" id="bZap" target="_blank" rel="noopener">Abrir no WhatsApp</a></div>
      </section>

      <section class="bloco aparece"><h2><span class="ic">✅</span>Checklist da primeira semana</h2>
        <div class="progresso"><i id="prog"></i></div><small id="progTxt"></small>
        <ul class="checks">${n.semana.map((s, k) => `<li><label><input type="checkbox" data-k="${k}"${checks.includes(k) ? ' checked' : ''}><span>${s}</span></label></li>`).join('')}</ul>
      </section>

      <section class="bloco alerta aparece"><h2><span class="ic">⚠️</span>Cuidado com isso</h2><ul>${n.cuidados.map(x => `<li>${x}</li>`).join('')}</ul></section>

      <nav class="navega"><a href="#/n/${ant.id}"><small>← Anterior</small>${ant.emoji} ${ant.nome}</a><a href="#/n/${prox.id}"><small>Próximo →</small>${prox.emoji} ${prox.nome}</a></nav>
    </article>`;

    // calculadora
    const iP = document.getElementById('iPreco'), iQ = document.getElementById('iQtd');
    const sobraEl = document.getElementById('rSobra');
    let ultima = null;
    const conta = () => {
      const p = +iP.value, q = +iQ.value;
      const fat = p * q, vari = c.custoUnit * q, sobra = fat - vari - c.fixo;
      document.getElementById('oPreco').textContent = reais(p, casas || (p % 1 ? 2 : 0));
      document.getElementById('oQtd').textContent = q.toLocaleString('pt-BR');
      document.getElementById('rFat').textContent = reais(fat);
      document.getElementById('rVar').textContent = '− ' + reais(vari);
      const topo = Math.max(fat, vari + c.fixo, 1);
      document.getElementById('bFat').style.width = (fat / topo * 100) + '%';
      document.getElementById('bCusto').style.width = ((vari + c.fixo) / topo * 100) + '%';
      document.getElementById('bSobra').style.width = (Math.max(0, sobra) / topo * 100) + '%';
      sobraEl.classList.toggle('neg', sobra < 0);
      if (ultima === null) rola(sobraEl, sobra, v => reais(Math.round(v)), 1000); else sobraEl.textContent = reais(Math.round(sobra));
      if (ultima !== null) { sobraEl.classList.add('bate'); setTimeout(() => sobraEl.classList.remove('bate'), 120); }
      ultima = sobra;
    };
    iP.oninput = conta; iQ.oninput = conta; conta();

    // mensagem
    const iN = document.getElementById('iNome'), balao = document.getElementById('balao'), zap = document.getElementById('bZap');
    const texto = () => n.msg.replace('{nome}', iN.value.trim() || '[teu nome]');
    const msg = () => { balao.textContent = texto(); zap.href = 'https://wa.me/?text=' + encodeURIComponent(texto()); };
    iN.oninput = () => { guarda.gravar('nome', iN.value); msg(); }; msg();
    document.getElementById('bCopia').onclick = () => {
      const ok = () => toast('Mensagem copiada!');
      if (navigator.clipboard) navigator.clipboard.writeText(texto()).then(ok, () => { fallback(); ok(); }); else { fallback(); ok(); }
      function fallback() { const t = document.createElement('textarea'); t.value = texto(); document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (e) {} t.remove(); }
    };

    // checklist
    const prog = () => {
      const tot = n.semana.length, feitos = app.querySelectorAll('.checks input:checked').length;
      document.getElementById('prog').style.width = (feitos / tot * 100) + '%';
      document.getElementById('progTxt').textContent = feitos === tot ? 'Semana completa. Agora é só repetir! 🔥' : `${feitos} de ${tot} feitos`;
    };
    app.querySelectorAll('.checks input').forEach(ch => ch.onchange = () => {
      const marcados = [...app.querySelectorAll('.checks input:checked')].map(x => +x.dataset.k);
      guarda.gravar('checks:' + n.id, marcados); prog();
      if (marcados.length === n.semana.length) toast('Semana completa! 🔥');
    });
    prog();
    revela();
  };

  // ---------- escolher ----------
  const PERGUNTAS = [
    ['grana', 'Quanto tu tem pra começar?', [['500', 'Até R$ 500'], ['1500', 'Até R$ 1.500'], ['3000', 'Até R$ 3.000'], ['9999', 'Mais que isso']]],
    ['cliente', 'Tu prefere atender quem?', [['empresa', 'Empresa (contrato)'], ['casa', 'Gente em casa'], ['tanto', 'Tanto faz']]],
    ['altura', 'Topa trabalhar em altura (telhado, escada alta)?', [['sim', 'Topo'], ['nao', 'Nem pensar']]],
    ['ritmo', 'O que pesa mais pra ti?', [['mensal', 'Cliente que paga todo mês'], ['rapido', 'Começar rápido e fácil'], ['ticket', 'Serviço que paga mais por vez']]]
  ];
  const escolher = () => {
    const r = guarda.ler('quiz', {});
    app.innerHTML = `
    <section class="pagina quiz">
      <a class="volta" href="#/">← Todos os negócios</a>
      <h1 class="etiqueta" style="margin-top:22px;font-size:clamp(28px,6vw,44px);transform:rotate(-1.5deg)">Qual é o teu?</h1>
      <p style="color:var(--txt2);margin-top:16px">Responde 4 perguntas e o Zé separa os 3 negócios que mais combinam contigo.</p>
      ${PERGUNTAS.map(p => `<div class="pergunta"><h3>${p[1]}</h3><div class="opcoes">${p[2].map(o => `<button class="opcao${r[p[0]] === o[0] ? ' on' : ''}" data-p="${p[0]}" data-v="${o[0]}">${o[1]}</button>`).join('')}</div></div>`).join('')}
      <div id="resultado"></div>
    </section>`;
    const calcula = () => {
      const el = document.getElementById('resultado');
      if (PERGUNTAS.some(p => !r[p[0]])) { el.innerHTML = ''; return; }
      const altura = ['solar', 'calha'];
      const lista = N.map(n => {
        let s = 0; const [imin] = invest(n);
        if (imin > +r.grana) s -= 100;
        if (r.altura === 'nao' && altura.includes(n.id)) s -= 100;
        if (r.cliente !== 'tanto' && n.tags.includes(r.cliente)) s += 10;
        if (r.ritmo === 'mensal' && n.tags.includes('mensal')) s += 8;
        if (r.ritmo === 'rapido') s += (3 - n.dificuldade) * 5 - imin / 1000;
        if (r.ritmo === 'ticket') s += Math.min(10, n.conta.preco / 60);
        if (n.campeao) s += 2;
        return [s, n];
      }).filter(x => x[0] > -50).sort((a, b) => b[0] - a[0]).slice(0, 3).map(x => x[1]);
      el.innerHTML = lista.length
        ? `<div class="barra"><h2>Os 3 do teu perfil</h2></div><div class="grade">${lista.map(cartao).join('')}</div>`
        : '<div class="vazio">Com esse valor ainda não dá pra montar nenhum. Começa pelo passeador de cães ou pelas plantas, que custam pouco, e junta pro próximo.</div>';
      revela();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    app.querySelectorAll('.opcao').forEach(b => b.onclick = () => {
      r[b.dataset.p] = b.dataset.v; guarda.gravar('quiz', r);
      app.querySelectorAll(`.opcao[data-p="${b.dataset.p}"]`).forEach(x => x.classList.toggle('on', x === b));
      calcula();
    });
    if (PERGUNTAS.every(p => r[p[0]])) calcula();
  };

  // ---------- antes de começar ----------
  const comecar = () => {
    app.innerHTML = `
    <section class="pagina texto" style="max-width:760px;margin:0 auto">
      <a class="volta" href="#/">← Todos os negócios</a>
      <h1 class="etiqueta" style="margin-top:22px;font-size:clamp(28px,6vw,44px);transform:rotate(-1.5deg)">Antes de começar</h1>
      <h2>1. Escolhe um só</h2>
      <p>O erro mais comum é querer fazer 3 ao mesmo tempo. Escolhe 1, fecha os 5 primeiros clientes e só depois pensa no segundo. Os negócios que usam o mesmo equipamento (lavadora: frota, lixeira, carrinho e calçada) dá pra juntar depois.</p>
      <h2>2. Formaliza com o MEI</h2>
      <p>Empresa só contrata quem emite nota. A maioria desses serviços cabe no MEI: abre pelo Portal do Empreendedor (gov.br), de graça. Em 2026 o imposto do MEI de serviço fica em torno de R$ 86 por mês, e o limite é de R$ 81 mil por ano. Confere se a tua atividade está na lista de ocupações do MEI antes de abrir.</p>
      <h2>3. Como chegar no teu preço</h2>
      <p class="formula">preço = (custo do serviço + o que tu quer ganhar por hora × horas) + 20%</p>
      <p>Os 20% cobrem imposto, imprevisto e desconto. Depois compara com 3 concorrentes da tua cidade: se tu estiver muito abaixo, sobe. Barato demais parece amador.</p>
      <h2>4. Contrato simples</h2>
      <p>Pra cliente mensal, uma página basta: o que tu faz, a frequência, o preço, o dia do pagamento e como cancelar (aviso de 30 dias). Os dois assinam e cada um fica com uma via.</p>
      <h2>5. Foto de antes e depois, sempre</h2>
      <p>É a tua prova. Tira do mesmo ângulo, posta no status e no Instagram, e mostra pro próximo cliente. Em serviço de limpeza, a foto vende mais que qualquer conversa.</p>
      <h2>6. Segurança</h2>
      <p>Altura, produto químico, eletricidade e trabalho de madrugada aparecem em vários negócios. Lê o bloco "Cuidado com isso" de cada um. Curso de NR-35 (altura) é barato e obrigatório pra quem sobe em telhado.</p>
      <h2 id="fontes">De onde vêm os números</h2>
      <p>Pesquisamos em novembro de 2026 em lojas, guias de preço, reportagens e compras públicas. São médias: na tua cidade pode ser mais ou menos. Onde está "est.", não achamos fonte brasileira boa e fizemos uma estimativa.</p>
      <ul class="fontes">${window.FONTES.map(f => `<li><a href="${f[1]}" target="_blank" rel="noopener">${f[0]}</a></li>`).join('')}</ul>
    </section>`;
  };

  // ---------- rotas ----------
  const rota = () => {
    const h = location.hash.replace(/^#\/?/, '');
    document.querySelectorAll('.topo nav a').forEach(a => a.classList.toggle('ativo', a.getAttribute('href') === '#/' + h));
    if (h.startsWith('n/')) negocio(h.slice(2));
    else if (h === 'escolher') escolher();
    else if (h === 'comecar') comecar();
    else inicio();
    window.scrollTo(0, 0);
  };
  window.addEventListener('hashchange', rota);
  rota();
})();
