import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { NewAccount } from './class/NewAccount'

const peopleAccount = new PeopleAccount(24)
const companyAccount = new CompanyAccount()
const newAccount = new NewAccount()

// Teste PeopleAccount
console.log('PeopleAccount:')
peopleAccount.setDeposit(400)
console.log(`Saldo atual: ${peopleAccount.getBalance()}`)
console.log(`Nome: ${peopleAccount.getName()}`)

// Teste CompanyAccount
console.log('CompanyAccount:');
companyAccount.setDeposit(500);
companyAccount.setLoan(1000);
console.log(`Saldo após empréstimo: ${companyAccount.getBalance()}`);
companyAccount.getLoan();

// Teste NewAccount
console.log('NewAccount:');
newAccount.getDeposit10(); 
newAccount.setDeposit10(100); 