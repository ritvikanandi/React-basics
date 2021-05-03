import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
function FavoritesPage() {
  const favoritesctx = useContext(FavoritesContext);
  let content;
  if (favoritesctx.totalFavorites === 0) {
    content = <p>Have no favorites yet. Wanna add some?</p>;
  } else {
    content = <MeetupList meetups={favoritesctx.favorites} />;
  }
  return <div>{content}</div>;
}

export default FavoritesPage;
