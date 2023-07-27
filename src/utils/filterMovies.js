// Функция фильтрации короткометражек

export function filterShortMovies(movies) {
  return movies.filter((item) => item.duration < 40);
}

// Функция пересчета времени

export function getHoursFromMins(mins) {
  const min = mins % 60;
  const hour = Math.trunc(mins / 60);
  return `${hour}ч ${min}м`;
}

// Функция фильтрации фильмов по поисковому запросу

export function filterMovies(movies, searchQuery) {
  const moviesByQuery = movies.filter((item) => {
    const strRu = String(item.nameRU).toLowerCase().trim();
    const strEn = String(item.nameEN).toLowerCase().trim();
    const searchStr = searchQuery.toLowerCase().trim();
    return strRu.indexOf(searchStr) !== -1 || strEn.indexOf(searchStr) !== -1;
  });
  return moviesByQuery;
}
