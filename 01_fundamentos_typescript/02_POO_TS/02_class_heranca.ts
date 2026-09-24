abstract class Account {
  name: string
  accountNumber: number
  balance: number = 0

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

  getBalance = () => {
    console.log(this.balance);
    
  }
}

class PeopleAccount extends Account {
  doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name,accountNumber ) 
    this.doc_id = doc_id
    
  }
}


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Tricia', 234) 
console.log(peopleAccount);
