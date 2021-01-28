import { Book } from './classes';
import { listaLibros } from '../index';

const btn         = document.querySelector( '.btn' );
const inputs      = document.querySelectorAll( 'input' );
const divContent  = document.querySelector('.content');
const divAviso    = document.querySelector('.prod-change');
const pAviso      = document.querySelector('#prod-p');


export const agregarHTML = ({ name, price, year, id }, noCargaNueva=true)=>{

    const html = `<div class="prod-content" id=${ id }>
                    <p><strong>Product Name: </strong>${name} <strong>Product Price: </strong>$${ price } <strong>Product Year: </strong>${ year }</p>
                    <button class="btn-prod">Delete</button>
                 </div> `;  
    

    const div = document.createElement('div');
    div.innerHTML = html;
    divContent.appendChild( div.firstChild );

    noCargaNueva && manejoDivAviso( true );

};

const manejoDivAviso = ( bool )=>{

    const set =( clase, mensaje )=>{
        
        divAviso.classList.add( clase )
        pAviso.innerText = mensaje;
        divAviso.classList.toggle( 'hide' );

        setTimeout(() => {
            divAviso.classList.toggle('hide');
            divAviso.classList.remove( clase );
        }, 1500);  

    };

    bool ? 
        set( 'blue', 'Product Added Succesfully' ):
        set( 'green', 'Product Deleted Succesfully' );

};



btn.addEventListener( 'click', event => {

    event.preventDefault()       
    const inputValues = ( Array.from( inputs ) ).map( input => input.value ); 
    
    if(inputValues.find( value => value === "" ) !== ""){
        inputs.forEach( input => input.value = '' );    
        const book = new Book( ...inputValues );          
        listaLibros.agregarLibro( book );
        agregarHTML( book );
    }    

} );

divContent.addEventListener('click', event =>{        

    if ( event.target.innerText === 'Delete' ){

        const nodoAEliminar = event.target.parentNode;
        divContent.removeChild( nodoAEliminar );
        listaLibros.eliminarLibro( event.target.parentNode.id );
        manejoDivAviso( false );

    }

});
