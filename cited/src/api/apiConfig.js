import store from "../store";
import { setIsLoading, setError } from "../slices/api";

export const apiGet = (action, ...rest) => {
  store.dispatch(setIsLoading(true));

  return fetch(`https://localhost:5001${action}/${rest}`, {
    method: "GET"
  })
    .then(response => {
      console.log("response", response);
      return response.json();
    })
    .then(json => {
      console.log("json", json);
      return json;
    })
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
