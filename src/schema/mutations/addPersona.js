import { fakeDatabase } from '../../FakeDatabase';
import { Persona, PersonaInputType } from '../types/Persona';

export default {
    addPersona: {
        type: Persona,
        description: "Crear una nueva persona",
        args: {
            persona: {type: PersonaInputType }
        },
        resolve: function(root, {persona}) {
            return fakeDatabase.addPersona(persona);
        }
    }
}
