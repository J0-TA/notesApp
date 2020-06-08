// Seeds file that remove all DB entries and create 2 new users with a few notes entries each.

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

require('dotenv').config();

const mongoose = require("mongoose");
const Note = require("../models/Note");

mongoose
  .connect('mongodb://localhost/notesApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    startSeeding()
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

function startSeeding() {
  Note.deleteMany().then(() => {

    const notes = [{
        title: "Nota 1",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, laudantium nemo inventore eius assumenda nostrum eos cum deleniti incidunt autem, sunt quos dignissimos totam? Temporibus magnam eos sequi maxime laboriosam?",
        fav: false
      },
      {
        title: "Nota 2",
        content: "Aliquam porta massa at lectus posuere vulputate. Vestibulum bibendum facilisis sapien, at scelerisque nibh congue sit amet. Morbi ut nisl a turpis fermentum tincidunt. Duis sit amet nisi vel lectus ultricies lacinia. Proin non dapibus ipsum, sed volutpat quam. Donec tempus vestibulum felis eget tincidunt. Proin sagittis ornare sem, et venenatis ipsum vehicula ut.",
        fav: true
      },
      {
        title: "Notarl 1",
        content: "Lorem fistrum ese que llega no te digo trigo por no llamarte Rodrigor llevame al sircoo se calle ustée. Amatomaa jarl va usté muy cargadoo qué dise usteer a gramenawer no te digo trigo por no llamarte Rodrigor.",
        fav: true
      },
      {
        title: "Notarl 2",
        content: "Lorem fistrum laboris al ataquerl veniam incididunt. Occaecat sexuarl aliquip occaecat me cago en tus muelas enim sed labore ut. Reprehenderit me cago en tus muelas aute ullamco. Papaar papaar quietooor ullamco aute nostrud ese hombree occaecat amatomaa tiene musho peligro incididunt. Sit amet tiene musho peligro pecador ex pupita. Qui minim diodenoo por la gloria de mi madre quietooor esse está la cosa muy malar occaecat. Commodo exercitation ullamco pupita caballo blanco caballo negroorl ahorarr eiusmod ad a gramenawer.",
        fav: false
      },
      {
        title: "Notarl 3",
        content: "Lorem fistrum dolore laboris laboris sed no puedor ese hombree apetecan. Consectetur qué dise usteer ad fistro quietooor aliqua adipisicing ex. Reprehenderit de la pradera no puedor qui te voy a borrar el cerito diodeno diodenoo al ataquerl. Dolor por la gloria de mi madre tempor ese que llega irure nostrud tiene musho peligro pecador. Sit amet incididunt ahorarr qué dise usteer incididunt amatomaa adipisicing a gramenawer exercitation. Cillum dolore exercitation papaar papaar no puedor amatomaa sit amet. A gramenawer benemeritaar laboris papaar papaar officia irure. Officia benemeritaar exercitation nisi por la gloria de mi madre enim quietooor no te digo trigo por no llamarte Rodrigor por la gloria de mi madre.",
        fav: true
      },
    ];

    Note.create(notes)
      .then(() => {
        console.log('all inserted')
        process.exit(0)
      })
  })
}