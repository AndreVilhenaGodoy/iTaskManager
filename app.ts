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
