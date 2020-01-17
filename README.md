# PROYECTO CURSO GRAPHQL
Lo puedes encontrar en www.centripio.io
Este proyecto es para complementar mi curso de graphql con node.js. Aqui explico los conceptos básicos de esta nueva tecnología. Sin duda esta tecnología entrará a suplir muchas de las deficiencias que tenemos hoy en día con REST API

Instalacion

- Instalar dependencias
  - Instalar node.js
    - Descargarlo e instalarlo de la pagina https://nodejs.org/
    - Si ya lo tienes instalado entonces
      - Verificar version: `npm -version`
      - Instalar ultimos paquetes `npm install -g npm@latest`
      - Limpiar cache para evitar que se cojan versiones locales ya instaladas. `npm cache clean --force`
      - Desactivar auditoria para evitar que conflictos con verificacion de paquetes `npm set audit false`
  - Instalar babel 
    `npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/plugin-proposal-object-rest-spread`
  - Ejecutar `node createDatabase` para crear la base de datos
  - Ejecutar `npm run build`
  - Probar el proyecto con GraphiQL en el puerto 4000. http://localhost:4000

