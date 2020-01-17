import { Persona } from "../types/Persona";
import { GraphQLNonNull, GraphQLString, GraphQLInt } from "graphql";
import { fakeDatabase } from "../../FakeDatabase";

export default {
    persona: {
        type: Persona,
        description: "Obtener una persona x id",
        args: {
            id: {type: new GraphQLNonNull(GraphQLInt)}
        },
        resolve: function(parent, args){
            return fakeDatabase.getDataItem("personas", args.id);
        }
    }
}