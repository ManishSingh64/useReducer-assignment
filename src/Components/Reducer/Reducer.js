export const githubReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_GITHUB_USER_LOADING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case "FETCH_GITHUB_USER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: payload,
        isError:false
      };

    case "FETCH_GITHUB_USER_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default: {
      return state;
    }
  }
};
