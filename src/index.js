// import { getChiste } from './js/http-provider';
// import { init } from './js/chistes-page';
// import { getUsuarios } from './js/http-provider';
// import { init } from './js/usuarios-page';
import * as usersService from './js/users.provider';
import { init } from './js/archivos.page';

import './styles.css';


// getChiste().then( console.log );
// getUsuarios().then(console.log);
// init();

usersService.getUsuario(1).then( console.log );

usersService.crearUsuario({
   name: 'Ivan',
   job: 'Developer'
}).then( console.log )


usersService.actualizarUsuario( 1, {
   name: 'Pepe',
   job: 'programador'
}).then( console.log )

usersService.borrarUsuario(1).then( console.log );


init();




