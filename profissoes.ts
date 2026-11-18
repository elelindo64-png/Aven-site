/* Seção "Profissões em alta", escrita em TypeScript.
   Compila para profissoes.js com: npx tsc -p .
   PONTO DE INTEGRAÇÃO: trocar PROFISSOES por uma chamada a API. */
type Demanda = 'Alta' | 'Muito alta' | 'Crescendo';

interface Profissao {
  nome: string;
  area: string;
  demanda: Demanda;
  salario: number; // valor de demonstração, em reais
  vagas: number;   // quantidade de demonstração
  foto: string;    // imagem opcional em assets/imagens
  cor: string;     // cor de fundo enquanto não há foto
}

const PROFISSOES: readonly Profissao[] = [
  { nome: 'Desenvolvedor(a) de Software', area: 'Tecnologia', demanda: 'Muito alta', salario: 9000, vagas: 42, foto: 'assets/imagens/prof-desenvolvedor.jpg', cor: '#0d6b5c' },
  { nome: 'Designer de Produto', area: 'Design', demanda: 'Alta', salario: 6500, vagas: 18, foto: 'assets/imagens/prof-designer.jpg', cor: '#4b2fa0' },
  { nome: 'Analista de Dados', area: 'Dados', demanda: 'Muito alta', salario: 7000, vagas: 31, foto: 'assets/imagens/prof-dados.jpg', cor: '#0b5fa5' },
  { nome: 'Enfermeiro(a)', area: 'Saúde', demanda: 'Alta', salario: 5200, vagas: 27, foto: 'assets/imagens/prof-enfermagem.jpg', cor: '#0c7a62' },
  { nome: 'Professor(a) de Idiomas', area: 'Educação', demanda: 'Crescendo', salario: 4300, vagas: 15, foto: 'assets/imagens/prof-idiomas.jpg', cor: '#a5530b' },
  { nome: 'Engenheiro(a) Civil', area: 'Engenharia', demanda: 'Alta', salario: 8200, vagas: 12, foto: 'assets/imagens/prof-engenharia.jpg', cor: '#365a8c' },
  { nome: 'Contador(a)', area: 'Finanças', demanda: 'Alta', salario: 5800, vagas: 20, foto: 'assets/imagens/prof-contabilidade.jpg', cor: '#2f6b3a' },
  { nome: 'Eletricista Industrial', area: 'Indústria', demanda: 'Crescendo', salario: 4600, vagas: 23, foto: 'assets/imagens/prof-eletricista.jpg', cor: '#8a6a0b' },
];

const brl = (n: number): string =>
  n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

function cartao(p: Profissao): string {
  return `<article class="prof" style="--c:${p.cor}">
    <img src="${p.foto}" alt="" loading="lazy" onerror="this.remove()">
    <span class="prof-in"><small><span>${p.area}</span> · <span>Demanda ${p.demanda}</span></small><strong>${p.nome}</strong>
    <em><span>${p.vagas} vagas de demonstração</span> · <span>${brl(p.salario)} em média</span></em></span></article>`;
}

function renderizar(): void {
  const caixa = document.getElementById('profissoes');
  if (!(caixa instanceof HTMLElement)) return;
  caixa.innerHTML = PROFISSOES.map(cartao).join('');
}

document.addEventListener('DOMContentLoaded', renderizar);
