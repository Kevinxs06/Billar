// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const mysql = require('mysql2');

// Crear la app
const app = express();

// Middlewares
app.use(cors({
  origin: 'http://localhost:3000', // Puerto donde corre tu React
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'clave-secreta-billar-2024',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Para desarrollo local
}));

// Configuracion bd
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'billar'
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conectado a la base de datos MySQL');
  }
});

// Ruta base de prueba
app.get('/', (req, res) => {
  res.send('Backend de Club de Billar funcionando ✅');
});

// Ruta de registro
app.post('/registro', (req, res) => {
  const { nombre, correo, contraseña } = req.body;
  console.log("Datos recibidos para registro:", nombre, correo);

  const query = 'INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)';
  connection.query(query, [nombre, correo, contraseña], (error, results) => {
    if (error) {
      console.error('Error al registrar usuario:', error);
      res.status(500).json({ mensaje: 'Error al registrar usuario' });
    } else {
      console.log('Usuario registrado con ID:', results.insertId);
      res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
    }
  });
});

// Ruta de login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Reemplaza esto con tu lógica real de base de datos
  if (email === 'dmancera@gmail.com' && password === '1234') {
    res.json({
      success: true,
      user: { nombre: 'Admin', email: 'admin@correo.com' }
    });
  } else {
    res.status(401).json({ success: false, mensaje: 'Credenciales incorrectas' });
  }
});

app.listen(3001, () => {
  console.log('Servidor corriendo en puerto 3001');
});