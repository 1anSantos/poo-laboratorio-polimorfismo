class ProcessadorTransacoes {
    constructor() {
        this._totalDespesasDoMes = 0;
    }
    getTotalDespesasDoMes() {
        return this._totalDespesasDoMes;
    }
    processar(transacao) {
        console.log(`-------\nProcessando: ${transacao.constructor.name}\n`+transacao.informacao());
        this._totalDespesasDoMes += transacao.getValor();
    }
}

module.exports = ProcessadorTransacoes;