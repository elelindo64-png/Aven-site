/* AVEN – núcleo compartilhado. Dados DEMONSTRATIVOS: tudo é fictício.
   PONTO DE INTEGRAÇÃO: API de vagas/empresas/cursos, banco de dados com consentimento e serviços de IA. */
const AVEN = {
  jobs: [
    // PONTO DE INTEGRAÇÃO: preencha image com o nome do arquivo de foto colocado nesta mesma pasta.
    { id: 1, t: 'Desenvolvedora Front-end', c: 'Orbita Labs', countryCode: 'br', p: 'Brasil', l: 'São Paulo, SP', s: 9000, m: 'Híbrido', format: 'Presencial e online', shift: 'Integral', educationModes: ['Qualificação profissional'], k: 'CLT', a: 'Tecnologia', lang: 'Português', f: ['br'], r: ['React', 'Acessibilidade'], access: ['Leitor de tela', 'Foco visível'], image: '', d: 'Construa interfaces de produtos financeiros.' },
    { id: 2, t: 'Product Designer', c: 'Northwind Studio', countryCode: 'ca', p: 'Canadá', l: 'Remoto, Canadá', s: 6500, m: 'Remoto', format: 'Presencial e online', shift: 'Integral', educationModes: ['Aperfeiçoamento/Especialização profissional'], k: 'PJ', a: 'Design', lang: 'Inglês', f: ['ext', 'remoto'], r: ['Figma', 'Inglês avançado'], access: ['Legendas', 'Horário flexível'], image: '', d: 'Desenhe fluxos para clientes globais.' },
    { id: 3, t: 'Analista de Dados Jr.', c: 'Lusa Data', countryCode: 'pt', p: 'Portugal', l: 'Lisboa', s: 2200, m: 'Presencial', format: 'Presencial', shift: 'Matutino', educationModes: ['Habilitação técnica de nível médio'], k: 'CLT', a: 'Dados', lang: 'Português', f: ['ext', 'first', 'noexp'], r: ['SQL', 'Curiosidade'], access: ['Leitor de tela'], image: '', d: 'Primeira vaga com mentoria dedicada.' },
    { id: 4, t: 'Customer Success', c: 'Kite Cloud', countryCode: 'us', p: 'Estados Unidos', l: 'Remoto, EUA', s: 4800, m: 'Remoto', format: 'Presencial e online', shift: 'Vespertino', educationModes: ['Iniciação profissional'], k: 'PJ', a: 'Atendimento', lang: 'Inglês', f: ['ext', 'remoto'], r: ['Inglês fluente', 'Comunicação'], access: ['Legendas'], image: '', d: 'Apoie clientes de SaaS em fusos americanos.' },
    { id: 5, t: 'Assistente Administrativo', c: 'Verde Logística', countryCode: 'br', p: 'Brasil', l: 'Curitiba, PR', s: 2600, m: 'Presencial', format: 'Presencial', shift: 'Matutino', educationModes: ['Habilitação técnica de nível médio'], k: 'CLT', a: 'Administrativo', lang: 'Português', f: ['br', 'pcd', 'noexp'], r: ['Pacote Office'], access: ['Rampa de acesso', 'Ambiente sensorial calmo'], image: '', d: 'Vaga inclusiva com ambiente acessível.' },
    { id: 6, t: 'Redator Freelancer', c: 'Atlas Media', countryCode: 'br', p: 'Brasil', l: 'Remoto, Brasil', s: 0, m: 'Remoto', format: 'Presencial e online', shift: 'Integral', educationModes: ['Qualificação profissional'], k: 'Freelancer', a: 'Marketing', lang: 'Português', f: ['br', 'freela', 'remoto'], r: ['Texto claro', 'SEO básico'], access: ['Leitor de tela'], image: '', d: 'Projetos por entrega, pagamento combinado.' },
    { id: 7, t: 'Engenheiro de Software', c: 'Rhein Systems', countryCode: 'de', p: 'Alemanha', l: 'Berlim', s: 7200, m: 'Híbrido', format: 'Presencial e online', shift: 'Integral', educationModes: ['Aperfeiçoamento/Especialização profissional'], k: 'CLT', a: 'Tecnologia', lang: 'Inglês', f: ['ext'], r: ['Java', 'Inglês'], access: ['Material em braille', 'Foco visível'], image: '', d: 'Relocação apoiada pela empresa.' },
    { id: 8, t: 'Estagiário de Marketing', c: 'Brisa Café', countryCode: 'br', p: 'Brasil', l: 'Recife, PE', s: 1500, m: 'Híbrido', format: 'Presencial e online', shift: 'Vespertino', educationModes: ['Iniciação profissional'], k: 'Estágio', a: 'Marketing', lang: 'Português', f: ['br', 'first', 'noexp'], r: ['Redes sociais'], access: ['Legendas'], image: '', d: 'Aprenda campanhas do zero.' },
    { id: 9, t: 'Suporte Técnico Bilíngue', c: 'Maple Help', countryCode: 'ca', p: 'Canadá', l: 'Remoto, mundo', s: 3900, m: 'Remoto', format: 'Presencial e online', shift: 'Noturno', educationModes: ['Qualificação profissional'], k: 'CLT', a: 'Atendimento', lang: 'Espanhol', f: ['ext', 'remoto', 'pcd'], r: ['Espanhol', 'Inglês'], access: ['Intérprete de Libras', 'Legendas'], image: '', d: 'Equipe distribuída, processos acessíveis.' }
  ],

  courses: [
    { id: 'entrevista', title: 'Preparação para entrevistas', kind: 'Sessão', image: 'assets/imagens/curso-entrevista.jpg', online: true, free: true, certificate: false, access: ['Legendas', 'Leitor de tela'], description: 'Simulação de entrevista com devolutiva e plano de preparação. Agenda demonstrativa.', hours: '1h30', level: 'Todos os níveis', language: 'Português', institution: 'AVEN — Laboratório de Carreira', price: 'Gratuito', next: '18/11/2026, 14h (horário de Brasília)', address: '' },
    { id: 'carreira', title: 'Orientação de carreira', kind: 'Sessão', image: 'assets/imagens/curso-carreira.jpg', online: false, free: true, certificate: false, access: ['Ambiente sensorial calmo', 'Intérprete de Libras'], description: 'Conversa individual para explorar objetivos, competências e próximos passos. Horário fictício.', hours: '50 min', level: 'Todos os níveis', language: 'Português', institution: 'AVEN — Laboratório de Carreira', price: 'Gratuito', next: '20/11/2026, 10h (horário de Brasília)', address: 'Rua Exemplo, 100 — Centro, São Paulo, SP' },
    { id: 'web-acessivel', title: 'Fundamentos de web acessível', kind: 'Curso', image: 'assets/imagens/curso-web-acessivel.jpg', online: true, free: true, certificate: true, access: ['Legendas', 'Leitor de tela', 'Material em braille'], description: 'Princípios práticos de acessibilidade digital, sem exigir experiência prévia.', hours: '12 horas', level: 'Iniciante', language: 'Português', institution: 'Instituto Horizonte (fictício)', price: 'Gratuito', next: '25/11/2026 — turma online', address: '' },
    { id: 'dados-presencial', title: 'Dados para começar', kind: 'Curso', image: 'assets/imagens/curso-dados.jpg', online: false, free: false, certificate: true, access: ['Rampa de acesso', 'Intérprete de Libras', 'Ambiente sensorial calmo'], description: 'Introdução a planilhas, leitura de dados e visualização para o trabalho.', hours: '24 horas', level: 'Iniciante', language: 'Português', institution: 'Escola Ponte (fictícia)', price: 'R$ 120 (valor demonstrativo)', next: '02/12/2026 — turma presencial', address: 'Avenida Modelo, 250 — Pinheiros, São Paulo, SP' }
  ],

  translations: null,
  language: 'pt',
  originalText: new WeakMap(),
  appliedText: new WeakMap(),
  originalAttributes: new WeakMap(),
  appliedAttributes: new WeakMap(),

  store: {
    get(key, fallback) {
      try {
        return JSON.parse(localStorage.getItem(key)) ?? fallback;
      } catch (error) {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        // Ignora falha de persistência em ambientes restritos.
      }
    }
  },

  esc(value) {
    return String(value).replace(/[&<>\"]/g, (character) => `&#${character.charCodeAt(0)};`);
  },

  countryFlagPath(code) {
    const files = {
      br: 'Brasil.jpg',
      us: 'Estados Unidos.jpg',
      ca: 'Canada.jpg',
      pt: 'Portugal.jpg',
      de: 'Alemanha.jpg'
    };
    const file = files[code];
    return file ? `assets/icones/bandeiras/${file}` : `assets/icones/bandeiras/${this.esc(code)}.svg`;
  },

  translatePhrase(value) {
    if (!this.translations || this.language === 'pt') return value;
    const additional = this.translations.additional?.[this.language]?.phrases?.[value];
    if (additional) return additional;
    if (!['en', 'es'].includes(this.language)) {
      let match = value.match(/^(\d+) vagas demonstrativas encontradas$/);
      if (match) {
        const count = match[1];
        if (this.language === 'de') return `${count} Beispielstellen gefunden`;
        if (this.language === 'ru') return `Найдено вакансий: ${count}`;
        if (this.language === 'ja') return `デモ求人が${count}件見つかりました`;
      }
      match = value.match(/^(\d+) vagas de demonstração$/);
      if (match) {
        if (this.language === 'de') return `${match[1]} Beispielstellen`;
        if (this.language === 'ru') return `${match[1]} демонстрационных вакансий`;
        if (this.language === 'ja') return `参考求人${match[1]}件`;
      }
      match = value.match(/^(\d+) curso\(s\) ou sessão\(ões\) demonstrativos\.$/);
      if (match) {
        if (this.language === 'de') return `${match[1]} Beispielkurse oder -sitzungen.`;
        if (this.language === 'ru') return `Демонстрационные курсы или занятия: ${match[1]}.`;
        if (this.language === 'ja') return `参考コース・セッション：${match[1]}件。`;
      }
      match = value.match(/^(\d+) campo\(s\) precisam de correção\.$/);
      if (match) {
        if (this.language === 'de') return `${match[1]} Feld(er) müssen korrigiert werden.`;
        if (this.language === 'ru') return `Исправьте поля: ${match[1]}.`;
        if (this.language === 'ja') return `修正が必要な項目：${match[1]}件。`;
      }
      match = value.match(/^(\d+) vagas?$/);
      if (match) {
        if (this.language === 'de') return `${match[1]} ${match[1] === '1' ? 'Stelle' : 'Stellen'}`;
        if (this.language === 'ru') return `${match[1]} вакансий`;
        if (this.language === 'ja') return `求人${match[1]}件`;
      }
      match = value.match(/^Etapa (\d+) de (\d+)$/);
      if (match) {
        if (this.language === 'de') return `Schritt ${match[1]} von ${match[2]}`;
        if (this.language === 'ru') return `Шаг ${match[1]} из ${match[2]}`;
        if (this.language === 'ja') return `${match[2]}段階中${match[1]}段階目`;
      }
      match = value.match(/^R\$ ([\d.]+)\/mês$/);
      if (match) {
        const amount = Number(match[1].replace(/\./g, ''));
        const locale = { de: 'de-DE', ru: 'ru-RU', ja: 'ja-JP' }[this.language];
        const period = { de: 'Monat', ru: 'мес.', ja: '月' }[this.language];
        return `R$ ${new Intl.NumberFormat(locale).format(amount)}/${period}`;
      }
      match = value.match(/^Tamanho da fonte: (\d+)%$/);
      if (match) {
        const label = { de: 'Schriftgröße', ru: 'Размер шрифта', ja: '文字サイズ' }[this.language];
        return `${label}: ${match[1]}%`;
      }
      match = value.match(/^(☆|★) (Salvar|Salva)$/);
      if (match) {
        const labels = {
          de: { Salvar: 'Speichern', Salva: 'Gespeichert' },
          ru: { Salvar: 'Сохранить', Salva: 'Сохранено' },
          ja: { Salvar: '保存', Salva: '保存済み' }
        };
        return `${match[1]} ${labels[this.language][match[2]]}`;
      }
      match = value.match(/^(.+) · (Online|Presencial) · (.+)$/);
      if (match) return `${this.translatePhrase(match[1])} · ${this.translatePhrase(match[2])} · ${this.translatePhrase(match[3])}`;
      match = value.match(/^Requisitos: (.+)\.$/);
      if (match) {
        const label = { de: 'Anforderungen', ru: 'Требования', ja: '応募条件' }[this.language];
        return `${label}: ${match[1].split(', ').map((item) => this.translatePhrase(item)).join(', ')}.`;
      }
      match = value.match(/^(.+) Requisitos: (.+)\. Idioma: (.+)\.$/);
      if (match) {
        const requirements = match[2].split(', ').map((item) => this.translatePhrase(item)).join(', ');
        const labels = {
          de: { requirements: 'Anforderungen', language: 'Sprache' },
          ru: { requirements: 'Требования', language: 'Язык' },
          ja: { requirements: '応募条件', language: '使用言語' }
        }[this.language];
        return `${this.translatePhrase(match[1])} ${labels.requirements}: ${requirements}. ${labels.language}: ${this.translatePhrase(match[3])}.`;
      }
      match = value.match(/^(.+)\. Destino (.+)\. Status: informação de demonstração\.$/);
      if (match) {
        const labels = {
          de: { destination: 'Ziel', status: 'Status: Beispielinformation.' },
          ru: { destination: 'Направление', status: 'Статус: демонстрационная информация.' },
          ja: { destination: '行き先', status: 'ステータス：参考情報。' }
        }[this.language];
        return `${this.translatePhrase(match[1])}. ${labels.destination} ${this.translatePhrase(match[2])}. ${labels.status}`;
      }
      match = value.match(/^Favoritar (.+)$/);
      if (match) {
        const labels = { de: 'Merken', ru: 'В избранное', ja: 'お気に入りに追加' };
        return `${labels[this.language]} ${this.translatePhrase(match[1])}`;
      }
      match = value.match(/^Logo demonstrativo de (.+)$/);
      if (match) {
        const labels = { de: 'Beispiellogo von', ru: 'Демонстрационный логотип:', ja: '参考ロゴ：' };
        return `${labels[this.language]} ${match[1]}`;
      }
      match = value.match(/^Ilustração de apoio para a vaga demonstrativa de (.+)$/);
      if (match) {
        const labels = {
          de: 'Beispielillustration zur Stellenanzeige:',
          ru: 'Иллюстрация к демонстрационной вакансии:',
          ja: '参考求人のイメージ：'
        };
        return `${labels[this.language]} ${this.translatePhrase(match[1])}`;
      }
      return value;
    }
    const index = this.language === 'en' ? 0 : this.language === 'es' ? 1 : -1;
    const exact = this.translations.phrases[value.replace(/\u00a0/g, ' ')];
    if (exact) return Array.isArray(exact) ? exact[index] || value : exact;

    let match = value.match(/^(\d+) vagas demonstrativas encontradas$/);
    if (match) {
      const count = match[1];
      if (this.language === 'en') return `${count} sample jobs found`;
      if (this.language === 'es') return `${count} ofertas de demostración encontradas`;
      return value;
    }
    match = value.match(/^(\d+) vagas de demonstração$/);
    if (match) {
      if (this.language === 'en') return `${match[1]} sample jobs`;
      if (this.language === 'es') return `${match[1]} vacantes de demostración`;
      return value;
    }
    match = value.match(/^(.+) em média$/);
    if (match) return `${this.language === 'en' ? 'Average' : this.language === 'es' ? 'Promedio' : ''}${this.language === 'en' || this.language === 'es' ? ' ' : ''}${match[1]}`;
    match = value.match(/^(\d+) curso\(s\) ou sessão\(ões\) demonstrativos\.$/);
    if (match) return this.language === 'en' ? `${match[1]} sample course(s) or session(s).` : `${match[1]} curso(s) o sesión(es) de demostración.`;
    match = value.match(/^(\d+) campo\(s\) precisam de correção\.$/);
    if (match) return this.language === 'en' ? `${match[1]} field(s) need correction.` : `${match[1]} campo(s) necesitan corrección.`;
    match = value.match(/^(\d+) vagas?$/);
    if (match) return `${match[1]} ${this.language === 'en' ? (match[1] === '1' ? 'job' : 'jobs') : (match[1] === '1' ? 'vacante' : 'vacantes')}`;
    match = value.match(/^Etapa (\d+) de (\d+)$/);
    if (match) return this.language === 'en' ? `Step ${match[1]} of ${match[2]}` : `Etapa ${match[1]} de ${match[2]}`;
    match = value.match(/^R\$ ([\d.]+)\/mês$/);
    if (match) {
      const amount = Number(match[1].replace(/\./g, ''));
      const locale = this.language === 'en' ? 'en-US' : 'es-ES';
      return `R$ ${new Intl.NumberFormat(locale).format(amount)}/${this.language === 'en' ? 'month' : 'mes'}`;
    }
    match = value.match(/^Tamanho da fonte: (\d+)%$/);
    if (match) return `${this.language === 'en' ? 'Font size' : 'Tamaño de fuente'}: ${match[1]}%`;
    match = value.match(/^(☆|★) (Salvar|Salva)$/);
    if (match) return `${match[1]} ${this.language === 'en' ? (match[2] === 'Salva' ? 'Saved' : 'Save') : (match[2] === 'Salva' ? 'Guardada' : 'Guardar')}`;
    match = value.match(/^(.+) · (Online|Presencial) · (.+)$/);
    if (match) return `${this.translatePhrase(match[1])} · ${this.translatePhrase(match[2])} · ${this.translatePhrase(match[3])}`;
    match = value.match(/^Requisitos: (.+)\.$/);
    if (match) return `${this.language === 'en' ? 'Requirements' : 'Requisitos'}: ${match[1].split(', ').map((item) => this.translatePhrase(item)).join(', ')}.`;
    match = value.match(/^(.+) Requisitos: (.+)\. Idioma: (.+)\.$/);
    if (match) {
      const requirements = match[2].split(', ').map((item) => this.translatePhrase(item)).join(', ');
      return `${this.translatePhrase(match[1])} ${this.language === 'en' ? 'Requirements' : 'Requisitos'}: ${requirements}. ${this.language === 'en' ? 'Language' : 'Idioma'}: ${this.translatePhrase(match[3])}.`;
    }
    match = value.match(/^(.+)\. Destino (.+)\. Status: informação de demonstração\.$/);
    if (match) {
      const status = this.language === 'en' ? 'Status: sample information.' : 'Estado: información de muestra.';
      return `${this.translatePhrase(match[1])}. ${this.language === 'en' ? 'Destination' : 'Destino'} ${this.translatePhrase(match[2])}. ${status}`;
    }
    match = value.match(/^Favoritar (.+)$/);
    if (match) return `${this.language === 'en' ? 'Save' : 'Guardar'} ${this.translatePhrase(match[1])}`;
    match = value.match(/^Logo demonstrativo de (.+)$/);
    if (match) return `${this.language === 'en' ? 'Sample logo for' : 'Logotipo de demostración de'} ${match[1]}`;
    match = value.match(/^Ilustração de apoio para a vaga demonstrativa de (.+)$/);
    if (match) return `${this.language === 'en' ? 'Sample illustration for the job listing:' : 'Ilustración de muestra para la vacante:'} ${this.translatePhrase(match[1])}`;
    return value;
  },

  translateTextNode(node) {
    const current = node.nodeValue || '';
    const trimmed = current.trim();
    if (!trimmed) return;

    let original = this.originalText.get(node);
    if (original === undefined) {
      original = current;
      this.originalText.set(node, original);
    } else if (current !== this.appliedText.get(node)) {
      original = current;
      this.originalText.set(node, original);
    }

    const source = original.trim();
    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];
    const translated = this.translatePhrase(source);
    const next = `${leading}${translated}${trailing}`;
    this.appliedText.set(node, next);
    if (node.nodeValue !== next) node.nodeValue = next;
  },

  translateElementAttributes(element) {
    if (element.matches('[data-i18n]') && this.translations) {
      const entries = this.translations.keys[element.dataset.i18n];
      const additional = this.translations.additional?.[this.language]?.keys?.[element.dataset.i18n];
      const index = this.language === 'en' ? 1 : this.language === 'es' ? 2 : 0;
      const translated = additional || (entries && entries[index]);
      if (translated && element.textContent !== translated) element.textContent = translated;
    }

    if (element instanceof HTMLOptionElement && !element.hasAttribute('value')) {
      element.value = element.textContent.trim();
    }

    const attributes = ['placeholder', 'aria-label', 'title', 'alt', 'content'];
    let originals = this.originalAttributes.get(element);
    if (!originals) {
      originals = new Map();
      this.originalAttributes.set(element, originals);
    }
    let applied = this.appliedAttributes.get(element);
    if (!applied) {
      applied = new Map();
      this.appliedAttributes.set(element, applied);
    }

    attributes.forEach((name) => {
      if (!element.hasAttribute(name)) return;
      const current = element.getAttribute(name);
      let original = originals.get(name);
      if (original === undefined) {
        original = current;
        originals.set(name, original);
      } else if (current !== applied.get(name)) {
        original = current;
        originals.set(name, original);
      }
      const translated = this.translatePhrase(original);
      applied.set(name, translated);
      if (current !== translated) element.setAttribute(name, translated);
    });
  },

  applyTranslations(root) {
    if (root.nodeType === Node.ELEMENT_NODE) {
      this.translateElementAttributes(root);
      root.querySelectorAll('*').forEach((element) => this.translateElementAttributes(element));
    }

    if (root.nodeType === Node.TEXT_NODE) {
      this.translateTextNode(root);
      return;
    }

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) this.translateTextNode(node);
  },

  setLanguage(language) {
    if (!['pt', 'en', 'es', 'de', 'ru', 'ja'].includes(language)) {
      throw new Error(`Unsupported language: ${language}`);
    }
    this.language = language;
    document.documentElement.lang = { pt: 'pt-BR', en: 'en', es: 'es', de: 'de', ru: 'ru', ja: 'ja' }[language];
    this.store.set('aven.lang', language);
    const languageSelector = document.getElementById('lang');
    if (languageSelector && languageSelector.value !== language) languageSelector.value = language;
    this.applyTranslations(document.documentElement);
    document.dispatchEvent(new CustomEvent('aven:language-change', { detail: { language } }));
  },

  async loadTranslations() {
    const response = await fetch('translations.json');
    if (!response.ok) throw new Error(`Translation file request failed: ${response.status}`);
    const translations = await response.json();
    if (!translations.keys || !translations.phrases) throw new Error('Translation file has an invalid shape.');

    this.translations = translations;
    const languageSelector = document.getElementById('lang');
    this.setLanguage(languageSelector.value);

    const observer = new MutationObserver((records) => {
      records.forEach((record) => {
        if (record.type === 'characterData') this.translateTextNode(record.target);
        else if (record.type === 'attributes') this.translateElementAttributes(record.target);
        else record.addedNodes.forEach((node) => this.applyTranslations(node));
      });
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['placeholder', 'aria-label', 'title', 'alt'],
      characterData: true,
      childList: true,
      subtree: true
    });
  },

  toast(message, isError = false) {
    document.querySelector('.toast')?.remove();
    const toast = document.createElement('div');
    toast.className = `toast${isError ? ' bad' : ''}`;
    toast.setAttribute('role', isError ? 'alert' : 'status');
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  },

  money(value) {
    return value ? `R$ ${Number(value).toLocaleString('pt-BR')}/mês` : 'A combinar';
  },

  favs() {
    return this.store.get('aven.favs', []);
  },

  toggleFav(id) {
    let favorites = this.favs();
    favorites = favorites.includes(id)
      ? favorites.filter((item) => item !== id)
      : [...favorites, id];

    this.store.set('aven.favs', favorites);
    return favorites.includes(id);
  },

  jobIllustration(job) {
    const palette = {
      Tecnologia: ['#0b1f3f', '#3cffa8'],
      Design: ['#172f58', '#8ee2ff'],
      Dados: ['#133f49', '#6affbf'],
      Atendimento: ['#26325b', '#ffd27a'],
      Administrativo: ['#194338', '#a8ffcb'],
      Marketing: ['#462c58', '#ffb49b']
    };
    const [background, accent] = palette[job.a] || palette.Tecnologia;
    return `<svg viewBox="0 0 320 150" role="img" aria-labelledby="job-art-${job.id}-title">
      <title id="job-art-${job.id}-title">Ilustração de apoio para a vaga demonstrativa de ${this.esc(job.t)}</title>
      <defs><linearGradient id="job-grad-${job.id}" x1="0" x2="1" y1="0" y2="1"><stop stop-color="${background}"/><stop offset="1" stop-color="#06142b"/></linearGradient><pattern id="job-dots-${job.id}" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="${accent}" opacity=".28"/></pattern></defs>
      <rect width="320" height="150" fill="url(#job-grad-${job.id})"/><rect width="320" height="150" fill="url(#job-dots-${job.id})"/>
      <circle cx="250" cy="25" r="62" fill="${accent}" opacity=".1"/><circle cx="250" cy="25" r="42" fill="none" stroke="${accent}" opacity=".4"/>
      <path d="M170 112h110M188 101V68h28v33m12 0V50h30v51m13 0V78h16v23" fill="none" stroke="${accent}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity=".8"/>
      <rect x="28" y="35" width="92" height="78" rx="12" fill="none" stroke="${accent}" stroke-width="2" opacity=".7"/><path d="M48 58h52M48 74h38M48 90h28" stroke="${accent}" stroke-width="4" stroke-linecap="round" opacity=".9"/>
    </svg>`;
  },

  jobHTML(job, full = false) {
    const isFavorite = this.favs().includes(job.id);
    const title = this.esc(job.t);
    const company = this.esc(job.c);
    const location = this.esc(job.l);
    const salary = this.esc(this.money(job.s));
    const modality = this.esc(job.m);
    const shift = this.esc(job.shift);
    const contract = this.esc(job.k);
    const details = this.esc(job.d);
    const requirements = this.esc(job.r.join(', '));
    const accessLabels = (job.access || []).map((label) => `<span class="access-badge"><span aria-hidden="true">✓</span> ${this.esc(label)}</span>`).join('');
    const imagePath = job.image ? this.esc(job.image) : '';

    return `
      <article class="job" data-id="${job.id}">
        <div class="job-visual">
          ${imagePath ? `<img data-job-image src="${imagePath}" alt="Imagem ilustrativa da vaga de ${title} na empresa ${company}">` : ''}
          <div class="job-illustration"${imagePath ? ' hidden' : ''}>${this.jobIllustration(job)}</div>
        </div>
        <div class="job-info">
          <h3>
            <img class="country-flag" src="${this.countryFlagPath(job.countryCode)}" alt="${this.esc(job.p)}"> ${title}
          </h3>
          <div class="meta">
            <span>${company}</span>
            <span>${location}</span>
            <span>${salary}</span>
            <span class="tag">${modality}</span>
            <span class="tag">${shift}</span>
            <span class="tag">${contract}</span>
          </div>
          ${full ? `<p style="margin:.4rem 0 0">${details} <span class="mut">Requisitos: ${requirements}.</span></p>` : ''}
          ${accessLabels ? `<p class="access-badges" aria-label="Recursos de acessibilidade">${accessLabels}</p>` : ''}
          <div class="more" hidden>
            <strong>Vaga demonstrativa.</strong> ${details} Requisitos: ${requirements}. Idioma: ${this.esc(job.lang)}.
          </div>
        </div>
        <div class="act">
          <button class="fav" aria-pressed="${isFavorite}" aria-label="Favoritar ${title}">${isFavorite ? '★ Salva' : '☆ Salvar'}</button>
          <button class="btn ghost sm" data-more aria-expanded="false">Ver detalhes</button>
          <button class="btn sm" data-apply>Candidatar-se</button>
        </div>
      </article>
    `;
  },

  bindJobs(root) {
    if (!root || !root.addEventListener) {
      return;
    }

    root.addEventListener('click', (event) => {
      const button = event.target.closest('button');
      if (!button) {
        return;
      }

      const jobCard = button.closest('.job');
      if (!jobCard) {
        return;
      }

      const job = this.jobs.find((item) => item.id === Number(jobCard.dataset.id));
      if (!job) {
        return;
      }

      if (button.classList.contains('fav')) {
        const isFavorite = this.toggleFav(job.id);
        button.setAttribute('aria-pressed', isFavorite);
        button.textContent = isFavorite ? '★ Salva' : '☆ Salvar';
        this.toast(isFavorite ? 'Vaga salva nos favoritos.' : 'Vaga removida dos favoritos.');
      }

      if (button.dataset.more !== undefined) {
        const moreText = jobCard.querySelector('.more');
        const shouldShow = moreText.hidden;
        moreText.hidden = !shouldShow;
        button.setAttribute('aria-expanded', String(shouldShow));
        button.textContent = shouldShow ? 'Ocultar' : 'Ver detalhes';
      }

      if (button.dataset.apply !== undefined) {
        this.toast('Demonstração: nenhuma candidatura foi enviada.');
      }
    });
    root.addEventListener('load', (event) => {
      if (!event.target.matches('[data-job-image]')) return;
      event.target.hidden = false;
      const visual = event.target.closest('.job-visual');
      visual.querySelector('.job-illustration').hidden = true;
    }, true);
    root.addEventListener('error', (event) => {
      if (!event.target.matches('[data-job-image]')) return;
      event.target.hidden = true;
      const visual = event.target.closest('.job-visual');
      visual.querySelector('.job-illustration').hidden = false;
    }, true);
  },

  getPasswordStrength(password) {
    const value = String(password || '').trim();
    let score = 0;

    if (!value) {
      return { score: 0, label: 'Digite uma senha', color: '#c2261f' };
    }

    if (value.length >= 8) score += 1;
    if (/[A-Z]/.test(value)) score += 1;
    if (/[a-z]/.test(value)) score += 1;
    if (/\d/.test(value)) score += 1;
    if (/[^A-Za-z0-9]/.test(value)) score += 1;

    if (score <= 2) {
      return { score, label: 'Fraca', color: '#c2261f' };
    }
    if (score === 3 || score === 4) {
      return { score, label: 'Média', color: '#d97706' };
    }
    return { score, label: 'Forte', color: '#10b981' };
  },

  openAuthModal(mode = 'signup') {
    const render = (view, previousEmail = '') => {
      const isSignup = view === 'signup';
      const isRecovery = view === 'recovery';
      const title = isSignup ? 'Criar conta' : isRecovery ? 'Recuperar senha' : 'Entrar';
      const submitLabel = isSignup ? 'Cadastrar' : isRecovery ? 'Simular recuperação' : 'Entrar';
      const nameField = isSignup ? `
        <div class="field-group">
          <label for="authName">Nome completo</label>
          <input id="authName" name="name" autocomplete="name" maxlength="120" required>
          <div class="err" aria-live="polite"></div>
        </div>` : '';
      const passwordField = isRecovery ? '' : `
        <div class="field-group">
          <label for="authPassword">Senha</label>
          <input id="authPassword" name="password" type="password" autocomplete="${isSignup ? 'new-password' : 'current-password'}" ${isSignup ? 'minlength="8"' : ''} required>
          ${isSignup ? `<div class="strength"><span class="strength-bar"></span></div>
          <small class="password-strength-label" aria-live="polite">Digite uma senha</small>
          <small class="password-tip">Use pelo menos 8 caracteres, incluindo maiúscula, minúscula, número e símbolo.</small>` : ''}
          <div class="err" aria-live="polite"></div>
        </div>`;
      const recoveryLink = view === 'login'
        ? '<button type="button" class="link-btn" data-auth-recovery>Esqueci a senha</button>'
        : '';
      const switchLink = isRecovery
        ? '<button type="button" class="link-btn" data-auth-mode="login">Voltar para entrar</button>'
        : isSignup
          ? '<button type="button" class="link-btn" data-auth-mode="login">Já tenho uma conta</button>'
          : '<button type="button" class="link-btn" data-auth-mode="signup">Criar conta</button>';
      const prompt = isSignup
        ? 'Este cadastro é demonstrativo: nenhum dado será enviado ou salvo.'
        : isRecovery
          ? 'A recuperação também é demonstrativa; nenhum e-mail será enviado.'
          : 'Este acesso é demonstrativo: nenhuma sessão será criada.';

      this.modal(`
        <form id="authForm" class="auth-form" novalidate>
          <h2 id="avt">${title}</h2>
          <p>${prompt}</p>
          ${nameField}
          <div class="field-group">
            <label for="authEmail">E-mail</label>
            <input id="authEmail" name="email" type="email" autocomplete="email" maxlength="254" value="${this.esc(previousEmail)}" required>
            <div class="err" aria-live="polite"></div>
          </div>
          ${passwordField}
          <p class="auth-status" data-auth-message role="status" aria-live="polite"></p>
          <div class="auth-actions">
            <button type="button" class="btn ghost" data-close-auth>Fechar</button>
            ${recoveryLink}
            <button type="submit" class="btn">${submitLabel}</button>
          </div>
          <div class="auth-switch">${switchLink}</div>
        </form>`);

      const dialog = document.getElementById('avmodal');
      const form = dialog.querySelector('#authForm');
      const email = dialog.querySelector('#authEmail');
      const password = dialog.querySelector('#authPassword');
      const strengthBar = dialog.querySelector('.strength-bar');
      const strengthLabel = dialog.querySelector('.password-strength-label');
      const status = dialog.querySelector('[data-auth-message]');

      const setMessage = (field, message) => {
        const fieldError = field.closest('.field-group').querySelector('.err');
        field.setAttribute('aria-invalid', String(Boolean(message)));
        fieldError.textContent = message || '';
      };

      const updatePasswordStrength = () => {
        if (!password || !strengthBar || !strengthLabel) return;
        const { score, label, color } = this.getPasswordStrength(password.value);
        strengthBar.style.width = `${Math.min((score / 5) * 100, 100)}%`;
        strengthBar.style.background = color;
        strengthLabel.textContent = label;
      };

      dialog.querySelector('[data-close-auth]').addEventListener('click', () => dialog.close());
      dialog.querySelector('[data-auth-mode]')?.addEventListener('click', (event) => {
        render(event.currentTarget.dataset.authMode, email.value.trim());
      });
      dialog.querySelector('[data-auth-recovery]')?.addEventListener('click', () => {
        render('recovery', email.value.trim());
      });
      password?.addEventListener('input', updatePasswordStrength);

      form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;
        const name = form.querySelector('#authName');

        if (name && !name.value.trim()) {
          setMessage(name, 'Informe seu nome.');
          valid = false;
        } else if (name) {
          setMessage(name, '');
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
          setMessage(email, 'Informe um e-mail válido.');
          valid = false;
        } else {
          setMessage(email, '');
        }

        if (password) {
          const value = password.value.trim();
          if (!value) {
            setMessage(password, 'Informe uma senha.');
            valid = false;
          } else if (isSignup && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(value)) {
            setMessage(password, 'Use 8 ou mais caracteres, com maiúscula, minúscula, número e símbolo.');
            valid = false;
          } else {
            setMessage(password, '');
          }
        }

        if (!valid) {
          form.querySelector('[aria-invalid="true"]')?.focus();
          return;
        }

        const message = isSignup
          ? 'Cadastro simulado. Nenhum perfil foi criado nem dado enviado.'
          : isRecovery
            ? 'Recuperação simulada. Nenhum e-mail foi enviado.'
            : 'Acesso simulado. Nenhuma sessão foi criada.';
        status.textContent = message;
      });

      setTimeout(() => (isSignup ? dialog.querySelector('#authName') : email).focus(), 50);
    };

    render(mode === 'login' ? 'login' : mode === 'recovery' ? 'recovery' : 'signup');
  },

  applyAccessibility(preferences) {
    const root = document.documentElement;
    const accents = {
      green: { em: '#10b981', glow: '#3cffa8', buttonInk: '#04210f' },
      blue: { em: '#0284c7', glow: '#7dd3fc', buttonInk: '#082538' },
      violet: { em: '#7c3aed', glow: '#c4b5fd', buttonInk: '#271244' }
    };
    const accent = accents[preferences.accent] || accents.green;
    root.style.setProperty('--fs', `${preferences.fontScale}%`);
    root.style.setProperty('--em', accent.em);
    root.style.setProperty('--glow', accent.glow);
    root.style.setProperty('--btn-ink', accent.buttonInk);
    root.style.setProperty('--icon-ink', accent.em);
    root.classList.toggle('dark-theme', preferences.theme === 'dark');
    root.classList.toggle('compact-ui', preferences.density === 'compact');
    root.classList.toggle('wide-spacing', preferences.spacing);
    root.classList.toggle('dyslexia-font', preferences.dyslexia);
    root.classList.toggle('pause-motion', preferences.pauseMotion);
    root.classList.toggle('motion-enabled', !preferences.pauseMotion);
    root.classList.toggle('color-vision', preferences.colorVision);
    root.classList.toggle('strong-focus', preferences.strongFocus);
    if (preferences.highContrast) root.setAttribute('data-contrast', 'high');
    else root.removeAttribute('data-contrast');
  },

  setupAccessibility() {
    const systemReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const defaults = { fontScale: this.store.get('aven.fs', 100), theme: this.store.get('aven.theme', 'aven'), accent: 'green', density: 'comfortable', highContrast: this.store.get('aven.hc', false), spacing: false, dyslexia: false, pauseMotion: systemReducedMotion, colorVision: false, strongFocus: false };
    const saved = this.store.get('aven.accessibility', {});
    const preferences = { ...defaults, ...saved };
    const motionChoiceSaved = this.store.get('aven.motionChoice', false);
    if (!motionChoiceSaved) preferences.pauseMotion = systemReducedMotion || Boolean(saved.pauseMotion);
    this.applyAccessibility(preferences);

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'access-launcher';
    trigger.setAttribute('aria-label', 'Abrir opções de acessibilidade');
    trigger.title = 'Acessibilidade';
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="5" r="2.5" fill="currentColor"/><path d="M6 12c3.3-1.4 6.6-2 10-2s6.7.6 10 2M16 10v8m0 0-6 9m6-9 6 9" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    document.body.appendChild(trigger);

    const settingsDialog = document.createElement('dialog');
    settingsDialog.className = 'win settings-dialog';
    settingsDialog.setAttribute('aria-labelledby', 'settings-title');
    settingsDialog.innerHTML = `
      <button class="x" type="button" aria-label="Fechar configurações visuais">×</button>
      <h2 id="settings-title">Configurações visuais</h2>
      <p class="mut">Personalize tema, cores e espaçamento da interface.</p>
      <div class="access-controls">
        <section class="settings-section">
          <h3>Aparência</h3>
          <label for="site-theme">Tema visual</label>
          <select id="site-theme" data-settings-theme>
            <option value="aven">Padrão AVEN</option>
            <option value="dark">Escuro</option>
          </select>
          <label for="site-accent">Cor de destaque</label>
          <select id="site-accent" data-settings-accent>
            <option value="green">Verde AVEN</option>
            <option value="blue">Azul oceano</option>
            <option value="violet">Violeta</option>
          </select>
          <label for="site-density">Espaçamento da interface</label>
          <select id="site-density" data-settings-density>
            <option value="comfortable">Confortável</option>
            <option value="compact">Compacto</option>
          </select>
        </section>
      </div>
      <p class="demo-note">Demonstração: preferências visuais salvas somente neste navegador.</p>`;
    document.body.appendChild(settingsDialog);

    const dialog = document.createElement('dialog');
    dialog.className = 'win access-dialog';
    dialog.setAttribute('aria-labelledby', 'access-title');
    dialog.innerHTML = `
      <button class="x" type="button" aria-label="Fechar opções de acessibilidade">×</button>
      <h2 id="access-title">Acessibilidade</h2>
      <p class="mut">Ajustes de leitura, navegação e movimento.</p>
      <div class="access-controls">
        <section class="settings-section">
          <h3>Leitura</h3>
          <div class="font-control"><span id="font-label">Tamanho da fonte: ${preferences.fontScale}%</span><button type="button" class="btn ghost sm" data-font-step="-1" aria-label="Diminuir fonte">A−</button><button type="button" class="btn ghost sm" data-font-step="1" aria-label="Aumentar fonte">A+</button></div>
          <label><input type="checkbox" data-pref="highContrast"> Alto contraste</label>
          <label><input type="checkbox" data-pref="spacing"> Maior espaçamento entre textos</label>
          <label><input type="checkbox" data-pref="dyslexia"> Fonte mais fácil para dislexia</label>
        </section>
        <section class="settings-section">
          <h3>Navegação</h3>
          <label><input type="checkbox" data-pref="pauseMotion"> Pausar todas as animações</label>
          <label><input type="checkbox" data-pref="colorVision"> Modo para daltonismo</label>
          <label><input type="checkbox" data-pref="strongFocus"> Destaque de foco reforçado</label>
        </section>
      </div>
      <p class="demo-note">Demonstração: ajustes salvos somente neste navegador.</p>`;
    document.body.appendChild(dialog);

    const settingsTheme = settingsDialog.querySelector('[data-settings-theme]');
    const settingsAccent = settingsDialog.querySelector('[data-settings-accent]');
    const settingsDensity = settingsDialog.querySelector('[data-settings-density]');
    settingsTheme.value = preferences.theme === 'dark' ? 'dark' : 'aven';
    settingsAccent.value = ['green', 'blue', 'violet'].includes(preferences.accent) ? preferences.accent : 'green';
    settingsDensity.value = preferences.density === 'compact' ? 'compact' : 'comfortable';
    const savePreferences = () => this.store.set('aven.accessibility', preferences);

    settingsTheme.addEventListener('change', () => {
      preferences.theme = settingsTheme.value;
      this.store.set('aven.theme', preferences.theme);
      savePreferences();
      this.applyAccessibility(preferences);
    });
    settingsAccent.addEventListener('change', () => {
      preferences.accent = settingsAccent.value;
      savePreferences();
      this.applyAccessibility(preferences);
    });
    settingsDensity.addEventListener('change', () => {
      preferences.density = settingsDensity.value;
      savePreferences();
      this.applyAccessibility(preferences);
    });
    dialog.querySelectorAll('[data-pref]').forEach((input) => {
      input.checked = Boolean(preferences[input.dataset.pref]);
      input.addEventListener('change', () => {
        preferences[input.dataset.pref] = input.checked;
        if (input.dataset.pref === 'highContrast') this.store.set('aven.hc', input.checked);
        if (input.dataset.pref === 'pauseMotion') this.store.set('aven.motionChoice', true);
        savePreferences();
        this.applyAccessibility(preferences);
        document.dispatchEvent(new CustomEvent('aven:motionchange', { detail: { paused: preferences.pauseMotion } }));
      });
    });
    dialog.querySelectorAll('[data-font-step]').forEach((button) => {
      button.addEventListener('click', () => {
        preferences.fontScale = Math.min(140, Math.max(85, preferences.fontScale + Number(button.dataset.fontStep) * 10));
        this.store.set('aven.fs', preferences.fontScale);
        savePreferences();
        dialog.querySelector('#font-label').textContent = `Tamanho da fonte: ${preferences.fontScale}%`;
        this.applyAccessibility(preferences);
      });
    });

    const settingsButton = document.querySelector('[data-settings]');
    const bindDialog = (targetDialog) => {
      let returnFocus;
      targetDialog.querySelector('.x').addEventListener('click', () => targetDialog.close());
      targetDialog.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          targetDialog.close();
        }
      });
      targetDialog.addEventListener('cancel', (event) => {
        event.preventDefault();
        targetDialog.close();
      });
      targetDialog.addEventListener('close', () => {
        if (returnFocus?.isConnected) returnFocus.focus();
      });
      return (button, focusTarget) => {
        returnFocus = button;
        targetDialog.showModal();
        focusTarget.focus();
      };
    };
    const openSettings = bindDialog(settingsDialog);
    const openAccessibility = bindDialog(dialog);
    trigger.addEventListener('click', () => openAccessibility(trigger, dialog.querySelector('[data-font-step="-1"]')));
    settingsButton?.addEventListener('click', () => openSettings(settingsButton, settingsTheme));
  },

  openCourse(id) {
    const course = this.courses.find((item) => item.id === id);
    if (!course) return;
    const accessible = course.access.map((label) => `<span class="access-badge"><span aria-hidden="true">✓</span> ${this.esc(label)}</span>`).join('');
    const location = course.online
      ? '<p class="online-badge"><span aria-hidden="true">●</span> Online</p>'
      : `<div class="course-location">
          <svg viewBox="0 0 420 150" role="img" aria-labelledby="course-map-title course-map-desc"><title id="course-map-title">Mapa ilustrativo do local do curso</title><desc id="course-map-desc">Mapa esquemático fictício com ruas e um pino indicando o endereço do curso.</desc><rect width="420" height="150" rx="14" fill="#e9f1f0"/><path d="M-10 35 430 112M45-10l70 180M280-10l-55 180M390-10l-90 180M-10 125 430 35" stroke="#fff" stroke-width="13"/><path d="M-10 35 430 112M45-10l70 180M280-10l-55 180M390-10l-90 180M-10 125 430 35" stroke="#bbd4cc" stroke-width="2"/><path d="M210 50c-13 0-23 10-23 23 0 17 23 40 23 40s23-23 23-40c0-13-10-23-23-23Z" fill="#087b5a" class="map-pin"/><circle cx="210" cy="73" r="7" fill="#fff"/></svg>
          <p><strong>Localização demonstrativa</strong><br>${this.esc(course.address)}</p>
          <a class="btn ghost sm" href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(course.address)}" target="_blank" rel="noopener noreferrer">Abrir no mapa <span class="sr">(abre em nova aba)</span></a>
        </div>`;
    this.modal(`
      <h2 id="avt">${this.esc(course.title)}</h2>
      <p class="demo-note">${this.esc(course.kind === 'Sessão' ? 'Sessão demonstrativa' : 'Curso demonstrativo')} — agenda fictícia, sem inscrição real.</p>
      <p>${this.esc(course.description)}</p>
      <dl class="detail-list"><div><dt>Carga horária</dt><dd>${this.esc(course.hours)}</dd></div><div><dt>Nível</dt><dd>${this.esc(course.level)}</dd></div><div><dt>Idioma</dt><dd>${this.esc(course.language)}</dd></div><div><dt>Instituição</dt><dd>${this.esc(course.institution)}</dd></div><div><dt>Preço</dt><dd>${this.esc(course.price)}</dd></div><div><dt>Próxima turma/agenda</dt><dd>${this.esc(course.next)}</dd></div></dl>
      <h3>Recursos de acessibilidade</h3><div class="access-badges">${accessible}</div>
      <h3>Localização</h3>${location}
      <button class="btn" type="button" data-enroll>Inscrever-me (demonstração)</button>`, 'wide-win');
    const dialog = document.getElementById('avmodal');
    dialog.querySelector('[data-enroll]').addEventListener('click', () => {
      this.toast('Demonstração: nenhuma inscrição foi realizada ou dado enviado.');
      dialog.close();
    });
  },

  modal(content, extraClass = '') {
    let dialog = document.getElementById('avmodal');

    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.id = 'avmodal';
      dialog.className = 'win';
      dialog.setAttribute('aria-labelledby', 'avt');
      dialog.addEventListener('click', (event) => {
        if (event.target === dialog) {
          dialog.close();
        }
      });
      dialog.addEventListener('close', () => {
        if (this.modalReturnFocus && this.modalReturnFocus.isConnected) this.modalReturnFocus.focus();
      });
      dialog.addEventListener('cancel', (event) => {
        event.preventDefault();
        dialog.close();
      });
      dialog.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          if (dialog.open) dialog.close();
        }
      });
      document.body.appendChild(dialog);
    }

    this.modalReturnFocus = document.activeElement;
    if (dialog.open) {
      dialog.close();
    }

    dialog.className = `win ${extraClass}`.trim();
    dialog.innerHTML = `${content}<button class="x" type="button" aria-label="${this.esc(this.translatePhrase('Fechar janela'))}">×</button>`;
    dialog.querySelector('.x')?.addEventListener('click', () => dialog.close());
    dialog.showModal();
  },

  apply(id) {
    const job = this.jobs.find((item) => Number(item.id) === Number(id));
    if (!job) {
      return;
    }

    this.modal(`
      <svg class="ok" viewBox="0 0 52 52" width="72" height="72" aria-hidden="true">
        <circle cx="26" cy="26" r="23" />
        <path d="m15 27 8 8 15-17" />
      </svg>
      <h2 id="avt">Candidatura de demonstração</h2>
      <p>Para "${this.esc(job.t)}" na ${this.esc(job.c)}. Nenhum dado foi enviado: é só uma simulação do fluxo.</p>
      <button class="btn" type="button" data-close-dialog>Entendi</button>
    `);

    const dialog = document.getElementById('avmodal');
    dialog.querySelector('[data-close-dialog]')?.addEventListener('click', () => dialog.close());
  },

  chrome() {
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    const navLink = (href, key) => `<a href="${href}" data-i18n="${key}" ${currentPage === href ? 'aria-current="page"' : ''}></a>`;

    document.body.insertAdjacentHTML('afterbegin', `
      <a class="skip" href="#main">Ir para o conteúdo</a>
      <header class="top">
        <div class="wrap bar">
          <a class="logo" href="index.html" aria-label="AVEN, início">AVEN<i>.</i></a>
          <button class="menu btn ghost sm" type="button" aria-expanded="false" aria-controls="nav">Menu</button>
          <nav id="nav" aria-label="Principal">
            ${navLink('index.html', 'home')}
            ${navLink('profissoes.html', 'jobs')}
            ${navLink('empresas.html', 'co')}
            <button type="button" class="link-btn" data-auth="login" data-i18n="login"></button>
            <button type="button" class="btn sm" data-auth="signup" data-i18n="signup"></button>
          </nav>
          <form id="global-search" class="global-search" action="vagas.html" method="get" role="search" aria-label="Buscar vagas">
            <label class="sr" for="global-query">Buscar vagas, cargos ou empresas</label>
            <input id="global-query" type="search" name="q" placeholder="Buscar vaga, cargo ou empresa" autocomplete="off">
            <button type="submit" aria-label="Buscar vagas">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7"></circle>
                <path d="m20 20-3.5-3.5"></path>
              </svg>
            </button>
          </form>
          <div class="tools">
            <label class="sr" for="lang">Idioma</label>
            <select id="lang">
              <option value="pt">PT</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="de">Deutsch</option>
              <option value="ru">Русский</option>
              <option value="ja">日本語</option>
            </select>
            <button type="button" class="settings-toggle" data-settings aria-label="Abrir configurações visuais" title="Configurações visuais" aria-haspopup="dialog">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="m19.4 15 .1.1a1.8 1.8 0 0 1-2.5 2.5l-.1-.1a1.8 1.8 0 0 0-3 .9v.2a1.8 1.8 0 0 1-3.6 0v-.2a1.8 1.8 0 0 0-3-.9l-.1.1a1.8 1.8 0 0 1-2.5-2.5l.1-.1a1.8 1.8 0 0 0-.9-3h-.2a1.8 1.8 0 0 1 0-3.6h.2a1.8 1.8 0 0 0 .9-3l-.1-.1a1.8 1.8 0 0 1 2.5-2.5l.1.1a1.8 1.8 0 0 0 3-.9v-.2a1.8 1.8 0 0 1 3.6 0v.2a1.8 1.8 0 0 0 3 .9l.1-.1a1.8 1.8 0 0 1 2.5 2.5l-.1.1a1.8 1.8 0 0 0 .9 3h.2a1.8 1.8 0 0 1 0 3.6h-.2a1.8 1.8 0 0 0-.9 3Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    `);

    document.body.insertAdjacentHTML('beforeend', `
      <footer class="foot">
        <div class="wrap cols">
          <div>
            <a class="logo" style="color:#fff" href="index.html">AVEN<i>.</i></a>
            <p>Acesso, Valorização e Empregabilidade Nacional. Site demonstrativo: vagas e empresas são fictícias.</p>
          </div>
          <div>
            <h3>Institucional</h3>
            <a href="#">Sobre</a>
            <a href="#">Privacidade</a>
            <a href="#">Acessibilidade</a>
          </div>
          <div>
            <h3>Contato</h3>
            <a href="mailto:contato@aven.example">contato@aven.example</a>
            <a href="#">Central de ajuda</a>
          </div>
          <div>
            <h3>Redes</h3>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </footer>
    `);

    const nav = document.getElementById('nav');
    const menuButton = document.querySelector('.menu');
    menuButton.onclick = () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    };

    const globalSearch = document.getElementById('global-search');
    const globalQuery = document.getElementById('global-query');
    globalSearch.addEventListener('submit', (event) => {
      if (!globalQuery.value.trim()) {
        event.preventDefault();
        globalQuery.focus();
      }
    });
    document.addEventListener('keydown', (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        globalQuery.focus();
      }
    });

    document.querySelectorAll('[data-demo], footer a[href="#"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        this.toast('Demonstração: esta função será ligada a um backend.');
      });
    });

    document.querySelectorAll('[data-auth]').forEach((button) => {
      button.addEventListener('click', () => this.openAuthModal(button.dataset.auth || 'signup'));
    });

    const languageSelector = document.getElementById('lang');
    const savedLanguage = this.store.get('aven.lang', 'pt');
    languageSelector.value = ['pt', 'en', 'es', 'de', 'ru', 'ja'].includes(savedLanguage) ? savedLanguage : 'pt';
    languageSelector.addEventListener('change', () => {
      this.store.set('aven.lang', languageSelector.value);
      if (this.translations) this.setLanguage(languageSelector.value);
    });
  },

  led(panel, messages) {
    const track = panel.querySelector('.led-track');
    const status = panel.querySelector('.led-status');
    const liveMessage = panel.querySelector('[data-led-live]');
    const toggleButton = panel.querySelector('[data-led-toggle]');
    const destinations = ['BRASIL', 'MUNDO', 'PRIMEIRO EMPREGO', 'INCLUSÃO', 'OPORTUNIDADES'];
    let index = 0;
    let running = true;
    let panelRequested = true;
    let timer;

    const tickerGroup = `<span class="led-group">${messages.map((item) => `<span class="led-item">${this.esc(item)}</span>`).join('<span class="led-separator" aria-hidden="true"> ◆ </span>')}<span class="led-cursor"></span></span>`;
    track.innerHTML = `${tickerGroup}${tickerGroup}`;
    const storedChoice = this.store.get('aven.ledMotion', null);
    panelRequested = storedChoice !== false;
    running = panelRequested && !document.documentElement.classList.contains('pause-motion');

    const renderStatus = () => {
      status.innerHTML = `<span>DESTINO</span> ${this.esc(destinations[index % destinations.length])} <span>/</span> <span>STATUS</span> ${this.esc(messages[index % messages.length])}`;
      liveMessage.textContent = `${messages[index % messages.length]}. Destino ${destinations[index % destinations.length]}. Status: informação de demonstração.`;
    };
    const updateControls = () => {
      const allPaused = document.documentElement.classList.contains('pause-motion');
      toggleButton.disabled = allPaused;
      toggleButton.textContent = running ? 'Pausar painel' : 'Retomar painel';
      toggleButton.setAttribute('aria-pressed', String(!running));
      panel.classList.toggle('is-moving', running);
    };
    const stop = () => clearInterval(timer);
    const start = () => {
      stop();
      timer = setInterval(() => {
        index = (index + 1) % messages.length;
        renderStatus();
      }, 5200);
    };
    const setRunning = (next, explicitChoice = true) => {
      running = next;
      if (explicitChoice) {
        panelRequested = next;
        this.store.set('aven.ledMotion', next);
      }
      updateControls();
      if (running) start();
      else stop();
    };

    renderStatus();
    updateControls();
    if (running) start();
    toggleButton.addEventListener('click', () => setRunning(!running));
    document.addEventListener('aven:motionchange', (event) => {
      if (event.detail.paused) setRunning(false, false);
      else setRunning(panelRequested, false);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  AVEN.chrome();
  AVEN.loadTranslations().catch((error) => {
    console.error('Unable to load site translations.', error);
    AVEN.toast('Não foi possível carregar as traduções.', true);
  });

  AVEN.setupAccessibility();
  const ledPanel = document.getElementById('led');
  if (ledPanel) {
    AVEN.led(ledPanel, [
      'OPORTUNIDADES NO BRASIL',
      'REMOTE JOBS WORLDWIDE',
      'VAGAS PARA PRIMEIRO EMPREGO',
      'YOUR TALENT HAS NO BORDERS',
      'OPORTUNIDADES INCLUSIVAS',
      'TRABALHE PARA EMPRESAS INTERNACIONAIS'
    ]);
  }

  const featuredJobs = document.getElementById('featured');
  if (featuredJobs) {
    featuredJobs.innerHTML = AVEN.jobs
      .filter((job) => [1, 2, 3, 5, 6, 7].includes(job.id))
      .map((job) => AVEN.jobHTML(job))
      .join('');
    AVEN.bindJobs(featuredJobs);
  }

  const accessPrefs = AVEN.store.get('aven.accessibility', {});
  const motionPaused = document.documentElement.classList.contains('pause-motion') || Boolean(accessPrefs.pauseMotion);
  const revealSelector = '.sec, .company-card, .course-row, .rows li, .prof, .job, .diff > div, .access-grid article, .world > div, .stats p, .hero h1, .hero p.sub, .hero .search, .led-screen';
  let revealObserver = null;
  const createRevealObserver = () => {
    if (revealObserver || !('IntersectionObserver' in window)) return;
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
  };
  if (!motionPaused) createRevealObserver();
  const observeRevealItems = (root) => {
    const items = [];
    if (root instanceof Element && root.matches(revealSelector)) items.push(root);
    if (root.querySelectorAll) items.push(...root.querySelectorAll(revealSelector));
    items.forEach((item) => {
      if (item.classList.contains('reveal') || item.classList.contains('is-visible')) return;
      if (document.documentElement.classList.contains('pause-motion')) {
        item.classList.add('is-visible');
        return;
      }
      createRevealObserver();
      if (revealObserver) {
        item.classList.add('reveal');
        revealObserver.observe(item);
      } else {
        item.classList.add('is-visible');
      }
    });
  };
  observeRevealItems(document.documentElement);
  const revealMutationObserver = new MutationObserver((records) => {
    records.forEach((record) => record.addedNodes.forEach((node) => {
      if (node instanceof Element) observeRevealItems(node);
    }));
  });
  revealMutationObserver.observe(document.body, { childList: true, subtree: true });
  document.addEventListener('aven:motionchange', (event) => {
    if (event.detail.paused) {
      revealObserver?.disconnect();
      document.querySelectorAll('.reveal').forEach((item) => item.classList.add('is-visible'));
      return;
    }

    createRevealObserver();
    if (!revealObserver) return;
    document.querySelectorAll(revealSelector).forEach((item) => {
      if (item.getBoundingClientRect().top <= window.innerHeight) return;
      item.classList.remove('is-visible');
      item.classList.add('reveal');
      revealObserver.observe(item);
    });
  });

  const countObservers = new Map();
  document.querySelectorAll('[data-count]').forEach((counter) => {
    const target = Number(counter.dataset.count);
    if (motionPaused || !('IntersectionObserver' in window)) {
      counter.textContent = String(target);
      return;
    }
    let started = false;
    const countObserver = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting || started) return;
      started = true;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / 850, 1);
        counter.textContent = String(Math.round(target * progress));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    countObservers.set(counter, countObserver);
    countObserver.observe(counter);
  });
  document.addEventListener('aven:motionchange', (event) => {
    if (!event.detail.paused) return;
    countObservers.forEach((observer, counter) => {
      observer.disconnect();
      counter.textContent = counter.dataset.count;
    });
  });

  const homeSearch = document.getElementById('hsearch');
  if (homeSearch) {
    homeSearch.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(homeSearch);
      const jobQuery = formData.get('q') || '';
      const locationQuery = formData.get('loc') || '';
      location.href = `vagas.html?q=${encodeURIComponent(jobQuery)}&loc=${encodeURIComponent(locationQuery)}`;
    });
  }

  const root = document.documentElement;
  const contrastButton = document.getElementById('hc');

  const setHighContrast = (enabled) => {
    if (enabled) {
      root.setAttribute('data-contrast', 'high');
    } else {
      root.removeAttribute('data-contrast');
    }

    if (contrastButton) {
      contrastButton.setAttribute('aria-pressed', String(enabled));
    }

    AVEN.store.set('aven.hc', enabled);
  };

  if (contrastButton) {
    setHighContrast(AVEN.store.get('aven.hc', false));
    contrastButton.onclick = () => setHighContrast(contrastButton.getAttribute('aria-pressed') !== 'true');
  }
});
