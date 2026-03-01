var Tarefa = /** @class */ (function () {
    function Tarefa(tituloRecebido, descricaoRecebida) {
        this.titulo = tituloRecebido;
        this.descricao = descricaoRecebida;
        this.data = new Date();
    }
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
    console.log(novaTarefa);
});
