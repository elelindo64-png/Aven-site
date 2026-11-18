"use strict";
const PROFISSOES = [
    { id: 'software', nome: 'Desenvolvedor(a) de Software', area: 'Tecnologia', demanda: 'Muito alta', salario: 9000, vagas: 42, cor: '#0d6b5c', regiao: 'Brasil e oportunidades internacionais', resumo: 'Cria sites, aplicativos e sistemas usados por pessoas e empresas.', tarefas: ['Desenvolver e testar funcionalidades', 'Corrigir problemas e melhorar sistemas', 'Trabalhar com designers, produto e outras pessoas de tecnologia'], locais: 'Empresas de tecnologia, bancos, startups e equipes remotas.', skills: 'Programação, resolução de problemas, colaboração e aprendizagem contínua.', nomeGlobal: { en: 'Software Developer', de: 'Softwareentwickler/in', ru: 'Разработчик программного обеспечения', ja: 'ソフトウェア開発者' }, foto: 'assets/imagens/prof-desenvolvedor.jpg' },
    { id: 'design', nome: 'Designer de Produto', area: 'Design', demanda: 'Alta', salario: 6500, vagas: 18, cor: '#4b2fa0', regiao: 'Brasil, Europa, América do Norte e equipes globais', resumo: 'Planeja produtos digitais que sejam fáceis de entender e usar.', tarefas: ['Pesquisar necessidades de usuários', 'Desenhar telas e protótipos', 'Testar ideias com equipes e clientes'], locais: 'Estúdios de produto, empresas digitais, consultorias e trabalho remoto.', skills: 'Pesquisa, prototipagem, comunicação visual e ferramentas de design.', nomeGlobal: { en: 'Product Designer', de: 'Produktdesigner/in', ru: 'Дизайнер продукта', ja: 'プロダクトデザイナー' }, foto: 'assets/imagens/prof-designer.jpg' },
    { id: 'dados', nome: 'Analista de Dados', area: 'Dados', demanda: 'Muito alta', salario: 7000, vagas: 31, cor: '#0b5fa5', regiao: 'Brasil, Portugal, Canadá e Estados Unidos', resumo: 'Transforma dados em informações para apoiar decisões.', tarefas: ['Organizar e conferir conjuntos de dados', 'Criar relatórios e visualizações', 'Explicar descobertas para diferentes equipes'], locais: 'Bancos, varejo, saúde, indústria e empresas de tecnologia.', skills: 'Planilhas, SQL, visualização de dados e pensamento analítico.', nomeGlobal: { en: 'Data Analyst', de: 'Datenanalyst/in', ru: 'Аналитик данных', ja: 'データアナリスト' }, foto: 'assets/imagens/prof-dados.jpg' },
    { id: 'enfermagem', nome: 'Enfermeiro(a)', area: 'Saúde', demanda: 'Alta', salario: 5200, vagas: 27, cor: '#0c7a62', regiao: 'Brasil e diversos países; requisitos variam por região', resumo: 'Presta cuidados de saúde, acompanha pacientes e apoia equipes clínicas.', tarefas: ['Avaliar e registrar informações de saúde', 'Orientar pacientes e familiares', 'Colaborar com equipes multiprofissionais'], locais: 'Hospitais, clínicas, atenção básica e serviços comunitários.', skills: 'Formação e registro profissional, cuidado, comunicação e organização.', nomeGlobal: { en: 'Nurse', de: 'Pflegefachkraft', ru: 'Медицинская сестра / Медицинский брат', ja: '看護師' }, foto: 'assets/imagens/prof-enfermagem.jpg' },
    { id: 'idiomas', nome: 'Professor(a) de Idiomas', area: 'Educação', demanda: 'Crescendo', salario: 4300, vagas: 15, cor: '#a5530b', regiao: 'Brasil e ensino online para alunos no mundo todo', resumo: 'Ajuda estudantes a desenvolver leitura, escrita, compreensão e conversação.', tarefas: ['Planejar aulas e atividades', 'Acompanhar o progresso dos alunos', 'Adaptar materiais a diferentes níveis'], locais: 'Escolas, cursos, empresas e plataformas de ensino online.', skills: 'Domínio do idioma, didática, planejamento e comunicação intercultural.', nomeGlobal: { en: 'Language Teacher', de: 'Sprachlehrer/in', ru: 'Преподаватель иностранного языка', ja: '語学教師' }, foto: 'assets/imagens/prof-idiomas.jpg' },
    { id: 'engenharia-civil', nome: 'Engenheiro(a) Civil', area: 'Engenharia', demanda: 'Alta', salario: 8200, vagas: 12, cor: '#365a8c', regiao: 'Brasil, Europa, Oriente Médio e América do Norte', resumo: 'Planeja e acompanha obras de edifícios e infraestrutura.', tarefas: ['Elaborar e revisar projetos', 'Acompanhar prazos, custos e segurança', 'Coordenar equipes e fornecedores'], locais: 'Construtoras, consultorias, órgãos públicos e canteiros de obras.', skills: 'Formação e registro conforme o país, planejamento, cálculo e gestão.', nomeGlobal: { en: 'Civil Engineer', de: 'Bauingenieur/in', ru: 'Инженер-строитель', ja: '土木技術者' }, foto: 'assets/imagens/prof-engenharia.jpg' },
    { id: 'contabilidade', nome: 'Contador(a)', area: 'Finanças', demanda: 'Alta', salario: 5800, vagas: 20, cor: '#2f6b3a', regiao: 'Brasil e organizações internacionais', resumo: 'Organiza registros contábeis e ajuda organizações a cumprir obrigações financeiras.', tarefas: ['Preparar demonstrativos e relatórios', 'Acompanhar tributos e prazos', 'Apoiar decisões de orçamento'], locais: 'Escritórios contábeis, empresas, bancos e consultorias.', skills: 'Contabilidade, atenção a detalhes, ferramentas financeiras e legislação local.', nomeGlobal: { en: 'Accountant', de: 'Buchhalter/in', ru: 'Бухгалтер', ja: '会計士' }, foto: 'assets/imagens/prof-contabilidade.jpg' },
    { id: 'eletricista', nome: 'Eletricista Industrial', area: 'Indústria', demanda: 'Crescendo', salario: 4600, vagas: 23, cor: '#8a6a0b', regiao: 'Brasil, Alemanha, Canadá e polos industriais', resumo: 'Instala, inspeciona e mantém sistemas elétricos de instalações e máquinas.', tarefas: ['Realizar manutenção preventiva e corretiva', 'Ler diagramas e identificar falhas', 'Seguir normas de segurança elétrica'], locais: 'Fábricas, energia, construção e prestadores de manutenção.', skills: 'Formação técnica, segurança, leitura de esquemas e diagnóstico.', nomeGlobal: { en: 'Industrial Electrician', de: 'Industrieelektriker/in', ru: 'Промышленный электрик', ja: '産業電気技師' }, foto: 'assets/imagens/prof-eletricista.jpg' },
    { id: 'agronomia', nome: 'Engenheiro(a) Agrônomo(a)', area: 'Agronegócio', demanda: 'Alta', salario: 7500, vagas: 26, cor: '#287045', regiao: 'Brasil, Argentina, Austrália e outros polos agrícolas', resumo: 'Apoia a produção agrícola com técnicas que equilibram produtividade e sustentabilidade.', tarefas: ['Acompanhar solo, plantio e colheita', 'Orientar produtores sobre manejo', 'Avaliar tecnologias e impactos ambientais'], locais: 'Propriedades rurais, cooperativas, pesquisa e empresas de insumos.', skills: 'Agronomia, análise de campo, sustentabilidade e comunicação técnica.', nomeGlobal: { en: 'Agricultural Engineer', de: 'Agraringenieur/in', ru: 'Агроном', ja: '農業技術者' } },
    { id: 'ciberseguranca', nome: 'Analista de Cibersegurança', area: 'Tecnologia', demanda: 'Muito alta', salario: 10500, vagas: 34, cor: '#124c75', regiao: 'Brasil, Alemanha, Japão e vagas remotas globais', resumo: 'Ajuda a proteger redes, sistemas e informações contra riscos digitais.', tarefas: ['Monitorar alertas e investigar incidentes', 'Revisar controles e configurações de segurança', 'Orientar equipes sobre prevenção'], locais: 'Bancos, governos, consultorias e empresas de tecnologia.', skills: 'Redes, sistemas, análise de riscos e prática responsável de segurança.', nomeGlobal: { en: 'Cybersecurity Analyst', de: 'Cybersecurity-Analyst/in', ru: 'Специалист по кибербезопасности', ja: 'サイバーセキュリティアナリスト' } },
    { id: 'ia', nome: 'Engenheiro(a) de Inteligência Artificial', area: 'Tecnologia', demanda: 'Muito alta', salario: 13000, vagas: 29, cor: '#33418c', regiao: 'Brasil, Estados Unidos, Japão e Europa', resumo: 'Desenvolve e integra sistemas que aprendem padrões a partir de dados.', tarefas: ['Preparar dados e avaliar modelos', 'Integrar soluções a produtos', 'Monitorar qualidade, segurança e desempenho'], locais: 'Laboratórios de pesquisa, startups e equipes de produto globais.', skills: 'Programação, estatística, aprendizado de máquina e responsabilidade com dados.', nomeGlobal: { en: 'AI Engineer', de: 'KI-Ingenieur/in', ru: 'Инженер по искусственному интеллекту', ja: 'AIエンジニア' } },
    { id: 'ux', nome: 'Pesquisador(a) de Experiência do Usuário', area: 'Design', demanda: 'Alta', salario: 7800, vagas: 17, cor: '#5940a5', regiao: 'Brasil, Reino Unido, Canadá e equipes distribuídas', resumo: 'Investiga como as pessoas usam produtos para orientar melhorias.', tarefas: ['Planejar entrevistas e testes de usabilidade', 'Analisar padrões de comportamento', 'Compartilhar recomendações com produto e design'], locais: 'Empresas digitais, consultorias e laboratórios de produto.', skills: 'Pesquisa, síntese, acessibilidade e comunicação clara.', nomeGlobal: { en: 'UX Researcher', de: 'UX-Researcher/in', ru: 'Исследователь пользовательского опыта', ja: 'UXリサーチャー' } },
    { id: 'energia-solar', nome: 'Técnico(a) em Energia Solar', area: 'Energia', demanda: 'Crescendo', salario: 4800, vagas: 24, cor: '#96721a', regiao: 'Brasil, Portugal, Espanha e regiões com energia solar', resumo: 'Instala e mantém sistemas fotovoltaicos em casas e empresas.', tarefas: ['Avaliar locais e dimensionar instalações', 'Montar painéis e conexões conforme normas', 'Verificar geração e realizar manutenção'], locais: 'Empresas de energia, construção e prestadores especializados.', skills: 'Formação técnica, eletricidade, segurança em altura e leitura de projetos.', nomeGlobal: { en: 'Solar Energy Technician', de: 'Solartechniker/in', ru: 'Техник по солнечной энергетике', ja: '太陽光発電技術者' } },
    { id: 'logistica', nome: 'Analista de Logística', area: 'Operações', demanda: 'Alta', salario: 5100, vagas: 22, cor: '#345f70', regiao: 'Brasil e cadeias de abastecimento internacionais', resumo: 'Ajuda a organizar estoques, transportes e entregas de produtos.', tarefas: ['Acompanhar pedidos e indicadores', 'Planejar rotas e níveis de estoque', 'Resolver atrasos em conjunto com fornecedores'], locais: 'Varejo, indústria, comércio exterior e centros de distribuição.', skills: 'Planejamento, planilhas, análise de dados e comunicação.', nomeGlobal: { en: 'Logistics Analyst', de: 'Logistikanalyst/in', ru: 'Аналитик по логистике', ja: '物流アナリスト' } },
    { id: 'saude-mental', nome: 'Psicólogo(a)', area: 'Saúde', demanda: 'Alta', salario: 4900, vagas: 19, cor: '#14776e', regiao: 'Brasil e exterior; registro profissional local necessário', resumo: 'Atua na promoção da saúde mental em contextos clínicos e organizacionais.', tarefas: ['Realizar atendimentos e avaliações', 'Planejar intervenções e acompanhar resultados', 'Manter registros profissionais confidenciais'], locais: 'Clínicas, hospitais, escolas, organizações e atendimento online.', skills: 'Formação e registro local, escuta, ética e comunicação.', nomeGlobal: { en: 'Psychologist', de: 'Psychologe/in', ru: 'Психолог', ja: '心理士' } },
    { id: 'marketing', nome: 'Especialista em Marketing Digital', area: 'Marketing', demanda: 'Alta', salario: 6200, vagas: 25, cor: '#a5530b', regiao: 'Brasil e equipes remotas internacionais', resumo: 'Planeja campanhas e conteúdos para alcançar públicos em canais digitais.', tarefas: ['Criar calendários e campanhas', 'Acompanhar métricas e otimizar ações', 'Colaborar com design, vendas e conteúdo'], locais: 'Agências, lojas, startups e departamentos de comunicação.', skills: 'Estratégia, análise de métricas, escrita e ferramentas digitais.', nomeGlobal: { en: 'Digital Marketing Specialist', de: 'Digital-Marketing-Spezialist/in', ru: 'Специалист по цифровому маркетингу', ja: 'デジタルマーケティング担当者' } },
    { id: 'medicina', nome: 'Médico(a)', area: 'Saúde', demanda: 'Alta', salario: 14500, vagas: 21, cor: '#0c7a62', regiao: 'Brasil e exterior; validação de diploma e licença variam por país', resumo: 'Avalia condições de saúde, orienta pacientes e propõe planos de cuidado.', tarefas: ['Realizar consultas e avaliações', 'Interpretar exames e registrar condutas', 'Trabalhar com equipes de saúde'], locais: 'Hospitais, clínicas, centros de saúde e pesquisa.', skills: 'Formação e licença local, raciocínio clínico, comunicação e ética.', nomeGlobal: { en: 'Physician', de: 'Arzt/Ärztin', ru: 'Врач', ja: '医師' } },
    { id: 'cozinha', nome: 'Chef de Cozinha', area: 'Turismo e alimentação', demanda: 'Crescendo', salario: 4200, vagas: 16, cor: '#945222', regiao: 'Brasil, Portugal, Japão e destinos turísticos', resumo: 'Planeja preparos, organiza cozinhas e coordena a produção de refeições.', tarefas: ['Criar cardápios e organizar ingredientes', 'Coordenar o preparo e a apresentação', 'Controlar higiene, qualidade e desperdício'], locais: 'Restaurantes, hotéis, catering e cozinhas institucionais.', skills: 'Técnicas culinárias, organização, segurança alimentar e trabalho em equipe.', nomeGlobal: { en: 'Chef', de: 'Küchenchef/in', ru: 'Шеф-повар', ja: 'シェフ' } },
    { id: 'robotica', nome: 'Engenheiro(a) de Robótica', area: 'Engenharia', demanda: 'Crescendo', salario: 11200, vagas: 14, cor: '#285b8f', regiao: 'Japão, Alemanha, Estados Unidos e indústria brasileira', resumo: 'Projeta e integra robôs usados na indústria, pesquisa e serviços.', tarefas: ['Programar e testar sistemas robóticos', 'Integrar sensores, controles e equipamentos', 'Acompanhar segurança e desempenho dos robôs'], locais: 'Fábricas, centros de pesquisa e empresas de automação.', skills: 'Engenharia, programação, eletrônica e solução de problemas.', nomeGlobal: { en: 'Robotics Engineer', de: 'Robotikingenieur/in', ru: 'Инженер-робототехник', ja: 'ロボット工学エンジニア' } },
    { id: 'traducao', nome: 'Tradutor(a) e Intérprete', area: 'Idiomas', demanda: 'Crescendo', salario: 5300, vagas: 13, cor: '#70519a', regiao: 'Brasil, Japão, Europa e trabalho remoto internacional', resumo: 'Transmite conteúdos entre idiomas em documentos, reuniões e eventos.', tarefas: ['Traduzir e revisar textos', 'Interpretar conversas ou apresentações', 'Pesquisar terminologia de cada área'], locais: 'Agências, eventos, editoras, empresas e prestação de serviços remota.', skills: 'Domínio de idiomas, escrita, pesquisa e confidencialidade.', nomeGlobal: { en: 'Translator and Interpreter', de: 'Übersetzer/in und Dolmetscher/in', ru: 'Переводчик и устный переводчик', ja: '翻訳者・通訳者' } },
    { id: 'mecanica', nome: 'Técnico(a) em Manutenção Automotiva', area: 'Indústria', demanda: 'Alta', salario: 3900, vagas: 18, cor: '#3c6475', regiao: 'Brasil, Japão, Alemanha e rede global de oficinas', resumo: 'Inspeciona veículos e identifica necessidades de reparo e manutenção.', tarefas: ['Realizar diagnósticos e revisões', 'Reparar sistemas mecânicos e eletrônicos', 'Explicar serviços e cuidados aos clientes'], locais: 'Oficinas, concessionárias, frotas e fabricantes.', skills: 'Formação técnica, diagnóstico, segurança e atualização tecnológica.', nomeGlobal: { en: 'Automotive Maintenance Technician', de: 'Kfz-Mechatroniker/in', ru: 'Специалист по обслуживанию автомобилей', ja: '自動車整備士' } },
    { id: 'financeiro', nome: 'Analista Financeiro', area: 'Finanças', demanda: 'Alta', salario: 6700, vagas: 20, cor: '#2f6b3a', regiao: 'Brasil, Reino Unido, Canadá e centros financeiros globais', resumo: 'Analisa receitas, custos e cenários para apoiar decisões financeiras.', tarefas: ['Preparar previsões e relatórios', 'Comparar resultados com orçamentos', 'Apoiar equipes na gestão de custos'], locais: 'Bancos, empresas, consultorias e organizações internacionais.', skills: 'Finanças, planilhas, análise, atenção a detalhes e comunicação.', nomeGlobal: { en: 'Financial Analyst', de: 'Finanzanalyst/in', ru: 'Финансовый аналитик', ja: '金融アナリスト' } },
    { id: 'construcao', nome: 'Técnico(a) em Edificações', area: 'Construção civil', demanda: 'Alta', salario: 4300, vagas: 17, cor: '#87591e', regiao: 'Brasil e projetos de construção em vários países', resumo: 'Apoia projetos e acompanha a execução de obras e edificações.', tarefas: ['Ler projetos e conferir materiais', 'Acompanhar etapas e equipes da obra', 'Registrar medições e apoiar controles de segurança'], locais: 'Construtoras, escritórios de engenharia e obras públicas.', skills: 'Formação técnica, leitura de projetos, organização e segurança.', nomeGlobal: { en: 'Building Technician', de: 'Bautechniker/in', ru: 'Техник-строитель', ja: '建築技術者' } },
    { id: 'turismo', nome: 'Profissional de Turismo e Hospitalidade', area: 'Turismo', demanda: 'Crescendo', salario: 3600, vagas: 15, cor: '#277a6c', regiao: 'Brasil, Europa, Japão e destinos turísticos internacionais', resumo: 'Organiza experiências e acolhe viajantes em serviços de turismo.', tarefas: ['Planejar roteiros, reservas e atividades', 'Atender visitantes de diferentes países', 'Coordenar serviços e resolver imprevistos'], locais: 'Hotéis, agências, atrações e empresas de eventos.', skills: 'Atendimento, organização, idiomas e conhecimento de destinos.', nomeGlobal: { en: 'Tourism and Hospitality Professional', de: 'Fachkraft für Tourismus und Gastgewerbe', ru: 'Специалист по туризму и гостеприимству', ja: '観光・ホスピタリティ担当者' } },
    { id: 'rh', nome: 'Analista de Recursos Humanos', area: 'Gestão', demanda: 'Alta', salario: 5600, vagas: 18, cor: '#5e5298', regiao: 'Brasil e organizações com equipes internacionais', resumo: 'Ajuda a desenvolver processos de seleção, integração e apoio às equipes.', tarefas: ['Apoiar recrutamento e integração', 'Organizar treinamentos e políticas internas', 'Acompanhar informações de clima e desenvolvimento'], locais: 'Empresas, consultorias e áreas de gestão de pessoas.', skills: 'Comunicação, organização, confidencialidade e legislação local.', nomeGlobal: { en: 'Human Resources Analyst', de: 'Personalreferent/in', ru: 'Специалист по управлению персоналом', ja: '人事担当者' } },
    { id: 'professor-ciencias', nome: 'Professor(a) de Ciências e Tecnologia', area: 'Educação', demanda: 'Alta', salario: 4700, vagas: 16, cor: '#267b63', regiao: 'Brasil, Portugal e ensino online internacional', resumo: 'Ensina conceitos científicos e tecnológicos para diferentes faixas etárias.', tarefas: ['Planejar aulas e projetos práticos', 'Avaliar aprendizagem e oferecer orientação', 'Adaptar conteúdos a diferentes necessidades'], locais: 'Escolas, cursos técnicos, projetos sociais e plataformas online.', skills: 'Formação docente, didática, conteúdo científico e inclusão.', nomeGlobal: { en: 'Science and Technology Teacher', de: 'Lehrer/in für Naturwissenschaften und Technik', ru: 'Преподаватель естественных наук и технологий', ja: '科学・技術教師' } }
];

