export class Items{
    name: string;
    status: boolean;

    constructor(public nametmp: string, public statustmp: boolean){
        this.name = nametmp;
        this.status = statustmp;
    }
}