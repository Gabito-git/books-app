
export class Book{
    
    static fromJSON({ name, price, year, id }){

        const tempBook = new Book( name, price, year );
        tempBook.id    = id;

        return tempBook;

    }

    constructor( name, price, year ){

        this.name = name;
        this.price = price;
        this.year  = year;
        this.id    = new Date().getTime();

    }

}