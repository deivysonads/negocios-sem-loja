/* Pack de negócios sem loja: os 20 negócios.
   Preços pesquisados em novembro de 2026 (fontes no fim do arquivo e na página "De onde vêm os números").
   "est" = estimativa do Zé quando não achamos fonte brasileira boa. */

window.NEGOCIOS = [
  {
    id: 'frota', n: 1, emoji: '🚐', nome: 'Lavagem de frota de madrugada',
    frase: 'O lava-jato sem loja: tu vai até a empresa e lava os carros parados, enquanto ninguém usa.',
    tags: ['empresa', 'mensal'], dificuldade: 2, campeao: true,
    quem: 'Transportadoras, empresas de entrega, frotas de van, locadoras e empresas de serviço com carro próprio (internet, energia, segurança).',
    porque: 'A empresa precisa do carro limpo e não pode tirar ele da rua pra levar no lava-jato. Tu resolve isso no pátio dela, de madrugada. Um contrato vale por 40 clientes de rua, e paga todo mês.',
    itens: [
      ['Lavadora de alta pressão profissional (água fria, 2.000+ lbf)', 1500, 3000],
      ['Caixa d\'água ou tanque de 500 litros', 400, 650],
      ['Mangueira de 30 m, extensão elétrica e engates', 250, 400],
      ['Escovas, baldes, microfibras e aplicadores', 250, 400],
      ['Shampoo automotivo concentrado e desengraxante (1º mês)', 250, 400],
      ['Lanterna de cabeça e refletor de LED', 120, 250]
    ],
    extra: 'Carro: começa com o teu ou com uma carretinha usada (R$ 2.500 a R$ 4.000). Não precisa de caminhonete no primeiro mês.',
    cobrar: [['Carro ou van, lavagem externa', 'R$ 30 a R$ 50'], ['Caminhão pequeno (3/4)', 'R$ 80 a R$ 150'], ['Contrato', 'por mês, com dias fixos']],
    conta: { preco: 30, precoMax: 80, un: 'por veículo', qtd: 320, qtdMax: 800, qtdLabel: 'lavagens no mês', custoUnit: 4, fixo: 2000, fixoLabel: 'combustível + 1 ajudante' },
    contaNota: '40 vans, 2 vezes por semana = 320 lavagens no mês.',
    passos: [
      'Abre o mapa do celular e procura "transportadora", "distribuidora" e "entregas" num raio de 15 km. Anota 20 empresas.',
      'Passa lá entre 6h e 7h, quando a frota sai. Pergunta quem cuida dos carros (gerente de frota ou de operação).',
      'Oferece uma lavagem de teste: 5 veículos de graça numa madrugada. Tira foto do antes e depois.',
      'Na semana seguinte, leva uma proposta de 1 página: quantos carros, dias da semana, preço por carro e o total do mês.',
      'Fecha o primeiro com desconto de "cliente fundador" e pede pra ele indicar outra empresa.'
    ],
    msg: 'Opa, tudo certo? Sou o {nome}, faço lavagem de frota no pátio da empresa, de madrugada, com os carros parados. De manhã a frota sai limpa e ninguém perde tempo indo em lava-jato. Posso lavar 5 carros de vocês de graça essa semana pra vocês verem o resultado?',
    semana: ['Comprar ou alugar a lavadora e o tanque', 'Fazer o MEI e ter como emitir nota', 'Listar 20 empresas com frota', 'Visitar 10 empresas às 7h', 'Fazer a primeira lavagem de teste', 'Mandar a proposta por escrito'],
    cuidados: [
      'A água suja tem óleo: combina com a empresa um ponto com ralo de esgoto ou caixa separadora. Água com óleo na rua pode dar multa ambiental.',
      'Trabalho de madrugada: vai em dupla, pede autorização por escrito e avisa a portaria.',
      'Nunca joga alta pressão de perto em borracha de porta, adesivo e farol.'
    ]
  },
  {
    id: 'solar', n: 2, emoji: '☀️', nome: 'Limpeza de placa solar',
    frase: 'Placa suja gera menos energia. O dono paga pra recuperar a conta de luz.',
    tags: ['casa', 'empresa', 'mensal'], dificuldade: 2,
    quem: 'Casas com energia solar, comércios, galpões, fazendas e condomínios. E as empresas que instalam as placas, que adoram indicar quem faz manutenção.',
    porque: 'Tem cada vez mais telhado com placa no Brasil, e quase ninguém limpa. A maioria dos fabricantes recomenda limpar 1 vez por ano, e a cada 6 meses onde tem muita poeira. É serviço repetido, com cliente que já sabe o valor da placa.',
    itens: [
      ['Escova telescópica com passagem de água (6 a 9 m)', 600, 1500],
      ['Filtro de água desmineralizada (evita mancha), opcional', 0, 1200],
      ['Cinto, talabarte e curso NR-35 (trabalho em altura)', 300, 600],
      ['Escada extensível', 400, 800],
      ['Detergente neutro e rodo de borracha macia', 50, 120]
    ],
    cobrar: [['Casa com até ~12 placas', 'a partir de ~R$ 200'], ['Acima disso, por placa', 'R$ 15 a R$ 25 (est.)'], ['Galpão e fazenda', 'contrato por semestre']],
    conta: { preco: 220, precoMax: 600, un: 'por casa', qtd: 30, qtdMax: 80, qtdLabel: 'limpezas no mês', custoUnit: 20, fixo: 400, fixoLabel: 'combustível + produto' },
    contaNota: 'Umas 1 a 2 casas por dia, em 20 dias de trabalho.',
    passos: [
      'Liga pra 5 empresas que instalam placa na tua cidade e oferece ser o parceiro de limpeza delas (tu paga uma comissão por cliente indicado).',
      'Anda pelo bairro e anota as casas com placa no telhado. Deixa um panfleto com "limpeza + relatório de antes e depois".',
      'No serviço, fotografa a placa suja e a limpa. Se o cliente tiver o app do inversor, mostra a geração subindo nos dias seguintes.',
      'Já sai de lá com a próxima limpeza marcada pra daqui a 6 meses.'
    ],
    msg: 'Oi! Sou o {nome}, faço limpeza de placa solar. Placa com poeira gera menos energia, e muita gente nem percebe. Faço a limpeza com água tratada e escova macia, sem riscar e sem perder a garantia. Quer que eu passe aí pra avaliar sem compromisso?',
    semana: ['Fazer o curso de NR-35', 'Comprar a escova e o equipamento de segurança', 'Ligar pra 5 instaladoras', 'Mapear 30 casas com placa', 'Fazer a 1ª limpeza com foto de antes e depois'],
    cuidados: [
      'Trabalho em altura: curso NR-35, cinto preso e nunca sozinho no telhado.',
      'Nada de lavadora de alta pressão nem escova dura: risca o vidro e pode tirar a garantia.',
      'Limpa cedo ou no fim da tarde: placa quente com água fria pode ter choque térmico.'
    ]
  },
  {
    id: 'ar', n: 3, emoji: '❄️', nome: 'Higienização de ar-condicionado',
    frase: 'Todo escritório tem ar sujo e ninguém lembra de limpar até começar o cheiro.',
    tags: ['empresa', 'casa', 'mensal'], dificuldade: 2,
    quem: 'Escritórios, clínicas, consultórios, lojas e academias (contrato a cada 3 meses). E casas, principalmente antes do verão.',
    porque: 'Ar sujo gasta mais energia, cheira mal e espalha fungo. Empresa com vários aparelhos vira contrato fixo. E o serviço é rápido: dá pra fazer vários aparelhos por dia.',
    itens: [
      ['Lavadora compacta ou bomba de higienização', 400, 900],
      ['Bolsa coletora de higienização', 80, 200],
      ['Limpador de serpentina e bactericida (1º mês)', 120, 250],
      ['Kit de ferramentas (chaves, alicate, multímetro)', 200, 400],
      ['Escada de 6 degraus', 250, 400],
      ['Curso básico de higienização de split', 0, 500]
    ],
    cobrar: [['Split de 9 a 12 mil BTUs', 'R$ 200 a R$ 250'], ['Pacote com 3 aparelhos', 'R$ 550 a R$ 650'], ['Empresa', 'contrato trimestral por aparelho']],
    conta: { preco: 180, precoMax: 350, un: 'por aparelho', qtd: 60, qtdMax: 160, qtdLabel: 'aparelhos no mês', custoUnit: 15, fixo: 500, fixoLabel: 'combustível + produto' },
    contaNota: 'Uns 3 aparelhos por dia. Preço com desconto de empresa.',
    passos: [
      'Faz o curso e treina nos aparelhos de amigos e da família (cobra só o produto).',
      'Lista 30 clínicas, escritórios e lojas com ar aparente na fachada.',
      'Oferece uma "avaliação gratuita do ar": abre o filtro na frente do dono e mostra a sujeira.',
      'Fecha contrato de 3 em 3 meses com preço por aparelho. Lembrete no celular pra voltar.'
    ],
    msg: 'Oi, tudo bem? Sou o {nome}, faço higienização de ar-condicionado em empresa. Ar sujo gasta mais luz e solta fungo no ambiente. Posso passar aí e abrir um dos aparelhos pra vocês verem como está por dentro, sem custo?',
    semana: ['Fazer o curso de higienização', 'Treinar em 3 aparelhos de conhecidos', 'Montar a tabela de preço por aparelho', 'Visitar 15 comércios', 'Fechar o primeiro contrato trimestral'],
    cuidados: [
      'Desliga o disjuntor antes de abrir o aparelho.',
      'Sem curso de refrigeração, não mexe no gás: só limpeza.',
      'Prédio de uso coletivo climatizado precisa de PMOC (Lei 13.589/2018), assinado por responsável técnico. Tu pode ser a mão de obra de quem assina, ou fazer parceria com um engenheiro.'
    ]
  },
  {
    id: 'caixa', n: 4, emoji: '💧', nome: 'Limpeza de caixa d\'água',
    frase: 'Condomínio tem que limpar de 6 em 6 meses. O síndico só precisa achar quem faz.',
    tags: ['empresa', 'mensal'], dificuldade: 2,
    quem: 'Condomínios, escolas, restaurantes, academias, igrejas e casas.',
    porque: 'É manutenção que se repete a cada 6 meses e que o síndico precisa comprovar. Fecha 10 condomínios e tu tem 20 serviços por ano já garantidos.',
    itens: [
      ['Bomba submersível pra esgotar a água', 250, 500],
      ['Botas, luvas, máscara e óculos', 150, 250],
      ['Escovas de nylon, esponjas, balde e rodo', 120, 200],
      ['Cloro para a desinfecção', 40, 80],
      ['Escada e lanterna forte', 350, 600]
    ],
    cobrar: [['Caixa de 1.000 litros', 'R$ 100 a R$ 200'], ['Reservatório de condomínio', 'R$ 500 a R$ 2.000 (pelo tamanho e acesso)'], ['Extra', 'laudo de potabilidade, com laboratório parceiro']],
    conta: { preco: 600, precoMax: 2000, un: 'por reservatório', qtd: 12, qtdMax: 40, qtdLabel: 'limpezas no mês', custoUnit: 40, fixo: 300, fixoLabel: 'combustível + material' },
    contaNota: 'Média de condomínio pequeno. Caixa de casa sai bem mais barato.',
    passos: [
      'Pega a lista de condomínios do teu bairro (anda na rua e anota nomes e administradoras).',
      'Liga pra administradora de condomínio: ela cuida de 30, 50 prédios e indica um prestador pra todos.',
      'Leva um "relatório de limpeza" modelo: data, fotos, produto usado e a data da próxima.',
      'Agenda as próximas limpezas pros meses de menor chuva e manda lembrete pro síndico.'
    ],
    msg: 'Bom dia! Sou o {nome}, faço limpeza e desinfecção de caixa d\'água para condomínios, com relatório e fotos para o síndico. A limpeza é recomendada a cada 6 meses. Posso mandar um orçamento? Só preciso saber a quantidade e o tamanho das caixas.',
    semana: ['Ver na prefeitura se o serviço precisa de licença sanitária na tua cidade', 'Comprar bomba e EPI', 'Fazer um modelo de relatório', 'Ligar pra 5 administradoras', 'Visitar 10 síndicos'],
    cuidados: [
      'Reservatório grande é espaço confinado (NR-33): nunca entra sozinho e sempre com ventilação.',
      'Algumas cidades exigem licença da vigilância sanitária pra quem faz o serviço. Confere antes de pegar condomínio.',
      'Avisa os moradores: a água fica cortada por umas horas.'
    ]
  },
  {
    id: 'lixeira', n: 5, emoji: '🗑️', nome: 'Higienização de lixeiras de condomínio',
    frase: 'O serviço mais nojento da lista. Por isso quase ninguém faz e o síndico paga.',
    tags: ['empresa', 'mensal'], dificuldade: 1,
    quem: 'Condomínios, restaurantes, mercados, escolas e prédios comerciais com contêineres de lixo.',
    porque: 'Lixeira suja traz barata, rato e reclamação de morador. É lavagem rápida e semanal, perfeita pra rota: vários condomínios no mesmo bairro, no mesmo dia.',
    itens: [
      ['Lavadora de alta pressão', 900, 2000],
      ['Desengraxante e desinfetante (1º mês)', 120, 200],
      ['Escovas, rodo, luvas e botas', 150, 250],
      ['Pulverizador de bactericida e odorizador', 80, 200]
    ],
    cobrar: [['Contêiner, por lavagem', 'R$ 15 a R$ 30 (est.)'], ['Condomínio, contrato semanal', 'R$ 300 a R$ 600 por mês (est.)']],
    conta: { preco: 400, precoMax: 900, un: 'por condomínio/mês', qtd: 15, qtdMax: 40, qtdLabel: 'condomínios', custoUnit: 30, fixo: 400, fixoLabel: 'combustível + produto' },
    contaNota: 'Os preços são estimativa: pergunta pra 3 síndicos quanto pagariam antes de fechar a tabela.',
    passos: [
      'Escolhe 1 bairro com muitos prédios. Tua rota tem que ser curta.',
      'Pede pro porteiro o contato do síndico ou da administradora.',
      'Faz a primeira lavagem de graça e manda foto do antes e depois no grupo do condomínio.',
      'Oferece contrato semanal com preço fixo por mês.'
    ],
    msg: 'Olá! Sou o {nome}, faço higienização semanal das lixeiras e contêineres do condomínio: lavagem, desinfecção e odorizador, pra acabar com cheiro e bicho. Posso fazer a primeira de graça pra vocês verem o resultado?',
    semana: ['Escolher o bairro da rota', 'Comprar lavadora e produtos', 'Visitar 15 condomínios', 'Fazer 2 lavagens de teste', 'Fechar o 1º contrato'],
    cuidados: [
      'Água de lixeira tem chorume: vai pro ralo de esgoto, nunca pro bueiro da rua.',
      'Luva e bota sempre. Vacina de tétano em dia.'
    ]
  },
  {
    id: 'sofa', n: 6, emoji: '🛋️', nome: 'Higienização de sofá e colchão',
    frase: 'A foto do antes e depois vende sozinha. É o negócio mais fácil de divulgar.',
    tags: ['casa'], dificuldade: 1,
    quem: 'Casas e apartamentos, donos de imóvel de aluguel por temporada, imobiliárias (na entrega do imóvel), clínicas e escritórios com estofado.',
    porque: 'O resultado aparece na hora e dá vídeo bom. Cada cliente feliz posta e indica. Dá pra fazer 2 ou 3 serviços por dia.',
    itens: [
      ['Extratora profissional', 1500, 2800],
      ['Aspirador de pó potente', 250, 500],
      ['Pré-tratamento, tira-manchas e neutralizador de odor', 150, 250],
      ['Escovas e microfibras', 80, 150]
    ],
    cobrar: [['Sofá de 3 lugares', 'R$ 150 a R$ 350'], ['Tratamento contra ácaro', '+ R$ 50 a R$ 150'], ['Colchão de casal', 'R$ 120 a R$ 200 (est.)']],
    conta: { preco: 220, precoMax: 450, un: 'por serviço', qtd: 40, qtdMax: 90, qtdLabel: 'serviços no mês', custoUnit: 15, fixo: 400, fixoLabel: 'combustível + anúncio' },
    contaNota: 'Uns 2 serviços por dia, 20 dias no mês.',
    passos: [
      'Limpa o sofá da tua casa e de 2 parentes. Grava o antes e depois em vídeo.',
      'Posta no status, no Instagram e nos grupos de bairro com o preço de lançamento.',
      'Fecha parceria com 2 imobiliárias e com quem aluga apartamento por temporada.',
      'Depois de cada serviço, pede indicação e oferece desconto na próxima.'
    ],
    msg: 'Oi! Sou o {nome}, faço higienização de sofá e colchão na tua casa, com extratora profissional: tira mancha, cheiro e ácaro, e seca em poucas horas. Essa semana tô com preço de lançamento. Me manda uma foto do sofá que eu te passo o valor?',
    semana: ['Comprar ou alugar a extratora', 'Limpar 3 sofás de conhecidos e filmar', 'Postar o antes e depois', 'Ligar pra 2 imobiliárias', 'Atender os 3 primeiros clientes pagos'],
    cuidados: [
      'Lê a etiqueta do tecido (W, S ou X) e testa o produto num canto escondido.',
      'Avisa o tempo de secagem e não deixa o cliente sentar molhado.'
    ]
  },
  {
    id: 'carrinho', n: 7, emoji: '🛒', nome: 'Higienização de carrinho de supermercado',
    frase: 'Um mercado tem 150 carrinhos. Tu cobra por carrinho, toda semana.',
    tags: ['empresa', 'mensal'], dificuldade: 1,
    quem: 'Supermercados, atacarejos, farmácias grandes e lojas de material de construção (carrinhos e cestinhas).',
    porque: 'Algumas cidades e estados já têm lei obrigando o mercado a higienizar os carrinhos, e o cliente gosta de ver isso. É volume alto e repetido, num lugar só.',
    itens: [
      ['Lavadora de alta pressão', 900, 2000],
      ['Pulverizador costal para o sanitizante', 150, 300],
      ['Sanitizante de quaternário de amônio (1º mês)', 150, 250],
      ['Microfibras, rodo e extensão elétrica', 150, 250],
      ['Placa "carrinho higienizado"', 50, 100]
    ],
    cobrar: [['Por carrinho', 'R$ 5 a R$ 10'], ['Cestinha', 'metade do preço do carrinho (est.)']],
    conta: { preco: 6, precoMax: 12, un: 'por carrinho', qtd: 1200, qtdMax: 4000, qtdLabel: 'carrinhos no mês', custoUnit: 0.5, fixo: 300, fixoLabel: 'combustível' },
    contaNota: 'Um mercado de 150 carrinhos, lavado 2 vezes por semana = 1.200 no mês.',
    passos: [
      'Pesquisa "lei higienização carrinho" + o nome da tua cidade e do teu estado. Se tiver lei, é teu argumento.',
      'Fala com o gerente da loja (não com o caixa). Mostra um carrinho sujo na frente dele.',
      'Oferece a primeira higienização de graça, num sábado de manhã.',
      'Fecha contrato por carrinho com dias fixos e oferece a placa "carrinhos higienizados" pra entrada da loja.'
    ],
    msg: 'Bom dia! Sou o {nome}, faço higienização de carrinhos e cestinhas no estacionamento, sem atrapalhar o movimento. Vocês ganham uma placa de "carrinhos higienizados" na entrada, que o cliente adora. Posso fazer a primeira de graça pra vocês avaliarem?',
    semana: ['Ver se tua cidade tem lei sobre isso', 'Montar o kit e o sanitizante', 'Visitar 10 mercados', 'Fazer 1 higienização de teste', 'Mandar a proposta por carrinho'],
    cuidados: [
      'Usa sanitizante próprio pra superfície que encosta em alimento e respeita a diluição do rótulo.',
      'Trabalha num canto do estacionamento sem atrapalhar cliente e carro.'
    ]
  },
  {
    id: 'piscina', n: 8, emoji: '🏊', nome: 'Manutenção de piscina',
    frase: 'Fecha 20 piscinas e tu tem salário fixo com 2 visitas por semana em cada.',
    tags: ['casa', 'mensal'], dificuldade: 1,
    quem: 'Casas com piscina, condomínios, chácaras de aluguel, academias e escolas de natação.',
    porque: 'Ninguém gosta de cuidar da piscina e todo mundo quer ela limpa no fim de semana. É mensalidade, e o cliente costuma pagar os produtos à parte.',
    itens: [
      ['Aspirador, mangueira flutuante e cabo telescópico', 350, 600],
      ['Peneira, escova e mangueira', 100, 200],
      ['Kit de teste de cloro e pH', 60, 150],
      ['Estojo de produtos pra emergência', 150, 300]
    ],
    cobrar: [['Piscina residencial, mensal (1 a 2 visitas por semana)', 'R$ 250 a R$ 500'], ['Produtos', 'cobrados à parte'], ['Limpeza pesada (água verde)', 'serviço avulso']],
    conta: { preco: 350, precoMax: 700, un: 'por piscina/mês', qtd: 20, qtdMax: 45, qtdLabel: 'piscinas', custoUnit: 20, fixo: 300, fixoLabel: 'combustível' },
    contaNota: 'Os produtos químicos ficam por conta do cliente.',
    passos: [
      'Faz um curso rápido de tratamento de água (tem gratuito online).',
      'Escolhe 1 ou 2 bairros com casas de piscina, pra rota ficar curta.',
      'Deixa panfleto nas lojas de produto de piscina: elas sempre ouvem "conhece alguém que cuida?".',
      'Oferece o primeiro mês com desconto e manda foto da água depois de cada visita.'
    ],
    msg: 'Oi! Sou o {nome}, cuido de piscina no teu bairro: limpeza, aspiração e controle do cloro e pH, 1 ou 2 vezes por semana. Tu só abre o portão e a piscina tá sempre pronta pro fim de semana. Posso passar pra ver a tua?',
    semana: ['Fazer o curso de tratamento de água', 'Montar o kit', 'Escolher os bairros da rota', 'Deixar panfleto em 3 lojas de piscina', 'Fechar os 3 primeiros clientes'],
    cuidados: [
      'Nunca mistura cloro com ácido ou outro produto: solta gás tóxico.',
      'Guarda os produtos fora do sol e longe de criança.',
      'Combina por escrito que os produtos são à parte.'
    ]
  },
  {
    id: 'jardim', n: 9, emoji: '🌿', nome: 'Manutenção de jardim de condomínio e empresa',
    frase: 'Grama cresce todo mês. O contrato também.',
    tags: ['empresa', 'casa', 'mensal'], dificuldade: 1,
    quem: 'Condomínios, empresas com área verde, escolas, clínicas, igrejas e casas grandes.',
    porque: 'É um serviço que nunca acaba: corte, poda e limpeza toda semana ou a cada 15 dias. Um contrato de condomínio paga mais que muitas casas juntas.',
    itens: [
      ['Roçadeira a gasolina', 700, 1500],
      ['Cortador de grama', 600, 1500],
      ['Soprador de folhas', 300, 700],
      ['Tesoura de poda, rastelo, enxada e sacos', 250, 400],
      ['Óculos, protetor de ouvido, perneira e luvas', 150, 250]
    ],
    cobrar: [['Casa, por visita', 'R$ 120 a R$ 250 (est.)'], ['Condomínio ou empresa, mensal', 'R$ 600 a R$ 2.000 (est.)']],
    conta: { preco: 900, precoMax: 2500, un: 'por contrato/mês', qtd: 6, qtdMax: 15, qtdLabel: 'contratos', custoUnit: 80, fixo: 600, fixoLabel: 'combustível + descarte' },
    contaNota: 'O preço depende do tamanho da área: mede em metros quadrados antes de orçar.',
    passos: [
      'Faz 3 jardins de conhecidos e tira foto do antes e depois.',
      'Visita condomínios e empresas com grama alta na frente (são os que precisam agora).',
      'Leva proposta mensal com frequência fixa e o descarte incluso.',
      'Oferece serviços extras: poda, adubação e plantio.'
    ],
    msg: 'Bom dia! Sou o {nome}, faço manutenção de jardim por contrato mensal: corte de grama, poda, limpeza e descarte, com dia fixo. Vi que a área de vocês tá precisando. Posso mandar um orçamento sem compromisso?',
    semana: ['Comprar roçadeira e EPI', 'Fazer 3 jardins de teste com foto', 'Achar onde descartar galho na tua cidade (ecoponto)', 'Visitar 10 condomínios e empresas', 'Fechar o 1º contrato'],
    cuidados: [
      'Roçadeira joga pedra: óculos e perneira sempre, e afasta as pessoas.',
      'Poda ou corte de árvore grande precisa de autorização da prefeitura.',
      'Descarta galho e folha em ecoponto ou caçamba, nunca na calçada.'
    ]
  },
  {
    id: 'patio', n: 10, emoji: '🧽', nome: 'Lavagem de calçada, fachada e estacionamento',
    frase: 'Posto, mercado e restaurante pagam pra entrada parecer nova.',
    tags: ['empresa', 'mensal'], dificuldade: 2,
    quem: 'Postos de combustível, mercados, restaurantes, concessionárias, bancos, drive-thrus e shoppings de rua.',
    porque: 'A entrada é a primeira coisa que o cliente vê. Mancha de óleo, chiclete e limo derrubam a imagem da loja. Dá pra fazer contrato semanal ou mensal.',
    itens: [
      ['Lavadora de alta pressão profissional', 1500, 3000],
      ['Limpador de superfície rotativo (disco)', 200, 500],
      ['Desengraxante e removedor de chiclete', 150, 300],
      ['Mangueira de 30 m e extensão', 150, 250]
    ],
    cobrar: [['Por lavagem, conforme o tamanho', 'R$ 250 a R$ 800 (est.)'], ['Contrato semanal', 'desconto de 15% a 20%']],
    conta: { preco: 400, precoMax: 1200, un: 'por lavagem', qtd: 16, qtdMax: 40, qtdLabel: 'lavagens no mês', custoUnit: 25, fixo: 400, fixoLabel: 'combustível + produto' },
    contaNota: '4 clientes com lavagem toda semana.',
    passos: [
      'Escolhe 10 lugares com a entrada visivelmente suja.',
      'Pede pra lavar 1 m² de graça na frente do gerente. A diferença convence na hora.',
      'Oferece lavar fora do horário (madrugada ou domingo), sem atrapalhar.',
      'Fecha contrato semanal ou mensal com preço fixo.'
    ],
    msg: 'Oi, tudo bem? Sou o {nome}, faço lavagem de calçada, fachada e estacionamento fora do horário de movimento, com equipamento profissional. Tira óleo, limo e chiclete. Posso lavar um pedaço de graça pra vocês verem a diferença?',
    semana: ['Comprar lavadora e disco rotativo', 'Listar 10 comércios com entrada suja', 'Fazer 3 demonstrações de 1 m²', 'Fechar a 1ª lavagem paga'],
    cuidados: [
      'Água com óleo de posto e estacionamento vai pra caixa separadora: combina com o dono.',
      'Sinaliza a área molhada com cone pra ninguém escorregar.'
    ]
  },
  {
    id: 'vidro', n: 11, emoji: '🪟', nome: 'Limpeza de vidros e vitrines de loja',
    frase: 'O negócio mais barato de começar: um rodo bom e uma rota de lojas.',
    tags: ['empresa', 'mensal'], dificuldade: 1,
    quem: 'Lojas de rua, clínicas, academias, restaurantes, imobiliárias e escritórios no térreo.',
    porque: 'Vitrine suja espanta cliente, e o lojista não tem tempo de limpar. Tu passa toda semana na mesma rua e atende 10 lojas numa manhã.',
    itens: [
      ['Kit profissional de vidro (rodo, lavador e extensor)', 300, 700],
      ['Balde de cinta, produto e microfibras', 80, 150],
      ['Escada pequena', 200, 350]
    ],
    cobrar: [['Loja pequena, por visita', 'R$ 40 a R$ 120 (est.)'], ['Plano semanal ou quinzenal', 'preço fixo por mês']],
    conta: { preco: 60, precoMax: 200, un: 'por visita', qtd: 100, qtdMax: 250, qtdLabel: 'visitas no mês', custoUnit: 3, fixo: 200, fixoLabel: 'transporte + produto' },
    contaNota: '25 lojas com 1 visita por semana.',
    passos: [
      'Escolhe 1 rua comercial e conta quantas vitrines tem.',
      'Limpa a vitrine de 1 loja de graça às 8h, antes de abrir. As vizinhas vão ver.',
      'Passa em todas as lojas da rua no mesmo dia oferecendo o plano semanal.',
      'Atende a rua inteira no mesmo horário toda semana.'
    ],
    msg: 'Bom dia! Sou o {nome}, limpo vitrines aqui na rua toda semana, antes da loja abrir. Vitrine brilhando chama cliente. O plano semanal sai R$ ___ por mês. Quer que eu faça a primeira de graça amanhã cedo?',
    semana: ['Comprar o kit de vidro', 'Escolher a rua', 'Fazer 1 vitrine de graça', 'Passar em todas as lojas da rua', 'Fechar 5 lojas no plano semanal'],
    cuidados: [
      'Fica no térreo: acima do 2º andar é trabalho em altura (NR-35 e equipamento próprio).',
      'Produto sem amônia em vidro com película.'
    ]
  },
  {
    id: 'posobra', n: 12, emoji: '🧱', nome: 'Limpeza pós-obra',
    frase: 'A obra acaba suja de cimento e tinta. O dono quer mudar amanhã.',
    tags: ['empresa', 'casa'], dificuldade: 2,
    quem: 'Construtoras, empreiteiros, arquitetos, lojas de reforma, imobiliárias e quem acabou de reformar.',
    porque: 'É um serviço pesado, cobrado por metro quadrado e sempre com pressa. Quem faz bem vira o indicado fixo do arquiteto e da construtora.',
    itens: [
      ['Aspirador de pó e água', 400, 900],
      ['Removedor de cimento e de tinta próprios pra cada piso', 150, 300],
      ['Espátulas, raspador de vidro, palha e rodos', 200, 350],
      ['Microfibras, baldes e EPI', 150, 250]
    ],
    cobrar: [['Por metro quadrado', 'R$ 8 a R$ 23'], ['Obra pesada (muito cimento ou verniz)', 'R$ 19 a R$ 23 por m²'], ['Diária de equipe', 'a partir de ~R$ 400']],
    conta: { preco: 12, precoMax: 30, un: 'por m²', qtd: 800, qtdMax: 2500, qtdLabel: 'm² no mês', custoUnit: 1.5, fixo: 1500, fixoLabel: 'diárias de ajudante' },
    contaNota: 'Uns 8 apartamentos de 100 m² no mês.',
    passos: [
      'Procura no mapa arquitetos, empreiteiros e lojas de reforma da tua cidade.',
      'Oferece a primeira limpeza com desconto pra ele testar contigo.',
      'Fotografa cada obra entregue e monta um portfólio no Instagram.',
      'Paga uma comissão pra quem te indicar obra.'
    ],
    msg: 'Olá! Sou o {nome}, faço limpeza pós-obra: tiro cimento, tinta e poeira de piso, vidro e esquadria, e entrego o imóvel pronto pra morar. Trabalho com arquitetos e empreiteiros. Posso fazer a próxima obra de vocês com desconto de parceria?',
    semana: ['Montar o kit e os produtos', 'Listar 20 arquitetos e empreiteiros', 'Mandar mensagem pra todos', 'Fazer a 1ª obra e fotografar'],
    cuidados: [
      'Ácido estraga porcelanato, mármore e granito: usa o produto certo e testa num canto.',
      'Máscara contra poeira de cimento sempre.'
    ]
  },
  {
    id: 'afiacao', n: 13, emoji: '🔪', nome: 'Afiação de facas e alicates em rota',
    frase: 'Açougue, salão e restaurante precisam de lâmina afiada toda semana.',
    tags: ['empresa', 'mensal'], dificuldade: 2,
    quem: 'Açougues, peixarias, restaurantes, salões de beleza, manicures, barbearias e pet shops (tesoura de tosa).',
    porque: 'Ferramenta cega atrasa o trabalho e machuca. Tu monta uma rota semanal: pega numa visita, devolve na outra (ou afia na hora). Cada cliente tem várias peças.',
    itens: [
      ['Afiadora de bancada de baixa rotação', 600, 2000],
      ['Pedras de afiar (grossa e fina)', 150, 400],
      ['Afiador de alicate de cutícula', 70, 150],
      ['Curso de afiação', 0, 300]
    ],
    cobrar: [['Faca', 'R$ 10 a R$ 25 (est.)'], ['Alicate de cutícula', 'R$ 15 a R$ 30 (est.)'], ['Tesoura de tosa ou de cabelo', 'R$ 40 a R$ 80 (est.)']],
    conta: { preco: 18, precoMax: 50, un: 'por peça', qtd: 400, qtdMax: 1200, qtdLabel: 'peças no mês', custoUnit: 0.5, fixo: 300, fixoLabel: 'combustível + desgaste' },
    contaNota: 'Uns 20 a 25 itens por dia. Os preços são estimativa: pergunta na tua cidade.',
    passos: [
      'Treina em facas e alicates velhos até ficar perfeito.',
      'Monta uma rota de 30 clientes: açougues e salões perto um do outro.',
      'Oferece afiar 1 peça de graça pra provar a qualidade.',
      'Passa sempre no mesmo dia da semana e cobra por peça ou por pacote mensal.'
    ],
    msg: 'Opa! Sou o {nome}, faço afiação de faca, alicate e tesoura com rota fixa aqui no bairro: passo toda semana no mesmo dia. Deixa eu afiar uma peça de vocês de graça pra testar?',
    semana: ['Comprar afiadora e pedras', 'Treinar em 20 peças velhas', 'Montar a rota de 30 clientes', 'Fazer 10 testes grátis', 'Fechar 5 clientes fixos'],
    cuidados: [
      'Luva anticorte quando manusear faca afiada.',
      'Embala cada peça com etiqueta do nome do cliente.'
    ]
  },
  {
    id: 'oleo', n: 14, emoji: '🛢️', nome: 'Coleta de óleo de cozinha usado',
    frase: 'O restaurante joga fora. A recicladora compra por litro.',
    tags: ['empresa', 'mensal'], dificuldade: 2,
    quem: 'Quem fornece o óleo: restaurantes, pastelarias, lanchonetes e escolas. Quem compra: recicladoras, fábricas de sabão e de biodiesel.',
    porque: 'O dono do restaurante precisa descartar certo e não sabe como. Tu leva as bombonas, recolhe toda semana e vende o volume. Ganha na diferença por litro.',
    itens: [
      ['20 bombonas de 50 litros com tampa', 600, 1000],
      ['Funil grande e peneira', 50, 100],
      ['Lacres e etiquetas', 30, 60],
      ['Carro ou carretinha (usa o que tiver)', 0, 0]
    ],
    cobrar: [['Venda pra recicladora', 'R$ 1 a R$ 4,50 por litro (sobe com o volume)'], ['Pago ao restaurante', 'de R$ 0 a R$ 1 por litro, ou troca por produto de limpeza']],
    conta: { preco: 3, precoMax: 5, un: 'por litro vendido', qtd: 3000, qtdMax: 10000, qtdLabel: 'litros no mês', custoUnit: 0.8, fixo: 600, fixoLabel: 'combustível' },
    contaNota: 'Uns 25 a 30 restaurantes. Aqui "custo por unidade" é o que tu paga ao restaurante por litro.',
    passos: [
      'Primeiro acha quem compra: liga pras recicladoras da região e pergunta o preço por litro e o volume mínimo.',
      'Pede a licença ambiental da recicladora (tu só vende pra quem é licenciado).',
      'Visita restaurantes e pastelarias com a bombona na mão e oferece retirada grátis toda semana.',
      'Entrega um comprovante de descarte correto pro restaurante. Isso ajuda ele na fiscalização.'
    ],
    msg: 'Oi! Sou o {nome}, faço a coleta do óleo de cozinha usado aqui na região: deixo a bombona, retiro toda semana e entrego o comprovante de descarte correto. Pra vocês é de graça e ainda pago por litro. Posso deixar uma bombona hoje?',
    semana: ['Achar 2 recicladoras compradoras e o preço', 'Ver na prefeitura e no órgão ambiental se precisa de cadastro pra transportar', 'Comprar as bombonas', 'Visitar 20 restaurantes', 'Fazer a 1ª venda'],
    cuidados: [
      'Transporte de resíduo pode exigir cadastro ou licença ambiental no teu município ou estado. Confere antes.',
      'Bombona bem tampada e presa no carro: óleo derramado na rua dá multa.',
      'Os preços variam muito: negocia com mais de um comprador.'
    ]
  },
  {
    id: 'lavaseco', n: 15, emoji: '🚗', nome: 'Lavagem a seco no estacionamento da empresa',
    frase: 'O funcionário trabalha e o carro dele sai lavado. A empresa só libera a vaga.',
    tags: ['empresa', 'mensal'], dificuldade: 1,
    quem: 'Quem paga é o funcionário. Quem libera é o RH de empresas com estacionamento, faculdades, hospitais e condomínios.',
    porque: 'Não precisa de água nem de ponto: tu atende 6 a 8 carros por dia no mesmo estacionamento. Pra empresa é um benefício de graça, e pro funcionário é tempo ganho.',
    itens: [
      ['Produto de lavagem a seco (sem água) e cera', 200, 400],
      ['40 microfibras de qualidade', 200, 300],
      ['Aspirador portátil potente', 300, 700],
      ['Pulverizadores e caixa organizadora', 50, 100]
    ],
    cobrar: [['Lavagem a seco + aspiração', 'R$ 40 a R$ 70 (est.)'], ['Plano mensal (4 lavagens)', 'com desconto']],
    conta: { preco: 50, precoMax: 120, un: 'por carro', qtd: 120, qtdMax: 300, qtdLabel: 'carros no mês', custoUnit: 6, fixo: 300, fixoLabel: 'transporte + reposição' },
    contaNota: 'Uns 6 carros por dia, 20 dias no mês.',
    passos: [
      'Lista empresas grandes, hospitais e faculdades com estacionamento próprio.',
      'Manda e-mail ou vai ao RH: "benefício sem custo pra empresa".',
      'Faz uma semana de lançamento com preço promocional e um cartaz no estacionamento.',
      'Agenda pelo WhatsApp: o funcionário deixa a chave ou o carro aberto na vaga.'
    ],
    msg: 'Olá! Sou o {nome}, faço lavagem a seco no estacionamento da empresa: o funcionário trabalha e o carro sai limpo, sem água e sem sujar o piso. Pra empresa é um benefício sem custo. Posso apresentar pro RH de vocês?',
    semana: ['Comprar produtos e microfibras', 'Treinar em 5 carros de conhecidos', 'Ir ao RH de 10 empresas', 'Fazer a semana de lançamento numa delas'],
    cuidados: [
      'Microfibra sempre limpa: sujeira na toalha risca a pintura.',
      'Combina por escrito como recebe e devolve a chave.'
    ]
  },
  {
    id: 'dog', n: 16, emoji: '🐕', nome: 'Passeador de cães',
    frase: 'Começa com quase nada e o cliente paga pacote no mês.',
    tags: ['casa', 'mensal'], dificuldade: 1,
    quem: 'Quem trabalha fora o dia todo, idosos, famílias de prédio e donos de cachorro agitado.',
    porque: 'O investimento é quase zero e o cliente vira fixo, com passeio todo dia. Passeando 2 ou 3 cães juntos (que se dão bem), a hora rende mais.',
    itens: [
      ['Guias e coleiras reserva', 80, 150],
      ['Saquinhos, petiscos e garrafa de água', 50, 100],
      ['Pochete ou bolsa', 30, 80],
      ['Curso de comportamento canino', 0, 300]
    ],
    cobrar: [['Passeio avulso de 30 a 60 min', 'R$ 30 a R$ 60'], ['Serviço premium ou cão especial', 'até ~R$ 120'], ['Pacote mensal', 'com desconto']],
    conta: { preco: 35, precoMax: 80, un: 'por passeio', qtd: 200, qtdMax: 400, qtdLabel: 'passeios no mês', custoUnit: 0, fixo: 150, fixoLabel: 'saquinhos + petiscos' },
    contaNota: 'Uns 10 passeios por dia, alguns em grupo de 2 ou 3 cães.',
    passos: [
      'Escolhe 1 ou 2 prédios ou condomínios grandes: muitos cães no mesmo lugar.',
      'Pede pra pôr um cartaz no elevador ou no grupo do condomínio.',
      'Oferece o primeiro passeio de graça pra conhecer o cachorro.',
      'Manda foto e vídeo de cada passeio pro dono. É isso que fideliza.'
    ],
    msg: 'Oi! Sou o {nome}, passeador de cães aqui do bairro. Passeio de 30 ou 60 minutos, com foto e vídeo pra ti no WhatsApp. O primeiro passeio é de graça pra eu conhecer teu cachorro. Bora?',
    semana: ['Fazer um curso básico de comportamento', 'Montar o kit', 'Pôr cartaz em 3 condomínios', 'Fazer 5 passeios de teste', 'Fechar 3 pacotes mensais'],
    cuidados: [
      'No máximo 3 ou 4 cães por vez, e só os que se dão bem.',
      'Termo assinado pelo dono: vacinas em dia e responsabilidades.',
      'Recolhe sempre o cocô.'
    ]
  },
  {
    id: 'montador', n: 17, emoji: '🪛', nome: 'Montador de móveis',
    frase: 'Todo mundo compra móvel pela internet. Quase ninguém sabe montar.',
    tags: ['casa'], dificuldade: 1,
    quem: 'Quem comprou móvel pela internet ou em loja sem montador, quem está de mudança, escritórios e lojas de móveis pequenas.',
    porque: 'Investimento baixo e muita procura. Lojas de bairro e quem vende móvel online precisam de montador de confiança pra indicar.',
    itens: [
      ['Parafusadeira de impacto com 2 baterias', 300, 700],
      ['Kit de brocas, chaves, nível e martelo de borracha', 200, 400],
      ['Trena, estilete e caixa organizadora', 80, 150]
    ],
    cobrar: [['Guarda-roupa de casal', 'R$ 150 a R$ 250'], ['Guarda-roupa embutido', '~R$ 350'], ['Por hora', 'R$ 60 a R$ 100'], ['Diária', 'R$ 250 a R$ 400']],
    conta: { preco: 150, precoMax: 350, un: 'por móvel', qtd: 50, qtdMax: 120, qtdLabel: 'móveis no mês', custoUnit: 10, fixo: 200, fixoLabel: 'transporte' },
    contaNota: 'Uns 2 a 3 móveis por dia.',
    passos: [
      'Monta os móveis de amigos e filma o "antes na caixa, depois montado".',
      'Visita 10 lojas de móveis do bairro e se oferece como montador parceiro.',
      'Cadastra-se nos aplicativos de serviço da tua cidade.',
      'Pede avaliação e indicação depois de cada montagem.'
    ],
    msg: 'Oi! Sou o {nome}, montador de móveis. Monto guarda-roupa, cama, rack, cozinha e escritório, com hora marcada e sem deixar parafuso sobrando. Me manda a foto ou o nome do móvel que eu te passo o valor na hora.',
    semana: ['Comprar a parafusadeira e o kit', 'Montar 3 móveis de conhecidos e filmar', 'Visitar 10 lojas de móveis', 'Cadastrar nos aplicativos de serviço'],
    cuidados: [
      'Confere todas as peças antes de começar e fotografa a caixa (evita briga por peça faltando).',
      'Móvel alto: fixa na parede.'
    ]
  },
  {
    id: 'calha', n: 18, emoji: '🌧️', nome: 'Limpeza de calhas e telhado',
    frase: 'Calha entupida vira goteira na primeira chuva forte. Vende antes dela.',
    tags: ['casa', 'empresa'], dificuldade: 2,
    quem: 'Casas, galpões, igrejas, escolas e condomínios de casas.',
    porque: 'É serviço sazonal e urgente: antes da época de chuva todo mundo precisa ao mesmo tempo. Quem já tem a lista de clientes fatura forte nessa época.',
    itens: [
      ['Escada extensível', 600, 1200],
      ['Cinto, talabarte e curso NR-35', 300, 600],
      ['Luvas, sacos de entulho e mangueira', 100, 200],
      ['Soprador de folhas', 200, 400]
    ],
    cobrar: [['Por metro de calha', 'R$ 8 a R$ 20 (est.)'], ['Casa térrea, mínimo', '~R$ 150 (est.)'], ['Plano', '2 limpezas por ano']],
    conta: { preco: 250, precoMax: 700, un: 'por casa', qtd: 24, qtdMax: 60, qtdLabel: 'serviços no mês', custoUnit: 10, fixo: 300, fixoLabel: 'transporte + descarte' },
    contaNota: 'Média de época de chuva. No resto do ano, junta com limpeza de placa solar ou de fachada.',
    passos: [
      'Faz o curso NR-35 antes de tudo.',
      'Anda nos bairros com muita árvore: são as casas com calha entupida.',
      'Divulga 1 mês antes da época de chuva da tua região.',
      'Oferece o plano de 2 limpezas por ano com desconto.'
    ],
    msg: 'Oi! Sou o {nome}, faço limpeza de calha e telhado antes da época de chuva. Calha entupida vira goteira e infiltração. Faço a limpeza, testo com água e te mando foto de tudo. Posso passar pra orçar?',
    semana: ['Fazer o curso NR-35', 'Comprar escada e cinto', 'Panfletar 2 bairros com árvores', 'Fazer os 3 primeiros serviços'],
    cuidados: [
      'Trabalho em altura: NR-35, cinto preso e alguém segurando a escada.',
      'Nunca sobe com o telhado molhado ou com vento forte.',
      'Longe de fio de energia.'
    ]
  },
  {
    id: 'plantas', n: 19, emoji: '🪴', nome: 'Manutenção de plantas em escritório e loja',
    frase: 'Empresa compra planta bonita e deixa morrer em 2 meses. Tu evita isso todo mês.',
    tags: ['empresa', 'mensal'], dificuldade: 1,
    quem: 'Escritórios, clínicas, restaurantes, hotéis, lojas e recepções com plantas decorativas.',
    porque: 'Investimento quase zero e contrato mensal. Visita a cada 15 dias pra regar, podar, adubar e trocar o que morreu. Ainda dá pra lucrar vendendo as plantas novas.',
    itens: [
      ['Regador de bico longo e borrifador', 60, 120],
      ['Tesoura de poda e luvas', 60, 120],
      ['Adubo, substrato e vasos reserva', 100, 200],
      ['Curso básico de plantas de interior', 0, 200]
    ],
    cobrar: [['Contrato mensal (visita a cada 15 dias)', 'R$ 150 a R$ 400 por cliente (est.)'], ['Troca de planta', 'cobrada à parte, com margem']],
    conta: { preco: 250, precoMax: 700, un: 'por cliente/mês', qtd: 20, qtdMax: 50, qtdLabel: 'clientes', custoUnit: 20, fixo: 200, fixoLabel: 'transporte + adubo' },
    contaNota: 'Os preços são estimativa: depende de quantas plantas o cliente tem.',
    passos: [
      'Repara nas recepções com planta amarela ou seca: esse é o cliente.',
      'Oferece um "diagnóstico das plantas" grátis e mostra o que dá pra salvar.',
      'Fecha o mensal e propõe trocar as plantas que não têm mais jeito (tu lucra na venda).',
      'Pede indicação pra outros escritórios do mesmo prédio.'
    ],
    msg: 'Olá! Sou o {nome}, cuido de plantas em escritórios e lojas: rego, podo, adubo e troco o que precisar, a cada 15 dias. Vocês só aproveitam o ambiente bonito. Posso passar pra fazer um diagnóstico gratuito das plantas de vocês?',
    semana: ['Estudar as 10 plantas de interior mais comuns', 'Montar o kit', 'Visitar 15 recepções', 'Fechar os 3 primeiros mensais'],
    cuidados: [
      'Cada planta tem uma rega: anota a de cada uma numa planilha por cliente.',
      'Planta com bicho (cochonilha) se separa das outras.'
    ]
  },
  {
    id: 'organizer', n: 20, emoji: '📦', nome: 'Personal organizer',
    frase: 'Gente de mudança paga pra abrir a casa nova já arrumada.',
    tags: ['casa'], dificuldade: 1,
    quem: 'Famílias em mudança, quem tem closet e cozinha bagunçados, idosos, e quem vai receber visita ou bebê.',
    porque: 'Investimento baixo, cobrado por hora e com projetos de vários dias. As mudanças trazem cliente sem parar, e dá pra lucrar vendendo os organizadores.',
    itens: [
      ['Etiquetadora', 150, 300],
      ['Kit de cabides e organizadores pra revenda (opcional)', 0, 300],
      ['Curso de organização', 200, 800]
    ],
    cobrar: [['Por hora, conforme a cidade', 'R$ 30 a R$ 120'], ['Projeto de closet', '6 a 10 horas'], ['Mudança completa', 'pacote fechado']],
    conta: { preco: 70, precoMax: 150, un: 'por hora', qtd: 80, qtdMax: 160, qtdLabel: 'horas no mês', custoUnit: 0, fixo: 200, fixoLabel: 'transporte' },
    contaNota: 'Uns 4 projetos de 20 horas no mês.',
    passos: [
      'Organiza o closet e a cozinha de 2 conhecidos e fotografa o antes e depois.',
      'Fecha parceria com empresas de mudança, imobiliárias e lojas de móveis planejados.',
      'Posta os antes e depois (é o conteúdo que mais engaja nesse nicho).',
      'Vende os organizadores com margem dentro do próprio projeto.'
    ],
    msg: 'Oi! Sou o {nome}, personal organizer. Organizo closet, cozinha e casa de mudança: tu chega e já tá tudo no lugar, etiquetado. Cobro por hora e te passo uma estimativa antes. Me manda umas fotos do espaço?',
    semana: ['Fazer um curso de organização', 'Organizar 2 casas de conhecidos', 'Postar o antes e depois', 'Ligar pra 3 empresas de mudança'],
    cuidados: [
      'Nunca joga nada fora sem o cliente aprovar.',
      'Combina as horas por escrito antes de começar.'
    ]
  }
];

