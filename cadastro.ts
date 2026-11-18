/* Cadastro em janelas, por etapas (candidato e empresa). TypeScript -> cadastro.js (npx tsc -p .)
   DEMONSTRAÇÃO: nada é enviado. Dados sensíveis (CPF e etapa de acessibilidade) nunca entram no rascunho salvo.
   PONTO DE INTEGRAÇÃO: em concluir(), trocar por POST /api/cadastro (candidato ou empresa). */
declare const AVEN: any;
type Tipo = 'candidato' | 'empresa';
type Kind = 'text' | 'email' | 'tel' | 'date' | 'url' | 'textarea' | 'select' | 'file' | 'check' | 'checks' | 'status';
interface Campo { id: string; rotulo: string; kind?: Kind; req?: boolean; opcoes?: readonly string[]; ajuda?: string; sens?: boolean; aceita?: string; grupo?: string }
interface Etapa { titulo: string; intro?: string; campos: Campo[]; privado?: boolean; revisao?: boolean }
type Valor = string | string[];
interface Estado { tipo: Tipo; i: number; vals: Record<string, Valor>; arq: Record<string, string>; sujo: boolean; fim: boolean }

const UFS = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
const STATUS = ['Não informado', 'Disponível', 'Sob solicitação', 'Ainda não disponível'] as const;
const AREAS = ['Tecnologia', 'Design', 'Dados', 'Saúde', 'Educação', 'Engenharia', 'Finanças', 'Administrativo', 'Atendimento', 'Marketing', 'Indústria', 'Outra'];
const R = (id: string, rotulo: string, grupo: string): Campo => ({ id, rotulo, kind: 'status', grupo });

