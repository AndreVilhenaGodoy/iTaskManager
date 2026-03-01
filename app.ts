class Tarefa {
  titulo: string;
  descricao: string;
  data: Date;

  constructor(tituloRecebido: string, descricaoRecebida: string) {
    this.titulo = tituloRecebido;
    this.descricao = descricaoRecebida;
    this.data = new Date();
  }

  renderizar() {
    const lista = document.createElement("li");
    const meuTitulo = document.createElement("h3");
    const minhaDescricao = document.createElement("p");
    const minhaData = document.createElement("small");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const btnDeletar = document.createElement("button");

    meuTitulo.innerText = this.titulo;
    minhaDescricao.innerText = this.descricao;
    minhaData.innerText = `Criado em: ${this.data.toLocaleString()}`;
    btnDeletar.innerText = "Deletar";
    btnDeletar.classList.add("btn-deletar");

    lista.appendChild(meuTitulo);
    lista.appendChild(minhaDescricao);
    lista.appendChild(minhaData);
    lista.appendChild(checkbox);
    lista.appendChild(btnDeletar);

    checkbox.addEventListener("change", () => {
      lista.classList.toggle("concluida");
    });

    btnDeletar.addEventListener("click", () => {
        lista.remove();
    });

    return lista;
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

  const cardHtmlDaTarefa = novaTarefa.renderizar();

  listaTarefas.appendChild(cardHtmlDaTarefa);
});
