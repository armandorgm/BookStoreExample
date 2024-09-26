# Desarrollo de una Aplicación de Lista de Libros

El objetivo de esta prueba es diseñar e implementar una pequeña aplicación web de lista de libros utilizando las herramientas indicadas.
 
Este proyecto busca probar tus habilidades en el manejo de interacciones con el usuario, gestión del estado, filtrado de datos y la estructuración del código.

![test-book-list.jpeg](https://public.smartway.com.ar/images-public/test-book-list.jpeg)

## Inicio y entrega del proyecto

- Clonar el repositorio en tu computadora. 
- Realizar el trabajo encomendado. 
- Pushear los cambios al finalizar el desarrollo en este mismo repositorio. 

## Contexto

Como Editorial estamos buscando ofrecerle al público una forma de visualizar el catálogo de libros, perimitiendo guardarlos en una lista de lectura.

Es importante que tengas en cuenta: 

- Es requisito excluyente utilizar Next.js v 14
- La aplicación debe poder ser utilizada por usuarios sin muchos conocimientos técnicos y es necesario que sea agradable a la vista.
- En esta etapa no es necesario que se adapte a mobile pero de hacerlo será tenido en cuenta. 


## API REST para obtener los libros y login + token

Dentro del proyecto, en la carpeta raíz, encontrarás un directorio denominado api-books, el mismo contiene el servicio de backend tipo API REST que deberás utilizar para consumir los datos en el frontend. Para obtener la documentación de los endpoints y el instructivo para levantar dicho servicio ver el README.md que encontrarás en el mismo directorio. 


## Requisitos

### Next boilerplate

Crear una aplicación Next.js versión 14 para incorporar las siguientes funcionalidades: 


### Funcionalidad

1. **Página de login simple**: Desarrollar página de login con usuario y clave (deben ser los que figuran en la api-books), luego del login ok guardar en local storage el token.

2. **Visualización de Libros Disponibles**: La aplicación debe mostrar una lista de libros disponibles que el usuario pueda revisar, solo puede acceder a esta sección luego de realizar el login y teniendo token en local storage (el token debe enviarse en las peticiones como se indica en la api-books).

3. **Creación de Lista de Lectura**: El usuario debe ser capaz de crear una lista de lectura a partir de los libros disponibles. En la UI debe quedar claro qué libros están en la lista de lectura y cuáles no. También debe ser posible mover un libro de la lista de lectura a la lista de disponibles.

4. **Filtrado de Libros por Género**: Los usuarios deben poder filtrar la lista de libros disponibles por género, y se mostrará un contador con el número de libros disponibles, el número de libros en la lista de lectura y el número de libros disponibles en el género seleccionado.

5. **Sincronización de Estado**: Debe haber una sincronización del estado global que refleje el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos debe actualizarse en consecuencia.

6. **Persistencia de Datos**: La aplicación debe persistir los datos de la lista de lectura en el almacenamiento local del navegador (localStorage API). Al recargar la página, la lista de lectura debe mantenerse.

7. **Sincronización entre pestañas**: Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña deben reflejarse en la otra. Sin necesidad de usar Backend.


## Consejos sobre el código

1. **Estructura del código**: El código debe estar bien organizado y fácil de leer.

2. **Semántica HTML**: El HTML debe ser semántico y accesible.

3. **Pensando en equipo**: Prepara tu proyecto pensando que cualquier persona de tu equipo puede tener que trabajar en él en el futuro. (scripts en el package.json, mínima documentación en el README, comentarios en el código si es necesario, etc)

4. **Formatea tu código**: Asegúrate de que tu código está formateado de forma consistente. Puedes usar Prettier o cualquier otra herramienta que te guste.


## Desafíos adicionales

**¿Quieres ir más allá?** Estos son algunos desafíos adicionales que puedes intentar:

- Implementar una funcionalidad de búsqueda en la lista de libros disponibles.
- Añade un nuevo filtro para filtrar los libros por número de páginas.
- Permitir la reorganización de los libros en la lista de lectura por prioridad.
- Haz que tu diseño sea responsive.
- Dockerizar la app. 

## Entrevista

Si pasas a la siguiente fase, te pediremos que hagas una entrevista con nosotros. Durante la entrevista, te pediremos que expliques tu código y que hagas algunos cambios en el mismo.

- Nos tendrás que explicar el código que has escrito y las decisiones que has tomado.

Buena suerte y ¡diviértete programando!
