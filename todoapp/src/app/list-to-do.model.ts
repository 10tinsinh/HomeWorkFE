export class ListToDo{
    name: string;
    status: number;

    constructor(public Name: string , public Status: number){
        this.name = Name;
        this.status = Status;
    }
}