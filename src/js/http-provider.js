const jokerUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsers = 'https://reqres.in/api/users?page=2';
const cloudPReset = 'dkclka';
const CloudUrl = 'http://api.cloudinary.com/v1_1/acdcjhlkjchcd/upoad';
// GET
// fetch( jokerUrl ).then( res => res.json().then( data => console.log(data)) );

// fetch( jokerUrl )
//    .then( resp => resp.json() )
//    .then( ({id, value}) => console.log(id, value) );



const getChiste = async() => {

   try {
      const resp = await fetch( jokerUrl );
      
      if(!resp.ok) throw ( 'No se pudo realizar peticion') ;

      // return await resp.json();

      const { icon_url, id, value } =  await resp.json();

      return { value, id }

   }catch (err){

      // return {
      //    id: 'no se encontro nada'
      // }  

      throw err

   }
 

}

const getUsuarios = async () =>{
   
   const resp = await fetch(urlUsers);
   const {data: usuarios} = await resp.json();
   
   return usuarios;

}

//Archivo: File
const subirImagen = async(archivoSubir) =>{

   const formData = new FormData();
   formData.append('upload_preset', cloudPReset );
   formData.append('file', archivoSubir );

   try {
      const resp = await fetch( CloudUrl, {
         method: 'POST',
         body: formData
      });

      if( resp.ok ) {
         const cloudResp = await resp.json();
         // console.log( cloudResp );
         return cloudPReset.secure_url;


      } else {

         throw await resp.json();
      }

   } catch(err) {
   
   throw err;

   }

}


export {
   getChiste,
   getUsuarios,
   subirImagen
}
