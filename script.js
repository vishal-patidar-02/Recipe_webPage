document.addEventListener('DOMContentLoaded', function() {
    fetchRecipes();

    document.getElementById('add-recipe-form').addEventListener('submit', function(event) {
        event.preventDefault();
        addRecipe();
    });
});

function fetchRecipes() {
    fetch('getRecipes.php')
        .then(response => response.json())
        .then(data => {
            const recipeList = document.getElementById('recipe-list');
            recipeList.innerHTML = '';
            data.forEach(recipe => {
                const recipeDiv = document.createElement('div');
                recipeDiv.className = 'recipe';
                recipeDiv.innerHTML = `
                    <h2>${recipe.title}</h2>
                    <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                    <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                    <button class="delete-btn" onclick="deleteRecipe(${recipe.id})">Delete</button>
                `;
                recipeList.appendChild(recipeDiv);
            });
        });
}

function addRecipe() {
    const formData = new FormData(document.getElementById('add-recipe-form'));
    
    fetch('addRecipe.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById('add-recipe-form').reset();
        fetchRecipes();
    });
}

function deleteRecipe(id) {
    if (confirm('Are you sure you want to delete this recipe?')) {
        fetch('deleteRecipe.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `id=${id}`
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            fetchRecipes();
        });
    }
}
