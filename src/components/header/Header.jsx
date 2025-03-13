import { BsBookmarkHeartFill } from "react-icons/bs";
import style from "./Header.module.css"
import { useFavorites } from "../../hooks/useFavorites";

export default function Header() {
 const {favorites} = useFavorites()
 
 
  return (
    <header className={style.header}>
      <BsBookmarkHeartFill fontSize={24}/>
      <span>
        {favorites.length}
      </span>
    </header>
  );
}