// Cole uma URL direta de imagem por profissão; deixe '' para usar o arquivo local ou o fundo ilustrado.
const PROFESSION_IMAGE_URLS = {
    software: '', design: '', dados: '', enfermagem: '', idiomas: '', 'engenharia-civil': '',
    contabilidade: '', eletricista: '', agronomia: '', ciberseguranca: '', ia: '', ux: '',
    'energia-solar': '', logistica: '', 'saude-mental': '', marketing: '', medicina: '',
    cozinha: '', robotica: '', traducao: '', mecanica: '', financeiro: '', construcao: '',
    turismo: '', rh: '', 'professor-ciencias': ''
};

const PROFESSION_DETAIL_TRANSLATIONS = {
    de: {
        software: ['Entwickelt Websites, Apps und Systeme für Menschen und Unternehmen.', ['Funktionen entwickeln und testen', 'Probleme beheben und Systeme verbessern', 'Mit Design-, Produkt- und Technikteams zusammenarbeiten'], 'Technologieunternehmen, Banken, Start-ups und Remote-Teams.', 'Programmierung, Problemlösung, Zusammenarbeit und kontinuierliches Lernen.'],
        design: ['Gestaltet digitale Produkte, die leicht verständlich und einfach zu bedienen sind.', ['Nutzerbedürfnisse erforschen', 'Oberflächen und Prototypen gestalten', 'Ideen mit Teams und Kunden testen'], 'Produktstudios, Digitalunternehmen, Beratungen und Remote-Arbeit.', 'Recherche, Prototyping, visuelle Kommunikation und Designwerkzeuge.'],
        dados: ['Macht aus Daten Informationen, die Entscheidungen unterstützen.', ['Datensätze organisieren und prüfen', 'Berichte und Visualisierungen erstellen', 'Erkenntnisse verschiedenen Teams erklären'], 'Banken, Einzelhandel, Gesundheitswesen, Industrie und Technologieunternehmen.', 'Tabellenkalkulation, SQL, Datenvisualisierung und analytisches Denken.'],
        enfermagem: ['Versorgt Menschen, begleitet Patienten und unterstützt klinische Teams.', ['Gesundheitsdaten erfassen und dokumentieren', 'Patienten und Angehörige beraten', 'Mit multiprofessionellen Teams zusammenarbeiten'], 'Krankenhäuser, Kliniken, Grundversorgung und soziale Einrichtungen.', 'Ausbildung und Berufszulassung, Fürsorge, Kommunikation und Organisation.'],
        idiomas: ['Fördert Lesen, Schreiben, Hörverstehen und Konversation.', ['Unterricht und Aktivitäten planen', 'Lernfortschritt begleiten', 'Material an verschiedene Niveaus anpassen'], 'Schulen, Sprachkurse, Unternehmen und Online-Lernplattformen.', 'Sprachkenntnisse, Didaktik, Planung und interkulturelle Kommunikation.'],
        'engenharia-civil': ['Plant und begleitet Bau- und Infrastrukturprojekte.', ['Projekte erstellen und prüfen', 'Termine, Kosten und Sicherheit überwachen', 'Teams und Lieferanten koordinieren'], 'Bauunternehmen, Beratungen, Behörden und Baustellen.', 'Ausbildung und Zulassung je nach Land, Planung, Berechnung und Management.'],
        contabilidade: ['Führt Buchhaltungsunterlagen und unterstützt Organisationen bei finanziellen Pflichten.', ['Abschlüsse und Berichte erstellen', 'Steuern und Fristen überwachen', 'Budgetentscheidungen unterstützen'], 'Steuerkanzleien, Unternehmen, Banken und Beratungen.', 'Rechnungswesen, Genauigkeit, Finanzwerkzeuge und lokale Gesetze.'],
        eletricista: ['Installiert, prüft und wartet elektrische Anlagen und Maschinen.', ['Vorbeugende und korrektive Wartung durchführen', 'Schaltpläne lesen und Fehler finden', 'Elektrische Sicherheitsregeln einhalten'], 'Fabriken, Energieversorgung, Bau und Wartungsdienste.', 'Technische Ausbildung, Sicherheit, Schaltpläne und Fehlerdiagnose.'],
        agronomia: ['Unterstützt die Landwirtschaft mit produktiven und nachhaltigen Methoden.', ['Boden, Aussaat und Ernte überwachen', 'Betriebe zur Bewirtschaftung beraten', 'Technologien und Umweltauswirkungen bewerten'], 'Landwirtschaftliche Betriebe, Genossenschaften, Forschung und Zulieferer.', 'Agrarwissenschaft, Feldanalyse, Nachhaltigkeit und technische Kommunikation.'],
        ciberseguranca: ['Hilft, Netzwerke, Systeme und Informationen vor digitalen Risiken zu schützen.', ['Warnmeldungen überwachen und Vorfälle untersuchen', 'Sicherheitskontrollen und Konfigurationen prüfen', 'Teams zur Prävention beraten'], 'Banken, Behörden, Beratungen und Technologieunternehmen.', 'Netzwerke, Systeme, Risikoanalyse und verantwortungsvolle Sicherheitspraxis.'],
        ia: ['Entwickelt und integriert Systeme, die Muster aus Daten lernen.', ['Daten aufbereiten und Modelle bewerten', 'Lösungen in Produkte integrieren', 'Qualität, Sicherheit und Leistung überwachen'], 'Forschungslabore, Start-ups und globale Produktteams.', 'Programmierung, Statistik, maschinelles Lernen und verantwortungsvoller Umgang mit Daten.'],
        ux: ['Untersucht die Nutzung von Produkten, um Verbesserungen anzustoßen.', ['Interviews und Nutzertests planen', 'Verhaltensmuster analysieren', 'Empfehlungen mit Produkt- und Designteams teilen'], 'Digitalunternehmen, Beratungen und Produktlabore.', 'Forschung, Synthese, Barrierefreiheit und klare Kommunikation.'],
        'energia-solar': ['Installiert und wartet Photovoltaikanlagen in Häusern und Unternehmen.', ['Standorte prüfen und Anlagen dimensionieren', 'Paneele und Anschlüsse normgerecht montieren', 'Erzeugung prüfen und Wartung durchführen'], 'Energieunternehmen, Bau und spezialisierte Dienstleister.', 'Technische Ausbildung, Elektrik, Absturzsicherung und Projektpläne.'],
        logistica: ['Organisiert Lagerbestände, Transporte und Produktlieferungen.', ['Bestellungen und Kennzahlen verfolgen', 'Routen und Lagerbestände planen', 'Lieferverzögerungen mit Anbietern lösen'], 'Einzelhandel, Industrie, Außenhandel und Verteilzentren.', 'Planung, Tabellenkalkulation, Datenanalyse und Kommunikation.'],
        'saude-mental': ['Fördert psychische Gesundheit in klinischen und organisatorischen Umfeldern.', ['Beratungen und Beurteilungen durchführen', 'Maßnahmen planen und Ergebnisse begleiten', 'Vertrauliche Berufsunterlagen führen'], 'Kliniken, Krankenhäuser, Schulen, Organisationen und Online-Beratung.', 'Ausbildung und lokale Zulassung, Zuhören, Ethik und Kommunikation.'],
        marketing: ['Plant Kampagnen und Inhalte für digitale Zielgruppen.', ['Redaktionspläne und Kampagnen erstellen', 'Kennzahlen beobachten und Maßnahmen optimieren', 'Mit Design, Vertrieb und Redaktion zusammenarbeiten'], 'Agenturen, Handel, Start-ups und Kommunikationsteams.', 'Strategie, Kennzahlenanalyse, Schreiben und digitale Werkzeuge.'],
        medicina: ['Beurteilt den Gesundheitszustand, berät Patienten und plant die Versorgung.', ['Untersuchungen und Beurteilungen durchführen', 'Befunde auswerten und Maßnahmen dokumentieren', 'Mit Gesundheitsteams zusammenarbeiten'], 'Krankenhäuser, Kliniken, Gesundheitszentren und Forschung.', 'Ausbildung und lokale Zulassung, klinisches Denken, Kommunikation und Ethik.'],
        cozinha: ['Plant Speisen, organisiert Küchen und koordiniert die Mahlzeitenproduktion.', ['Menüs erstellen und Zutaten organisieren', 'Zubereitung und Präsentation koordinieren', 'Hygiene, Qualität und Abfall überwachen'], 'Restaurants, Hotels, Catering und Gemeinschaftsküchen.', 'Kochtechniken, Organisation, Lebensmittelsicherheit und Teamarbeit.'],
        robotica: ['Entwirft und integriert Roboter für Industrie, Forschung und Dienstleistungen.', ['Robotersysteme programmieren und testen', 'Sensoren, Steuerungen und Anlagen integrieren', 'Sicherheit und Leistung der Roboter überwachen'], 'Fabriken, Forschungszentren und Automatisierungsunternehmen.', 'Ingenieurwesen, Programmierung, Elektronik und Problemlösung.'],
        traducao: ['Überträgt Inhalte zwischen Sprachen in Dokumenten, Besprechungen und Veranstaltungen.', ['Texte übersetzen und lektorieren', 'Gespräche oder Präsentationen dolmetschen', 'Fachbegriffe recherchieren'], 'Agenturen, Veranstaltungen, Verlage, Unternehmen und Remote-Dienste.', 'Sprachkenntnisse, Schreiben, Recherche und Vertraulichkeit.'],
        mecanica: ['Untersucht Fahrzeuge und erkennt Reparatur- und Wartungsbedarf.', ['Diagnosen und Inspektionen durchführen', 'Mechanische und elektronische Systeme reparieren', 'Kunden Dienstleistungen und Pflege erklären'], 'Werkstätten, Autohäuser, Fuhrparks und Hersteller.', 'Technische Ausbildung, Diagnose, Sicherheit und technologische Weiterbildung.'],
        financeiro: ['Analysiert Einnahmen, Kosten und Szenarien zur Unterstützung finanzieller Entscheidungen.', ['Prognosen und Berichte erstellen', 'Ergebnisse mit Budgets vergleichen', 'Teams beim Kostenmanagement unterstützen'], 'Banken, Unternehmen, Beratungen und internationale Organisationen.', 'Finanzen, Tabellenkalkulation, Analyse, Genauigkeit und Kommunikation.'],
        construcao: ['Unterstützt Bauvorhaben und begleitet die Ausführung von Gebäuden.', ['Pläne lesen und Materialien prüfen', 'Bauphasen und Teams begleiten', 'Messungen dokumentieren und Sicherheitskontrollen unterstützen'], 'Bauunternehmen, Ingenieurbüros und öffentliche Bauprojekte.', 'Technische Ausbildung, Planlesen, Organisation und Sicherheit.'],
        turismo: ['Organisiert Erlebnisse und betreut Reisende im Tourismus.', ['Reiserouten, Reservierungen und Aktivitäten planen', 'Gäste aus verschiedenen Ländern betreuen', 'Dienstleistungen koordinieren und Probleme lösen'], 'Hotels, Reisebüros, Sehenswürdigkeiten und Veranstaltungsunternehmen.', 'Service, Organisation, Sprachen und Zielgebietskenntnisse.'],
        rh: ['Unterstützt Auswahl-, Onboarding- und Teamförderungsprozesse.', ['Rekrutierung und Einarbeitung unterstützen', 'Schulungen und interne Richtlinien organisieren', 'Arbeitsklima und Entwicklung begleiten'], 'Unternehmen, Beratungen und Personalabteilungen.', 'Kommunikation, Organisation, Vertraulichkeit und lokale Gesetze.'],
        'professor-ciencias': ['Vermittelt Naturwissenschaften und Technik an verschiedene Altersgruppen.', ['Unterricht und praktische Projekte planen', 'Lernen bewerten und beraten', 'Inhalte an unterschiedliche Bedürfnisse anpassen'], 'Schulen, technische Kurse, soziale Projekte und Online-Plattformen.', 'Lehramtsausbildung, Didaktik, Fachwissen und Inklusion.']
    },
    ru: {
        software: ['Создаёт сайты, приложения и системы для людей и компаний.', ['Разрабатывать и тестировать функции', 'Исправлять ошибки и улучшать системы', 'Работать с командами дизайна, продукта и технологий'], 'Технологические компании, банки, стартапы и удалённые команды.', 'Программирование, решение задач, сотрудничество и постоянное обучение.'],
        design: ['Проектирует цифровые продукты, которыми легко пользоваться и которые легко понять.', ['Изучать потребности пользователей', 'Создавать интерфейсы и прототипы', 'Проверять идеи с командами и клиентами'], 'Продуктовые студии, цифровые компании, консалтинг и удалённая работа.', 'Исследования, прототипирование, визуальная коммуникация и инструменты дизайна.'],
        dados: ['Преобразует данные в информацию для принятия решений.', ['Организовывать и проверять наборы данных', 'Создавать отчёты и визуализации', 'Объяснять выводы разным командам'], 'Банки, розничная торговля, медицина, промышленность и технологические компании.', 'Электронные таблицы, SQL, визуализация данных и аналитическое мышление.'],
        enfermagem: ['Ухаживает за пациентами и поддерживает работу медицинских команд.', ['Оценивать и документировать сведения о здоровье', 'Консультировать пациентов и их близких', 'Сотрудничать с междисциплинарными командами'], 'Больницы, клиники, первичная медицина и общественные службы.', 'Образование и лицензия, забота, коммуникация и организованность.'],
        idiomas: ['Помогает развивать чтение, письмо, понимание речи и разговорные навыки.', ['Планировать уроки и занятия', 'Отслеживать прогресс учеников', 'Адаптировать материалы к разным уровням'], 'Школы, языковые курсы, компании и онлайн-платформы.', 'Знание языка, педагогика, планирование и межкультурная коммуникация.'],
        'engenharia-civil': ['Проектирует и сопровождает строительство зданий и инфраструктуры.', ['Разрабатывать и проверять проекты', 'Контролировать сроки, расходы и безопасность', 'Координировать команды и поставщиков'], 'Строительные компании, консалтинг, госучреждения и стройплощадки.', 'Образование и лицензия по требованиям страны, планирование, расчёты и управление.'],
        contabilidade: ['Ведёт бухгалтерский учёт и помогает соблюдать финансовые требования.', ['Готовить отчётность', 'Следить за налогами и сроками', 'Поддерживать бюджетные решения'], 'Бухгалтерские фирмы, компании, банки и консалтинг.', 'Бухгалтерский учёт, внимательность, финансовые инструменты и местное законодательство.'],
        eletricista: ['Устанавливает, проверяет и обслуживает электрические системы и оборудование.', ['Проводить профилактический и текущий ремонт', 'Читать схемы и находить неисправности', 'Соблюдать правила электробезопасности'], 'Заводы, энергетика, строительство и сервисные компании.', 'Техническое образование, безопасность, схемы и диагностика.'],
        agronomia: ['Поддерживает сельское хозяйство эффективными и устойчивыми методами.', ['Следить за почвой, посадкой и сбором урожая', 'Консультировать по агротехнике', 'Оценивать технологии и влияние на окружающую среду'], 'Фермерские хозяйства, кооперативы, научные центры и поставщики.', 'Агрономия, полевой анализ, устойчивое развитие и техническая коммуникация.'],
        ciberseguranca: ['Помогает защищать сети, системы и данные от цифровых угроз.', ['Отслеживать оповещения и расследовать инциденты', 'Проверять настройки и меры защиты', 'Консультировать команды по профилактике'], 'Банки, госструктуры, консалтинг и технологические компании.', 'Сети, системы, оценка рисков и ответственная практика кибербезопасности.'],
        ia: ['Разрабатывает и внедряет системы, которые находят закономерности в данных.', ['Подготавливать данные и оценивать модели', 'Интегрировать решения в продукты', 'Контролировать качество, безопасность и производительность'], 'Исследовательские лаборатории, стартапы и международные продуктовые команды.', 'Программирование, статистика, машинное обучение и ответственная работа с данными.'],
        ux: ['Изучает, как люди пользуются продуктами, и предлагает улучшения.', ['Планировать интервью и тесты удобства', 'Анализировать поведение пользователей', 'Делиться рекомендациями с командами продукта и дизайна'], 'Цифровые компании, консалтинг и продуктовые лаборатории.', 'Исследования, анализ, доступность и ясная коммуникация.'],
        'energia-solar': ['Устанавливает и обслуживает солнечные панели в домах и компаниях.', ['Оценивать места и рассчитывать системы', 'Устанавливать панели и соединения по нормам', 'Проверять выработку и выполнять обслуживание'], 'Энергетические и строительные компании, специализированные службы.', 'Техническое образование, электротехника, работа на высоте и чтение проектов.'],
        logistica: ['Помогает организовать запасы, перевозки и доставку товаров.', ['Отслеживать заказы и показатели', 'Планировать маршруты и запасы', 'Решать задержки вместе с поставщиками'], 'Розничная торговля, промышленность, внешняя торговля и распределительные центры.', 'Планирование, таблицы, анализ данных и коммуникация.'],
        'saude-mental': ['Поддерживает психическое здоровье в клинической и рабочей среде.', ['Проводить консультации и оценку состояния', 'Планировать поддержку и отслеживать результаты', 'Вести конфиденциальную документацию'], 'Клиники, больницы, школы, организации и онлайн-консультации.', 'Образование и местная лицензия, умение слушать, этика и коммуникация.'],
        marketing: ['Планирует кампании и контент для цифровой аудитории.', ['Создавать контент-планы и кампании', 'Анализировать показатели и улучшать результаты', 'Сотрудничать с дизайном, продажами и редакцией'], 'Агентства, магазины, стартапы и отделы коммуникации.', 'Стратегия, анализ показателей, письмо и цифровые инструменты.'],
        medicina: ['Оценивает состояние здоровья, консультирует пациентов и планирует лечение.', ['Проводить приёмы и обследования', 'Анализировать результаты и фиксировать назначения', 'Работать с медицинскими командами'], 'Больницы, клиники, медицинские центры и научные учреждения.', 'Образование и местная лицензия, клиническое мышление, коммуникация и этика.'],
        cozinha: ['Планирует меню, организует кухню и координирует приготовление еды.', ['Составлять меню и подбирать продукты', 'Координировать приготовление и подачу', 'Следить за гигиеной, качеством и отходами'], 'Рестораны, отели, кейтеринг и столовые.', 'Кулинарные навыки, организация, безопасность питания и командная работа.'],
        robotica: ['Создаёт и интегрирует роботов для промышленности, исследований и сервисов.', ['Программировать и тестировать робототехнические системы', 'Интегрировать датчики, управление и оборудование', 'Следить за безопасностью и работой роботов'], 'Заводы, исследовательские центры и компании автоматизации.', 'Инженерия, программирование, электроника и решение задач.'],
        traducao: ['Переводит материалы между языками для документов, встреч и мероприятий.', ['Переводить и редактировать тексты', 'Устно переводить беседы и презентации', 'Изучать терминологию разных областей'], 'Агентства, мероприятия, издательства, компании и удалённые услуги.', 'Знание языков, письмо, поиск информации и конфиденциальность.'],
        mecanica: ['Осматривает автомобили и определяет необходимый ремонт и обслуживание.', ['Проводить диагностику и осмотр', 'Ремонтировать механические и электронные системы', 'Объяснять клиентам услуги и уход за автомобилем'], 'Автомастерские, дилеры, автопарки и производители.', 'Техническое образование, диагностика, безопасность и изучение новых технологий.'],
        financeiro: ['Анализирует доходы, расходы и сценарии для финансовых решений.', ['Готовить прогнозы и отчёты', 'Сравнивать результаты с бюджетом', 'Помогать командам управлять затратами'], 'Банки, компании, консалтинг и международные организации.', 'Финансы, таблицы, аналитика, внимательность и коммуникация.'],
        construcao: ['Помогает планировать и сопровождать строительство зданий.', ['Читать проекты и проверять материалы', 'Следить за этапами и командами на стройке', 'Фиксировать замеры и помогать с контролем безопасности'], 'Строительные компании, инженерные бюро и общественные стройки.', 'Техническое образование, чтение чертежей, организация и безопасность.'],
        turismo: ['Организует поездки и помогает путешественникам в сфере туризма.', ['Планировать маршруты, бронирования и мероприятия', 'Обслуживать гостей из разных стран', 'Координировать услуги и решать непредвиденные ситуации'], 'Отели, туристические агентства, достопримечательности и организаторы событий.', 'Сервис, организация, языки и знание направлений.'],
        rh: ['Помогает развивать подбор, адаптацию и поддержку сотрудников.', ['Поддерживать подбор и адаптацию', 'Организовывать обучение и внутренние правила', 'Следить за рабочей атмосферой и развитием'], 'Компании, консалтинг и отделы управления персоналом.', 'Коммуникация, организованность, конфиденциальность и местное законодательство.'],
        'professor-ciencias': ['Обучает естественным наукам и технологиям людей разного возраста.', ['Планировать уроки и практические проекты', 'Оценивать обучение и помогать ученикам', 'Адаптировать материалы к разным потребностям'], 'Школы, технические курсы, социальные проекты и онлайн-платформы.', 'Педагогическое образование, методика, научные знания и инклюзия.']
    },
    ja: {
        software: ['人や企業が使うウェブサイト、アプリ、システムを開発します。', ['機能を開発してテストする', '問題を修正し、システムを改善する', 'デザイン、プロダクト、技術チームと協力する'], 'テクノロジー企業、銀行、スタートアップ、リモートチーム。', 'プログラミング、問題解決、協働、継続的な学習。'],
        design: ['わかりやすく使いやすいデジタル製品を設計します。', ['利用者のニーズを調査する', '画面やプロトタイプを作成する', 'チームや顧客とアイデアを検証する'], 'プロダクトスタジオ、デジタル企業、コンサルティング、リモートワーク。', '調査、プロトタイピング、ビジュアルコミュニケーション、デザインツール。'],
        dados: ['データを意思決定に役立つ情報へ変換します。', ['データセットを整理して確認する', 'レポートや可視化を作成する', 'さまざまなチームに分析結果を説明する'], '銀行、小売、医療、製造業、テクノロジー企業。', '表計算、SQL、データ可視化、分析的思考。'],
        enfermagem: ['患者のケアを行い、医療チームを支援します。', ['健康情報を評価して記録する', '患者や家族に説明する', '多職種チームと連携する'], '病院、診療所、プライマリケア、地域サービス。', '資格・登録、ケア、コミュニケーション、整理力。'],
        idiomas: ['読解、作文、聞き取り、会話の力を伸ばす支援をします。', ['授業や活動を計画する', '学習の進み具合を確認する', 'レベルに合わせて教材を調整する'], '学校、語学教室、企業、オンライン学習サービス。', '語学力、教授法、計画力、異文化コミュニケーション。'],
        'engenharia-civil': ['建物やインフラの建設を計画・監督します。', ['設計を作成して確認する', '工期、費用、安全を管理する', 'チームや取引先を調整する'], '建設会社、コンサルティング、行政機関、建設現場。', '国ごとの学歴・資格、計画、計算、管理。'],
        contabilidade: ['会計記録を管理し、組織の財務上の義務を支援します。', ['財務諸表や報告書を作成する', '税金や期限を確認する', '予算の判断を支援する'], '会計事務所、企業、銀行、コンサルティング。', '会計、細部への注意、財務ツール、現地の法令。'],
        eletricista: ['施設や機械の電気設備を設置、点検、保守します。', ['予防保全と修理を行う', '配線図を読み、故障を特定する', '電気安全規則を守る'], '工場、エネルギー、建設、保守サービス。', '技術教育、安全、配線図の読解、診断。'],
        agronomia: ['生産性と持続可能性を両立する農業を支援します。', ['土壌、作付け、収穫を確認する', '栽培管理について生産者に助言する', '技術や環境への影響を評価する'], '農場、協同組合、研究機関、農業資材企業。', '農学、現場分析、持続可能性、技術コミュニケーション。'],
        ciberseguranca: ['ネットワーク、システム、情報をデジタルリスクから守ります。', ['アラートを監視してインシデントを調査する', 'セキュリティ対策や設定を確認する', '予防策をチームに案内する'], '銀行、行政機関、コンサルティング、テクノロジー企業。', 'ネットワーク、システム、リスク分析、責任あるセキュリティ実践。'],
        ia: ['データからパターンを学ぶシステムを開発し、製品に組み込みます。', ['データを準備しモデルを評価する', 'ソリューションを製品に統合する', '品質、安全性、性能を監視する'], '研究所、スタートアップ、国際的なプロダクトチーム。', 'プログラミング、統計、機械学習、データに対する責任。'],
        ux: ['人々の製品利用を調査し、改善につなげます。', ['インタビューやユーザーテストを計画する', '行動の傾向を分析する', 'プロダクト・デザインチームに提案を共有する'], 'デジタル企業、コンサルティング、プロダクト研究所。', '調査、情報整理、アクセシビリティ、明確な伝達。'],
        'energia-solar': ['住宅や企業の太陽光発電設備を設置・保守します。', ['設置場所を調査し設備を設計する', '規格に沿ってパネルや配線を設置する', '発電量を確認し保守を行う'], 'エネルギー企業、建設会社、専門サービス。', '技術教育、電気、安全な高所作業、設計図の読解。'],
        logistica: ['在庫、輸送、商品の配送を効率よく管理します。', ['注文や指標を確認する', '配送ルートと在庫を計画する', '取引先と遅延の解決に取り組む'], '小売、製造業、貿易、物流センター。', '計画、表計算、データ分析、コミュニケーション。'],
        'saude-mental': ['医療や組織の場でメンタルヘルスを支援します。', ['相談や心理評価を行う', '支援策を計画し結果を確認する', '専門記録を適切に管理する'], '診療所、病院、学校、組織、オンライン相談。', '教育と現地資格、傾聴、倫理、コミュニケーション。'],
        marketing: ['デジタルチャネルで顧客に届くキャンペーンやコンテンツを計画します。', ['コンテンツ計画とキャンペーンを作成する', '指標を確認して施策を改善する', 'デザイン、営業、編集チームと協力する'], '広告会社、小売、スタートアップ、広報部門。', '戦略、指標分析、文章作成、デジタルツール。'],
        medicina: ['健康状態を評価し、患者に助言して治療方針を立てます。', ['診察や評価を行う', '検査結果を読み、対応を記録する', '医療チームと連携する'], '病院、診療所、医療センター、研究機関。', '教育と現地資格、臨床的判断、コミュニケーション、倫理。'],
        cozinha: ['献立を考え、厨房を整え、食事の調理を管理します。', ['メニューを作り食材を準備する', '調理と盛り付けを調整する', '衛生、品質、食品ロスを管理する'], 'レストラン、ホテル、ケータリング、施設内厨房。', '調理技術、整理力、食品安全、チームワーク。'],
        robotica: ['製造、研究、サービスで使うロボットを設計・統合します。', ['ロボットシステムをプログラムしてテストする', 'センサー、制御装置、機器を統合する', 'ロボットの安全性と性能を確認する'], '工場、研究センター、自動化企業。', '工学、プログラミング、電子工学、問題解決。'],
        traducao: ['文書、会議、イベントで複数言語間の情報を伝えます。', ['文章を翻訳・校正する', '会話や発表の通訳をする', '各分野の用語を調べる'], '翻訳会社、イベント、出版社、企業、リモート業務。', '語学力、文章力、調査、守秘義務。'],
        mecanica: ['車両を点検し、修理や保守の必要性を判断します。', ['診断と点検を行う', '機械・電子システムを修理する', '作業内容や車両の扱いを顧客に説明する'], '整備工場、ディーラー、車両管理会社、メーカー。', '技術教育、診断、安全、新技術の習得。'],
        financeiro: ['収益、費用、シナリオを分析し、財務上の判断を支援します。', ['予測やレポートを作成する', '実績を予算と比較する', 'チームのコスト管理を支援する'], '銀行、企業、コンサルティング、国際機関。', '財務、表計算、分析、細部への注意、コミュニケーション。'],
        construcao: ['建築プロジェクトを支援し、工事の進行を確認します。', ['図面を読み材料を確認する', '工事の工程やチームを見守る', '測定を記録し安全管理を支援する'], '建設会社、設計事務所、公共工事。', '技術教育、図面読解、整理力、安全。'],
        turismo: ['旅行者を迎え、観光サービスや体験を企画します。', ['旅程、予約、アクティビティを計画する', 'さまざまな国からの旅行者に対応する', 'サービスを調整し予期せぬ問題に対処する'], 'ホテル、旅行会社、観光施設、イベント企業。', '接客、整理力、語学、目的地の知識。'],
        rh: ['採用、受け入れ、チーム支援の仕組みづくりに関わります。', ['採用や入社時の支援を行う', '研修や社内方針を整える', '職場環境や成長に関する情報を確認する'], '企業、コンサルティング、人事部門。', 'コミュニケーション、整理力、守秘義務、現地法令。'],
        'professor-ciencias': ['幅広い年齢層に科学や技術の考え方を教えます。', ['授業や実践的な課題を計画する', '学習を評価し助言する', '多様なニーズに合わせて内容を調整する'], '学校、技術講座、社会活動、オンライン学習サービス。', '教員養成、教授法、科学知識、インクルージョン。']
    }
};

