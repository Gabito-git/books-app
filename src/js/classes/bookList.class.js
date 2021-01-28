import { Book } from ".";

export class BookList{

    constructor(){

        this.cargarLocalStorage();

    }

    agregarLibro( book ){

        this.bookList.push( book );
        this.guardarLocalBooks();

    }

    eliminarLibro( id ){

        this.bookList = this.bookList.filter( book => book.id != id );
        this.guardarLocalBooks();

    };

    guardarLocalBooks(){

        localStorage.setItem('books', JSON.stringify( this.bookList ));

    }

    cargarLocalStorage(){   
        
        localStorage.getItem('books') ?
            this.bookList = JSON.parse(localStorage.getItem('books')) :
            [];         

    }

}