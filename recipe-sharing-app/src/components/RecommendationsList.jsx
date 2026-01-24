import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);

  // Generate recommendations when component mounts or when favorites/recipes change
  useEffect(() => {
    generateRecommendations();
  }, [favorites, recipes, generateRecommendations]);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Recommended for You ⭐</h2>
      {recommendations.length === 0 ? (
        <p style={{ color: '#666' }}>
          {recipes.length === 0 
            ? 'Add some recipes to get personalized recommendations!'
            : 'No recommendations available at the moment. Try adding some favorites!'}
        </p>
      ) : (
        <div>
          <p style={{ color: '#666', marginBottom: '15px' }}>
            Based on your favorites, you might like these recipes:
          </p>
          {recommendations.map((recipe) => (
            <div 
              key={recipe.id} 
              style={{ 
                marginBottom: '20px', 
                padding: '15px', 
                border: '2px solid #ffd700', 
                borderRadius: '5px',
                backgroundColor: '#fffef0'
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
                {!favorites.includes(recipe.id) && (
                  <button
                    onClick={() => addFavorite(recipe.id)}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: '#28a745',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    Add to Favorites ❤️
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationsList;
