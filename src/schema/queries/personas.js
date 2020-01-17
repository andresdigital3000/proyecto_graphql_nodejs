import { Persona } from "../types/Persona";
import { GraphQLList } from "graphql";
import { fakeDatabase } from "../../FakeDatabase";

export default {
    personas: {
        type: new GraphQLList(Persona),
        description: "Obtener listado de personas",
        args: { },
        resolve: function () {
            return fakeDatabase.getData("personas");
        }
    }
}