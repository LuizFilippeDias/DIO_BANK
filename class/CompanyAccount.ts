import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

    setLoan = (loan: number): void => {
        if (this.getValidateStatus()) {
            super.setLoan(loan)
            console.log(`Você pegou um empréstimo de ${loan}`)
        }
    }

    getLoan = (): void => {
        console.log(`Saldo atual: ${this.getBalance()}`);
    }
}