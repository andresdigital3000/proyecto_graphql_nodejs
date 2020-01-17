import { Persona } from './schema/types/Persona';
import carros from './schema/queries/carros';

class FakeDatabase {
    constructor () {
        this.database = './concesionario.db'
        this.personas = [];
        this.cars = [];
        console.log("Se genero la instancia de FakeDatabase");
    }

    getData(tabla) {
        console.log("getData " + tabla);
        const sqlite3 = require('sqlite3').verbose();
        return new Promise((resolve, reject) => {
            const db = new sqlite3.Database('./concesionario.db');
            let sql = `SELECT * FROM ` + tabla;
            //console.log("sql: " + sql);
            const queries = [];
            db.each(sql, {}, (err, row) => {
                //console.log("registro: " + row.id + row.nombre);
                if (err) {
                    reject(err); // optional: you might choose to swallow errors.
                } else {
                    queries.push(row); // accumulate the data
                }
            }, (err, n) => {
                if (err) {
                    reject(err); // optional: again, you might choose to swallow this error.
                } else {
                    resolve(queries); // resolve the promise
                }
            }) ;
            db.close();
        })
    }


    getDataItem(tabla, id) {
        console.log("getDataItem " + tabla + id);
        const sqlite3 = require('sqlite3').verbose();       
        return new Promise((resolve, reject) => {
            // open the database
            const db = new sqlite3.Database(this.database);
            //let persona = new Object();
            let sql = `SELECT * FROM ` + tabla + ` WHERE id  = ?`;
            const persona = new Object();
            db.get(sql, [id], (err, row) => {
                console.log(row.id, row.nombre);
                if (err)
                    reject(err);
                else
                    resolve(row);
                });
                db.close();
            });
    } 

    //Este metodo es un mock
    getCarrosForPerson(personId) {
        
        var cars = [
            { id: 1, marca: 'Mock BMW Z4', personId: 1 },
            { id: 1, marca: 'Mock Porche', personId: 1 },
        ];
        return cars.filter((carrito) => {
            return carrito.id === personId;
        });
    }


    
    //WRITE OPERATIONS
    addPersona(persona) {
        const sqlite3 = require('sqlite3').verbose();    
        // open the database
        let db = new sqlite3.Database('./concesionario.db');
        
        //let persona = new Object();
        let sql = `INSERT INTO personas (id, nombre, ocupacion )
                    VALUES (?, ?, ?)`;
        db.run(sql, [persona.id, persona.nombre, persona.ocupacion]);
        // close the database connection
        db.close();
    }
}
  
export const fakeDatabase = new FakeDatabase();
//READ OPERATIONS
//fakeDatabase.getData("personas");
//fakeDatabase.getDataItem("personas", 4);
//fakeDatabase.getCarrosForPerson(1);

/*
//WRITE OPERATIONS
//Insert
let persona = new Object();
persona.id = `4`;
persona.nombre = `Pedro Cardenas`;
persona.ocupacion = `presidente`; 
fakeDatabase.addPersona(persona)*/
