export class Pais {
    id: number;
    name: string;
    formation_year: number;
    capital: string;
    description: string;
    flag: string;

    constructor (
        Nid: number,
        Nname: string,
        Nformation_year: number,
        Ncapital: string,
        Ndescription: string,
        Nflag: string
    ) {
        this.id = Nid;
        this.name = Nname;
        this.formation_year = Nformation_year;
        this.capital = Ncapital;
        this.description = Ndescription;
        this.flag = Nflag;
    }
}