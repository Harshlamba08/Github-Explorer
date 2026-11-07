const BASE_URL = "https://api.github.com/users/";

export async function getUser(username) {
  const url = BASE_URL + username;

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error("User not found");
}

  const data = await response.json()
  return(data);
  
}


export async function getRepositories(username) {
  const url = `${BASE_URL}${username}/repos`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Repositories not found");
  }

  const data = await response.json();

  return data;
}
