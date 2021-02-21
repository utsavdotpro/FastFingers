import { Route, BrowserRouter, Switch } from "react-router-dom";

import { ROUTES } from "./utils/configs";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {ROUTES.map((route) => (
          <Route key={route.key} path={route.path}>
            {route.Page}
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
