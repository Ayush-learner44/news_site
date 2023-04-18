const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
        isLoading: false,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (curElement) => curElement.objectID !== action.payload
        ),
      };
    case "SEARCH_POST":
      return {
        ...state,
        query: action.kuchBhi,
      };
    case "PREV_PAGE":
      let pageNum = state.page - 1;

      if (pageNum <= 0) pageNum = 0;

      return {
        ...state,
        page: pageNum,
      };
    case "NEXT_PAGE":
      let inc = state.page + 1;

      if (inc >= state.nbPages) inc = 0;

      return {
        ...state,
        page: inc,
      };

    default:
  }
  return state;
};

export default reducer;
