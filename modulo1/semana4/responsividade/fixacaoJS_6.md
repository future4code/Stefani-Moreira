## Exercícios de Fixação de Javascript

Temos um array de tarefas, onde cada tarefa é um objeto com as propriedades: titulo, status e tempo. O status tem três valores possíveis: todo (tarefa não iniciada), doing (tarefa em progresso) e done (tarefa terminada).

Crie um novo array que tenha apenas o nome das atividades terminadas


```
function filtraTarefas() {
  const tarefas = [
    { titulo: "Fazer Remember", status: "done", tempo: 30 },
    { titulo: "Fazer Challange", status: "todo", tempo: 30 },
    { titulo: "Assistir Aula", status: "done", tempo: 120 },
    { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
    { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
    { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
    { titulo: "Fazer desafio", status: "doing", tempo: 60 },
    { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
    { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
    { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
    { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
    { titulo: "Assistir Novela", status: "todo", tempo: 90 }
 ]

 // Escreva seu código aqui
const tarefasFeitas = tarefas.filter((parametro) => {
  return parametro.status === "done";
});

 const novaLista = tarefasFeitas.map((parametro) => {
   return parametro.titulo
 });
 
 return novaLista;
}