const professionImageObjects = new Map();
let professionImageUrls = {};
let professionImageUrlsError = '';
let professionImageDatabaseError = '';
let selectedProfessionImageFile = null;
let temporaryPreviewUrl = '';
try {
    const savedImageUrls = localStorage.getItem('aven.professionImageUrls');
    const parsedUrls = savedImageUrls ? JSON.parse(savedImageUrls) : {};
    if (!parsedUrls || typeof parsedUrls !== 'object' || Array.isArray(parsedUrls)) {
        throw new Error('Saved profession image URLs have an invalid format.');
    }
    professionImageUrls = parsedUrls;
} catch (error) {
    professionImageUrlsError = error.message;
    console.error('Unable to read saved profession image URLs.', error);
}

const brl = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
const text = (value) => AVEN.translatePhrase(value);
const careerName = (career) => career.nomeGlobal?.[AVEN.language] || text(career.nome);

function professionImage(career) {
    return professionImageUrls[career.id]
        || professionImageObjects.get(career.id)
        || PROFESSION_IMAGE_URLS[career.id]
        || career.foto;
}

function openProfessionImageDatabase() {
    return new Promise((resolve, reject) => {
        if (!('indexedDB' in window)) {
            reject(new Error('IndexedDB is unavailable in this browser.'));
            return;
        }
        const request = indexedDB.open('aven-profession-images', 1);
        request.onupgradeneeded = () => {
            if (!request.result.objectStoreNames.contains('images')) {
                request.result.createObjectStore('images', { keyPath: 'id' });
            }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error || new Error('Could not open image storage.'));
        request.onblocked = () => reject(new Error('Image storage is blocked by another tab.'));
    });
}

