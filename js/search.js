export function filterAndSortRepositories(
  allRepositories,
  searchText,
  sortOrder
) {
  const filteredRepos = allRepositories.filter((repo) => {
    return repo.name.toLowerCase().includes(searchText.toLowerCase().trim());
  });

  filteredRepos.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return filteredRepos;
}