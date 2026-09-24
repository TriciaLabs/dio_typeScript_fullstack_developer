import {PeopleAccount} from './class/PeopleAccount'
import {CompanyAccount} from './class/CompanyAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Tricia', 234) 
peopleAccount.deposit()
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount('Dio', 2099)
companyAccount.deposit()
console.log(companyAccount);
