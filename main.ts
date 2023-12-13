class Conta {
  private _titular: string;
  private _saldo: number;

  constructor(titular: string) {
    this._titular = titular;
    this._saldo = 0;
  }

  get titular(): string {
    return this._titular;
  }

  set titular(titular: string) {
    this._titular = titular;
  }

  get saldo(): number {
    return this._saldo;
  }

  public depositar(valor: number): void {
    if (valor > 0) {
      this._saldo = this._saldo + valor;
    }
  }

  public sacar(valor: number): void {
    if (valor > 0 && valor <= this._saldo) {
      this._saldo = this._saldo - valor;
    }
  }
}

class ContaCorrente extends Conta {
  public override sacar(valor: number): void {
    let acrescimo = (1 / 100) * valor;
    let valorTotal = valor + acrescimo;
    super.depositar(valorTotal);
  }
}

class ContaPoupanca extends Conta {
  public override depositar(valor: number): void {
    let acrescimo = (1 / 100) * valor;
    let valorTotal = valor + acrescimo;
    super.depositar(valorTotal);
  }
}

let conta1 = new Conta("Paulo");
let conta2 = new ContaCorrente("Vanderley");
let conta3 = new ContaPoupanca("Dill");

conta1.depositar(100);
conta1.sacar(10);
console.log(conta1.saldo);

conta2.depositar(200);
conta2.sacar(100);
console.log(conta2.saldo);

conta3.depositar(100);
conta3.sacar(50);
console.log(conta3.saldo);
