import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLInputObjectType, GraphQLList } from "graphql";
import { Persona } from './Persona';
import { fakeDatabase } from '../../FakeDatabase';

export const Carro = new GraphQLObjectType({
    name: "Carro",
    description: "Vehiculo de transporte",
    fields: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        marca: { type: GraphQLString },
        propietario: {
            type: Persona,
            resolve: (source) => {
                return fakeDatabase.getDataItem("personas", source.personId)
            }
        }
    }
});