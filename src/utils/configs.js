import React from "react";

import Game from "../pages/Game";
import Home from "../pages/Home";

import dictionaryEasy from "./../data/easy.json";
import dictionaryMedium from "./../data/medium.json";
import dictionaryHard from "./../data/hard.json";

const DIFFICULTIES = {
  easy: {
    key: "easy",
    label: "Easy",
    factor: 1,
  },
  medium: {
    key: "medium",
    label: "Medium",
    factor: 1.5,
  },
  hard: {
    key: "hard",
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

export {
  DIFFICULTIES,
  ROUTES,
  dictionaryEasy,
  dictionaryMedium,
  dictionaryHard,
};
