export abstract class DioAccount {
  name: string
  accountNumber: number
  balance: number = 0

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
    
  }

  deposit = ():void => {
    console.log('Você Depositou')
  }

  withdraw = ():void => {
    console.log('Você Sacou')
  }

  getBalance = ():void => {
    console.log(this.balance);
    
  }
}