import { todoList } from "..";
import { Todo, TodoList } from "../classes";


// ref Html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const aFilters = document.querySelectorAll('.filtro');

export const crearTodoHtml = ( todo )=> {

   const { tarea, completado, id } = todo;

   const htmlTodo = `
      <li class="${ ( completado ) ? 'completed' : '' }" data-id=" ${ id } ">
         <div class="view">
            <input class="toggle" type="checkbox" ${ (completado) ? 'checked' : '' }>
            <label>${tarea}</label>
            <button class="destroy"></button>
         </div>
         <input class="edit" value="Create a TodoMVC template">
      </li>
   `

   const div = document.createElement('div');
   div.innerHTML = htmlTodo;

   divTodoList.append( div.firstElementChild );


   return div.firstElementChild;

}


//eventos

txtInput.addEventListener('keyup', ( event )=>{
  
   if( event.keyCode === 13 && txtInput.value.length > 0  ) {
      console.log(txtInput.value);
      const nuevoTodo = new Todo( txtInput.value );
      todoList.nuevoTodo( nuevoTodo );
      txtInput.value = '';

      crearTodoHtml ( nuevoTodo )
   }
});

divTodoList.addEventListener('click', (event)=>{
   
   const nombreElemento = event.target.localName;
   const todoElemento = event.target.parentElement.parentElement;

   const todoId = todoElemento.getAttribute('data-id');

   if( nombreElemento.includes('input') ){
      todoList.marcarCompletado( todoId );
      todoElemento.classList.toggle('completed');
   }

   if( nombreElemento.includes('button')){
      todoList.eliminarTodo( todoId );
      divTodoList.removeChild( todoElemento );
   }

});

btnBorrar.addEventListener('click', ()=>{
  
   todoList.eliminarCompletados();
   for ( let i = divTodoList.children.length - 1; i>=0; i-- ){

      const elemento = divTodoList.children[i];
      console.log(elemento);
      if( elemento.classList.contains('completed') ){
         console.log('borrando');
         divTodoList.removeChild(elemento)
      }
      
   }

});

ulFilters.addEventListener('click', (evt)=>{
   console.log(evt.target.text);
   const filtro = event.target.text;

   if( !filtro ){ return };

   aFilters.forEach(element => { 
      element.classList.remove('selected');  
      event.target.classList.add('selected');
   });

   // console.log('>>>>>', event.target);

   for( const elemento of divTodoList.children ){
      console.log(elemento);
      elemento.classList.remove('hidden');
      const completado = elemento.classList.contains('completed');

      switch( filtro ){
         case 'Pendientes':
            if( completado ){
               elemento.classList.add('hidden');
            }
         break;
         
         case 'Completados':
            if( !completado ){
               elemento.classList.add('hidden');
            }
         break;

      }
   }

})

