import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount {
    private doc_id: number;

    constructor(doc_id: number) {
        super()
        this.doc_id = doc_id
        
    }
}