const sqlite3 = require('sqlite3');
/*const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });  
*/  
const db = new sqlite3.Database('concesionario.db');

db.serialize(() => {
    // create a new database table:
    db.run("CREATE TABLE personas (id INT, nombre TEXT, ocupacion TEXT)");
  
    // insert 3 rows of data:
    db.run("INSERT INTO personas VALUES (1, 'Oscar Blancarte', 'Desarrollador fullstack')");
    db.run("INSERT INTO personas VALUES (2, 'Carlos Raygoza', 'Lider tecnico')");
    db.run("INSERT INTO personas VALUES (3, 'Andres Bedoya', 'Arquitecto Software')");



    // create a new database table:
    db.run("CREATE TABLE carros (id INT, marca TEXT, personId INT)");
  
    // insert 3 rows of data:
    db.run("INSERT INTO carros VALUES (1, 'Ford Mustang', 1)");
    db.run("INSERT INTO carros VALUES (2, 'Chevrolet Camaro', 2)");
    db.run("INSERT INTO carros VALUES (3, 'Audi A4', 3)");
  
    console.log('Base de datos creada exitosamente concesionario.db');
  
    // print them out to confirm their contents:
    db.each("SELECT id, nombre, ocupacion FROM personas", (err, row) => {
        console.log(row.id + ": " + row.nombre + ' - ' + row.ocupacion);
    });
    db.each("SELECT id, marca, personId FROM carros", (err, row) => {
        console.log(row.id + ": " + row.marca + ' - ' + row.personId);
    });
  });
  
  db.close();