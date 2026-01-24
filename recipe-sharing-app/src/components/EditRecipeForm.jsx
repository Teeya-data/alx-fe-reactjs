import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const navigate = useNavigate();
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validate that both fields are filled
    if (!title.trim() || !description.trim()) {
      alert('Please fill in both title and description');
      return;
    }

    updateRecipe({ 
      id: recipe.id, 
      title: title.trim(), 
      description: description.trim() 
    });
    
    alert('Recipe updated successfully!');
    // Optionally navigate back to the list
    // navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Recipe Title:
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          style={{ width: '100%', padding: '8px', fontSize: '16px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Description:
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
          rows="4"
          style={{ width: '100%', padding: '8px', fontSize: '16px' }}
        />
      </div>
      <button 
        type="submit"
        style={{ 
          padding: '10px 20px', 
          fontSize: '16px', 
          backgroundColor: '#28a745', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}
      >
        Update Recipe
      </button>
    </form>
  );
};

export default EditRecipeForm;