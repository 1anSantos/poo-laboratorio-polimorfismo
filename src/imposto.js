const Transacao = require('./transacao');

class Imposto extends Transacao {
    constructor(valor, descricao, tipo) {
        super(valor, descricao);
        this._tipo = tipo;
    }
    getTipo() {
        return this._tipo;
    }
    setTipo(tipo) {
        this._tipo = tipo;
    }
    informacao() {
        return `${super.informacao()}\nTipo: ${this.getTipo()}`;
    }
}

module.exports = Imposto;