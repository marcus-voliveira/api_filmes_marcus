import axios from "axios";
export default class FilmesAPI {
  async buscarDestaques() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=2152ef1368852664d60f5be1aca1a0fb"
    );
    return data.results;
  }
  async buscarFilmes() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/{movie_id}?api_key=2152ef1368852664d60f5be1aca1a0fb&language=pt-BR"
    );
    return data.results;
  }
}
