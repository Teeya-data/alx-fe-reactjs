import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // Get the full recipe objects for favorited recipe IDs
  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean); // Remove any undefined entries

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>My Favorites ❤️</h2>
      {favoriteRecipes.length === 0 ? (
        <p style={{ color: '#666' }}>
          No favorite recipes yet. Start adding recipes to your favorites!
        </p>
      ) : (
        <div>
          <p style={{ color: '#666', marginBottom: '15px' }}>
            You have {favoriteRecipes.length} favorite recipe{favoriteRecipes.length !== 1 ? 's' : ''}
          </p>
          {favoriteRecipes.map((recipe) => (
            <div 
              key={recipe.id} 
              style={{ 
                marginBottom: '20px', 
                padding: '15px', 
                border: '2px solid #ff6b6b', 
                borderRadius: '5px',
                backgroundColor: '#fff5f5'
              }}
            >
              <h3>{recipe.title}</h3>
              <p>{recipe.description.substring(0, 100)}{recipe.description.length > 100 ? '...' : ''}</p>
              <div style={{ marginTop: '10px' }}>
                <Link 
                  to={`/recipe/${recipe.id}`}
                  style={{ 
                    display: 'inline-block',
                    marginRight: '10px',
                    padding: '8px 16px', 
                    backgroundColor: '#007bff', 
                    color: 'white', 
                    textDecoration: 'none', 
                    borderRadius: '5px' 
                  }}
                >
                  View Details
                </Link>
                <button
                  onClick={() => removeFavorite(recipe.id)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