const ETAPAS: Record<Tipo, Etapa[]> = {
  candidato: [
    { titulo: 'Informações pessoais', campos: [
      { id: 'nome', rotulo: 'Nome completo', req: true }, { id: 'nasc', rotulo: 'Data de nascimento', kind: 'date' },
      { id: 'email', rotulo: 'E-mail', kind: 'email', req: true }, { id: 'tel', rotulo: 'Telefone', kind: 'tel' },
      { id: 'cpf', rotulo: 'CPF (opcional)', sens: true, ajuda: 'Não é salvo no rascunho. Nesta demonstração nada é enviado.' },
      { id: 'cidade', rotulo: 'Cidade' }, { id: 'uf', rotulo: 'Estado', kind: 'select', opcoes: UFS },
      { id: 'foto', rotulo: 'Fotografia de perfil (opcional)', kind: 'file', aceita: 'image/*' }] },
    { titulo: 'Perfil profissional', campos: [
      { id: 'area', rotulo: 'Área de interesse', kind: 'select', opcoes: AREAS, req: true },
      { id: 'formacao', rotulo: 'Formação acadêmica', kind: 'select', opcoes: ['Ensino fundamental', 'Ensino médio', 'Técnico', 'Superior em andamento', 'Superior completo', 'Pós-graduação'] },
      { id: 'exp', rotulo: 'Experiências profissionais', kind: 'textarea', ajuda: 'Sem experiência? Conte projetos escolares, voluntariado e cursos.' },
      { id: 'cursos', rotulo: 'Cursos', kind: 'textarea' }, { id: 'habil', rotulo: 'Habilidades' },
      { id: 'disp', rotulo: 'Disponibilidade', kind: 'select', opcoes: ['Imediata', 'Em até 30 dias', 'Apenas meio período'] },
      { id: 'primeiro', rotulo: 'Este é meu primeiro emprego', kind: 'check' },
      { id: 'cv', rotulo: 'Currículo em PDF (até 5 MB)', kind: 'file', aceita: 'application/pdf' }] },
    { titulo: 'Acessibilidade e necessidades', privado: true,
      intro: 'Esta etapa é totalmente voluntária. Você não precisa informar diagnósticos nem dados médicos: conte apenas as adaptações de que precisa para trabalhar. Pode pular.',
      campos: [
        { id: 'necs', rotulo: 'Se quiser, indique', kind: 'checks', opcoes: ['Deficiência física', 'Deficiência visual', 'Deficiência auditiva', 'Deficiência intelectual', 'Neurodivergência', 'Mobilidade reduzida', 'Outras necessidades', 'Prefiro não informar'] },
        { id: 'recs', rotulo: 'Recursos que ajudam você', kind: 'checks', opcoes: ['Utilizo tecnologia assistiva', 'Prefiro comunicação em Libras', 'Preciso de acessibilidade digital', 'Preciso de adaptações no ambiente de trabalho', 'Preciso de adaptações na rotina'] },
        { id: 'adapt', rotulo: 'Adaptações que ajudam no seu trabalho (opcional)', kind: 'textarea' }] },
    { titulo: 'Preferências', campos: [{ id: 'pref', rotulo: 'Tipos de oportunidade', kind: 'checks', opcoes: ['Presencial', 'Híbrido', 'Remoto', 'Jovem aprendiz', 'Estágio', 'Primeiro emprego', 'CLT', 'Temporário', 'Freelancer'] }] },
    { titulo: 'Revisão', revisao: true, campos: [] },
  ],
  empresa: [
    { titulo: 'Identificação', campos: [
      { id: 'razao', rotulo: 'Nome da empresa', req: true }, { id: 'cnpj', rotulo: 'CNPJ', req: true, ajuda: '14 números.' },
      { id: 'resp', rotulo: 'Nome do responsável', req: true }, { id: 'email', rotulo: 'E-mail corporativo', kind: 'email', req: true },
      { id: 'tel', rotulo: 'Telefone', kind: 'tel' }, { id: 'site', rotulo: 'Site', kind: 'url' },
      { id: 'logo', rotulo: 'Logotipo (opcional)', kind: 'file', aceita: 'image/*' }] },
    { titulo: 'Sobre a empresa', campos: [
      { id: 'setor', rotulo: 'Área de atuação', kind: 'select', opcoes: AREAS, req: true },
      { id: 'porte', rotulo: 'Tamanho da empresa', kind: 'select', opcoes: ['1 a 10 pessoas', '11 a 50', '51 a 200', '201 a 1000', 'Mais de 1000'] },
      { id: 'desc', rotulo: 'Descrição institucional', kind: 'textarea' }, { id: 'end', rotulo: 'Endereço' },
      { id: 'cidade', rotulo: 'Cidade' }, { id: 'uf', rotulo: 'Estado', kind: 'select', opcoes: UFS },
      { id: 'mod', rotulo: 'Modalidades de trabalho', kind: 'checks', opcoes: ['Presencial', 'Híbrido', 'Remoto'] }] },
    { titulo: 'Perfil de inclusão da empresa',
      intro: 'Informe só o que a empresa realmente oferece. O que ficar como "Não informado" não aparece como disponível no perfil público.',
      campos: [
        R('fis1', 'Rampas de acesso', 'Acessibilidade física'), R('fis2', 'Elevadores acessíveis', 'Acessibilidade física'), R('fis3', 'Banheiros adaptados', 'Acessibilidade física'), R('fis4', 'Vagas de estacionamento acessíveis', 'Acessibilidade física'), R('fis5', 'Espaços para mobilidade reduzida', 'Acessibilidade física'),
        R('dig1', 'Sistemas compatíveis com leitores de tela', 'Acessibilidade digital'), R('dig2', 'Softwares e documentos acessíveis', 'Acessibilidade digital'), R('dig3', 'Comunicação alternativa', 'Acessibilidade digital'),
        R('com1', 'Atendimento em Libras', 'Acessibilidade comunicacional'), R('com2', 'Intérprete de Libras', 'Acessibilidade comunicacional'), R('com3', 'Materiais em formatos acessíveis', 'Acessibilidade comunicacional'),
        R('inc1', 'Contratação de pessoas com deficiência', 'Inclusão profissional'), R('inc2', 'Jovem aprendiz', 'Inclusão profissional'), R('inc3', 'Estágio', 'Inclusão profissional'), R('inc4', 'Primeiro emprego', 'Inclusão profissional'), R('inc5', 'Capacitação e mentoria', 'Inclusão profissional'), R('inc6', 'Flexibilidade de horários', 'Inclusão profissional')] },
    { titulo: 'Revisão', revisao: true, campos: [] },
  ],
};

