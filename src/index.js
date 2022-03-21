import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/component';



export const todoList = new TodoList();

// const tarea = new Todo( 'Aprender JavaScript')
// todoList.nuevoTodo( tarea )

// console.log(todoList);

// crearTodoHtml( tarea );

// console.log( todoList.todos );

todoList.todos.forEach( todo => crearTodoHtml( todo ) );
todoList.todos[0].imprimirClase();



