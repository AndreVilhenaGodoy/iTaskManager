class Tarefa {
  titulo: string;
  descricao: string;
  data: Date;

  constructor(tituloRecebido: string, descricaoRecebida: string) {
    this.titulo = tituloRecebido;
    this.descricao = descricaoRecebida;
    this.data = new Date();
  }
}

const inputTitulo = document.getElementById("input-titulo") as HTMLInputElement;
const inputDescricao = document.getElementById(
  "input-descricao",
) as HTMLInputElement;
const btnAdicionar = document.getElementById(
  "btn-adicionar",
) as HTMLButtonElement;
const listaTarefas = document.getElementById("tarefas") as HTMLUListElement;

btnAdicionar.addEventListener("click", () => {
  const tituloDigitado = inputTitulo.value;
  const descricaoDigitada = inputDescricao.value;
  const novaTarefa = new Tarefa(tituloDigitado, descricaoDigitada);
  console.log(novaTarefa);
});
