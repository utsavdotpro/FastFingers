import { useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import { ROUTES } from "./utils/configs";

function App() {
  const [authToken, setAuthToken] = useState("");

  return (
    <BrowserRouter>
      <Switch>
        {ROUTES.map(({ key, path, Page, requireAuth }) =>
          !requireAuth || authToken !== "" ? (
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
