import { listaLibros } from "../../index";

export class Book{

    constructor( [name, price, year ]){

        this.name = name;
        this.price = price;
        this.year  = year;
        this.id    = new Date().getTime();

    }

}