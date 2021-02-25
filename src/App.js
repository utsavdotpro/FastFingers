import { useRef } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import { ROUTES } from "./utils/configs";

function App() {
  const authToken = useRef("");

  const setAuthToken = (token) => (authToken.current = token);

  return (
    <BrowserRouter>
      <Switch>
        {ROUTES.map(({ key, path, Page, requireAuth }) =>
          !requireAuth || authToken.current !== "" ? (
            <Route key={key} path={path}>
              <Page authToken={authToken} setAuthToken={setAuthToken} />
            </Route>
          ) : (
            ""
          )
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