const e = (s: unknown): string => AVEN.esc(s);
const ICON = {
  candidato: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.5 4-6 8-6s7 1.5 8 6"/></svg>',
  empresa: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 21V5l9-2v18M13 9h7v12M8 8h1M8 12h1M8 16h1M16 13h1M16 17h1"/></svg>',
};
let S: Estado;
let dlg: HTMLDialogElement;
const box = (): HTMLElement => dlg.querySelector('#cad') as HTMLElement;
const chave = (): string => `aven.rascunho.${S.tipo}`;
const lerRascunho = (t: Tipo): { i: number; vals: Record<string, Valor> } | null => AVEN.store.get(`aven.rascunho.${t}`, null);

function campoHTML(c: Campo): string {
  const id = `cf-${c.id}`, v = S.vals[c.id];
  const txt = typeof v === 'string' ? v : '', arr = Array.isArray(v) ? v : [];
  const lab = `${e(c.rotulo)}${c.req ? ' <span aria-hidden="true">*</span>' : ''}`;
  const ds = `aria-describedby="${id}-e${c.ajuda ? ` ${id}-a` : ''}"${c.req ? ' required aria-required="true"' : ''}`;
  const rod = `${c.ajuda ? `<small class="cad-aj" id="${id}-a">${e(c.ajuda)}</small>` : ''}<div class="err" id="${id}-e" aria-live="polite"></div>`;
  switch (c.kind) {
    case 'textarea': return `<div class="cad-f cad-w"><label for="${id}">${lab}</label><textarea id="${id}" rows="3" ${ds}>${e(txt)}</textarea>${rod}</div>`;
    case 'select': case 'status': {
      const ops = c.kind === 'status' ? STATUS : c.opcoes!;
      return `<div class="cad-f"><label for="${id}">${lab}</label><select id="${id}" ${ds}>${c.kind === 'select' ? '<option value="">Selecione</option>' : ''}${ops.map((o) => `<option${o === txt ? ' selected' : ''}>${e(o)}</option>`).join('')}</select>${rod}</div>`;
    }
    case 'check': return `<div class="cad-f cad-w"><label class="ck"><input type="checkbox" id="${id}"${txt === 'sim' ? ' checked' : ''}> ${e(c.rotulo)}</label></div>`;
    case 'checks': return `<fieldset class="cad-f cad-w"><legend>${e(c.rotulo)}</legend><div class="cad-checks">${c.opcoes!.map((o) => `<label class="ck"><input type="checkbox" name="${c.id}" value="${e(o)}"${arr.includes(o) ? ' checked' : ''}> ${e(o)}</label>`).join('')}</div></fieldset>`;
    case 'file': return `<div class="cad-f cad-w"><label for="${id}">${lab}</label><input type="file" id="${id}" accept="${c.aceita}" ${ds}>${S.arq[c.id] ? `<small class="cad-aj">Arquivo escolhido: ${e(S.arq[c.id])}</small>` : ''}${rod}</div>`;
    default: return `<div class="cad-f"><label for="${id}">${lab}</label><input id="${id}" type="${c.kind || 'text'}" value="${e(txt)}" ${ds}>${rod}</div>`;
  }
}

