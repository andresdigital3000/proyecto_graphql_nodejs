import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import personas from './queries/personas';
import persona from './queries/persona';
import carros from './queries/carros';
import addPersona from './mutations/addPersona';


const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Rootquery',
        fields: () => ({
            ...personas,
            ...persona,
            ...carros
        })
    }),

    mutation: new GraphQLObjectType({
        name: 'RootMutation',
        fields: () => ({
            ...addPersona  
        })
    })
});

export default schema;