const courses = {
    "fundamento_arquitetura_computadores": {
        "name": "Fundamentos de Arquitetura de Computadores",
        "period": 1,
        "code": "RCM 013",
        "type": "OB",
        "CH": 64,
        "unlocks": [
            "circuitos_digitais",
            "lab_circuitos_digitais"
        ]
    },
    "matematica_discreta": {
        "name": "Matemática Discreta",
        "period": 1,
        "code": "RCN 044",
        "type": "OB",
        "CH": 64,
        "unlocks": [
            "logica_computacao",
            "prob_est"
        ]
    },
    "programacao_1": {
        "name": "Programação 1",
        "period": 1,
        "code": "RCM 002",
        "type": "OB",
        "CH": 96,
        "unlocks": [
            "programacao_2",
            "metodos_numericos"
        ]
    },
    "intro_ciencia_computacao": {
        "name": "Introdução à Ciência da Computação",
        "period": 1,
        "code": "RCM 001",
        "type": "OB",
        "CH": 32
    },
    "geometria_analitica": {
        "name": "Geometria Analítica e Cálculo Vetorial",
        "period": 1,
        "code": "RCN 023",
        "type": "OB",
        "CH": 64,
        "unlocks": [
            "algebra_linear"
        ]
    },
    "calculo_1": {
        "name": "Cálculo I",
        "period": 1,
        "code": "RCN 019",
        "type": "OB",
        "CH": 64,
        "unlocks": [
            "calculo_2"
        ]
    },
    "circuitos_digitais": {
        "name": "Circuitos Digitais",
        "period": 2,
        "code": "RCM 011",
        "type": "OB",
        "CH": 64,
        "required": [
            "fundamento_arquitetura_computadores"
        ],
        "correquisite": [
            "lab_circuitos_digitais"
        ],
        "unlocks": [
            "arquitetura_computadores"
        ]
    },
    "lab_circuitos_digitais": {
        "name": "Laboratório de Circuitos Digitais",
        "period": 2,
        "code": "RCM 012",
        "type": "OB",
        "CH": 32,
        "required": [
            "fundamento_arquitetura_computadores"
        ],
        "correquisite": [
            "circuitos_digitais"
        ]
    },
    "programacao_2": {
        "name": "Programação 2",
        "period": 2,
        "code": "RCM 003",
        "type": "OB",
        "CH": 96,
        "required": [
            "programacao_1"
        ],
        "unlocks": [
            "arquitetura_computadores",
            "estrutura_dados",
            "paradigmas_programacao",
            "prog_arquivo"
        ]
    },
    "logica_computacao": {
        "name": "Lógica para Ciência da Computação",
        "period": 2,
        "code": "RCM 015",
        "type": "OB",
        "CH": 64,
        "required": [
            "matematica_discreta"
        ],
        "unlocks": [
            "paradigmas_programacao",
            "inteligencia_artificial"
        ]
    },
    "algebra_linear": {
        "name": "Álgebra Linear",
        "period": 2,
        "code": "RCN 024",
        "type": "OB",
        "CH": 64,
        "required": [
            "geometria_analitica"
        ],
        "unlocks": [
            "metodos_numericos",
            "equacoes_diferencias",
            "computacao_grafica"
        ]
    },
    "calculo_2": {
        "name": "Cálculo II",
        "period": 2,
        "code": "RCN 020",
        "type": "OB",
        "CH": 64,
        "required": [
            "calculo_1"
        ],
        "unlocks": [
            "prob_est",
            "metodos_numericos",
            "equacoes_diferencias",
            "fisica_1",
            "fisica_3a",
            "calculo_3"
        ]
    },
    "arquitetura_computadores": {
        "name": "Arquitetura de Computadores",
        "period": 3,
        "code": "RCM 014",
        "type": "OB",
        "CH": 64,
        "required": [
            "circuitos_digitais",
            "programacao_2"
        ],
        "unlocks": [
            "sistemas_operacionais",
            "redes_1",
            "tcc_1"
        ]
    },
    "paradigmas_programacao": {
        "name": "Paradigmas de Programação",
        "period": 3,
        "code": "RCM 008",
        "type": "OB",
        "CH": 64,
        "required": [
            "programacao_2",
            "logica_computacao"
        ],
        "unlocks": [
            "engenharia_software_1",
            "compiladores"
        ]
    },
    "estrutura_dados": {
        "name": "Estrutura de Dados",
        "period": 3,
        "code": "RCM 004",
        "type": "OB",
        "CH": 64,
        "required": [
            "programacao_2"
        ],
        "unlocks": [
            "computacao_grafica",
            "analise_projeto_algoritmo",
            "interface_humano-computador",
            "inteligencia_artificial",
            "engenharia_software_1",
            "banco_dados",
            "liguagens_formais_teoria_computacao"
        ]
    },
    "metodos_numericos": {
        "name": "Métodos Numéricos",
        "period": 3,
        "code": "RCN 038",
        "type": "OB",
        "CH": 64,
        "required": [
            "calculo_2",
            "programacao_1",
            "algebra_linear"
        ],
        "unlocks": [
            "fisica_computacional"
        ]
    },
    "fisica_1": {
        "name": "Física I",
        "period": 3,
        "code": "RCN 025",
        "type": "OB",
        "CH": 64,
        "required": [
            "calculo_2",
        ],
        "unlocks": [
            "fisica_3a"
        ]
    },
    "calculo_3": {
        "name": "Cálculo III",
        "period": 3,
        "code": "RCN 021",
        "type": "OB",
        "CH": 64,
        "required": [
            "calculo_2"
        ],
        "unlocks": [
            "tcc_1"
        ]
    },
    "equacoes_diferencias": {
        "name": "Equações Diferenciais",
        "period": 3,
        "code": "RCN 022",
        "type": "OB",
        "CH": 64,
        "required": [
            "calculo_2",
            "algebra_linear"
        ]
    },
    "analise_projeto_algoritmo": {
        "name": "Análise e Projeto de Algoritmos",
        "period": 4,
        "code": "RCM 009",
        "type": "OB",
        "CH": 64,
        "required": [
            "estrutura_dados"
        ],
        "unlocks": [
            "algoritmo_grafos",
            "tcc_1"
        ]
    },
    "engenharia_software_1": {
        "name": "Engenharia de Software 1",
        "period": 4,
        "code": "RCM 023",
        "type": "OB",
        "CH": 64,
        "required": [
            "paradigmas_programacao",
            "estrutura_dados"
        ],
        "unlocks": [
            "projeto_arquitetura_software",
            "tcc_1"
        ]
    },
    "fisica_computacional": {
        "name": "Introdução a Física Computacional",
        "period": 4,
        "code": "RCN 060",
        "type": "OB",
        "CH": 64,
        "required": [
            "metodos_numericos"
        ],
        "correrequisite": [
            "fisica_3a"
        ],
        "unlocks": [
            "tcc_1"
        ]
    },
    "fisica_3a": {
        "name": "Física III",
        "period": 4,
        "code": "RCN 059",
        "type": "OB",
        "CH": 64,
        "required": [
            "calculo_2",
            "fisica_1"
        ],
        "correrequisite": [
            "fisica_computacional"
        ],
        "unlocks": [
            "tcc_1"
        ]
    },
    "prob_est": {
        "name": "Probabilidade e Estatística",
        "period": 4,
        "code": "RCN 037",
        "type": "OB",
        "CH": 64,
        "required": [
            "matematica_discreta",
            "calculo_2"
        ],
        "unlocks": [
            "inteligencia_artificial",
            "tcc_1"
        ]
    },
    "prog_arquivo": {
        "name": "Programação com Arquivos",
        "period": 4,
        "code": "RCM 006",
        "type": "OB",
        "CH": 32,
        "required": [
            "programacao_2"
        ],
        "unlocks": [
            "tcc_1"
        ]
    },
    "sistemas_operacionais": {
        "name": "Sistemas Operacionais",
        "period": 5,
        "code": "RCM 016",
        "type": "OB",
        "CH": 64,
        "required": [
            "arquitetura_computadores"
        ],
        "unlocks": [
            "sistemas_distribuidos"
        ]
    },
    "redes_1": {
        "name": "Redes de Computadores 1",
        "period": 5,
        "code": "RCM 018",
        "type": "OB",
        "CH": 64,
        "required": [
            "arquitetura_computadores"
        ],
        "unlocks": [
            "redes_2"
        ]
    },
    "banco_dados": {
        "name": "Banco de Dados",
        "period": 5,
        "code": "RCM 021",
        "type": "OB",
        "CH": 64,
        "required": [
            "estrutura_dados"
        ],
        "unlocks": [
            "projeto_banco_dados"
        ]
    },
    "computacao_grafica": {
        "name": "Computação Gráfica",
        "period": 5,
        "code": "RCM 026",
        "type": "OB",
        "CH": 64,
        "required": [
            "estrutura_dados",
            "algebra_linear"
        ]
    },
    "algoritmo_grafos": {
        "name": "Algoritmos em Grafos",
        "period": 5,
        "code": "RCM 007",
        "type": "OB",
        "CH": 64,
        "required": [
            "analise_projeto_algoritmo"
        ]
    },
    "liguagens_formais_teoria_computacao": {
        "name": "Linguagens Formais e Teoria da Computação",
        "period": 5,
        "code": "RCM 010",
        "type": "OB",
        "CH": 64,
        "required": [
            "estrutura_dados"
        ],
        "unlocks": [
            "compiladores"
        ]
    },
    "projeto_arquitetura_software": {
        "name": "Projeto e Arquitetura de Software",
        "period": 5,
        "code": "RCM 005",
        "type": "OB",
        "CH": 64,
        "required": [
            "engenharia_software_1"
        ]
    },
    "sistemas_distribuidos": {
        "name": "Sistemas Distribuídos",
        "period": 6,
        "code": "RCM 017",
        "type": "OB",
        "CH": 64,
        "required": [
            "sistemas_operacionais"
        ]
    },
    "redes_2": {
        "name": "Redes de Computadores 2",
        "period": 6,
        "code": "RCM 019",
        "type": "OB",
        "CH": 64,
        "required": [
            "redes_1"
        ]
    },
    "compiladores": {
        "name": "Compiladores",
        "period": 6,
        "code": "RCM 020",
        "type": "OB",
        "CH": 64,
        "required": [
            "liguagens_formais_teoria_computacao",
            "paradigmas_programacao"
        ]
    },
    "projeto_banco_dados": {
        "name": "Projeto de Banco de Dados",
        "period": 6,
        "code": "RCM 022",
        "type": "OB",
        "CH": 64,
        "required": [
            "banco_dados"
        ]
    },
    "interface_humano-computador": {
        "name": "Interface Humano-Computador",
        "period": 6,
        "code": "RCM 024",
        "type": "OB",
        "CH": 64,
        "required": [
            "estrutura_dados"
        ]
    },
    "inteligencia_artificial": {
        "name": "Inteligência Artificial",
        "period": 6,
        "code": "RCM 025",
        "type": "OB",
        "CH": 64,
        "required": [
            "logica_computacao",
            "estrutura_dados",
            "prob_est"
        ]
    },
    "optativa_1": {
        "name": "Optativa",
        "period": 6,
        "code": "-",
        "type": "O",
        "CH": 64,
    },
    "tcc_1": {
        "name": "Projeto de Aplicação I-A",
        "period": 7,
        "code": "RCM 084",
        "type": "OB",
        "CH": 64,
        "required": [
            "arquitetura_computadores",
            "calculo_3",
            "equacoes_diferencias",
            "analise_projeto_algoritmo",
            "prog_arquivo",
            "engenharia_software_1",
            "fisica_computacional",
            "fisica_3a",
            "prob_est"
        ],
        "unlocks": [
            "tcc_2",
        ],
    },
    "computacao_sociedade": {
        "name": "Computação e Sociedade",
        "period": 7,
        "code": "RCM 031",
        "type": "OB",
        "CH": 32,
        "CHrequired": 1440
    },
    "empreendedorismo": {
        "name": "Empreendedorismo",
        "period": 7,
        "code": "REG 001",
        "type": "OB",
        "CH": 32,
        "CHrequired": 1440
    },
    "estagio": {
        "name": "Estágio Supervisionado",
        "period": 7,
        "code": "RCM 027",
        "type": "E",
        "CH": 192,
    },
    "optativa_2": {
        "name": "Optativa",
        "period": 7,
        "code": "-",
        "type": "O",
        "CH": 64,
    },
    "optativa_3": {
        "name": "Optativa",
        "period": 7,
        "code": "-",
        "type": "O",
        "CH": 64,
    },
    "tcc_2": {
        "name": "Projeto de Aplicação II-A",
        "period": 8,
        "code": "RCM 085",
        "type": "OB",
        "CH": 64,
        "required": [
            "tcc_1",
        ],
    },
    "etica": {
        "name": "Ética",
        "period": 8,
        "code": "REG 057",
        "type": "OB",
        "CH": 32,
        "CHrequired": 1440
    },
    "atividade_complementar": {
        "name": "Atividades Complementares",
        "period": 8,
        "code": "-",
        "type": "AC",
        "CH": 32,
    },
    "optativa_4": {
        "name": "Optativa",
        "period": 8,
        "code": "-",
        "type": "O",
        "CH": 64,
    },
    "optativa_5": {
        "name": "Optativa",
        "period": 8,
        "code": "-",
        "type": "O",
        "CH": 64,
    },
    "optativa_6": {
        "name": "Optativa",
        "period": 8,
        "code": "-",
        "type": "O",
        "CH": 64,
    },
}