function revisaoHTML(): string {
  return ETAPAS[S.tipo].map((et, idx) => {
    if (et.revisao) return '';
    const linhas = et.campos.map((c) => {
      const v = S.vals[c.id];
      let t = Array.isArray(v) ? v.join(', ') : v === 'sim' ? 'Sim' : (v || '');
      if (c.kind === 'file') t = S.arq[c.id] || '';
      if (c.id === 'cpf' && t) t = `***.***.***-${String(t).replace(/\D/g, '').slice(-2)}`;
      if (c.kind === 'status' && t === STATUS[0]) t = '';
      return t ? `<dt>${e(c.rotulo)}</dt><dd>${e(t)}</dd>` : '';
    }).join('');
    return `<section class="cad-rev"><div class="cad-rh"><h3>${e(et.titulo)}</h3><button type="button" class="btn ghost sm" data-a="ir" data-i="${idx}">Editar</button></div><dl>${linhas || '<dd class="mut">Nada informado.</dd>'}</dl></section>`;
  }).join('');
}

function render(): void {
  const lista = ETAPAS[S.tipo], et = lista[S.i], ult = S.i === lista.length - 1;
  let corpo = '', grupo = '';
  if (et.revisao) corpo = revisaoHTML();
  else corpo = `<div class="cad-grid">${et.campos.map((c) => { const h = c.grupo && c.grupo !== grupo ? `<h3 class="cad-g">${e(c.grupo)}</h3>` : ''; grupo = c.grupo || grupo; return h + campoHTML(c); }).join('')}</div>`;
  box().innerHTML = `<div class="cad-step"><div class="cad-prog" role="progressbar" aria-valuemin="1" aria-valuemax="${lista.length}" aria-valuenow="${S.i + 1}" aria-label="Progresso do cadastro"><i style="width:${((S.i + 1) / lista.length) * 100}%"></i></div>
  <p class="cad-n">${S.tipo === 'empresa' ? 'Cadastro de empresa' : 'Cadastro de candidato'} · Etapa ${S.i + 1} de ${lista.length}</p>
  <h2 id="avt" tabindex="-1">${e(et.titulo)}</h2>${et.intro ? `<p class="mut">${e(et.intro)}</p>` : ''}
  <form novalidate id="cadForm">${corpo}</form><p class="demo-note">Ambiente de demonstração: nenhum dado é enviado.</p>
  <div class="cad-acts">${S.i > 0 ? '<button type="button" class="btn ghost" data-a="volt">Voltar</button>' : '<button type="button" class="btn ghost" data-a="inicio">Trocar tipo de conta</button>'}
  ${et.privado ? '<button type="button" class="btn ghost" data-a="pular">Pular etapa</button>' : ''}
  <button type="button" class="btn" data-a="${ult ? 'fim' : 'prox'}">${ult ? 'Concluir cadastro' : 'Continuar'}</button></div></div>`;
  (box().querySelector('#avt') as HTMLElement).focus();
}

function coletar(): void {
  const et = ETAPAS[S.tipo][S.i];
  et.campos.forEach((c) => {
    if (c.kind === 'file') return;
    if (c.kind === 'checks') S.vals[c.id] = [...box().querySelectorAll<HTMLInputElement>(`input[name="${c.id}"]:checked`)].map((i) => i.value);
    else if (c.kind === 'check') S.vals[c.id] = (box().querySelector(`#cf-${c.id}`) as HTMLInputElement).checked ? 'sim' : '';
    else S.vals[c.id] = (box().querySelector(`#cf-${c.id}`) as HTMLInputElement).value.trim();
  });
}

