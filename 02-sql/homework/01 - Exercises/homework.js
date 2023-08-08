/* ¡Escribe tus comandos en este archivo! */

const ejercicio02 = 'SELECT * FROM movies WHERE duration < 90;';

const ejercicio03 = 'SELECT * FROM movies WHERE year >= 1930 AND year <= 1940';
const ejercicio04 = "SELECT * FROM movies WHERE title ILIKE '%til%'";
// -- SELECT * FROM movies WHERE title SIMILAR TO '%til%';
// -- SELECT * FROM movies WHERE POSITION('til' IN title) > 0;
// --SELECT * FROM movies WHERE title ~* 'til';
const ejercicio05 = 'SELECT * FROM movies WHERE array_length(actors,1)=1';
// --SELECT * FROM movies WHERE cardinality(actors) = 1;

const ejercicio06 =
                     `SELECT title, ROUND(AVG(rating)) AS promedio_rating
                     FROM movies, unnest(ratings) AS rating
                     GROUP BY title;`;

const ejercicio07 = "SELECT title, actors, year FROM movies WHERE title LIKE '%Fast and%' AND year = 2016;";

module.exports = {
   ejercicio02,
   ejercicio03,
   ejercicio04,
   ejercicio05,
   ejercicio06,
   ejercicio07,
};
