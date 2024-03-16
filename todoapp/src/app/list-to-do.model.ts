import { generate } from "rxjs";

export class ListToDo{
    id: number;
    name: string;
    status: number;
    isChecked : boolean;

    constructor(public Id: number,public Name: string , public Status: number){
        this.id = Id;
        this.name = Name;
        this.status = Status;
        this.isChecked = false;
    }
}