import { useGetRecipesQuery } from "../store/api/api.js";
import Header from "./header/Header.jsx";
import RecipeItem from "./recipe-item/RecipeItem";

function App() {
  const { isLoading, data } = useGetRecipesQuery();
  debugger

  return (
    <section>
      <Header />
      <div className="App">
      {isLoading ? (<div>Loading...</div>) : data ? (
        data.map(recipe => <RecipeItem 
          key={recipe.id} recipe={recipe}/>)
        ) : (
          <div>Note found</div>
        )}
    
      </div>
    </section>
  );
}

export default App;

