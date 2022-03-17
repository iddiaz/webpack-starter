import '../css/components.css';
import webpackLogo from '../assets/img/webpack-logo.png'

console.log('componentes load')

const nombre = 'Webpack builder scafolding';



export const saludar = () =>{

   // alert('hola desde componentes!');

   const h2 = document.createElement('h2');
   console.log(h2);
   h2.innerText = `${nombre}`;   
   document.body.append(h2);

   const img = document.createElement('img');
   img.src = webpackLogo;
   document.body.append( img );

}
