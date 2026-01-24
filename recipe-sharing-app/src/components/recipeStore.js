import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== recipeId)
  })),
  
  setRecipes: (recipes) => set({ recipes }),
  
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  
  // Add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({ 
    favorites: [...state.favorites, recipeId] 
  })),
  
  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId)
  })),
  
  // Generate personalized recommendations based on favorites
  generateRecommendations: () => set((state) => {
    // Get favorite recipes
    const favoriteRecipes = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id)
    );
    
    // If no favorites, recommend random recipes
    if (favoriteRecipes.length === 0) {
      const shuffled = [...state.recipes].sort(() => 0.5 - Math.random());
      return { recommendations: shuffled.slice(0, 3) };
    }
    
    // Simple recommendation: suggest recipes similar to favorites
    // (In a real app, this could use tags, ingredients, or ML algorithms)
    const recommended = state.recipes.filter((recipe) => 
      !state.favorites.includes(recipe.id) && // Not already favorited
      favoriteRecipes.some((fav) => 
        // Check if recipe shares keywords with favorites
        recipe.title.toLowerCase().split(' ').some((word) =>
          fav.title.toLowerCase().includes(word) && word.length > 3
        ) ||
        recipe.description.toLowerCase().split(' ').some((word) =>
          fav.description.toLowerCase().includes(word) && word.length > 4
        )
      )
    );
    
    // If we have recommendations, return them; otherwise, return random recipes
    const finalRecommendations = recommended.length > 0 
      ? recommended.slice(0, 3)
      : state.recipes
          .filter((recipe) => !state.favorites.includes(recipe.id))
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
    
    return { recommendations: finalRecommendations };
  })
}));

export default useRecipeStore;
