const Transacao = require('./transacao');

class Despesa extends Transacao {
    constructor(valor, descricao, status) {
        super(valor, descricao);
        this._status = status;
    }
    getStatus() {
        return this._status;
    }
    setStatus(status) {
        this._status = status;
    }
    informacao() {
        return `${super.informacao()}\nStatus: ${this.getStatus()}`;
    }
}

module.exports = Despesa;