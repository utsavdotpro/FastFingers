import React from "react";

import Game from "../pages/Game";
import Home from "../pages/Home";

const DIFFICULTIES = {
  easy: {
    key: "difficulty-easy",
    label: "Easy",
    factor: 1,
  },
  medium: {
    key: "difficulty-medium",
    label: "Medium",
    factor: 1.5,
  },
  hard: {
    key: "difficulty-hard",
    label: "Hard",
    factor: 2,
  },
};

const ROUTES = [
  {
    key: "game",
    path: "/game/:difficulty/:player",
    Page: <Game />,
  },
  {
    key: "home",
    path: "/",
    Page: <Home />,
  },
];

export { DIFFICULTIES, ROUTES };
