var Tarefa = /** @class */ (function () {
    function Tarefa(tituloRecebido, descricaoRecebida) {
        this.titulo = tituloRecebido;
        this.descricao = descricaoRecebida;
        this.data = new Date();
    }
    Tarefa.prototype.renderizar = function () {
        var lista = document.createElement("li");
        var meuTitulo = document.createElement("h3");
        var minhaDescricao = document.createElement("p");
        var minhaData = document.createElement("small");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        var btnDeletar = document.createElement("button");
        meuTitulo.innerText = this.titulo;
        minhaDescricao.innerText = this.descricao;
        minhaData.innerText = "Criado em: ".concat(this.data.toLocaleString());
        btnDeletar.innerText = "Deletar";
        btnDeletar.classList.add("btn-deletar");
        lista.appendChild(meuTitulo);
        lista.appendChild(minhaDescricao);
        lista.appendChild(minhaData);
        lista.appendChild(checkbox);
        lista.appendChild(btnDeletar);
        checkbox.addEventListener("change", function () {
            lista.classList.toggle("concluida");
        });
        btnDeletar.addEventListener("click", function () {
            lista.remove();
        });
        return lista;
    };
    return Tarefa;
}());
var inputTitulo = document.getElementById("input-titulo");
var inputDescricao = document.getElementById("input-descricao");
var btnAdicionar = document.getElementById("btn-adicionar");
var listaTarefas = document.getElementById("tarefas");
btnAdicionar.addEventListener("click", function () {
    var tituloDigitado = inputTitulo.value;
    var descricaoDigitada = inputDescricao.value;
    var novaTarefa = new Tarefa(tituloDigitado, descricaoDigitada);
    var cardHtmlDaTarefa = novaTarefa.renderizar();
    listaTarefas.appendChild(cardHtmlDaTarefa);
});
