interface Pessoa {
  nome: string,
  idade: number,
  profissao?: string
}

const pessoa: Pessoa = {
  nome: 'Arthur',
  idade: 13
}

const outraPessoa: Pessoa = {
  nome: 'Paulo',
  idade: 25,
  profissao: 'Dev'
}
//declaracao com Pessoa[]
const arrayPessoa: Pessoa[] = []

//declaracao com Array<Pessoa>
const arrayPessoa2: Array<Pessoa> = []

const arrayNum: number[] = [1,2,3]

const arrayString: Array<string> =['1', '2', '3']


console.log(pessoa);
console.log(outraPessoa);
