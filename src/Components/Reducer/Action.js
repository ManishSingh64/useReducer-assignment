import axios from "axios";
import { githubFailureAction, githubLoadingAction, githubSuccessAction } from "./ActionTypes";
// import { githubReducer } from "./Reducer";

// const githubLoadingAction = { type: "FETCH_GITHUB_USER_LOADING" };
// const githubSuccessAction = { type: "FETCH_GITHUB_USER_SUCCESS" };
// const githubFailureAction = { type: "FETCH_GITHUB_USER_FAILURE" };

export const fetchUser = (dispatch, query) => {
  // dispatch(githubLoadingAction);
  dispatch({type : githubLoadingAction})

  axios
    .get(`https://api.github.com/search/users?q=${query}`)
    .then((r) => {
      console.log(r.data);
      // dispatch({ ...githubSuccessAction, payload: r.data.items });
      dispatch({type: githubSuccessAction, payload: r.data.items})
    })
    .catch((err) => {
      // dispatch(githubFailureAction);
      dispatch(githubFailureAction)
    });
};

// githubSuccessAction({...githubSuccessAction, payload: r.data})