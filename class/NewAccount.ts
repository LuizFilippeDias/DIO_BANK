import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount{


    setDeposit10= (deposit: number): void => {
        if (this.getValidateStatus()) {
           const depositAmount = deposit * 10
           this.setDeposit(depositAmount)
           console.log(`Depósito de ${depositAmount} realizado!`)
        } else {
            throw new Error('Conta inválida');
        }
    }

    getDeposit10 = (): void =>{
        const balance = this.getBalance()
        console.log(`Você depositou ${balance}`)
    }
}