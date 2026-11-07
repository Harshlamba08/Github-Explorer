import { formatNumber } from "./utils.js";

const repoContainer = document.querySelector(".repo-container");

export function renderRepositories(repositories) {
  const repoHTML = repositories.map((repo) => {
    return `
      <div class="repo-card">
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description available"}</p>
        <p>Language: ${repo.language || "Not specified"}</p>
      </div>
    `;
  }).join("");

  repoContainer.innerHTML = repoHTML;
}

const favoritesContainer = document.getElementById("favorites-container");

export function renderFavorites(favourites) {
  if (favourites.length === 0) {
    favoritesContainer.innerHTML = "<p>No favourite developers yet.</p>";
    return;
  }

  const favoriteHTML = favourites.map((user) => {
    return `
      <div class="favorite-card">
        <img src="${user.avatar_url}" alt="${user.login}">
        <h3>${user.name || user.login}</h3>
        <p>@${user.login}</p>
        <button class="remove-fav-btn" data-id="${user.id}">
          Remove Favourite
        </button>
      </div>
    `;
  }).join("");

  favoritesContainer.innerHTML = favoriteHTML;
}

export function updateFavoriteButton(currentUser, favoriteBtn) {
  if (!currentUser) return;

  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

  const alreadyExists = favourites.some((user) => {
    return user.id === currentUser.id;
  });

  favoriteBtn.textContent = alreadyExists
    ? "Already Added"
    : "Add to Favourites";
}

export function renderProfile(data) {
  document.getElementById("userName").textContent =
    data.name || data.login;

  document.getElementById("avatar").src = data.avatar_url;

  document.getElementById("userBio").textContent =
    data.bio || "No bio available";

  document.getElementById("followers").textContent =
    `Followers: ${formatNumber(data.followers)}`;

  document.getElementById("following").textContent =
    `Following: ${formatNumber(data.following)}`;
}
export function resetProfile() {
  document.getElementById("userName").textContent = "Developer Name";
  document.getElementById("avatar").src = "";
  document.getElementById("userBio").textContent = "Developer bio will appear here";
  document.getElementById("followers").textContent = "Followers: 0";
  document.getElementById("following").textContent = "Following: 0";
}