import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
        <h1>Recipe Sharing Application</h1>
        
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <AddRecipeForm />
                <SearchBar />
                <RecipeList />
              </>
            } 
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
