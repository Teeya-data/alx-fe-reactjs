import { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      const ingredientList = ingredients.split('\n').filter(item => item.trim() !== '');
      if (ingredientList.length < 2) {
        newErrors.ingredients = 'Please enter at least 2 ingredients';
      }
    }

    if (!steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const newRecipe = {
        title,
        ingredients: ingredients.split('\n').filter(item => item.trim() !== ''),
        steps: steps.split('\n').filter(item => item.trim() !== ''),
      };

      console.log('New Recipe:', newRecipe);
      alert('Recipe submitted successfully!');

      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-12 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Add New Recipe
          </h1>
          <p className="text-center text-lg md:text-xl opacity-90">
            Share your delicious recipe with the community
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                  Recipe Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter recipe title"
                />
                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
              </div>

              <div>
                <label htmlFor="ingredients" className="block text-sm font-semibold text-gray-700 mb-2">
                  Ingredients
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  Enter each ingredient on a new line (minimum 2)
                </p>
                <textarea
                  id="ingredients"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  rows="6"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                    errors.ingredients ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="2 cups flour&#10;1 cup sugar&#10;3 eggs"
                />
                {errors.ingredients && <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>}
              </div>

              <div>
                <label htmlFor="steps" className="block text-sm font-semibold text-gray-700 mb-2">
                  Preparation Steps
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  Enter each step on a new line
                </p>
                <textarea
                  id="steps"
                  value={steps}
                  onChange={(e) => setSteps(e.target.value)}
                  rows="8"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${
                    errors.steps ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Mix ingredients&#10;Bake for 30 minutes"
                />
                {errors.steps && <p className="mt-1 text-sm text-red-600">{errors.steps}</p>}
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Submit Recipe
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setTitle('');
                    setIngredients('');
                    setSteps('');
                    setErrors({});
                  }}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AddRecipeForm;
