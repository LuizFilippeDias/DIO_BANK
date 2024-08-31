export abstract class DioAccount {
    private name: string = 'Luiz'
    private readonly accountNumber: number = 23
    private balance: number = 0
    private status: boolean = true


    getName = (): string => {
       return this.name
    }

    getAccountNumber(): number {
        return this.accountNumber
    }

    setBalance = (balance: number): number =>{
        this.balance = balance
        return this.balance
    }

    getBalance = (): number => {
        return this.balance
    }

    setDeposit = (deposit: number): void => {
        if (this.validateStatus()) {
            this.balance += deposit;
            console.log(`Depósito de ${deposit} realizado com sucesso!`);
        } else {
            throw new Error('Conta inválida')
        }
    }

    getDeposit = (): number => {
        return this.balance
    }

    withdraw = (amount: number): void => {
        if (this.validateStatus()) {
            if (this.balance >= amount) {
                this.balance -= amount
                console.log(`Você sacou ${amount}`)
            } else {
                console.log('Saldo insuficiente')
            }
        } else {
            throw new Error('Conta inválida')
        }
    }

    private validateStatus = (): boolean => {
        if(this.status){
            return this.status
        }

        throw new Error('Conta inválida')
    }

    getValidateStatus = (): boolean =>{
        return this.validateStatus()
    }

    setLoan(loan: number): void {
        if (this.validateStatus()) {
            this.balance += loan
            
        }
    }

    setDeposit10= (deposit: number): void => {
        if (this.validateStatus()) {
           const depositAmount = deposit * 10
           this.setDeposit(depositAmount)
           console.log(`Depósito de ${depositAmount} realizado!`)
        } else {
            throw new Error('Conta inválida');
        }
    }
    
}