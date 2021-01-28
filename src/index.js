
import './styles.css';
import { BookList } from './js/classes/bookList.class';
import { agregarHTML } from './js/componentes';


export const listaLibros = new BookList();

listaLibros.bookList.forEach( book => {
    agregarHTML( book, false );
} )
