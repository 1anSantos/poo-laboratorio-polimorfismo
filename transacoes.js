// BASE
class Transacao {
    constructor(valor, descricao = "") {
        this._valor = valor;
        this._descricao = descricao;
    }
}

// HERANÇA
class Conta extends Transacao {
    constructor(valor, descricao, outros) {
        super(valor, descricao);
        this.outros = outros
    }
}

class Imposto extends Transacao {
    constructor(valor, descricao, outros) {
        super(valor, descricao);
    }
}

class Pagamento extends Transacao {
    constructor(valor, descricao, outros) {
        super(valor, descricao);
    }
}

class Salario extends Transacao {
    constructor(valor, descricao, outros) {
        super(valor, descricao);
    }
}

class Despesa extends Transacao {
    constructor(valor, descricao, outros) {
        super(valor, descricao);
    }
}

class ProcessadorTransacoes extends Transacao {
    constructor(valor, descricao, outros) {
        super(valor, descricao);
    }
}

// EXPORTAÇÃO
// Forma 1
module.exports = {
    Transacao,
    Conta,
    Imposto,
    Pagamento,
    Salario,
    Despesa,
    ProcessadorTransacoes
}

//* Forma 2
// exports.Transacao = Transacao;
// exports.Conta = Conta;
// exports.Imposto = Imposto;
// exports.Pagamento = Pagamento;
// exports.Salario = Salario;
// exports.Despesa = Despesa;
// exports.ProcessadorTransacoes = ProcessadorTransacoes;