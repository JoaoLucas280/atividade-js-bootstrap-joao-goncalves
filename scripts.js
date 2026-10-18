console.log("Meu primeiro script foi executado!");

// Comentário de uma linha: Inicializando o sistema de métricas do painel de estudos.
console.log("Iniciando processamento de dados acadêmicos...");
console.log(2026);
console.log("Módulos carregados com sucesso.");

const nomeAluno = "João Gonçalves";
const curso = "Desenvolvimento Web";
let quantidadeTarefas = 3;

quantidadeTarefas = 5;
console.log("Quantidade atualizada de tarefas:", quantidadeTarefas);

var exemploAntigo = "Declaração utilizada em códigos antigos (var)";
console.log(exemploAntigo);

const tituloPainel = "Painel de Controle Acadêmico"; 
const cargaHoraria = 80;                             
const matriculaAtiva = true;                         
const observacoesBolsa = null;                       

console.log("Título:", tituloPainel);
console.log("Carga Horária:", cargaHoraria);
console.log("Matrícula Ativa:", matriculaAtiva);
console.log("Observações:", observacoesBolsa);

const nota1 = 8.5;
const nota2 = 7.5;
const mediaNotas = (nota1 + nota2) / 2;       
const totalHorasEstudo = cargaHoraria - 10;   
const metaHorasMinima = 50;
const atingiuMeta = totalHorasEstudo >= metaHorasMinima; 

console.log("Média das notas:", mediaNotas);
console.log("Atingiu a meta de horas?", atingiuMeta);

const mensagemPerfil = `O aluno ${nomeAluno} está matriculado no curso de ${curso}, possui ${quantidadeTarefas} tarefas registradas e obteve média ${mediaNotas}.`;
console.log(mensagemPerfil);

const notaCorte = 6.0;

if (mediaNotas >= notaCorte) {
    console.log("Situação: Aprovado por média!");
} else {
    console.log("Situação: Reprovado / Necessita de exame final.");
}

const disciplina = "Algoritmos e Estrutura de Dados";
const aulasAssistidas = 18;
const totalAulas = 20;
const percentualFrequencia = (aulasAssistidas / totalAulas) * 100;

console.log(`--- Desafio Integrador ---`);
console.log(`Disciplina: ${disciplina}. Frequência: ${percentualFrequencia}%.`);

if (percentualFrequencia >= 75) {
    console.log("Status de Frequência: Aprovado por presença.");
} else {
    console.log("Status de Frequência: Reprovado por falta.");
}