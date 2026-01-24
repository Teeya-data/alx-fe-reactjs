import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Filter recipes whenever recipes or search term changes
  useEffect(() => {
    filterRecipes();
  }, [recipes, searchTerm, filterRecipes]);

  // Display filtered recipes if there's a search term, otherwise show all recipes
  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      {displayRecipes.length === 0 ? (
        <p>
          {searchTerm 
            ? `No recipes found matching "${searchTerm}". Try a different search term.`
            : 'No recipes yet. Add your first recipe!'}
        </p>
      ) : (
        <>
          {searchTerm && (
            <p style={{ color: '#666', marginBottom: '15px' }}>
              Found {displayRecipes.length} recipe{displayRecipes.length !== 1 ? 's' : ''} matching "{searchTerm}"
            </p>
          )}
          {displayRecipes.map((recipe) => (
            <div key={recipe.id} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description.substring(0, 100)}{recipe.description.length > 100 ? '...' : ''}</p>
              <Link 
                to={`/recipe/${recipe.id}`}
                style={{ 
                  display: 'inline-block',
                  marginTop: '10px',
                  padding: '8px 16px', 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  textDecoration: 'none', 
                  borderRadius: '5px' 
                }}
              >
                View Details
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default RecipeList;
