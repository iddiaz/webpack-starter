import { Todo } from "./todo.class";



export class TodoList {
   
   constructor(){
     
      // this.todos = [];
      this.cargarLocalStorage();

   }

   nuevoTodo( todo ) {
      this.todos.push(todo);
      this.guardarLocaleStorage();
   }

   eliminarTodo (id){

      this.todos = this.todos.filter( todo => todo.id != id );
      this.guardarLocaleStorage();

   }

   marcarCompletado( id ){

      for (const todo of this.todos){

         console.log(id, todo.id);

         if( todo.id == id) {
            todo.completado = !todo.completado;
            break;
         }
      }
      this.guardarLocaleStorage();

   }

   eliminarCompletados(){
      this.todos = this.todos.filter( todo => !todo.completado );
      this.guardarLocaleStorage();
      
   }
   
   guardarLocaleStorage(){
      
      localStorage.setItem( 'todos', JSON.stringify( this.todos ) );

   }

   cargarLocalStorage(){
      
      this.todos = ( localStorage.getItem('todos') )
         ? JSON.parse( localStorage.getItem('todos') )
         : [];

      this.todos = this.todos.map( obj => Todo.fromJson( obj ) );
     
   }

}