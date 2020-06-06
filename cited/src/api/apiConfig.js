import store from "../store";
import { setIsLoading, setError } from "../slices/api";

export const apiGet = (url, ...rest) => {
  store.dispatch(setIsLoading(true));

  return fetch(`${url}/${rest}`, {
    method: "GET"
  })
    .then(response => response.json())
    .then(json => json)
    .catch(err => {
      store.dispatch(
        setError({
          title: "An error occurred, please try again",
          error: err.message
        })
      );
    })
    .finally(x => {
      store.dispatch(setIsLoading(false));
    });
};
