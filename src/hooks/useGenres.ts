import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// this is static shipping data
const useGenres = () => ({ data: genres, isLoading: false, error: false });

// this is dynamic shipping data use this hook
// useData<Genre>("/genres")

export default useGenres;
