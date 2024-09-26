const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 3010;
const secretKey = '33Fgfgghggh-9ooplLd!-2223llPPomw3'; 

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const token = bearer[1];
    jwt.verify(token, secretKey, (err, authData) => {
      if (err) {
        res.status(403).json({ error: 'Token inválido' });
      } else {
        req.authData = authData;
        next();
      }
    });
  } else {
    res.status(403).json({ error: 'Token inválido' });
  }
};

// CORS
app.use(cors());

app.use(express.json());

// GET
app.get('/api/books', verifyToken, (req, res) => {
  const library =  [
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
        {
          "book": {
              "title": "Juego de Tronos",
              "pages": 694,
              "genre": "Fantasía",
              "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg",
              "synopsis": "En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.",
              "year": 1996,
              "ISBN": "978-0553103540",
              "author": {
                  "name": "George R. R. Martin",
                  "otherBooks": [
                      "Choque de Reyes",
                      "Tormenta de Espadas",
                      "Festín de Cuervos"
                  ]
              }
          }
      },
      {
        "book": {
            "title": "Harry Potter y la piedra filosofal",
            "pages": 223,
            "genre": "Fantasía",
            "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg",
            "synopsis": "Un niño descubre que es un mago y comienza una aventura en una escuela de magia.",
            "year": 1997,
            "ISBN": "978-0747532699",
            "author": {
                "name": "J.K. Rowling",
                "otherBooks": [
                    "Harry Potter y la cámara secreta",
                    "Harry Potter y el prisionero de Azkaban",
                    "Harry Potter y el cáliz de fuego"
                ]
            }
        }
    },
    {
      "book": {
          "title": "1984",
          "pages": 328,
          "genre": "Ciencia ficción",
          "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
          "synopsis": "Una inquietante visión de un futuro distópico y totalitario.",
          "year": 1949,
          "ISBN": "978-0451524935",
          "author": {
              "name": "George Orwell",
              "otherBooks": [
                  "Rebelión en la granja"
              ]
          }
      }
  },
    {
      "book": {
          "title": "Apocalipsis Zombie",
          "pages": 444,
          "genre": "Zombies",
          "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1422626176i/24762432.jpg",
          "synopsis": "Un gallego se queda en casa en pleno apocalipsis zombie y acaba casi salvando el mundo",
          "year": 2001,
          "ISBN": "978-4444532611",
          "author": {
              "name": "Manel Loreiro",
              "otherBooks": []
          }
      }
  },
  {
    "book": {
        "title": "Dune",
        "pages": 412,
        "genre": "Ciencia ficción",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
        "synopsis": "En el inhóspito planeta desértico de Arrakis, una gran intriga política y familiar se desarrolla.",
        "year": 1965,
        "ISBN": "978-0441172719",
        "author": {
            "name": "Frank Herbert",
            "otherBooks": [
                "El mesías de Dune",
                "Hijos de Dune"
            ]
        }
    }
  },
  {
    "book": {
        "title": "La Guía del Autoestopista Galáctico",
        "pages": 216,
        "genre": "Ciencia ficción",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653311117i/6691227.jpg",
        "synopsis": "Un viaje absurdo y cómico por el espacio, con toallas.",
        "year": 1979,
        "ISBN": "978-0345391803",
        "author": {
            "name": "Douglas Adams",
            "otherBooks": [
                "El restaurante del fin del mundo",
                "La vida, el universo y todo lo demás"
            ]
        }
    }
  },
  {
    "book": {
        "title": "Neuromante",
        "pages": 271,
        "genre": "Ciencia ficción",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554437249i/6088007.jpg",
        "synopsis": "Una visión profética de la ciber-realidad y la inteligencia artificial.",
        "year": 1984,
        "ISBN": "978-0441569595",
        "author": {
            "name": "William Gibson",
            "otherBooks": [
                "Conde Cero",
                "Mona Lisa Acelerada"
            ]
        }
    }
  },
  {
    "book": {
        "title": "Fahrenheit 451",
        "pages": 249,
        "genre": "Ciencia ficción",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg",
        "synopsis": "Una sociedad futura donde los libros están prohibidos y 'bomberos' queman cualquier libro que encuentren.",
        "year": 1953,
        "ISBN": "978-1451673319",
        "author": {
            "name": "Ray Bradbury",
            "otherBooks": [
                "Crónicas marcianas",
                "El hombre ilustrado"
            ]
        }
    }
  },
    {
      "book": {
          "title": "El resplandor",
          "pages": 688,
          "genre": "Terror",
          "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641398308i/60038757.jpg",
          "synopsis": "Una familia se muda a un hotel aislado para el invierno donde una presencia siniestra influye en el padre hacia la violencia.",
          "year": 1977,
          "ISBN": "978-0307743657",
          "author": {
              "name": "Stephen King",
              "otherBooks": [
                  "Carrie",
                  "It"
              ]
          }
      }
  },
  {
      "book": {
          "title": "Drácula",
          "pages": 418,
          "genre": "Terror",
          "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg",
          "synopsis": "La historia del infame conde Drácula y su intento de mudarse de Transilvania a Inglaterra.",
          "year": 1897,
          "ISBN": "978-0486411095",
          "author": {
              "name": "Bram Stoker",
              "otherBooks": [
                  "La joya de las siete estrellas",
                  "La madriguera del gusano blanco"
              ]
          }
      }
  },
  {
      "book": {
          "title": "Frankenstein",
          "pages": 280,
          "genre": "Terror",
          "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669159060i/63631742.jpg",
          "synopsis": "Un científico obsesionado crea una criatura viva a partir de partes de cuerpos robadas, con consecuencias desastrosas.",
          "year": 1818,
          "ISBN": "978-0486282114",
          "author": {
              "name": "Mary Shelley",
              "otherBooks": [
                  "El último hombre",
                  "Valperga"
              ]
          }
      }
  },
  {
    "book": {
        "title": "La llamada de Cthulhu",
        "pages": 43,
        "genre": "Terror",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1485924654i/34094154.jpg",
        "synopsis": "La historia de un monstruo ancestral que amenaza con revivir y dominar el mundo.",
        "year": 1928,
        "ISBN": "978-1542461690",
        "author": {
            "name": "H.P. Lovecraft",
            "otherBooks": [
                "El horror de Dunwich",
                "En las montañas de la locura"
            ]
        }
      }
    }
  ]
  
  res.json({ library });

});

// Login
app.post('/api/login', (req, res) => {

    try {
        console.log(req.body)
        const { user, password } = req.body;

        if(user !== 'admin' || password !== 'admin') return res.status(403).json({ error: 'Credenciales incorrectas' });
        
        const userData = {
            id: 1,
            username: user
        };

        jwt.sign({ userData }, secretKey, (err, token) => {
            res.json({ token });
        });
    } catch (error) {
        res.status(422).json({ error: 'Campos incorrectos.' });
        console.log(error);
    }

  
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});



// Este servicio es solo con fines didácticos NO es productivo.
// Smartway SRL