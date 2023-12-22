const Transacao = require('./src/transacao');
const Conta = require('./src/conta');
const Imposto = require('./src/imposto');
const Pagamento = require('./src/pagamento');
const Salario = require('./src/salario');
const Despesa = require('./src/despesa');
const ProcessadorTransacoes = require("./src/processador-transacoes");

const transacao_obj = new Transacao(10, 'transação teste');
const conta_obj = new Conta(1400, 'João', '2024-03-15');
const imposto_obj = new Imposto(560.90, 'para joao', 'Imposto de Renda');
const pagamento_obj = new Pagamento(15.50, 'lanche', '2023-12-22');
const salario_obj = new Salario(2500, 'professor', .10);
const despesa_obj = new Despesa(300.20, 'Agiota', 'aberta');
const processador_obj = new ProcessadorTransacoes();

function testeTransacao() {}

function testeConta() {}

function testeImposto() {}

function testePagamento() {}

function testeSalario() {}

function testeDespesa() {}

function testeProcessador() {}