/* Página Explorar. PONTO DE INTEGRAÇÃO: API, banco de dados e AVEN.matchScore(job, perfil) com IA. */
// Cole aqui URLs diretas de ícones para personalizar os filtros; deixe '' para usar os ícones padrão.
// Exemplo: area: 'https://meusite.com/icone-area.png'
const FILTER_ICON_URLS = {
    search: '',
    area: '',
    unit: '',
    shift: '',
    salary: '',
    contract: '',
    format: '',
    education: '',
    profile: '',
    language: ''
};

// Cole uma URL direta de imagem para cada vaga; deixe '' para manter a ilustração.
// Exemplo: 1: 'https://meusite.com/foto-vaga.jpg'
const JOB_IMAGE_URLS = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: ''
};

document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('list');
    const form = document.getElementById('f');
    const count = document.getElementById('count');
    const more = document.getElementById('loadmore');
    const salaryValue = document.getElementById('sal-value');

    AVEN.jobs.forEach((job) => {
        const imageUrl = JOB_IMAGE_URLS[job.id];
        if (imageUrl && imageUrl.trim()) job.image = imageUrl.trim();
    });

    Object.entries(FILTER_ICON_URLS).forEach(([name, url]) => {
        if (!url.trim()) return;
        const image = form.querySelector(`[data-filter-icon="${name}"]`);
        if (!image) return;
        image.src = url.trim();
        image.hidden = false;
        const fallback = image.previousElementSibling;
        image.addEventListener('load', () => {
            fallback.hidden = true;
        }, { once: true });
        image.addEventListener('error', () => {
            image.hidden = true;
            fallback.hidden = false;
        }, { once: true });
    });

    let shown = 6;
    let results = [];

    const queryString = new URLSearchParams(location.search);

    form.q.value = queryString.get('q') || '';
    form.loc.value = queryString.get('loc') || '';
    document.getElementById('global-query').value = form.q.value;
    const updateSalaryLabel = () => {
        const amount = Number(form.sal.value);
        salaryValue.textContent = amount ? `R$ ${amount.toLocaleString('pt-BR')}` : 'Qualquer valor';
    };
    updateSalaryLabel();
    form.sal.addEventListener('input', updateSalaryLabel);

    if (queryString.get('f')) {
        const checkedOption = [...form.querySelectorAll('[data-f]')]
            .find((item) => item.dataset.f === queryString.get('f'));
        if (checkedOption) {
            checkedOption.checked = true;
        }
    }

    const normalize = (value) => (value || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    const applyFilters = () => {
        const query = normalize(form.q.value);
        const locationQuery = normalize(form.loc.value);
        const salary = Number(form.sal.value);
        const language = form.elements.namedItem('lang').value;
        const contract = form.ct.value;
        const selectedAreas = [...form.querySelectorAll('[data-area]:checked')].map((item) => item.dataset.area);
        const selectedUnits = [...form.querySelectorAll('[data-unit]:checked')].map((item) => item.dataset.unit);
        const selectedShifts = [...form.querySelectorAll('[data-shift]:checked')].map((item) => item.dataset.shift);
        const selectedProfiles = [...form.querySelectorAll('[data-profile]:checked')].map((item) => item.dataset.profile);
        const selectedFormats = [...form.querySelectorAll('[data-format]:checked')].map((item) => item.dataset.format);
        const selectedEducationModes = [...form.querySelectorAll('[data-education]:checked')].map((item) => item.dataset.education);
        const selectedWorkModes = [...form.querySelectorAll('[data-mode]:checked')].map((item) => item.dataset.mode);
        const accessibleOnly = form.querySelector('[data-a11y]').checked;

        const workModeMap = {
            remoto: 'Remoto',
            presencial: 'Presencial',
            hibrido: 'Híbrido'
        };

        results = AVEN.jobs.filter((job) => {
            const matchesQuery = !query || normalize(`${job.t} ${job.c} ${job.r.join(' ')}`).includes(query);
            const matchesLocation = !locationQuery || normalize(`${job.l} ${job.p}`).includes(locationQuery);
            const matchesArea = !selectedAreas.length || selectedAreas.includes(job.a);
            const matchesSalary = !salary || job.s >= salary;
            const matchesLanguage = !language || job.lang === language;
            const matchesContract = !contract || job.k === contract;
            const matchesUnits = !selectedUnits.length || selectedUnits.some((unit) => job.f.includes(unit));
            const matchesShifts = !selectedShifts.length || selectedShifts.includes(job.shift);
            const matchesProfiles = selectedProfiles.every((profile) => job.f.includes(profile));
            const matchesFormats = !selectedFormats.length || selectedFormats.includes(job.format);
            const matchesEducationModes = !selectedEducationModes.length ||
                selectedEducationModes.some((mode) => job.educationModes.includes(mode));
            const matchesWorkModes = !selectedWorkModes.length ||
                selectedWorkModes.some((mode) => job.m === workModeMap[mode]);
            const matchesAccessibility = !accessibleOnly || (job.access && job.access.length > 0);

            return matchesQuery && matchesLocation && matchesArea && matchesSalary && matchesLanguage &&
                matchesContract && matchesUnits && matchesShifts && matchesProfiles && matchesFormats &&
                matchesEducationModes && matchesWorkModes && matchesAccessibility;
        });

        renderResults();
    };

    const renderResults = () => {
        count.textContent = `${results.length} vagas demonstrativas encontradas`;

        list.innerHTML = results.length
            ? results.slice(0, shown).map((job) => AVEN.jobHTML(job, true)).join('')
            : '<p><strong>Nenhuma vaga com esses filtros.</strong> Remova um filtro ou amplie a busca.</p>';

        more.hidden = shown >= results.length;
        list.setAttribute('aria-busy', 'false');
    };

    const runSearch = () => {
        shown = 6;
        list.setAttribute('aria-busy', 'true');
        list.innerHTML = '<div class="skel"></div><div class="skel"></div><div class="skel"></div>';

        clearTimeout(runSearch.timeoutId);
        runSearch.timeoutId = setTimeout(applyFilters, 450);
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        runSearch();
    });

    form.addEventListener('change', runSearch);
    form.q.addEventListener('input', runSearch);

    form.querySelector('[type=reset]').addEventListener('click', () => {
        setTimeout(() => {
            updateSalaryLabel();
            runSearch();
        });
    });

    more.onclick = () => {
        shown += 6;
        renderResults();
    };

    AVEN.bindJobs(list);
    runSearch();

    document.getElementById('mbtn').onclick = () => {
        AVEN.toast('Demonstração: a recomendação por IA ainda não está conectada.');
    };
});