function imageDatabaseRequest(mode, operation) {
    return openProfessionImageDatabase().then((database) => new Promise((resolve, reject) => {
        const transaction = database.transaction('images', mode);
        const request = operation(transaction.objectStore('images'));
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error || new Error('Could not access saved images.'));
        transaction.oncomplete = () => database.close();
        transaction.onerror = () => reject(transaction.error || new Error('Could not save image changes.'));
        transaction.onabort = () => reject(transaction.error || new Error('Image storage transaction was aborted.'));
    }));
}

async function loadProfessionImages() {
    try {
        const records = await imageDatabaseRequest('readonly', (store) => store.getAll());
        records.forEach((record) => {
            if (!(record.blob instanceof Blob)) return;
            professionImageObjects.set(record.id, URL.createObjectURL(record.blob));
        });
        renderizar();
    } catch (error) {
        professionImageDatabaseError = error.message;
        console.error('Unable to load saved profession images.', error);
    }
}

function cartao(career) {
    const name = careerName(career);
    const image = professionImage(career);
    return `<button class="prof" type="button" data-career="${career.id}" style="--c:${career.cor}" aria-label="${AVEN.esc(`${text('Saiba mais sobre')} ${name}`)}">
      ${image ? `<img src="${AVEN.esc(image)}" alt="" loading="lazy" onerror="this.remove()">` : ''}
      <span class="prof-in">
        <small><span>${AVEN.esc(text(career.area))}</span> · <span>${AVEN.esc(text(`Demanda ${career.demanda}`))}</span></small>
        <strong>${AVEN.esc(name)}</strong>
        <em><span>${career.vagas} ${AVEN.esc(text('vagas demonstrativas'))}</span> · <span>${AVEN.esc(brl(career.salario))} ${AVEN.esc(text('em média'))}</span></em>
        <span class="prof-more">${AVEN.esc(text('Conhecer profissão'))} <span aria-hidden="true">→</span></span>
      </span>
    </button>`;
}

