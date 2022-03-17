BEGIN;
 
DROP TABLE IF EXISTS users, posts, likes CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL UNIQUE,
    password VARCHAR(80) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE posts (
 id SERIAL PRIMARY KEY NOT NULL,
 title VARCHAR(250) NOT NULL,
 description TEXT NOT NULL,
 img TEXT,
 created_at TIMESTAMP DEFAULT NOW(),
 user_id INT ,
 FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE likes (
 id SERIAL PRIMARY KEY NOT NULL,
 user_id INT,
 FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
 post_id INT,
 FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE, 
 UNIQUE (post_id,user_id)
);


COMMIT;