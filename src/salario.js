const Transacao = require('./transacao');

class Salario extends Transacao {
    constructor(valor, descricao, bonificacao) {
        super(valor, descricao);
        this._bonificacao = bonificacao;
    }
    getBonificacao(){
        return this._bonificacao;
    }
    setBonificacao() {
        this._bonificacao = bonificacao;
    }
    getValor() {
        return super.getValor() + this._bonificacao;
    }
    informacao() {
        return `${super.informacao()}\nBonificacao: ${this.getBonificacao()}`;
    }
}

module.exports = Salario;