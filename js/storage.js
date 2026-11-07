export function getFavorites() {
  return JSON.parse(localStorage.getItem("favourites")) || [];
}
export function saveFavorites(favourites) {
  localStorage.setItem("favourites", JSON.stringify(favourites));
}
export function removeFavorite(userId) {
  const favourites = getFavorites();

  const updatedFavourites = favourites.filter((user) => {
    return user.id !== userId;
  });

  saveFavorites(updatedFavourites);

  return updatedFavourites;
}