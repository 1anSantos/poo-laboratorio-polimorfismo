class ProcessadorTransacoes {
    constructor() {
        this._totalDespesasDoMes = 0;
    }
    getTotalDespesasDoMes() {
        return this._totalDespesasDoMes;
    }
    processar(transacao) {
        transacao.informacao();
        this._totalDespesasDoMes += transacao.getValor();
    }
}

module.exports = ProcessadorTransacoes;