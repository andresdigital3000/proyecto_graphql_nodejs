import { graphql } from 'graphql';
import schema from './schema';
console.log("Hola Graphql");

/*
const query = `
    {
        personas {
            id, 
            nombre
        }
    }
`;
*/

/*
const query = `
     {
         persona(id: 1){
             nombre,
             carros {
                marca
            }
         }
     }
`;
*/


const query = `
     {
         carros{
             id,
             marca,
             propietario {
                 id
             }
         }
     }
`;

graphql(schema, query).then(result => {
    console.log(JSON.stringify(result, null, 2));
}); 