function detalhes(career) {
    const name = careerName(career);
    const image = professionImage(career);
    const localized = PROFESSION_DETAIL_TRANSLATIONS[AVEN.language]?.[career.id];
    const summary = localized?.[0] || text(career.resumo);
    const tasks = localized?.[1] || career.tarefas.map(text);
    const workplaces = localized?.[2] || text(career.locais);
    const skills = localized?.[3] || text(career.skills);
    const list = (items) => `<ul>${items.map((item) => `<li>${AVEN.esc(text(item))}</li>`).join('')}</ul>`;
    AVEN.modal(`
      ${image ? `<img class="career-modal-image" src="${AVEN.esc(image)}" alt="" onerror="this.remove()">` : ''}
      <p class="eyebrow">${AVEN.esc(text(career.area))} · ${AVEN.esc(text(`Demanda ${career.demanda}`))}</p>
      <h2 id="avt">${AVEN.esc(name)}</h2>
      <p class="career-region">${AVEN.esc(text(career.regiao))}</p>
      <p>${AVEN.esc(summary)}</p>
      <dl class="career-facts">
        <div><dt>${AVEN.esc(text('Salário médio demonstrativo em reais (referência Brasil)'))}</dt><dd>${AVEN.esc(brl(career.salario))} / ${AVEN.esc(text('mês'))}</dd></div>
        <div><dt>${AVEN.esc(text('O que você vai fazer'))}</dt><dd>${list(tasks)}</dd></div>
        <div><dt>${AVEN.esc(text('Onde pode trabalhar'))}</dt><dd>${AVEN.esc(workplaces)}</dd></div>
        <div><dt>${AVEN.esc(text('Competências importantes'))}</dt><dd>${AVEN.esc(skills)}</dd></div>
      </dl>
      <p class="demo-note">${AVEN.esc(text('Informações demonstrativas; salários, demanda e vagas variam por região e experiência.'))}</p>
      <a class="btn" href="vagas.html?q=${encodeURIComponent(career.nome)}">${AVEN.esc(text('Ver vagas relacionadas'))}</a>
    `, 'career-dialog');
}

