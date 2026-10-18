# Painel Acadêmico - Atividade JavaScript e Bootstrap

## Nome e Tema do Projeto
- **Autor:** João Gonçalves
- **Tema:** Painel de Estudos e Gestão de Desempenho Acadêmico.

## Explicação da Interface Criada
A interface consiste em um painel web responsivo voltado para o acompanhamento acadêmico. Ela apresenta uma barra de navegação superior (`navbar`), uma seção de destaque com mensagem de boas-vindas (`hero/alert`), três blocos visuais em formato de cartões (`cards`) detalhando o perfil do aluno, o desempenho em notas e o controle de tarefas, além de um rodapé institucional (`footer`).

## Componentes Bootstrap Utilizados
- `navbar` e `navbar-brand` (para o cabeçalho de navegação)
- `container`, `row` e `col` (para estruturação do layout responsivo de grade)
- `card`, `card-body` e `card-title` (para a exibição dos blocos de conteúdo)
- `badge` (para sinalizar o status de atividade)
- `btn` (para o botão visual de atualização)
- `alert` (para mensagens de destaque e incentivo)
- `footer` (para o rodapé da página)

## Diferença entre `let`, `const` e `var`
- **`const`**: Utilizada para declarar constantes, ou seja, variáveis cujos valores não serão alterados ao longo da execução do script (ex: nome do aluno, curso).
- **`let`**: Utilizada para variáveis cujos valores podem sofrer reatribuições (ex: quantidade de tarefas que pode aumentar ou diminuir). Possui escopo de bloco.
- **`var`**: Forma antiga de declaração de variáveis no JavaScript (contexto histórico), que possui escopo de função e sofre de comportamentos indesejados como o *hoisting* sem restrição de bloco. A prática moderna prioriza estritamente `let` e `const`.

## Tipos de Dados Utilizados
- **String (`string`)**: Textos e sequências de caracteres (ex: `nomeAluno`, `curso`).
- **Number (`number`)**: Valores numéricos inteiros ou decimais (ex: `cargaHoraria`, `nota1`).
- **Boolean (`boolean`)**: Valores lógicos `true` (verdadeiro) ou `false` (falso) para avaliações condicionais (ex: `matriculaAtiva`, `atingiuMeta`).
- **`null`**: Representa a ausência intencional de valor (ex: `observacoesBolsa`).

## Explicação da Condição Criada com `if/else`
A estrutura condicional avalia se a média aritmética das notas do aluno (`mediaNotas`) é maior ou igual à nota de corte estipulada (`6.0`). Caso a condição seja verdadeira (`if`), o console exibe a mensagem de aprovação; caso contrário (`else`), exibe o aviso de necessidade de exame final, permitindo testar diferentes cenários diretamente no código.

## Maior Dificuldade Encontrada
A principal atenção no início foi garantir a correta organização estrutural das classes de grid do Bootstrap (`container`, `row`, `col`) para que os cards ficassem perfeitamente alinhados e responsivos em diferentes tamanhos de tela, mantendo a simplicidade sem a necessidade de criar arquivos CSS customizados.

## Como a Dificuldade foi Resolvida
A questão foi solucionada consultando a documentação oficial do Bootstrap para utilizar corretamente os modificadores de espaçamento responsivo (`g-4`, `h-100`) e estruturando semanticamente as tags HTML, garantindo que o layout se comportasse de maneira fluida em visualizações mobile e desktop.