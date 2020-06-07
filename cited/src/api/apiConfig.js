import store from "../store";
import { setIsLoading, setError } from "../slices/api";

export const apiGet = (action, ...rest) => {
  store.dispatch(setIsLoading(true));

  return fetch(`http://localhost:5000${action}/${rest}`, {
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
