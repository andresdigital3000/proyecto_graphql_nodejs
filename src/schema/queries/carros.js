import { Carro } from "../types/Carro";
import { GraphQLList } from "graphql";
import { fakeDatabase } from "../../FakeDatabase";

export default {
    carros: {
        type: new GraphQLList(Carro),
        description: "Obtener listado de carros",
        args: { },
        resolve: function () {
            return fakeDatabase.getData("carros");
        }

    }

}