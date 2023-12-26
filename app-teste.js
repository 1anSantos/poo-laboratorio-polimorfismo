const Transacao = require('./src/transacao');
const Conta = require('./src/conta');
const Imposto = require('./src/imposto');
const Pagamento = require('./src/pagamento');
const Salario = require('./src/salario');
const Despesa = require('./src/despesa');
const ProcessadorTransacoes = require("./src/processador-transacoes");

const transacao_obj = new Transacao(10, 'transação teste');
const conta_obj = new Conta(1400, 'João', '2024-03-15');
const imposto_obj = new Imposto(560.90, 'para João', 'Imposto de Renda');
const pagamento_obj = new Pagamento(15.50, 'lanche', '2023-12-22');
const salario_obj = new Salario(2500, 'professor', 10);
const despesa_obj = new Despesa(300.20, 'Agiota', 'Aberta');
const processador_obj = new ProcessadorTransacoes();

function testeGeral(obj, new_valor, new_desc) {
  console.log('\n' + obj.informacao());
  obj.setDescricao(new_desc);
  obj.setValor(new_valor);
}

function testeTransacao() {
  testeGeral(transacao_obj, 15, 'descrição alterada');
  console.log('------');
  console.log(transacao_obj.informacao());
}

function testeConta() {
  testeGeral(conta_obj, 1200, 'Pedro');
  conta_obj.setVencimento('2024-06-12')
  console.log('------');
  console.log(conta_obj.informacao());
}

function testeImposto() {
  testeGeral(imposto_obj, 720.50, 'para Pedro');
  imposto_obj.setTipo('Imposto de Vida');
  console.log('------');
  console.log(imposto_obj.informacao());
}

function testePagamento() {
  testeGeral(pagamento_obj, 13.75, 'restaurante');
  pagamento_obj.setData('2023-12-21');
  console.log('------');
  console.log(pagamento_obj.informacao());
}

function testeSalario() {
  testeGeral(salario_obj, 2725, 'funcionário');
  salario_obj.setBonificacao(40);
  console.log('------');
  console.log(salario_obj.informacao());
}

function testeDespesa() {
  testeGeral(despesa_obj, 404, 'Agiota Polonês');
  despesa_obj.setStatus('Pendente');
  console.log('------');
  console.log(despesa_obj.informacao());
}

function testeProcessador() {
  console.log(`\nDespesas do Mês:`, processador_obj.getTotalDespesasDoMes());
  processador_obj.processar(transacao_obj); // 10 ou 15
  processador_obj.processar(conta_obj);     // 1400 ou 1200
  processador_obj.processar(imposto_obj);   // 560,90 ou 720,50
  processador_obj.processar(pagamento_obj); // 15,50 ou 13,75
  processador_obj.processar(salario_obj);   // 2510 ou 2765
  processador_obj.processar(despesa_obj);   // 300.20 ou 280
  console.log(`Despesas do Mês:`, processador_obj.getTotalDespesasDoMes());
}

testeTransacao()
testeConta()
testeDespesa()
testeImposto()
testePagamento()
testeSalario()
testeProcessador()