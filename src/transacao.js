class Transacao {
    constructor(valor, descricao = "") {
        this._valor = valor;
        this._descricao = descricao;
    }
    getValor() {
        return this._valor;
    }
    getDescricao() {
        return this._descricao;
    }
    setValor(valor) {
        this._valor = valor;
    }
    setDescricao(descricao) {
        this._descricao = descricao;
    }
    informacao() {
        return `Processando: ${this.getDescricao()}\nValor: ${this.getValor()}`;
    }
}

module.exports = Transacao;