function validar(): boolean {
  let primeiro: HTMLElement | null = null;
  ETAPAS[S.tipo][S.i].campos.forEach((c) => {
    const el = box().querySelector<HTMLInputElement>(`#cf-${c.id}`), er = box().querySelector(`#cf-${c.id}-e`);
    if (!el || !er) return;
    const v = el.value.trim(), d = v.replace(/\D/g, '');
    let m = '';
    if (c.req && !v) m = 'Preencha este campo.';
    else if (c.kind === 'email' && v && !/^\S+@\S+\.\S+$/.test(v)) m = 'Informe um e-mail válido, como nome@empresa.com.';
    else if (c.id === 'cpf' && v && d.length !== 11) m = 'O CPF tem 11 números.';
    else if (c.id === 'cnpj' && d.length !== 14) m = 'O CNPJ tem 14 números.';
    else if (c.kind === 'url' && v && !/^https?:\/\/\S+\.\S+/.test(v)) m = 'Use o endereço completo, começando com https://';
    el.setAttribute('aria-invalid', String(!!m));
    er.textContent = m;
    if (m && !primeiro) primeiro = el;
  });
  if (primeiro) { (primeiro as HTMLElement).focus(); AVEN.toast('Corrija os campos destacados.', true); }
  return !primeiro;
}

function salvar(): void {
  const seguro: Record<string, Valor> = {};
  ETAPAS[S.tipo].forEach((et) => { if (!et.privado) et.campos.forEach((c) => { if (!c.sens && S.vals[c.id] !== undefined) seguro[c.id] = S.vals[c.id]; }); });
  AVEN.store.set(chave(), { i: Math.min(S.i, 1), vals: seguro });
}

function concluir(btn: HTMLButtonElement): void {
  btn.disabled = true; btn.textContent = 'Criando perfil...';
  setTimeout(() => {
    S.fim = true; S.sujo = false;
    AVEN.store.set('aven.session', { nome: String(S.vals.nome || S.vals.razao || ''), tipo: S.tipo });
    AVEN.store.set(chave(), null);
    box().innerHTML = `<div class="cad-step cad-ok"><svg class="ok" viewBox="0 0 52 52" width="72" height="72" aria-hidden="true"><circle cx="26" cy="26" r="23"/><path d="m15 27 8 8 15-17"/></svg>
    <h2 id="avt" tabindex="-1">${S.tipo === 'empresa' ? 'Perfil da empresa criado' : 'Perfil criado'}</h2>
    <p>Cadastro de demonstração concluído. ${S.tipo === 'empresa' ? 'Só os recursos confirmados por você apareceriam no perfil público.' : 'Seu currículo e suas preferências ficariam prontos para candidaturas.'}</p>
    <p class="demo-note">Nenhum dado foi enviado ou salvo em servidor.</p><button type="button" class="btn" data-a="fechar">Entendi</button></div>`;
    (box().querySelector('#avt') as HTMLElement).focus();
  }, 800);
}

function escolha(): void {
  const op = (t: Tipo, tit: string, desc: string, btn: string, foto: string): string => `<button type="button" class="cad-opt cad-${t}" data-a="esc" data-t="${t}">
    <span class="cad-img"><img src="${foto}" alt="" onerror="this.remove()">${ICON[t]}</span><strong>${tit}</strong><span>${desc}</span><em>${btn}</em></button>`;
  box().innerHTML = `<div class="cad-step"><h2 id="avt" tabindex="-1">Criar conta no AVEN</h2><p class="mut">Escolha como você vai usar a plataforma.</p>
  <div class="cad-opts">${op('candidato', 'Seu próximo passo profissional começa aqui.', 'Crie seu perfil, encontre oportunidades e conecte-se com empresas que valorizam seu talento.', 'Criar perfil de candidato', 'cadastro-candidato.jpg')}
  ${op('empresa', 'Encontre talentos que fazem a diferença.', 'Cadastre sua organização, publique oportunidades e encontre profissionais.', 'Cadastrar minha empresa', 'cadastro-empresa.jpg')}</div>
  <p class="demo-note">Ambiente de demonstração: nenhum dado é enviado.</p></div>`;
  (box().querySelector('#avt') as HTMLElement).focus();
}

