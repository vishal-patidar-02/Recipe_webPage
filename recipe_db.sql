CREATE DATABASE recipeDB;

USE recipeDB;

CREATE TABLE recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL
);

INSERT INTO recipes (title, ingredients, instructions) VALUES
('Spaghetti Bolognese', 'Spaghetti, Tomato Sauce, Ground Beef, Onion, Garlic, Olive Oil, Salt, Pepper', '1. Cook the spaghetti. 2. Prepare the sauce. 3. Combine and serve.'),
('Pancakes', 'Flour, Milk, Eggs, Sugar, Baking Powder, Salt, Butter', '1. Mix ingredients. 2. Cook on a griddle. 3. Serve with syrup.');
