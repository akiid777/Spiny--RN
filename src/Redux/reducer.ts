import {
  SET_SEARCH_RESULTS,
  SET_SELECTED_CHARACTER,
  SET_SELECTED_MOVIE,
  SET_IS_LOADING,
  SET_SELECTED_MOVIE_DETAIL,
} from './action';

const initialState = {
  searchResults: [],
  selectedCharacter: {
    title: '',
    description: '',
    id: 1,
    image: '',
  },
  MovieDetail: {
    fullTitle: '',
    image: '',
    releaseDate: '',
    plot: '',
    awards: '',
    genres: '',
    imDbRating: '',
    imDbRatingVotes: '',
    actorList: [],
  },
  isLoading: false,
  selectedMovie: {
    title: '',
    description: '',
    id: 1,
    image: '',
  },
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return { ...state, searchResults: action.payload };
    case SET_SELECTED_CHARACTER:
      return { ...state, selectedCharacter: action.payload };
    case SET_SELECTED_MOVIE_DETAIL:
      return { ...state, MovieDetail: action.payload };
    case SET_SELECTED_MOVIE:
      return { ...state, selectedMovie: action.payload };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

export default appReducer;