function renderizar() {
    const container = document.getElementById('profissoes');
    if (!(container instanceof HTMLElement)) return;
    container.innerHTML = PROFISSOES.map(cartao).join('');
    container.querySelectorAll('.prof').forEach((button) => button.classList.add('is-visible'));
    container.querySelectorAll('[data-career]').forEach((button) => {
        button.addEventListener('click', () => {
            const career = PROFISSOES.find((item) => item.id === button.dataset.career);
            if (career) detalhes(career);
        });
    });
}

function updateImagePreview(source) {
    const preview = document.getElementById('profession-image-preview');
    if (!preview) return;
    if (temporaryPreviewUrl) {
        URL.revokeObjectURL(temporaryPreviewUrl);
        temporaryPreviewUrl = '';
    }
    preview.hidden = !source;
    if (source) preview.src = source;
    else preview.removeAttribute('src');
}

function openProfessionImageManager() {
    const options = PROFISSOES.map((career) => (
        `<option value="${AVEN.esc(career.id)}">${AVEN.esc(careerName(career))}</option>`
    )).join('');
    AVEN.modal(`
      <h2 id="avt">${AVEN.esc(text('Adicionar imagens às profissões'))}</h2>
      <p>${AVEN.esc(text('As imagens enviadas ficam salvas somente neste navegador. Para compartilhar no site, use uma URL de uma imagem publicada.'))}</p>
      ${professionImageDatabaseError ? `<p class="demo-note" role="alert">${AVEN.esc(text('O envio de arquivos não está disponível neste navegador. Você ainda pode usar uma URL.'))}</p>` : ''}
      ${professionImageUrlsError ? `<p class="demo-note" role="alert">${AVEN.esc(text('Não foi possível ler as URLs de imagem salvas neste navegador.'))}</p>` : ''}
      <div class="field-group">
        <label for="profession-image-career">${AVEN.esc(text('Profissão'))}</label>
        <select id="profession-image-career">${options}</select>
      </div>
      <div class="field-group">
        <label for="profession-image-url">${AVEN.esc(text('URL direta da imagem'))}</label>
        <input id="profession-image-url" type="url" inputmode="url" placeholder="https://example.com/image.jpg">
        <button class="btn" type="button" id="profession-image-save-url">${AVEN.esc(text('Salvar URL'))}</button>
      </div>
      <div class="field-group">
        <label for="profession-image-file">${AVEN.esc(text('Ou escolha uma imagem do computador'))}</label>
        <input id="profession-image-file" type="file" accept="image/*" ${professionImageDatabaseError ? 'disabled' : ''}>
        <button class="btn" type="button" id="profession-image-save-file" ${professionImageDatabaseError ? 'disabled' : ''}>${AVEN.esc(text('Salvar imagem enviada'))}</button>
      </div>
      <img id="profession-image-preview" class="career-modal-image" alt="${AVEN.esc(text('Prévia da imagem da profissão'))}" hidden>
      <div class="auth-actions">
        <button class="btn ghost" type="button" id="profession-image-remove">${AVEN.esc(text('Remover imagem personalizada'))}</button>
      </div>
    `, 'career-dialog image-manager-dialog');

    const careerSelect = document.getElementById('profession-image-career');
    const urlInput = document.getElementById('profession-image-url');
    const fileInput = document.getElementById('profession-image-file');
    selectedProfessionImageFile = null;

    const refresh = () => {
        selectedProfessionImageFile = null;
        fileInput.value = '';
        const career = PROFISSOES.find((item) => item.id === careerSelect.value);
        const savedUrl = professionImageUrls[career.id] || PROFESSION_IMAGE_URLS[career.id] || '';
        urlInput.value = savedUrl;
        updateImagePreview(professionImage(career));
    };

    careerSelect.addEventListener('change', refresh);
    fileInput.addEventListener('change', () => {
        selectedProfessionImageFile = fileInput.files?.[0] || null;
        if (selectedProfessionImageFile) {
            temporaryPreviewUrl = URL.createObjectURL(selectedProfessionImageFile);
            const preview = document.getElementById('profession-image-preview');
            preview.src = temporaryPreviewUrl;
            preview.hidden = false;
        }
    });
    document.getElementById('profession-image-save-url').addEventListener('click', async () => {
        const career = PROFISSOES.find((item) => item.id === careerSelect.value);
        try {
            if (!urlInput.value.trim()) throw new Error('Informe uma URL válida para a imagem.');
            const parsed = new URL(urlInput.value.trim(), location.href);
            if (!['http:', 'https:', 'file:'].includes(parsed.protocol)) {
                throw new Error('URL HTTP, HTTPS ou caminho local de imagem.');
            }
            const urls = { ...professionImageUrls, [career.id]: parsed.href };
            localStorage.setItem('aven.professionImageUrls', JSON.stringify(urls));
            professionImageUrls = urls;
            const oldObjectUrl = professionImageObjects.get(career.id);
            if (oldObjectUrl) URL.revokeObjectURL(oldObjectUrl);
            professionImageObjects.delete(career.id);
            renderizar();
            updateImagePreview(parsed.href);
            if (!professionImageDatabaseError) {
                try {
                    await imageDatabaseRequest('readwrite', (store) => store.delete(career.id));
                } catch (error) {
                    professionImageDatabaseError = error.message;
                    console.error('Unable to remove the previous uploaded profession image.', error);
                    AVEN.toast(text('A URL foi salva, mas a imagem enviada anteriormente não pôde ser removida.'), true);
                    return;
                }
            }
            AVEN.toast(text('URL da imagem salva.'));
        } catch (error) {
            console.error('Unable to save profession image URL.', error);
            const message = error.message === 'URL HTTP, HTTPS ou caminho local de imagem.'
                ? text(error.message)
                : text('Informe uma URL válida para a imagem.');
            AVEN.toast(message, true);
        }
    });
    document.getElementById('profession-image-save-file').addEventListener('click', async () => {
        if (!selectedProfessionImageFile) {
            AVEN.toast(text('Escolha uma imagem antes de salvar.'), true);
            return;
        }
        if (!selectedProfessionImageFile.type.startsWith('image/')) {
            AVEN.toast(text('Escolha um arquivo de imagem válido.'), true);
            return;
        }
        if (selectedProfessionImageFile.size > 10 * 1024 * 1024) {
            AVEN.toast(text('A imagem deve ter no máximo 10 MB.'), true);
            return;
        }
        const career = PROFISSOES.find((item) => item.id === careerSelect.value);
        try {
            await imageDatabaseRequest('readwrite', (store) => store.put({
                id: career.id,
                blob: selectedProfessionImageFile,
                name: selectedProfessionImageFile.name
            }));
            const urls = { ...professionImageUrls };
            delete urls[career.id];
            localStorage.setItem('aven.professionImageUrls', JSON.stringify(urls));
            professionImageUrls = urls;
            const oldObjectUrl = professionImageObjects.get(career.id);
            if (oldObjectUrl) URL.revokeObjectURL(oldObjectUrl);
            professionImageObjects.set(career.id, URL.createObjectURL(selectedProfessionImageFile));
            renderizar();
            updateImagePreview(professionImageObjects.get(career.id));
            AVEN.toast(text('Imagem salva neste navegador.'));
        } catch (error) {
            console.error('Unable to save profession image file.', error);
            AVEN.toast(text('Não foi possível salvar a imagem neste navegador.'), true);
        }
    });
    document.getElementById('profession-image-remove').addEventListener('click', async () => {
        const career = PROFISSOES.find((item) => item.id === careerSelect.value);
        try {
            const urls = { ...professionImageUrls };
            delete urls[career.id];
            localStorage.setItem('aven.professionImageUrls', JSON.stringify(urls));
            professionImageUrls = urls;
            const oldObjectUrl = professionImageObjects.get(career.id);
            if (oldObjectUrl) URL.revokeObjectURL(oldObjectUrl);
            professionImageObjects.delete(career.id);
            renderizar();
            refresh();
            if (!professionImageDatabaseError) {
                await imageDatabaseRequest('readwrite', (store) => store.delete(career.id));
            }
            AVEN.toast(text('Imagem personalizada removida.'));
        } catch (error) {
            console.error('Unable to remove profession image.', error);
            AVEN.toast(text('Não foi possível remover a imagem.'), true);
        }
    });
    refresh();
}

document.querySelectorAll('[data-profession-images]').forEach((button) => {
    button.addEventListener('click', openProfessionImageManager);
});
document.addEventListener('DOMContentLoaded', renderizar);
document.addEventListener('aven:language-change', renderizar);
loadProfessionImages();
