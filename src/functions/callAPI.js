export default async () => {
  setFilms(<Download />);

  let url;

  if (search) {
    url = `/api/films/search/${search.replace(" ", "_")}`;
  } else {
    url = `/api/films/${page}`;
  }

  try {
    let response = await fetch(url);

    let body = await response.json();

    if (!body.data.length) {
      setFilms(<div>Не найдено результатов по запросу "{search}"</div>);
    } else {
      setFilms(body.data.map((film) => <Card film={film} />));
    }
  } catch (error) {
    setFilms(<div>Не найдено</div>);
  }
};
