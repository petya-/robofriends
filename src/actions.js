import {
  CHAGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

export const setSearchField = (text) => ({
  type: CHAGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = () => async (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });

  try {
    const users = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: users });
  } catch (error) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
  }
};
