-- 1. Write an SQL statement to select all articles with their author’s email.
SELECT articles.*, users.email FROM articles
LEFT OUTER JOIN users ON articles.author_id = users.id;

-- 2. Write another SQL statement to select articles from 7th to 12th sorted by id.

-- failed if one of the data been deleted.
-- SELECT * FROM articles
-- WHERE id BETWEEN 7 AND 12
-- ORDER BY id;

SELECT * 
FROM (
  SELECT *, ROW_NUMBER() OVER (ORDER BY id) AS row_num 
  FROM articles
) AS subquery
WHERE row_num BETWEEN 7 AND 12
ORDER BY id;

