import { getUser,  getRepositories } from "./api.js";
import { renderRepositories, renderFavorites, updateFavoriteButton,  renderProfile, resetProfile } from "./ui.js";
import { getFavorites, saveFavorites, removeFavorite } from "./storage.js";
import { filterAndSortRepositories as filterAndSort } from "./search.js";

const usernameInput = document.getElementById("username");
const searchBtn = document.getElementById("searchBtn");


const errorMessage = document.getElementById("errorMessage");

const repoSearch = document.getElementById("repoSearch");

const sortRepos = document.getElementById("sortRepos");
const favoriteBtn = document.getElementById("favoriteBtn");
const favoritesLink = document.getElementById("favoritesLink");

const homeLink = document.getElementById("homeLink");
const homeSection = document.getElementById("repositories-section");
const favoritesSection = document.getElementById("favorites-section");
const favoritesContainer = document.getElementById("favorites-container");
let allRepositories = [];
let currentUser = null;


function filterAndSortRepositories() {
  const searchText = repoSearch.value;
  const sortOrder = sortRepos.value;

  const filteredRepos = filterAndSort(
    allRepositories,
    searchText,
    sortOrder
  );

  renderRepositories(filteredRepos);
}

searchBtn.addEventListener("click", async function () {
  const username = usernameInput.value.trim();
  if (username === "") {
    alert("Please enter a Github username");
  } else {
     errorMessage.textContent = ""; 
    try {
      const data = await getUser(username);
      currentUser = data;
     updateFavoriteButton(currentUser, favoriteBtn);
      const repositories = await getRepositories(username);
      allRepositories = repositories;
     filterAndSortRepositories();
  
     renderProfile(data);

    } catch (error) {
  errorMessage.textContent = error.message;

  currentUser = null;
  allRepositories = [];

  resetProfile();
  renderRepositories([]);
  favoriteBtn.textContent = "Add to Favourites";
}
  }
});

repoSearch.addEventListener("input", filterAndSortRepositories) 
  
sortRepos.addEventListener("change", filterAndSortRepositories);

favoriteBtn.addEventListener("click", function () {
  
  if (!currentUser) {
    alert("Please search a GitHub user first!");
    return;
  }

 const favourites = getFavorites();

  const alreadyExists = favourites.some((user) => {
    return user.id === currentUser.id;
  });

   if (alreadyExists) {
    favoriteBtn.textContent = "Already Added";
  } else {
    favourites.push(currentUser);

   saveFavorites(favourites);

   favoriteBtn.textContent = "Added to Favourites";
  }
});

favoritesLink.addEventListener("click", function (event) {
  event.preventDefault();
const favourites = getFavorites();
 
homeSection.style.display = "none";
favoritesSection.style.display = "block";
renderFavorites(favourites);
});
homeLink.addEventListener("click", function (event) {
  event.preventDefault();

  favoritesSection.style.display = "none";
  homeSection.style.display = "block";
});

favoritesContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-fav-btn")) {
    
const userId = Number(event.target.dataset.id);

const updatedFavourites = removeFavorite(userId);

renderFavorites(updatedFavourites);

  }
});