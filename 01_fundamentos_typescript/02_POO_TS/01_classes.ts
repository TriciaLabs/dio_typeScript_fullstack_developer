class Account {
  name: string
  accountNumber: number

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  deposit = () => {
    console.log('Você Depositou')
  }

  withdraw = () => {
    console.log('Você Sacou')
  }
}

const newAccount: Account = new Account('Tricia', 1)

console.log(newAccount);


const account: Account = new Account('Joao', 28)
account.deposit()
console.log(account);
