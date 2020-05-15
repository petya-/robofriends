import { CHAGE_SEARCH_FIELD } from "./constants";

export const setSearchField = (text) => ({
  type: CHAGE_SEARCH_FIELD,
  payload: text,
});
