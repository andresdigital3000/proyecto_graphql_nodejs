import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLInputObjectType, GraphQLNonNull } from "graphql";

export const Persona = new GraphQLObjectType({
    name: "Persona",
    description: "Persona propietaria de un carro",
    fields: () => ({
        id: { type: GraphQLInt},
        nombre: {type: GraphQLString},
        ocupacion : {type: GraphQLString},
        //Este metodo esta implementado como un mock. Si quieres puedes hacer tu propia version
        /*carros: {
            type: new GraphQLList(Carro),
            resolve: (source) => {
                return fakeDatabase.getCarrosForPerson(source.id)
            }
        }*/
    })
})

export const PersonaInputType = new GraphQLInputObjectType({
    name: 'PersonaInput',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        nombre: { type: new GraphQLNonNull(GraphQLString) },
        ocupacion: { type: new GraphQLNonNull(GraphQLString) }
    }
});