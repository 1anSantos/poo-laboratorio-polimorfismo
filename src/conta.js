const Transacao = require('./transacao');

class Conta extends Transacao {
    constructor(valor, descricao, vencimento) {
        super(valor, descricao);
        this._vencimento = vencimento;
        this._id = id;
    }
    getVencimento() {
        return this._vencimento;
    }
    setVencimento(vencimento) {
        this._vencimento = vencimento;
    }
    getValor() {
        return super.getValor() + 10;
    }
    informacao() {
        return `${super.informacao()}\nVencimento: ${this.getVencimento()}`;
    }
}

module.exports = Conta;