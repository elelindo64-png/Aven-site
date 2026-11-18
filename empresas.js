/* Cadastros, empresas e capacitações demonstrativos.
   PONTO DE INTEGRAÇÃO: substituir os dados locais por API e persistência autorizada. */
document.addEventListener('DOMContentLoaded', () => {
  const companies = [
    { id: 'orbita', name: 'Orbita Labs', sector: 'Tecnologia', country: 'Brasil', countryCode: 'br', jobs: [1], about: 'Empresa fictícia que cria produtos digitais financeiros com equipes colaborativas e distribuídas.', benefits: ['Horário flexível', 'Orçamento anual de aprendizagem', 'Acompanhamento de acessibilidade'], access: ['Leitor de tela', 'Foco visível'], location: 'São Paulo, SP — modelo híbrido' },
    { id: 'northwind', name: 'Northwind Studio', sector: 'Design e produto', country: 'Canadá', countryCode: 'ca', jobs: [2], about: 'Estúdio fictício de design de serviços com atuação em diferentes países.', benefits: ['Trabalho remoto', 'Dias de foco', 'Reuniões com legenda'], access: ['Legendas', 'Horário flexível'], location: 'Toronto, Canadá — remoto' },
    { id: 'lusa', name: 'Lusa Data', sector: 'Dados e análise', country: 'Portugal', countryCode: 'pt', jobs: [3], about: 'Consultoria fictícia de dados com trilhas de aprendizagem para início de carreira.', benefits: ['Mentoria', 'Plano de desenvolvimento', 'Apoio para transporte'], access: ['Leitor de tela'], location: 'Lisboa, Portugal' },
    { id: 'verde', name: 'Verde Logística', sector: 'Logística', country: 'Brasil', countryCode: 'br', jobs: [5], about: 'Operação fictícia que busca melhorar a logística urbana e o acesso ao trabalho.', benefits: ['Vale-refeição', 'Acessibilidade no escritório', 'Jornada previsível'], access: ['Rampa de acesso', 'Ambiente sensorial calmo'], location: 'Curitiba, PR — presencial' },
    { id: 'rhein', name: 'Rhein Systems', sector: 'Tecnologia', country: 'Alemanha', countryCode: 'de', jobs: [7], about: 'Empresa fictícia de software industrial com times multiculturais.', benefits: ['Apoio de relocação demonstrativo', 'Mentoria técnica', 'Férias flexíveis'], access: ['Material em braille', 'Foco visível'], location: 'Berlim, Alemanha — híbrido' }
  ];

  const companyList = document.getElementById('company-list');
  if (companyList) {
    companyList.innerHTML = companies.map((company) => `
      <button class="company-card" type="button" data-company="${company.id}" aria-haspopup="dialog">
        <span class="company-card-top">
          <svg class="company-logo" viewBox="0 0 48 48" role="img" aria-label="Logo demonstrativo de ${company.name}">
            <rect x="2" y="2" width="44" height="44" rx="13" fill="#0b1f3f"/>
            <path d="M12 32 24 11l12 21H25l-4-7-4 7Z" fill="#3cffa8"/>
            <circle cx="34" cy="14" r="3" fill="#72d8ff"/>
          </svg>
          <span class="company-sector">${company.sector}</span>
          <span class="company-arrow" aria-hidden="true">↗</span>
        </span>
        <span class="company-name">${company.name}</span>
        <span class="company-summary">${company.about}</span>
        <span class="company-card-meta">
          <span class="company-country"><img class="country-flag" src="${AVEN.countryFlagPath(company.countryCode)}" alt="" aria-hidden="true"> ${company.country}</span>
          <span class="company-vacancies">${company.jobs.length} ${company.jobs.length === 1 ? 'vaga' : 'vagas'}</span>
        </span>
      </button>`).join('');

    companyList.addEventListener('click', (event) => {
      const trigger = event.target.closest('[data-company]');
      if (!trigger) return;
      const company = companies.find((item) => item.id === trigger.dataset.company);
      if (!company) return;
      const jobLinks = company.jobs.map((id) => {
        const job = AVEN.jobs.find((item) => item.id === id);
        return job ? `<li><a href="vagas.html?q=${encodeURIComponent(job.t)}">${AVEN.esc(job.t)} <span aria-hidden="true">↗</span></a></li>` : '';
      }).join('');
      const badges = company.access.map((label) => `<span class="access-badge"><span aria-hidden="true">✓</span> ${AVEN.esc(label)}</span>`).join('');
      AVEN.modal(`
        <p class="eyebrow">Perfil fictício — demonstração</p>
        <h2 id="avt">${AVEN.esc(company.name)}</h2>
        <p>${AVEN.esc(company.about)}</p>
        <div class="detail-grid">
          <section><h3>Vagas abertas</h3><ul class="dialog-link-list">${jobLinks || '<li>Sem vagas abertas no momento.</li>'}</ul></section>
          <section><h3>Benefícios</h3><ul>${company.benefits.map((benefit) => `<li>${AVEN.esc(benefit)}</li>`).join('')}</ul></section>
        </div>
        <h3>Acessibilidade e inclusão</h3><div class="access-badges">${badges}</div>
        <h3>Localização</h3><p>${AVEN.esc(company.location)}</p>
        <p class="demo-note">Informações de demonstração. Nenhuma contratação ou candidatura é realizada.</p>
        <div class="dialog-actions"><button class="btn ghost" type="button" data-follow>Seguir empresa</button><button class="btn" type="button" data-company-jobs>Ver vagas</button></div>`, 'wide-win');
      const dialog = document.getElementById('avmodal');
      dialog.querySelector('[data-follow]').addEventListener('click', () => AVEN.toast(`Demonstração: você está seguindo ${company.name}. Nada foi salvo ou enviado.`));
      dialog.querySelector('[data-company-jobs]').addEventListener('click', () => {
        AVEN.toast(`Demonstração: vagas de ${company.name} encontradas. Abrindo a lista fictícia.`);
        setTimeout(() => { location.href = `vagas.html?q=${encodeURIComponent(company.name)}`; }, 700);
      });
    });
  }

  const courseList = document.getElementById('course-list');
  const courseFilters = document.getElementById('course-filters');
  const courseCount = document.getElementById('course-count');
  if (courseList && courseFilters) {
    const renderCourses = () => {
      const selected = [...courseFilters.querySelectorAll('input:checked')].map((input) => input.name);
      const matches = AVEN.courses.filter((course) => selected.every((filter) => {
        if (filter === 'online') return course.online;
        if (filter === 'presencial') return !course.online;
        if (filter === 'gratuito') return course.free;
        if (filter === 'certificado') return course.certificate;
        if (filter === 'acessibilidade') return course.access.length > 0;
        return true;
      }));
      courseCount.textContent = `${matches.length} curso(s) ou sessão(ões) demonstrativos.`;
      courseList.innerHTML = matches.map((course) => {
        const imageStyle = course.image ? ` style="--course-image: url('${AVEN.esc(course.image)}')"` : '';
        return `
        <article class="course-row"${imageStyle}>
          <div class="course-type" aria-hidden="true">${course.kind === 'Sessão' ? '↗' : '＋'}</div>
          <div><h3>${AVEN.esc(course.title)}</h3><p>${AVEN.esc(course.institution)} · ${course.online ? 'Online' : 'Presencial'} · ${AVEN.esc(course.price)}</p><div class="access-badges">${course.access.map((label) => `<span class="access-badge"><span aria-hidden="true">✓</span> ${AVEN.esc(label)}</span>`).join('')}</div></div>
          <button class="btn ghost sm" type="button" data-course="${course.id}" aria-haspopup="dialog">Ver detalhes</button>
        </article>`;
      }).join('') || '<p>Nenhum curso com esses filtros. Ajuste as opções para ver a agenda fictícia.</p>';
    };
    courseFilters.addEventListener('change', renderCourses);
    courseList.addEventListener('click', (event) => {
      const trigger = event.target.closest('[data-course]');
      if (trigger) AVEN.openCourse(trigger.dataset.course);
    });
    renderCourses();
  }

  document.querySelectorAll('form.demo').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      let invalidCount = 0;
      form.querySelectorAll('[required]').forEach((field) => {
        const errorNode = document.getElementById(`${field.id}-e`);
        let message = '';
        if (!field.value.trim()) message = 'Preencha este campo.';
        else if (field.type === 'email' && !/^\S+@\S+\.\S+$/.test(field.value)) message = 'Informe um e-mail válido, como nome@empresa.com.';
        field.setAttribute('aria-invalid', String(Boolean(message)));
        if (errorNode) errorNode.textContent = message;
        if (message) invalidCount += 1;
      });
      if (invalidCount > 0) {
        AVEN.toast(`${invalidCount} campo(s) precisam de correção.`, true);
        form.querySelector('[aria-invalid="true"]')?.focus();
        return;
      }
      form.reset();
      AVEN.toast('Demonstração: formulário validado localmente. Nada foi enviado ou salvo.');
    });
  });
});
