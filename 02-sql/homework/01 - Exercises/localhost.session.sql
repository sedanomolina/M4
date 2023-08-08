-- select * from movies;
--    SELECT * FROM movies WHERE year=1999;
   -- SELECT * FROM movies WHERE duration < 90;
-- SELECT * FROM movies WHERE year >= 1930 AND year <= 1940;
-- SELECT * FROM movies WHERE title ILIKE '%til%';
-- SELECT * FROM movies WHERE POSITION('til' IN title) > 0;
-- SELECT * FROM movies WHERE title SIMILAR TO '%til%';
-- SELECT * FROM movies WHERE POSITION('til' IN title) > 0;
-- SELECT * FROM movies WHERE array_length(actors,1)=1;
-- SELECT title, ratings FROM movies;
SELECT actors
FROM movies
WHERE title LIKE '%Fast and%';