window.FONTES = [
  ['Lavadoras de alta pressão: faixa de preço no Brasil', 'https://www.zoom.com.br/lavadora-alta-pressao-lava-jato/fria'],
  ['Lavadoras profissionais (Loja do Mecânico)', 'https://www.lojadomecanico.com.br/setor/22/247/621/lavadora-de-alta-presso-lavadoras-profissionais'],
  ['Limpeza de placa solar em 2026 (Monitor do Mercado)', 'https://monitordomercado.com.br/economia-2/414431-quanto-custa-para-limpar-as-placas-solares-e-recuperar-a-energia-perdida-debaixo-da-sujeira/'],
  ['Frequência de limpeza dos painéis (Canal Solar)', 'https://canalsolar.com.br/como-deve-ser-realizada-a-limpeza-dos-paineis-solares/'],
  ['Higienização de split em 2026 (Monitor do Mercado)', 'https://monitordomercado.com.br/noticias/390417-quanto-um-tecnico-de-refrigeracao-cobra-para-realizar-a-higienizacao-quimica-completa-de-tres-aparelhos-split-em-2026/'],
  ['Limpeza de caixa d\'água em compra pública (Quatá-SP)', 'https://www.quata.sp.gov.br/arquivos/compra_direta/ddaeb264db8c04be2418c5ca8b95a02d.pdf'],
  ['Limpeza de caixa d\'água para condomínio (SíndicoNet)', 'https://www.sindiconet.com.br/informese/limpeza-de-caixas-dagua-manutencao-limpeza-de-caixas-dagua/amp'],
  ['Higienização de sofá em 2026 (Revista Oeste)', 'https://revistaoeste.com/oestegeral/2026/04/15/quanto-custa-limpar-um-sofa-com-profissional-e-evitar-cheiro-e-manchas-dificeis/'],
  ['Carrinho de supermercado: lei e preço por unidade (Gazeta do Povo)', 'https://www.gazetadopovo.com.br/parana/mercado-carrinho-lei/'],
  ['Custo de manter piscina em 2026 (Monitor do Mercado)', 'https://monitordomercado.com.br/economia-2/420345-quanto-custa-manter-uma-piscina-de-30-mil-litros-durante-1-ano-em-2026-entre-agua-energia-e-produtos-de-limpeza/'],
  ['Preço do óleo de cozinha usado (anúncios MF Rural)', 'https://www.mfrural.com.br/detalhe/180682/compro-oleo-de-fritura-usado'],
  ['Passeador de cães: preço por passeio (FreelaSemCrise)', 'https://www.freelasemcrise.com.br/quanto-cobrar/passeio-dogs'],
  ['Montagem de guarda-roupa (GetNinjas)', 'https://www.getninjas.com.br/reformas-e-reparos/montador-de-moveis/preco/montagem-de-guarda-roupa'],
  ['Montador de móveis e DAS do MEI em 2026 (FreelaSemCrise)', 'https://freelasemcrise.com.br/profissoes/montador-moveis'],
  ['Limpeza pós-obra por m² (CronoShare)', 'https://www.cronoshare.com.br/quanto-custa/limpeza-pos-obra'],
  ['Limpeza pós-obra por m² (Jornal da Obra)', 'https://jornaldobras.com.br/noticia/129629/o-metro-quadrado-parado-que-fez-empresas-olharem-para-a-limpeza-pos-obra'],
  ['Personal organizer: preço por hora por cidade (FreelaSemCrise)', 'https://www.freelasemcrise.com.br/quanto-cobra/personal-organizer/belo-horizonte'],
  ['PMOC: Lei 13.589/2018', 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13589.htm']
];