function abrir(tipo?: Tipo): void {
  AVEN.modal('<div id="cad"></div>');
  dlg = document.getElementById('avmodal') as HTMLDialogElement;
  dlg.classList.add('cad-wide');
  dlg.addEventListener('close', () => dlg.classList.remove('cad-wide'), { once: true });
  S = { tipo: tipo || 'candidato', i: 0, vals: {}, arq: {}, sujo: false, fim: false };
  const iniciar = (t: Tipo): void => {
    S.tipo = t;
    const r = lerRascunho(t);
    if (r) { S.vals = r.vals; S.i = r.i; AVEN.toast('Rascunho recuperado. Dados sensíveis não são guardados.'); }
    render();
  };
  if (tipo) iniciar(tipo); else escolha();
  const descartar = (): boolean => !S.sujo || S.fim || confirm('Descartar as informações preenchidas?');
  dlg.addEventListener('cancel', (ev) => { if (!descartar()) ev.preventDefault(); });
  dlg.addEventListener('click', (ev) => {
    const t = ev.target as HTMLElement;
    if (t.closest('.x') && !descartar()) { ev.stopPropagation(); ev.preventDefault(); return; }
    const b = t.closest<HTMLElement>('[data-a]');
    if (!b || !dlg.contains(b)) return;
    const a = b.dataset.a;
    if (a === 'esc') iniciar(b.dataset.t as Tipo);
    else if (a === 'inicio') escolha();
    else if (a === 'fechar') dlg.close();
    else if (a === 'volt') { coletar(); S.i--; salvar(); render(); }
    else if (a === 'pular') { S.i++; render(); }
    else if (a === 'ir') { S.i = Number(b.dataset.i); render(); }
    else if (a === 'prox') { if (validar()) { coletar(); S.i++; salvar(); render(); } }
    else if (a === 'fim') concluir(b as HTMLButtonElement);
  });
  dlg.addEventListener('input', () => { S.sujo = true; });
  dlg.addEventListener('change', (ev) => {
    const el = ev.target as HTMLInputElement;
    if (el.type === 'checkbox' && el.name) {
      const grupo = [...dlg.querySelectorAll<HTMLInputElement>(`input[name="${el.name}"]`)];
      if (el.value === 'Prefiro não informar' && el.checked) grupo.forEach((g) => { if (g !== el) g.checked = false; });
      else if (el.checked) grupo.forEach((g) => { if (g.value === 'Prefiro não informar') g.checked = false; });
    }
    if (el.type === 'file') {
      const f = el.files && el.files[0], er = dlg.querySelector(`#${el.id}-e`);
      const pdf = el.id === 'cf-cv', lim = pdf ? 5 : 3;
      let m = '';
      if (f && pdf && f.type !== 'application/pdf') m = 'Envie o currículo em PDF.';
      else if (f && !pdf && !f.type.startsWith('image/')) m = 'Envie uma imagem (JPG ou PNG).';
      else if (f && f.size > lim * 1048576) m = `O arquivo passa de ${lim} MB.`;
      if (m) { el.value = ''; delete S.arq[el.id.slice(3)]; } else if (f) S.arq[el.id.slice(3)] = `${f.name} (${Math.max(1, Math.round(f.size / 1024))} KB)`;
      if (er) er.textContent = m;
      el.setAttribute('aria-invalid', String(!!m));
    }
  });
}

const abrirOriginalLogin = AVEN.openAuthModal.bind(AVEN) as (m?: string) => void;
AVEN.openAuthModal = (modo?: string): void => { if (modo === 'login') abrirOriginalLogin(modo); else abrir(); };
document.addEventListener('submit', (ev) => {
  const f = ev.target as HTMLFormElement;
  if (!f.matches('form.demo')) return;
  ev.preventDefault(); ev.stopImmediatePropagation();
  abrir(/empresa/i.test(f.getAttribute('aria-label') || '') ? 'empresa' : 'candidato');
}, true);
