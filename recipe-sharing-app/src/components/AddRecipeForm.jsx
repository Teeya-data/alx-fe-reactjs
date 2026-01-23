import { useState } from 'react';
import useRecipeStore from '../recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validate that both fields are filled
    if (!title.trim() || !description.trim()) {
      alert('Please fill in both title and description');
      return;
    }

    addRecipe({ 
      id: Date.now(), 
      title: title.trim(), 
      description: description.trim() 
    });
    
    // Clear form
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2>Add New Recipe</h2>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          style={{ width: '100%', padding: '8px', fontSize: '16px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
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
        style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;