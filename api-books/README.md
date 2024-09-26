# Iniciando el backend 

Para iniciar el backend deberás abrir una terminal y utilizar los siguientes comandos: 

npm install 

npm start 

Esto dejará el servicio corriendo en el puerto 3010 

# Endpoints

## Login para obtener token 

[POST]
http://localhost:3010/api/login

body JSON: 

{
    "user": "admin",
    "password": "admin"
}

Response: 

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...."
}


## Obtener libros

[GET]
http://localhost:3010/api/books

[Authorization]
Bearer token

*Se debe enviar el token obtenido en el login como Authorization Bearer token.

Response: 

{
    "library": [
        {
            "book": {
                "title": "El Señor de los Anillos",
                "pages": 1200,
                "genre": "Fantasía",
                "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
                "synopsis": "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
                "year": 1954,
                "ISBN": "978-0618640157",
                "author": {
                    "name": "J.R.R. Tolkien",
                    "otherBooks": [
                        "El Hobbit",
                        "El Silmarillion"
                    ]
                }
            }
        },
    ]
}
