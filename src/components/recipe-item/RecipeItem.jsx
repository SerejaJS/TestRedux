// import { useSelector } from "react-redux";
import styles from "./RecipeItem.module.css";
// import { useDispatch } from "react-redux";
// import { actions } from "../../store/favorites/favorites.slise";
import { useActoins } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFavorites";

export default function RecipeItem({ recipe }) {
  const { favorites } = useFavorites(); 

  //Это функция которая используется в redux для отправки экшинов(действий) в store.
  const {toggleFavorites} = useActoins();

  const isExists = favorites.some((r) => r.id === recipe.id)

  return (
    <div className={styles.item}>
      {/* <img src="" alt="" /> */}
      <h2>{recipe.name}</h2>
      <button onClick={() => toggleFavorites(recipe)}>
        {isExists? "Remove from" : "Add to"} favorites
        
      </button>
    </div> 
  );
}
 