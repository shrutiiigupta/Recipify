import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './SearchScreen.css'
import { getDishSuggestions } from '../../geminiService'
import { fetchRecipe } from '../../apiService'

const SearchScreen = () => {
  const [ingredients, setIngredients] = useState('');
  const [dishes, setDishes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.ingredients) {
      setIngredients(location.state.ingredients);
      handleCook(location.state.ingredients);
    }
  }, [location.state?.ingredients]);

  const handleInputChange = (event) => {
    setIngredients(event.target.value);
  };

  const handleIngredientClick = (ingredient) => {
    setIngredients(ingredient);
    handleCook(ingredient);
  };

  const handleCook = async (ingredientsToUse) => {
    setLoading(true);
    try {
      const suggestedDishes = await getDishSuggestions(ingredientsToUse || ingredients);
      setDishes(suggestedDishes);
    } catch (error) {
      console.error('Error getting dish suggestions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDishClick = async (dish) => {
    setLoading(true);
    try {
      const recipeData = await fetchRecipe(dish);
      setSelectedRecipe({
        ...recipeData,
        dishName: dish
      });
    } catch (error) {
      console.error('Error fetching recipe:', error);
      alert('Failed to fetch the recipe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackClick = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="recipeDisplay">
      <button className="backButton" onClick={handleBackClick}><i class="fas fa-home fa-lg" ></i></button>
      <div className="searchAreaRecipe">
        <div className="searchHeading">
          Enter raw materials
        </div>
        <div className="searchField">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" value={ingredients} onChange={handleInputChange} />
          <button onClick={() => handleCook()}>
            {loading ? 'COOKING...' : 'COOK'}
          </button>
        </div>
        <div className="tags">
          <button onClick={() => handleIngredientClick('Tomato')}>Tomato</button>
          <button onClick={() => handleIngredientClick('Mushroom')}>Mushroom</button>
          <button onClick={() => handleIngredientClick('Potato')}>Potato</button>
          <button onClick={() => handleIngredientClick('Carrot')}>Carrot</button>
          <button onClick={() => handleIngredientClick('Yoghurt')}>Yoghurt</button>
        </div>
      </div>
      <div className="dishes">
        {dishes.map((dish, index) => (
          <button key={index} onClick={() => handleDishClick(dish)}>{dish}</button>
        ))}
      </div>
      {selectedRecipe && (
        <>
          <div className="recipeFor">Recipe for {selectedRecipe.dishName}</div>
          <div className="recipeHead">
            <div className="ingred">Ingredients</div>
            <div className="inst">Instructions</div>
          </div>
          <div className="recipeBody">
            <div className="ingredDisplay">{selectedRecipe.ingredients}</div>
            <div className="instDisplay ingredDisplay">{selectedRecipe.instructions}</div>
          </div>
        </>
      )}
    </div>
  )
}

export default SearchScreen
